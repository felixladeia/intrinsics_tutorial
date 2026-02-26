(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function av(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var mh={exports:{}},Go={};var G0;function QS(){if(G0)return Go;G0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Go.Fragment=t,Go.jsx=i,Go.jsxs=i,Go}var V0;function JS(){return V0||(V0=1,mh.exports=QS()),mh.exports}var xt=JS(),gh={exports:{}},re={};var X0;function $S(){if(X0)return re;X0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),_=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=_&&P[_]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function v(P,j,_t){this.props=P,this.context=j,this.refs=y,this.updater=_t||E}v.prototype.isReactComponent={},v.prototype.setState=function(P,j){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,j,"setState")},v.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function w(){}w.prototype=v.prototype;function D(P,j,_t){this.props=P,this.context=j,this.refs=y,this.updater=_t||E}var U=D.prototype=new w;U.constructor=D,C(U,v.prototype),U.isPureReactComponent=!0;var G=Array.isArray;function I(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(P,j,_t){var Rt=_t.ref;return{$$typeof:r,type:P,key:j,ref:Rt!==void 0?Rt:null,props:_t}}function ft(P,j){return L(P.type,j,P.props)}function H(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function J(P){var j={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(_t){return j[_t]})}var at=/\/+/g;function lt(P,j){return typeof P=="object"&&P!==null&&P.key!=null?J(""+P.key):j.toString(36)}function tt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(I,I):(P.status="pending",P.then(function(j){P.status==="pending"&&(P.status="fulfilled",P.value=j)},function(j){P.status==="pending"&&(P.status="rejected",P.reason=j)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function O(P,j,_t,Rt,It){var nt=typeof P;(nt==="undefined"||nt==="boolean")&&(P=null);var vt=!1;if(P===null)vt=!0;else switch(nt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(P.$$typeof){case r:case t:vt=!0;break;case g:return vt=P._init,O(vt(P._payload),j,_t,Rt,It)}}if(vt)return It=It(P),vt=Rt===""?"."+lt(P,0):Rt,G(It)?(_t="",vt!=null&&(_t=vt.replace(at,"$&/")+"/"),O(It,j,_t,"",function(Kt){return Kt})):It!=null&&(H(It)&&(It=ft(It,_t+(It.key==null||P&&P.key===It.key?"":(""+It.key).replace(at,"$&/")+"/")+vt)),j.push(It)),1;vt=0;var Tt=Rt===""?".":Rt+":";if(G(P))for(var Xt=0;Xt<P.length;Xt++)Rt=P[Xt],nt=Tt+lt(Rt,Xt),vt+=O(Rt,j,_t,nt,It);else if(Xt=M(P),typeof Xt=="function")for(P=Xt.call(P),Xt=0;!(Rt=P.next()).done;)Rt=Rt.value,nt=Tt+lt(Rt,Xt++),vt+=O(Rt,j,_t,nt,It);else if(nt==="object"){if(typeof P.then=="function")return O(tt(P),j,_t,Rt,It);throw j=String(P),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return vt}function z(P,j,_t){if(P==null)return P;var Rt=[],It=0;return O(P,Rt,"","",function(nt){return j.call(_t,nt,It++)}),Rt}function ot(P){if(P._status===-1){var j=P._result;j=j(),j.then(function(_t){(P._status===0||P._status===-1)&&(P._status=1,P._result=_t)},function(_t){(P._status===0||P._status===-1)&&(P._status=2,P._result=_t)}),P._status===-1&&(P._status=0,P._result=j)}if(P._status===1)return P._result.default;throw P._result}var dt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},bt={map:z,forEach:function(P,j,_t){z(P,function(){j.apply(this,arguments)},_t)},count:function(P){var j=0;return z(P,function(){j++}),j},toArray:function(P){return z(P,function(j){return j})||[]},only:function(P){if(!H(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return re.Activity=S,re.Children=bt,re.Component=v,re.Fragment=i,re.Profiler=l,re.PureComponent=D,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,re.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},re.cache=function(P){return function(){return P.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(P,j,_t){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Rt=C({},P.props),It=P.key;if(j!=null)for(nt in j.key!==void 0&&(It=""+j.key),j)!T.call(j,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&j.ref===void 0||(Rt[nt]=j[nt]);var nt=arguments.length-2;if(nt===1)Rt.children=_t;else if(1<nt){for(var vt=Array(nt),Tt=0;Tt<nt;Tt++)vt[Tt]=arguments[Tt+2];Rt.children=vt}return L(P.type,It,Rt)},re.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},re.createElement=function(P,j,_t){var Rt,It={},nt=null;if(j!=null)for(Rt in j.key!==void 0&&(nt=""+j.key),j)T.call(j,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(It[Rt]=j[Rt]);var vt=arguments.length-2;if(vt===1)It.children=_t;else if(1<vt){for(var Tt=Array(vt),Xt=0;Xt<vt;Xt++)Tt[Xt]=arguments[Xt+2];It.children=Tt}if(P&&P.defaultProps)for(Rt in vt=P.defaultProps,vt)It[Rt]===void 0&&(It[Rt]=vt[Rt]);return L(P,nt,It)},re.createRef=function(){return{current:null}},re.forwardRef=function(P){return{$$typeof:d,render:P}},re.isValidElement=H,re.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:ot}},re.memo=function(P,j){return{$$typeof:p,type:P,compare:j===void 0?null:j}},re.startTransition=function(P){var j=F.T,_t={};F.T=_t;try{var Rt=P(),It=F.S;It!==null&&It(_t,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(I,dt)}catch(nt){dt(nt)}finally{j!==null&&_t.types!==null&&(j.types=_t.types),F.T=j}},re.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},re.use=function(P){return F.H.use(P)},re.useActionState=function(P,j,_t){return F.H.useActionState(P,j,_t)},re.useCallback=function(P,j){return F.H.useCallback(P,j)},re.useContext=function(P){return F.H.useContext(P)},re.useDebugValue=function(){},re.useDeferredValue=function(P,j){return F.H.useDeferredValue(P,j)},re.useEffect=function(P,j){return F.H.useEffect(P,j)},re.useEffectEvent=function(P){return F.H.useEffectEvent(P)},re.useId=function(){return F.H.useId()},re.useImperativeHandle=function(P,j,_t){return F.H.useImperativeHandle(P,j,_t)},re.useInsertionEffect=function(P,j){return F.H.useInsertionEffect(P,j)},re.useLayoutEffect=function(P,j){return F.H.useLayoutEffect(P,j)},re.useMemo=function(P,j){return F.H.useMemo(P,j)},re.useOptimistic=function(P,j){return F.H.useOptimistic(P,j)},re.useReducer=function(P,j,_t){return F.H.useReducer(P,j,_t)},re.useRef=function(P){return F.H.useRef(P)},re.useState=function(P){return F.H.useState(P)},re.useSyncExternalStore=function(P,j,_t){return F.H.useSyncExternalStore(P,j,_t)},re.useTransition=function(){return F.H.useTransition()},re.version="19.2.4",re}var k0;function Yd(){return k0||(k0=1,gh.exports=$S()),gh.exports}var Pe=Yd();const ty=av(Pe);var _h={exports:{}},Vo={},vh={exports:{}},xh={};var Y0;function ey(){return Y0||(Y0=1,(function(r){function t(O,z){var ot=O.length;O.push(z);t:for(;0<ot;){var dt=ot-1>>>1,bt=O[dt];if(0<l(bt,z))O[dt]=z,O[ot]=bt,ot=dt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var z=O[0],ot=O.pop();if(ot!==z){O[0]=ot;t:for(var dt=0,bt=O.length,P=bt>>>1;dt<P;){var j=2*(dt+1)-1,_t=O[j],Rt=j+1,It=O[Rt];if(0>l(_t,ot))Rt<bt&&0>l(It,_t)?(O[dt]=It,O[Rt]=ot,dt=Rt):(O[dt]=_t,O[j]=ot,dt=j);else if(Rt<bt&&0>l(It,ot))O[dt]=It,O[Rt]=ot,dt=Rt;else break t}}return z}function l(O,z){var ot=O.sortIndex-z.sortIndex;return ot!==0?ot:O.id-z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,S=null,_=3,M=!1,E=!1,C=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var z=i(p);z!==null;){if(z.callback===null)s(p);else if(z.startTime<=O)s(p),z.sortIndex=z.expirationTime,t(m,z);else break;z=i(p)}}function G(O){if(C=!1,U(O),!E)if(i(m)!==null)E=!0,I||(I=!0,J());else{var z=i(p);z!==null&&tt(G,z.startTime-O)}}var I=!1,F=-1,T=5,L=-1;function ft(){return y?!0:!(r.unstable_now()-L<T)}function H(){if(y=!1,I){var O=r.unstable_now();L=O;var z=!0;try{t:{E=!1,C&&(C=!1,w(F),F=-1),M=!0;var ot=_;try{e:{for(U(O),S=i(m);S!==null&&!(S.expirationTime>O&&ft());){var dt=S.callback;if(typeof dt=="function"){S.callback=null,_=S.priorityLevel;var bt=dt(S.expirationTime<=O);if(O=r.unstable_now(),typeof bt=="function"){S.callback=bt,U(O),z=!0;break e}S===i(m)&&s(m),U(O)}else s(m);S=i(m)}if(S!==null)z=!0;else{var P=i(p);P!==null&&tt(G,P.startTime-O),z=!1}}break t}finally{S=null,_=ot,M=!1}z=void 0}}finally{z?J():I=!1}}}var J;if(typeof D=="function")J=function(){D(H)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,lt=at.port2;at.port1.onmessage=H,J=function(){lt.postMessage(null)}}else J=function(){v(H,0)};function tt(O,z){F=v(function(){O(r.unstable_now())},z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(O){switch(_){case 1:case 2:case 3:var z=3;break;default:z=_}var ot=_;_=z;try{return O()}finally{_=ot}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(O,z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ot=_;_=O;try{return z()}finally{_=ot}},r.unstable_scheduleCallback=function(O,z,ot){var dt=r.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?dt+ot:dt):ot=dt,O){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=ot+bt,O={id:g++,callback:z,priorityLevel:O,startTime:ot,expirationTime:bt,sortIndex:-1},ot>dt?(O.sortIndex=ot,t(p,O),i(m)===null&&O===i(p)&&(C?(w(F),F=-1):C=!0,tt(G,ot-dt))):(O.sortIndex=bt,t(m,O),E||M||(E=!0,I||(I=!0,J()))),O},r.unstable_shouldYield=ft,r.unstable_wrapCallback=function(O){var z=_;return function(){var ot=_;_=z;try{return O.apply(this,arguments)}finally{_=ot}}}})(xh)),xh}var W0;function ny(){return W0||(W0=1,vh.exports=ey()),vh.exports}var Sh={exports:{}},Dn={};var q0;function iy(){if(q0)return Dn;q0=1;var r=Yd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Dn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,S=d(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:_,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:S,integrity:_,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,S=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Dn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Dn.version="19.2.4",Dn}var j0;function ay(){if(j0)return Sh.exports;j0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Sh.exports=iy(),Sh.exports}var Z0;function sy(){if(Z0)return Vo;Z0=1;var r=ny(),t=Yd(),i=ay();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,o=h;break}if(A===o){x=!0,o=u,a=h;break}A=A.sibling}if(!x){for(A=h.child;A;){if(A===a){x=!0,a=h,o=u;break}if(A===o){x=!0,o=h,a=u;break}A=A.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,_=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),ft=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case G:return"Suspense";case I:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case D:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var tt=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},dt=[],bt=-1;function P(e){return{current:e}}function j(e){0>bt||(e.current=dt[bt],dt[bt]=null,bt--)}function _t(e,n){bt++,dt[bt]=e.current,e.current=n}var Rt=P(null),It=P(null),nt=P(null),vt=P(null);function Tt(e,n){switch(_t(nt,n),_t(It,e),_t(Rt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?u0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=u0(n),e=f0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(Rt),_t(Rt,e)}function Xt(){j(Rt),j(It),j(nt)}function Kt(e){e.memoizedState!==null&&_t(vt,e);var n=Rt.current,a=f0(n,e.type);n!==a&&(_t(It,e),_t(Rt,a))}function $t(e){It.current===e&&(j(Rt),j(It)),vt.current===e&&(j(vt),Io._currentValue=ot)}var Je,Se;function _e(e){if(Je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Je=n&&n[1]||"",Se=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Je+e+Se}var Ue=!1;function le(e,n){if(!e||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(rt){var it=rt}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(rt){it=rt}e.call(gt.prototype)}}else{try{throw Error()}catch(rt){it=rt}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(rt){if(rt&&it&&typeof rt.stack=="string")return[rt.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],A=h[1];if(x&&A){var B=x.split(`
`),$=A.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===$.length)for(o=B.length-1,u=$.length-1;1<=o&&0<=u&&B[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==$[u]){var ht=`
`+B[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_e(a):""}function Qe(e,n){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e("Lazy");case 13:return e.child!==n&&n!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return _e("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=Qe(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var qe=Object.prototype.hasOwnProperty,be=r.unstable_scheduleCallback,Ne=r.unstable_cancelCallback,Wt=r.unstable_shouldYield,N=r.unstable_requestPaint,b=r.unstable_now,q=r.unstable_getCurrentPriorityLevel,pt=r.unstable_ImmediatePriority,St=r.unstable_UserBlockingPriority,ut=r.unstable_NormalPriority,kt=r.unstable_LowPriority,wt=r.unstable_IdlePriority,Zt=r.log,te=r.unstable_setDisableYieldValue,Et=null,yt=null;function Ot(e){if(typeof Zt=="function"&&te(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(Et,e)}catch{}}var Nt=Math.clz32?Math.clz32:Y,Pt=Math.log,ue=Math.LN2;function Y(e){return e>>>=0,e===0?32:31-(Pt(e)/ue|0)|0}var Ct=256,At=262144,Ft=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ct(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=Mt(o):(x&=A,x!==0?u=Mt(x):a||(a=A&~e,a!==0&&(u=Mt(a))))):(A=o&~h,A!==0?u=Mt(A):x!==0?u=Mt(x):a||(a=o&~e,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Bt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Pn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,n,a,o,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,B=e.expirationTimes,$=e.hiddenUpdates;for(a=x&~a;0<a;){var ht=31-Nt(a),gt=1<<ht;A[ht]=0,B[ht]=-1;var it=$[ht];if(it!==null)for($[ht]=null,ht=0;ht<it.length;ht++){var rt=it[ht];rt!==null&&(rt.lane&=-536870913)}a&=~gt}o!==0&&Qr(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function Qr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Nt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Hs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Nt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ol(e,n){var a=n&-n;return a=(a&42)!==0?1:Gs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Gs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fi(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:O0(e.type))}function Xs(e,n){var a=z.p;try{return z.p=e,n()}finally{z.p=a}}var Ei=Math.random().toString(36).slice(2),ln="__reactFiber$"+Ei,_n="__reactProps$"+Ei,Ki="__reactContainer$"+Ei,Ra="__reactEvents$"+Ei,ll="__reactListeners$"+Ei,cl="__reactHandles$"+Ei,ul="__reactResources$"+Ei,us="__reactMarker$"+Ei;function Jr(e){delete e[ln],delete e[_n],delete e[Ra],delete e[ll],delete e[cl]}function Ca(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ki]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=v0(e);e!==null;){if(a=e[ln])return a;e=v0(e)}return n}e=a,a=e.parentNode}return null}function wa(e){if(e=e[ln]||e[Ki]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function fs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function R(e){var n=e[ul];return n||(n=e[ul]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(e){e[us]=!0}var st=new Set,et={};function K(e,n){Dt(e,n),Dt(e+"Capture",n)}function Dt(e,n){for(et[e]=n,e=0;e<n.length;e++)st.add(n[e])}var zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ut={},Yt={};function jt(e){return qe.call(Yt,e)?!0:qe.call(Ut,e)?!1:zt.test(e)?Yt[e]=!0:(Ut[e]=!0,!1)}function ne(e,n,a){if(jt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function se(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ht(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function je(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Re(e){if(!e._valueTracker){var n=je(e)?"checked":"value";e._valueTracker=Ze(e,n,""+e[n])}}function vn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=je(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Vt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fn=/[\n"\\]/g;function ae(e){return e.replace(Fn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function In(e,n,a,o,u,h,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fe(n)):e.value!==""+fe(n)&&(e.value=""+fe(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?bi(e,x,fe(n)):a!=null?bi(e,x,fe(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+fe(A):e.removeAttribute("name")}function $n(e,n,a,o,u,h,x,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Re(e);return}a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Re(e)}function bi(e,n,a){n==="number"&&Vt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ti(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Oe(e,n,a){if(n!=null&&(n=""+fe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fe(a):""}function cn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(tt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=fe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Re(e)}function zn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var un=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ti(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||un.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Qi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ti(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Ti(e,h,n[h])}function ks(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(e){return jv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var fu=null;function hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,Ws=null;function cp(e){var n=wa(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;t:switch(e=n.stateNode,n.type){case"input":if(In(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ae(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[_n]||null;if(!u)throw Error(s(90));In(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&vn(o)}break t;case"textarea":Oe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ti(e,!!a.multiple,n,!1)}}}var du=!1;function up(e,n,a){if(du)return e(n,a);du=!0;try{var o=e(n);return o}finally{if(du=!1,(Ys!==null||Ws!==null)&&(Jl(),Ys&&(n=Ys,e=Ws,Ws=Ys=null,cp(n),e)))for(n=0;n<e.length;n++)cp(e[n])}}function $r(e,n){var a=e.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=!1;if($i)try{var to={};Object.defineProperty(to,"passive",{get:function(){pu=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{pu=!1}var Da=null,mu=null,hl=null;function fp(){if(hl)return hl;var e,n=mu,a=n.length,o,u="value"in Da?Da.value:Da.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[h-o];o++);return hl=u.slice(e,1<o?1-o:void 0)}function dl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function pl(){return!0}function hp(){return!1}function kn(e){function n(a,o,u,h,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?pl:hp,this.isPropagationStopped=hp,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=kn(hs),eo=S({},hs,{view:0,detail:0}),Zv=kn(eo),gu,_u,no,gl=S({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==no&&(no&&e.type==="mousemove"?(gu=e.screenX-no.screenX,_u=e.screenY-no.screenY):_u=gu=0,no=e),gu)},movementY:function(e){return"movementY"in e?e.movementY:_u}}),dp=kn(gl),Kv=S({},gl,{dataTransfer:0}),Qv=kn(Kv),Jv=S({},eo,{relatedTarget:0}),vu=kn(Jv),$v=S({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),tx=kn($v),ex=S({},hs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nx=kn(ex),ix=S({},hs,{data:0}),pp=kn(ix),ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=rx[e])?!!n[e]:!1}function xu(){return ox}var lx=S({},eo,{key:function(e){if(e.key){var n=ax[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cx=kn(lx),ux=S({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=kn(ux),fx=S({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),hx=kn(fx),dx=S({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),px=kn(dx),mx=S({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gx=kn(mx),_x=S({},hs,{newState:0,oldState:0}),vx=kn(_x),xx=[9,13,27,32],Su=$i&&"CompositionEvent"in window,io=null;$i&&"documentMode"in document&&(io=document.documentMode);var Sx=$i&&"TextEvent"in window&&!io,gp=$i&&(!Su||io&&8<io&&11>=io),_p=" ",vp=!1;function xp(e,n){switch(e){case"keyup":return xx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qs=!1;function yx(e,n){switch(e){case"compositionend":return Sp(n);case"keypress":return n.which!==32?null:(vp=!0,_p);case"textInput":return e=n.data,e===_p&&vp?null:e;default:return null}}function Mx(e,n){if(qs)return e==="compositionend"||!Su&&xp(e,n)?(e=fp(),hl=mu=Da=null,qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gp&&n.locale!=="ko"?null:n.data;default:return null}}var Ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ex[e.type]:n==="textarea"}function Mp(e,n,a,o){Ys?Ws?Ws.push(o):Ws=[o]:Ys=o,n=sc(n,"onChange"),0<n.length&&(a=new ml("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ao=null,so=null;function bx(e){a0(e,0)}function _l(e){var n=fs(e);if(vn(n))return e}function Ep(e,n){if(e==="change")return n}var bp=!1;if($i){var yu;if($i){var Mu="oninput"in document;if(!Mu){var Tp=document.createElement("div");Tp.setAttribute("oninput","return;"),Mu=typeof Tp.oninput=="function"}yu=Mu}else yu=!1;bp=yu&&(!document.documentMode||9<document.documentMode)}function Ap(){ao&&(ao.detachEvent("onpropertychange",Rp),so=ao=null)}function Rp(e){if(e.propertyName==="value"&&_l(so)){var n=[];Mp(n,so,e,hu(e)),up(bx,n)}}function Tx(e,n,a){e==="focusin"?(Ap(),ao=n,so=a,ao.attachEvent("onpropertychange",Rp)):e==="focusout"&&Ap()}function Ax(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(so)}function Rx(e,n){if(e==="click")return _l(n)}function Cx(e,n){if(e==="input"||e==="change")return _l(n)}function wx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ei=typeof Object.is=="function"?Object.is:wx;function ro(e,n){if(ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!qe.call(n,u)||!ei(e[u],n[u]))return!1}return!0}function Cp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wp(e,n){var a=Cp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Cp(a)}}function Dp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Dp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Up(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Vt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Vt(e.document)}return n}function Eu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Dx=$i&&"documentMode"in document&&11>=document.documentMode,js=null,bu=null,oo=null,Tu=!1;function Lp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tu||js==null||js!==Vt(o)||(o=js,"selectionStart"in o&&Eu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&ro(oo,o)||(oo=o,o=sc(bu,"onSelect"),0<o.length&&(n=new ml("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=js)))}function ds(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Zs={animationend:ds("Animation","AnimationEnd"),animationiteration:ds("Animation","AnimationIteration"),animationstart:ds("Animation","AnimationStart"),transitionrun:ds("Transition","TransitionRun"),transitionstart:ds("Transition","TransitionStart"),transitioncancel:ds("Transition","TransitionCancel"),transitionend:ds("Transition","TransitionEnd")},Au={},Np={};$i&&(Np=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function ps(e){if(Au[e])return Au[e];if(!Zs[e])return e;var n=Zs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Np)return Au[e]=n[a];return e}var Op=ps("animationend"),Pp=ps("animationiteration"),Fp=ps("animationstart"),Ux=ps("transitionrun"),Lx=ps("transitionstart"),Nx=ps("transitioncancel"),Ip=ps("transitionend"),zp=new Map,Ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ru.push("scrollEnd");function Ai(e,n){zp.set(e,n),K(n,[e])}var vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],Ks=0,Cu=0;function xl(){for(var e=Ks,n=Cu=Ks=0;n<e;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var h=fi[n];if(fi[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&Bp(a,u,h)}}function Sl(e,n,a,o){fi[Ks++]=e,fi[Ks++]=n,fi[Ks++]=a,fi[Ks++]=o,Cu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function wu(e,n,a,o){return Sl(e,n,a,o),yl(e)}function ms(e,n){return Sl(e,null,null,n),yl(e)}function Bp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Nt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function yl(e){if(50<Do)throw Do=0,Bf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Qs={};function Ox(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,n,a,o){return new Ox(e,n,a,o)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,n){var a=e.alternate;return a===null?(a=ni(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ml(e,n,a,o,u,h){var x=0;if(o=e,typeof e=="function")Du(e)&&(x=1);else if(typeof e=="string")x=BS(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=ni(31,a,n,u),e.elementType=L,e.lanes=h,e;case C:return gs(a.children,u,h,n);case y:x=8,u|=24;break;case v:return e=ni(12,a,n,u|2),e.elementType=v,e.lanes=h,e;case G:return e=ni(13,a,n,u),e.elementType=G,e.lanes=h,e;case I:return e=ni(19,a,n,u),e.elementType=I,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:x=10;break t;case w:x=9;break t;case U:x=11;break t;case F:x=14;break t;case T:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ni(x,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function gs(e,n,a,o){return e=ni(7,e,o,n),e.lanes=a,e}function Uu(e,n,a){return e=ni(6,e,null,n),e.lanes=a,e}function Gp(e){var n=ni(18,null,null,0);return n.stateNode=e,n}function Lu(e,n,a){return n=ni(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Vp=new WeakMap;function hi(e,n){if(typeof e=="object"&&e!==null){var a=Vp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},Vp.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var Js=[],$s=0,El=null,lo=0,di=[],pi=0,Ua=null,Ii=1,zi="";function ea(e,n){Js[$s++]=lo,Js[$s++]=El,El=e,lo=n}function Xp(e,n,a){di[pi++]=Ii,di[pi++]=zi,di[pi++]=Ua,Ua=e;var o=Ii;e=zi;var u=32-Nt(o)-1;o&=~(1<<u),a+=1;var h=32-Nt(n)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Ii=1<<32-Nt(n)+u|a<<u|o,zi=h+e}else Ii=1<<h|a<<u|o,zi=e}function Nu(e){e.return!==null&&(ea(e,1),Xp(e,1,0))}function Ou(e){for(;e===El;)El=Js[--$s],Js[$s]=null,lo=Js[--$s],Js[$s]=null;for(;e===Ua;)Ua=di[--pi],di[pi]=null,zi=di[--pi],di[pi]=null,Ii=di[--pi],di[pi]=null}function kp(e,n){di[pi++]=Ii,di[pi++]=zi,di[pi++]=Ua,Ii=n.id,zi=n.overflow,Ua=e}var Tn=null,Ye=null,Ee=!1,La=null,mi=!1,Pu=Error(s(519));function Na(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(hi(n,e)),Pu}function Yp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[_n]=o,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)xe(Lo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),$n(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),cn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||l0(n.textContent,a)?(o.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),o.onScroll!=null&&xe("scroll",n),o.onScrollEnd!=null&&xe("scrollend",n),o.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||Na(e,!0)}function Wp(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Tn=Tn.return}}function tr(e){if(e!==Tn)return!1;if(!Ee)return Wp(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||th(e.type,e.memoizedProps)),a=!a),a&&Ye&&Na(e),Wp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=_0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=_0(e)}else n===27?(n=Ye,qa(e.type)?(e=sh,sh=null,Ye=e):Ye=n):Ye=Tn?_i(e.stateNode.nextSibling):null;return!0}function _s(){Ye=Tn=null,Ee=!1}function Fu(){var e=La;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),La=null),e}function co(e){La===null?La=[e]:La.push(e)}var Iu=P(null),vs=null,na=null;function Oa(e,n,a){_t(Iu,n._currentValue),n._currentValue=a}function ia(e){e._currentValue=Iu.current,j(Iu)}function zu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Bu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var B=0;B<n.length;B++)if(A.context===n[B]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),zu(h.return,a,e),o||(x=null);break t}h=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),zu(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function er(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=u.type;ei(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===vt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Io):e=[Io])}u=u.return}e!==null&&Bu(n,e,a,o),n.flags|=262144}function bl(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xs(e){vs=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return qp(vs,e)}function Tl(e,n){return vs===null&&xs(e),qp(e,n)}function qp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(e===null)throw Error(s(308));na=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else na=na.next=n;return a}var Px=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Fx=r.unstable_scheduleCallback,Ix=r.unstable_NormalPriority,fn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new Px,data:new Map,refCount:0}}function uo(e){e.refCount--,e.refCount===0&&Fx(Ix,function(){e.controller.abort()})}var fo=null,Gu=0,nr=0,ir=null;function zx(e,n){if(fo===null){var a=fo=[];Gu=0,nr=Yf(),ir={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Gu++,n.then(jp,jp),n}function jp(){if(--Gu===0&&fo!==null){ir!==null&&(ir.status="fulfilled");var e=fo;fo=null,nr=0,ir=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Bx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Zp=O.S;O.S=function(e,n){Lg=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&zx(e,n),Zp!==null&&Zp(e,n)};var Ss=P(null);function Vu(){var e=Ss.current;return e!==null?e:ke.pooledCache}function Al(e,n){n===null?_t(Ss,Ss.current):_t(Ss,n.pool)}function Kp(){var e=Vu();return e===null?null:{parent:fn._currentValue,pool:e}}var ar=Error(s(460)),Xu=Error(s(474)),Rl=Error(s(542)),Cl={then:function(){}};function Qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ji,Ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,tm(e),e;default:if(typeof n.status=="string")n.then(Ji,Ji);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,tm(e),e}throw Ms=n,ar}}function ys(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ms=a,ar):a}}var Ms=null;function $p(){if(Ms===null)throw Error(s(459));var e=Ms;return Ms=null,e}function tm(e){if(e===ar||e===Rl)throw Error(s(483))}var sr=null,ho=0;function wl(e){var n=ho;return ho+=1,sr===null&&(sr=[]),Jp(sr,e,n)}function po(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Dl(e,n){throw n.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function em(e){function n(Z,X){if(e){var Q=Z.deletions;Q===null?(Z.deletions=[X],Z.flags|=16):Q.push(X)}}function a(Z,X){if(!e)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function o(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function u(Z,X){return Z=ta(Z,X),Z.index=0,Z.sibling=null,Z}function h(Z,X,Q){return Z.index=Q,e?(Q=Z.alternate,Q!==null?(Q=Q.index,Q<X?(Z.flags|=67108866,X):Q):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function x(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,X,Q,mt){return X===null||X.tag!==6?(X=Uu(Q,Z.mode,mt),X.return=Z,X):(X=u(X,Q),X.return=Z,X)}function B(Z,X,Q,mt){var Qt=Q.type;return Qt===C?ht(Z,X,Q.props.children,mt,Q.key):X!==null&&(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===T&&ys(Qt)===X.type)?(X=u(X,Q.props),po(X,Q),X.return=Z,X):(X=Ml(Q.type,Q.key,Q.props,null,Z.mode,mt),po(X,Q),X.return=Z,X)}function $(Z,X,Q,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=Lu(Q,Z.mode,mt),X.return=Z,X):(X=u(X,Q.children||[]),X.return=Z,X)}function ht(Z,X,Q,mt,Qt){return X===null||X.tag!==7?(X=gs(Q,Z.mode,mt,Qt),X.return=Z,X):(X=u(X,Q),X.return=Z,X)}function gt(Z,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Uu(""+X,Z.mode,Q),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return Q=Ml(X.type,X.key,X.props,null,Z.mode,Q),po(Q,X),Q.return=Z,Q;case E:return X=Lu(X,Z.mode,Q),X.return=Z,X;case T:return X=ys(X),gt(Z,X,Q)}if(tt(X)||J(X))return X=gs(X,Z.mode,Q,null),X.return=Z,X;if(typeof X.then=="function")return gt(Z,wl(X),Q);if(X.$$typeof===D)return gt(Z,Tl(Z,X),Q);Dl(Z,X)}return null}function it(Z,X,Q,mt){var Qt=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Qt!==null?null:A(Z,X,""+Q,mt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===Qt?B(Z,X,Q,mt):null;case E:return Q.key===Qt?$(Z,X,Q,mt):null;case T:return Q=ys(Q),it(Z,X,Q,mt)}if(tt(Q)||J(Q))return Qt!==null?null:ht(Z,X,Q,mt,null);if(typeof Q.then=="function")return it(Z,X,wl(Q),mt);if(Q.$$typeof===D)return it(Z,X,Tl(Z,Q),mt);Dl(Z,Q)}return null}function rt(Z,X,Q,mt,Qt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Z=Z.get(Q)||null,A(X,Z,""+mt,Qt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return Z=Z.get(mt.key===null?Q:mt.key)||null,B(X,Z,mt,Qt);case E:return Z=Z.get(mt.key===null?Q:mt.key)||null,$(X,Z,mt,Qt);case T:return mt=ys(mt),rt(Z,X,Q,mt,Qt)}if(tt(mt)||J(mt))return Z=Z.get(Q)||null,ht(X,Z,mt,Qt,null);if(typeof mt.then=="function")return rt(Z,X,Q,wl(mt),Qt);if(mt.$$typeof===D)return rt(Z,X,Q,Tl(X,mt),Qt);Dl(X,mt)}return null}function Gt(Z,X,Q,mt){for(var Qt=null,Ce=null,qt=X,he=X=0,Me=null;qt!==null&&he<Q.length;he++){qt.index>he?(Me=qt,qt=null):Me=qt.sibling;var we=it(Z,qt,Q[he],mt);if(we===null){qt===null&&(qt=Me);break}e&&qt&&we.alternate===null&&n(Z,qt),X=h(we,X,he),Ce===null?Qt=we:Ce.sibling=we,Ce=we,qt=Me}if(he===Q.length)return a(Z,qt),Ee&&ea(Z,he),Qt;if(qt===null){for(;he<Q.length;he++)qt=gt(Z,Q[he],mt),qt!==null&&(X=h(qt,X,he),Ce===null?Qt=qt:Ce.sibling=qt,Ce=qt);return Ee&&ea(Z,he),Qt}for(qt=o(qt);he<Q.length;he++)Me=rt(qt,Z,he,Q[he],mt),Me!==null&&(e&&Me.alternate!==null&&qt.delete(Me.key===null?he:Me.key),X=h(Me,X,he),Ce===null?Qt=Me:Ce.sibling=Me,Ce=Me);return e&&qt.forEach(function(Ja){return n(Z,Ja)}),Ee&&ea(Z,he),Qt}function Jt(Z,X,Q,mt){if(Q==null)throw Error(s(151));for(var Qt=null,Ce=null,qt=X,he=X=0,Me=null,we=Q.next();qt!==null&&!we.done;he++,we=Q.next()){qt.index>he?(Me=qt,qt=null):Me=qt.sibling;var Ja=it(Z,qt,we.value,mt);if(Ja===null){qt===null&&(qt=Me);break}e&&qt&&Ja.alternate===null&&n(Z,qt),X=h(Ja,X,he),Ce===null?Qt=Ja:Ce.sibling=Ja,Ce=Ja,qt=Me}if(we.done)return a(Z,qt),Ee&&ea(Z,he),Qt;if(qt===null){for(;!we.done;he++,we=Q.next())we=gt(Z,we.value,mt),we!==null&&(X=h(we,X,he),Ce===null?Qt=we:Ce.sibling=we,Ce=we);return Ee&&ea(Z,he),Qt}for(qt=o(qt);!we.done;he++,we=Q.next())we=rt(qt,Z,he,we.value,mt),we!==null&&(e&&we.alternate!==null&&qt.delete(we.key===null?he:we.key),X=h(we,X,he),Ce===null?Qt=we:Ce.sibling=we,Ce=we);return e&&qt.forEach(function(KS){return n(Z,KS)}),Ee&&ea(Z,he),Qt}function Ve(Z,X,Q,mt){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:t:{for(var Qt=Q.key;X!==null;){if(X.key===Qt){if(Qt=Q.type,Qt===C){if(X.tag===7){a(Z,X.sibling),mt=u(X,Q.props.children),mt.return=Z,Z=mt;break t}}else if(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===T&&ys(Qt)===X.type){a(Z,X.sibling),mt=u(X,Q.props),po(mt,Q),mt.return=Z,Z=mt;break t}a(Z,X);break}else n(Z,X);X=X.sibling}Q.type===C?(mt=gs(Q.props.children,Z.mode,mt,Q.key),mt.return=Z,Z=mt):(mt=Ml(Q.type,Q.key,Q.props,null,Z.mode,mt),po(mt,Q),mt.return=Z,Z=mt)}return x(Z);case E:t:{for(Qt=Q.key;X!==null;){if(X.key===Qt)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){a(Z,X.sibling),mt=u(X,Q.children||[]),mt.return=Z,Z=mt;break t}else{a(Z,X);break}else n(Z,X);X=X.sibling}mt=Lu(Q,Z.mode,mt),mt.return=Z,Z=mt}return x(Z);case T:return Q=ys(Q),Ve(Z,X,Q,mt)}if(tt(Q))return Gt(Z,X,Q,mt);if(J(Q)){if(Qt=J(Q),typeof Qt!="function")throw Error(s(150));return Q=Qt.call(Q),Jt(Z,X,Q,mt)}if(typeof Q.then=="function")return Ve(Z,X,wl(Q),mt);if(Q.$$typeof===D)return Ve(Z,X,Tl(Z,Q),mt);Dl(Z,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(a(Z,X.sibling),mt=u(X,Q),mt.return=Z,Z=mt):(a(Z,X),mt=Uu(Q,Z.mode,mt),mt.return=Z,Z=mt),x(Z)):a(Z,X)}return function(Z,X,Q,mt){try{ho=0;var Qt=Ve(Z,X,Q,mt);return sr=null,Qt}catch(qt){if(qt===ar||qt===Rl)throw qt;var Ce=ni(29,qt,null,Z.mode);return Ce.lanes=mt,Ce.return=Z,Ce}}}var Es=em(!0),nm=em(!1),Pa=!1;function ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=yl(e),Bp(e,null,a),n}return Sl(e,o,n,a),yl(e)}function mo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Hs(e,a)}}function Wu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var qu=!1;function go(){if(qu){var e=ir;if(e!==null)throw e}}function _o(e,n,a,o){qu=!1;var u=e.updateQueue;Pa=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var B=A,$=B.next;B.next=null,x===null?h=$:x.next=$,x=B;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==x&&(A===null?ht.firstBaseUpdate=$:A.next=$,ht.lastBaseUpdate=B))}if(h!==null){var gt=u.baseState;x=0,ht=$=B=null,A=h;do{var it=A.lane&-536870913,rt=it!==A.lane;if(rt?(ye&it)===it:(o&it)===it){it!==0&&it===nr&&(qu=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Gt=e,Jt=A;it=n;var Ve=a;switch(Jt.tag){case 1:if(Gt=Jt.payload,typeof Gt=="function"){gt=Gt.call(Ve,gt,it);break t}gt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=Jt.payload,it=typeof Gt=="function"?Gt.call(Ve,gt,it):Gt,it==null)break t;gt=S({},gt,it);break t;case 2:Pa=!0}}it=A.callback,it!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[it]:rt.push(it))}else rt={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?($=ht=rt,B=gt):ht=ht.next=rt,x|=it;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;rt=A,A=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ht===null&&(B=gt),u.baseState=B,u.firstBaseUpdate=$,u.lastBaseUpdate=ht,h===null&&(u.shared.lanes=0),Va|=x,e.lanes=x,e.memoizedState=gt}}function im(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function am(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)im(a[e],n)}var rr=P(null),Ul=P(0);function sm(e,n){e=ha,_t(Ul,e),_t(rr,n),ha=e|n.baseLanes}function ju(){_t(Ul,ha),_t(rr,rr.current)}function Zu(){ha=Ul.current,j(rr),j(Ul)}var ii=P(null),gi=null;function za(e){var n=e.alternate;_t(an,an.current&1),_t(ii,e),gi===null&&(n===null||rr.current!==null||n.memoizedState!==null)&&(gi=e)}function Ku(e){_t(an,an.current),_t(ii,e),gi===null&&(gi=e)}function rm(e){e.tag===22?(_t(an,an.current),_t(ii,e),gi===null&&(gi=e)):Ba()}function Ba(){_t(an,an.current),_t(ii,ii.current)}function ai(e){j(ii),gi===e&&(gi=null),j(an)}var an=P(0);function Ll(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ih(a)||ah(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,ce=null,He=null,hn=null,Nl=!1,or=!1,bs=!1,Ol=0,vo=0,lr=null,Hx=0;function $e(){throw Error(s(321))}function Qu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ei(e[a],n[a]))return!1;return!0}function Ju(e,n,a,o,u,h){return aa=h,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Xm:pf,bs=!1,h=a(o,u),bs=!1,or&&(h=lm(n,a,o,u)),om(e),h}function om(e){O.H=yo;var n=He!==null&&He.next!==null;if(aa=0,hn=He=ce=null,Nl=!1,vo=0,lr=null,n)throw Error(s(300));e===null||dn||(e=e.dependencies,e!==null&&bl(e)&&(dn=!0))}function lm(e,n,a,o){ce=e;var u=0;do{if(or&&(lr=null),vo=0,or=!1,25<=u)throw Error(s(301));if(u+=1,hn=He=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}O.H=km,h=n(a,o)}while(or);return h}function Gx(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?xo(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(ce.flags|=1024),n}function $u(){var e=Ol!==0;return Ol=0,e}function tf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ef(e){if(Nl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Nl=!1}aa=0,hn=He=ce=null,or=!1,vo=Ol=0,lr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ce.memoizedState=hn=e:hn=hn.next=e,hn}function sn(){if(He===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=hn===null?ce.memoizedState:hn.next;if(n!==null)hn=n,He=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},hn===null?ce.memoizedState=hn=e:hn=hn.next=e}return hn}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(e){var n=vo;return vo+=1,lr===null&&(lr=[]),e=Jp(lr,e,n),n=ce,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Xm:pf),e}function Fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xo(e);if(e.$$typeof===D)return An(e)}throw Error(s(438,String(e)))}function nf(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pl(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ft;return n.index++,a}function sa(e,n){return typeof n=="function"?n(e):n}function Il(e){var n=sn();return af(n,He,e)}function af(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var A=x=null,B=null,$=n,ht=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(ye&gt)===gt:(aa&gt)===gt){var it=$.revertLane;if(it===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===nr&&(ht=!0);else if((aa&it)===it){$=$.next,it===nr&&(ht=!0);continue}else gt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(A=B=gt,x=h):B=B.next=gt,ce.lanes|=it,Va|=it;gt=$.action,bs&&a(h,gt),h=$.hasEagerState?$.eagerState:a(h,gt)}else it={lane:gt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(A=B=it,x=h):B=B.next=it,ce.lanes|=gt,Va|=gt;$=$.next}while($!==null&&$!==n);if(B===null?x=h:B.next=A,!ei(h,e.memoizedState)&&(dn=!0,ht&&(a=ir,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=B,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function sf(e){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);ei(h,n.memoizedState)||(dn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function cm(e,n,a){var o=ce,u=sn(),h=Ee;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!ei((He||u).memoizedState,a);if(x&&(u.memoizedState=a,dn=!0),u=u.queue,lf(hm.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,cr(9,{destroy:void 0},fm.bind(null,o,u,a,n),null),ke===null)throw Error(s(349));h||(aa&127)!==0||um(o,n,a)}return a}function um(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Pl(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function fm(e,n,a,o){n.value=a,n.getSnapshot=o,dm(n)&&pm(e)}function hm(e,n,a){return a(function(){dm(n)&&pm(e)})}function dm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ei(e,a)}catch{return!0}}function pm(e){var n=ms(e,2);n!==null&&Zn(n,e,2)}function rf(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),bs){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},n}function mm(e,n,a,o){return e.baseState=a,af(e,He,typeof o=="function"?o:sa)}function Vx(e,n,a,o,u){if(Hl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};O.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,gm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function gm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=O.T,x={};O.T=x;try{var A=a(u,o),B=O.S;B!==null&&B(x,A),_m(e,n,A)}catch($){of(e,n,$)}finally{h!==null&&x.types!==null&&(h.types=x.types),O.T=h}}else try{h=a(u,o),_m(e,n,h)}catch($){of(e,n,$)}}function _m(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){vm(e,n,o)},function(o){return of(e,n,o)}):vm(e,n,a)}function vm(e,n,a){n.status="fulfilled",n.value=a,xm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,gm(e,a)))}function of(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,xm(n),n=n.next;while(n!==o)}e.action=null}function xm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Sm(e,n){return n}function ym(e,n){if(Ee){var a=ke.formState;if(a!==null){t:{var o=ce;if(Ee){if(Ye){e:{for(var u=Ye,h=mi;u.nodeType!==8;){if(!h){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Ye=_i(u.nextSibling),o=u.data==="F!";break t}}Na(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sm,lastRenderedState:n},a.queue=o,a=Hm.bind(null,ce,o),o.dispatch=a,o=rf(!1),h=df.bind(null,ce,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Vx.bind(null,ce,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Mm(e){var n=sn();return Em(n,He,e)}function Em(e,n,a){if(n=af(e,n,Sm)[0],e=Il(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(x){throw x===ar?Rl:x}else o=n;n=sn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,cr(9,{destroy:void 0},Xx.bind(null,u,a),null)),[o,h,e]}function Xx(e,n){e.action=n}function bm(e){var n=sn(),a=He;if(a!==null)return Em(n,a,e);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function cr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Pl(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Tm(){return sn().memoizedState}function zl(e,n,a,o){var u=Bn();ce.flags|=e,u.memoizedState=cr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Bl(e,n,a,o){var u=sn();o=o===void 0?null:o;var h=u.memoizedState.inst;He!==null&&o!==null&&Qu(o,He.memoizedState.deps)?u.memoizedState=cr(n,h,a,o):(ce.flags|=e,u.memoizedState=cr(1|n,h,a,o))}function Am(e,n){zl(8390656,8,e,n)}function lf(e,n){Bl(2048,8,e,n)}function kx(e){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=Pl(),ce.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Rm(e){var n=sn().memoizedState;return kx({ref:n,nextImpl:e}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Cm(e,n){return Bl(4,2,e,n)}function wm(e,n){return Bl(4,4,e,n)}function Dm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Um(e,n,a){a=a!=null?a.concat([e]):null,Bl(4,4,Dm.bind(null,n,e),a)}function cf(){}function Lm(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Qu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Nm(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Qu(n,o[1]))return o[0];if(o=e(),bs){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[o,n],o}function uf(e,n,a){return a===void 0||(aa&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Og(),ce.lanes|=e,Va|=e,a)}function Om(e,n,a,o){return ei(a,n)?a:rr.current!==null?(e=uf(e,a,o),ei(e,n)||(dn=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(ye&261930)===0?(dn=!0,e.memoizedState=a):(e=Og(),ce.lanes|=e,Va|=e,n)}function Pm(e,n,a,o,u){var h=z.p;z.p=h!==0&&8>h?h:8;var x=O.T,A={};O.T=A,df(e,!1,n,a);try{var B=u(),$=O.S;if($!==null&&$(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ht=Bx(B,o);So(e,n,ht,oi(e))}else So(e,n,o,oi(e))}catch(gt){So(e,n,{then:function(){},status:"rejected",reason:gt},oi())}finally{z.p=h,x!==null&&A.types!==null&&(x.types=A.types),O.T=x}}function Yx(){}function ff(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Fm(e).queue;Pm(e,u,n,ot,a===null?Yx:function(){return Im(e),a(o)})}function Fm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Im(e){var n=Fm(e);n.next===null&&(n=e.alternate.memoizedState),So(e,n.next.queue,{},oi())}function hf(){return An(Io)}function zm(){return sn().memoizedState}function Bm(){return sn().memoizedState}function Wx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();e=Fa(a);var o=Ia(n,e,a);o!==null&&(Zn(o,n,a),mo(o,n,a)),n={cache:Hu()},e.payload=n;return}n=n.return}}function qx(e,n,a){var o=oi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(e)?Gm(n,a):(a=wu(e,n,a,o),a!==null&&(Zn(a,e,o),Vm(a,n,o)))}function Hm(e,n,a){var o=oi();So(e,n,a,o)}function So(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))Gm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,A=h(x,a);if(u.hasEagerState=!0,u.eagerState=A,ei(A,x))return Sl(e,n,u,0),ke===null&&xl(),!1}catch{}if(a=wu(e,n,u,o),a!==null)return Zn(a,e,o),Vm(a,n,o),!0}return!1}function df(e,n,a,o){if(o={lane:2,revertLane:Yf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(n)throw Error(s(479))}else n=wu(e,a,o,2),n!==null&&Zn(n,e,2)}function Hl(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function Gm(e,n){or=Nl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Vm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Hs(e,a)}}var yo={readContext:An,use:Fl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};yo.useEffectEvent=$e;var Xm={readContext:An,use:Fl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:Am,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,zl(4194308,4,Dm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return zl(4194308,4,e,n)},useInsertionEffect:function(e,n){zl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(bs){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(bs){Ot(!0);try{a(n)}finally{Ot(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=qx.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=rf(e);var n=e.queue,a=Hm.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:cf,useDeferredValue:function(e,n){var a=Bn();return uf(a,e,n)},useTransition:function(){var e=rf(!1);return e=Pm.bind(null,ce,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ce,u=Bn();if(Ee){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(ye&127)!==0||um(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Am(hm.bind(null,o,h,e),[e]),o.flags|=2048,cr(9,{destroy:void 0},fm.bind(null,o,h,a,n),null),a},useId:function(){var e=Bn(),n=ke.identifierPrefix;if(Ee){var a=zi,o=Ii;a=(o&~(1<<32-Nt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ol++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Hx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:hf,useFormState:ym,useActionState:ym,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=df.bind(null,ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:nf,useCacheRefresh:function(){return Bn().memoizedState=Wx.bind(null,ce)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},pf={readContext:An,use:Fl,useCallback:Lm,useContext:An,useEffect:lf,useImperativeHandle:Um,useInsertionEffect:Cm,useLayoutEffect:wm,useMemo:Nm,useReducer:Il,useRef:Tm,useState:function(){return Il(sa)},useDebugValue:cf,useDeferredValue:function(e,n){var a=sn();return Om(a,He.memoizedState,e,n)},useTransition:function(){var e=Il(sa)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:cm,useId:zm,useHostTransitionStatus:hf,useFormState:Mm,useActionState:Mm,useOptimistic:function(e,n){var a=sn();return mm(a,He,e,n)},useMemoCache:nf,useCacheRefresh:Bm};pf.useEffectEvent=Rm;var km={readContext:An,use:Fl,useCallback:Lm,useContext:An,useEffect:lf,useImperativeHandle:Um,useInsertionEffect:Cm,useLayoutEffect:wm,useMemo:Nm,useReducer:sf,useRef:Tm,useState:function(){return sf(sa)},useDebugValue:cf,useDeferredValue:function(e,n){var a=sn();return He===null?uf(a,e,n):Om(a,He.memoizedState,e,n)},useTransition:function(){var e=sf(sa)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:cm,useId:zm,useHostTransitionStatus:hf,useFormState:bm,useActionState:bm,useOptimistic:function(e,n){var a=sn();return He!==null?mm(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:nf,useCacheRefresh:Bm};km.useEffectEvent=Rm;function mf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:S({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=oi(),u=Fa(o);u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,o),n!==null&&(Zn(n,e,o),mo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=oi(),u=Fa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,o),n!==null&&(Zn(n,e,o),mo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=oi(),o=Fa(a);o.tag=2,n!=null&&(o.callback=n),n=Ia(e,o,a),n!==null&&(Zn(n,e,a),mo(n,e,a))}};function Ym(e,n,a,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):n.prototype&&n.prototype.isPureReactComponent?!ro(a,o)||!ro(u,h):!0}function Wm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&gf.enqueueReplaceState(n,n.state,null)}function Ts(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=S({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function qm(e){vl(e)}function jm(e){console.error(e)}function Zm(e){vl(e)}function Gl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Km(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function _f(e,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Gl(e,n)},a}function Qm(e){return e=Fa(e),e.tag=3,e}function Jm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Km(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Km(n,a,o),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function jx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&er(n,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?$l():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Vf(e,o,u)),!1;case 22:return a.flags|=65536,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Vf(e,o,u)),!1}throw Error(s(435,a.tag))}return Vf(e,o,u),$l(),!1}if(Ee)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Pu&&(e=Error(s(422),{cause:o}),co(hi(e,a)))):(o!==Pu&&(n=Error(s(423),{cause:o}),co(hi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=hi(o,a),u=_f(e.stateNode,o,u),Wu(e,u),tn!==4&&(tn=2)),!1;var h=Error(s(520),{cause:o});if(h=hi(h,a),wo===null?wo=[h]:wo.push(h),tn!==4&&(tn=2),n===null)return!0;o=hi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=_f(a.stateNode,o,e),Wu(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Xa===null||!Xa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Qm(u),Jm(u,e,a,o),Wu(a,u),!1}a=a.return}while(a!==null);return!1}var vf=Error(s(461)),dn=!1;function Rn(e,n,a,o){n.child=e===null?nm(n,null,a,o):Es(n,e.child,a,o)}function $m(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return xs(n),o=Ju(e,n,a,x,h,u),A=$u(),e!==null&&!dn?(tf(e,n,u),ra(e,n,u)):(Ee&&A&&Nu(n),n.flags|=1,Rn(e,n,o,u),n.child)}function tg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Du(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,eg(e,n,h,o,u)):(e=Ml(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Af(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(x,o)&&e.ref===n.ref)return ra(e,n,u)}return n.flags|=1,e=ta(h,o),e.ref=n.ref,e.return=n,n.child=e}function eg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(ro(h,o)&&e.ref===n.ref)if(dn=!1,n.pendingProps=o=h,Af(e,u))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,ra(e,n,u)}return xf(e,n,a,o,u)}function ng(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return ig(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Al(n,h!==null?h.cachePool:null),h!==null?sm(n,h):ju(),rm(n);else return o=n.lanes=536870912,ig(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Al(n,h.cachePool),sm(n,h),Ba(),n.memoizedState=null):(e!==null&&Al(n,null),ju(),Ba());return Rn(e,n,u,a),n.child}function Mo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ig(e,n,a,o,u){var h=Vu();return h=h===null?null:{parent:fn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Al(n,null),ju(),rm(n),e!==null&&er(e,n,o,!0),n.childLanes=u,null}function Vl(e,n){return n=kl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function ag(e,n,a){return Es(n,e.child,null,a),e=Vl(n,n.pendingProps),e.flags|=2,ai(n),n.memoizedState=null,e}function Zx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(o.mode==="hidden")return e=Vl(n,o),n.lanes=536870912,Mo(null,e);if(Ku(n),(e=Ye)?(e=g0(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Ii,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,Tn=n,Ye=null)):e=null,e===null)throw Na(n);return n.lanes=536870912,null}return Vl(n,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(Ku(n),u)if(n.flags&256)n.flags&=-257,n=ag(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||er(e,n,a,!1),u=(a&e.childLanes)!==0,dn||u){if(o=ke,o!==null&&(x=ol(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,ms(e,x),Zn(o,e,x),vf;$l(),n=ag(e,n,a)}else e=h.treeContext,Ye=_i(x.nextSibling),Tn=n,Ee=!0,La=null,mi=!1,e!==null&&kp(n,e),n=Vl(n,o),n.flags|=4096;return n}return e=ta(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Xl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function xf(e,n,a,o,u){return xs(n),a=Ju(e,n,a,o,void 0,u),o=$u(),e!==null&&!dn?(tf(e,n,u),ra(e,n,u)):(Ee&&o&&Nu(n),n.flags|=1,Rn(e,n,a,u),n.child)}function sg(e,n,a,o,u,h){return xs(n),n.updateQueue=null,a=lm(n,o,a,u),om(e),o=$u(),e!==null&&!dn?(tf(e,n,h),ra(e,n,h)):(Ee&&o&&Nu(n),n.flags|=1,Rn(e,n,a,h),n.child)}function rg(e,n,a,o,u){if(xs(n),n.stateNode===null){var h=Qs,x=a.contextType;typeof x=="object"&&x!==null&&(h=An(x)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=gf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},ku(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?An(x):Qs,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(mf(n,a,x,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&gf.enqueueReplaceState(h,h.state,null),_o(n,o,h,u),go(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,B=Ts(a,A);h.props=B;var $=h.context,ht=a.contextType;x=Qs,typeof ht=="object"&&ht!==null&&(x=An(ht));var gt=a.getDerivedStateFromProps;ht=typeof gt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ht||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||$!==x)&&Wm(n,h,o,x),Pa=!1;var it=n.memoizedState;h.state=it,_o(n,o,h,u),go(),$=n.memoizedState,A||it!==$||Pa?(typeof gt=="function"&&(mf(n,a,gt,o),$=n.memoizedState),(B=Pa||Ym(n,a,B,o,it,$,x))?(ht||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),h.props=o,h.state=$,h.context=x,o=B):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Yu(e,n),x=n.memoizedProps,ht=Ts(a,x),h.props=ht,gt=n.pendingProps,it=h.context,$=a.contextType,B=Qs,typeof $=="object"&&$!==null&&(B=An($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==gt||it!==B)&&Wm(n,h,o,B),Pa=!1,it=n.memoizedState,h.state=it,_o(n,o,h,u),go();var rt=n.memoizedState;x!==gt||it!==rt||Pa||e!==null&&e.dependencies!==null&&bl(e.dependencies)?(typeof A=="function"&&(mf(n,a,A,o),rt=n.memoizedState),(ht=Pa||Ym(n,a,ht,o,it,rt,B)||e!==null&&e.dependencies!==null&&bl(e.dependencies))?($||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,rt,B),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,rt,B)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=rt),h.props=o,h.state=rt,h.context=B,o=ht):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Xl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Es(n,e.child,null,u),n.child=Es(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=ra(e,n,u),e}function og(e,n,a,o){return _s(),n.flags|=256,Rn(e,n,a,o),n.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yf(e){return{baseLanes:e,cachePool:Kp()}}function Mf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function lg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(u?za(n):Ba(),(e=Ye)?(e=g0(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Ii,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,Tn=n,Ye=null)):e=null,e===null)throw Na(n);return ah(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ba(),u=n.mode,A=kl({mode:"hidden",children:A},u),o=gs(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=yf(a),o.childLanes=Mf(e,x,a),n.memoizedState=Sf,Mo(null,o)):(za(n),Ef(n,A))}var B=e.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(h)n.flags&256?(za(n),n.flags&=-257,n=bf(e,n,a)):n.memoizedState!==null?(Ba(),n.child=e.child,n.flags|=128,n=null):(Ba(),A=o.fallback,u=n.mode,o=kl({mode:"visible",children:o.children},u),A=gs(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Es(n,e.child,null,a),o=n.child,o.memoizedState=yf(a),o.childLanes=Mf(e,x,a),n.memoizedState=Sf,n=Mo(null,o));else if(za(n),ah(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var $=x.dgst;x=$,o=Error(s(419)),o.stack="",o.digest=x,co({value:o,source:null,stack:null}),n=bf(e,n,a)}else if(dn||er(e,n,a,!1),x=(a&e.childLanes)!==0,dn||x){if(x=ke,x!==null&&(o=ol(x,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,ms(e,o),Zn(x,e,o),vf;ih(A)||$l(),n=bf(e,n,a)}else ih(A)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Ye=_i(A.nextSibling),Tn=n,Ee=!0,La=null,mi=!1,e!==null&&kp(n,e),n=Ef(n,o.children),n.flags|=4096);return n}return u?(Ba(),A=o.fallback,u=n.mode,B=e.child,$=B.sibling,o=ta(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,$!==null?A=ta($,A):(A=gs(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Mo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=yf(a):(u=A.cachePool,u!==null?(B=fn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Kp(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Mf(e,x,a),n.memoizedState=Sf,Mo(e.child,o)):(za(n),a=e.child,e=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Ef(e,n){return n=kl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function kl(e,n){return e=ni(22,e,null,n),e.lanes=0,e}function bf(e,n,a){return Es(n,e.child,null,a),e=Ef(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function cg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),zu(e.return,n,a)}function Tf(e,n,a,o,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function ug(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var x=an.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,_t(an,x),Rn(e,n,o,a),o=Ee?lo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cg(e,a,n);else if(e.tag===19)cg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ll(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Tf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ll(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Tf(n,!0,a,null,h,o);break;case"together":Tf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ra(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Va|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(er(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ta(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ta(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Af(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&bl(e)))}function Kx(e,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),Oa(n,fn,e.memoizedState.cache),_s();break;case 27:case 5:Kt(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ku(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(za(n),n.flags|=128,null):(a&n.child.childLanes)!==0?lg(e,n,a):(za(n),e=ra(e,n,a),e!==null?e.sibling:null);za(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(er(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return ug(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_t(an,an.current),o)break;return null;case 22:return n.lanes=0,ng(e,n,a,n.pendingProps);case 24:Oa(n,fn,e.memoizedState.cache)}return ra(e,n,a)}function fg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Af(e,a)&&(n.flags&128)===0)return dn=!1,Kx(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,Ee&&(n.flags&1048576)!==0&&Xp(n,lo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ys(n.elementType),n.type=e,typeof e=="function")Du(e)?(o=Ts(e,o),n.tag=1,n=rg(null,n,e,o,a)):(n.tag=0,n=xf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=$m(null,n,e,o,a);break t}else if(u===F){n.tag=14,n=tg(null,n,e,o,a);break t}}throw n=lt(e)||e,Error(s(306,n,""))}}return n;case 0:return xf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ts(o,n.pendingProps),rg(e,n,o,u,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Yu(e,n),_o(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Oa(n,fn,o),o!==h.cache&&Bu(n,[fn],a,!0),go(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=og(e,n,o,a);break t}else if(o!==u){u=hi(Error(s(424)),n),co(u),n=og(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ye=_i(e.firstChild),Tn=n,Ee=!0,La=null,mi=!0,a=nm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_s(),o===u){n=ra(e,n,a);break t}Rn(e,n,o,a)}n=n.child}return n;case 26:return Xl(e,n),e===null?(a=M0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,o=rc(nt.current).createElement(a),o[ln]=n,o[_n]=e,Cn(o,a,e),k(o),n.stateNode=o):n.memoizedState=M0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&Ee&&(o=n.stateNode=x0(n.type,n.pendingProps,nt.current),Tn=n,mi=!0,u=Ye,qa(n.type)?(sh=u,Ye=_i(o.firstChild)):Ye=u),Rn(e,n,n.pendingProps.children,a),Xl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((u=o=Ye)&&(o=AS(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,Tn=n,Ye=_i(o.firstChild),mi=!1,u=!0):u=!1),u||Na(n)),Kt(n),u=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,th(u,h)?o=null:x!==null&&th(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Ju(e,n,Gx,null,null,a),Io._currentValue=u),Xl(e,n),Rn(e,n,o,a),n.child;case 6:return e===null&&Ee&&((e=a=Ye)&&(a=RS(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Tn=n,Ye=null,e=!0):e=!1),e||Na(n)),null;case 13:return lg(e,n,a);case 4:return Tt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Es(n,null,o,a):Rn(e,n,o,a),n.child;case 11:return $m(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Oa(n,n.type,o.value),Rn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,xs(n),u=An(u),o=o(u),n.flags|=1,Rn(e,n,o,a),n.child;case 14:return tg(e,n,n.type,n.pendingProps,a);case 15:return eg(e,n,n.type,n.pendingProps,a);case 19:return ug(e,n,a);case 31:return Zx(e,n,a);case 22:return ng(e,n,a,n.pendingProps);case 24:return xs(n),o=An(fn),e===null?(u=Vu(),u===null&&(u=ke,h=Hu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},ku(n),Oa(n,fn,u)):((e.lanes&a)!==0&&(Yu(e,n),_o(n,null,null,a),go()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Oa(n,fn,o)):(o=h.cache,Oa(n,fn,o),o!==u.cache&&Bu(n,[fn],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function oa(e){e.flags|=4}function Rf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(zg())e.flags|=8192;else throw Ms=Cl,Xu}else e.flags&=-16777217}function hg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!R0(n))if(zg())e.flags|=8192;else throw Ms=Cl,Xu}function Yl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Fe():536870912,e.lanes|=n,dr|=n)}function Eo(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function We(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Qx(e,n,a){var o=n.pendingProps;switch(Ou(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ia(fn),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(tr(n)?oa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fu())),We(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(oa(n),h!==null?(We(n),hg(n,h)):(We(n),Rf(n,u,null,o,a))):h?h!==e.memoizedState?(oa(n),We(n),hg(n,h)):(We(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&oa(n),We(n),Rf(n,u,e,o,a)),null;case 27:if($t(n),a=nt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return We(n),null}e=Rt.current,tr(n)?Yp(n):(e=x0(u,o,a),n.stateNode=e,oa(n))}return We(n),null;case 5:if($t(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return We(n),null}if(h=Rt.current,tr(n))Yp(n);else{var x=rc(nt.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}h[ln]=n,h[_n]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;t:switch(Cn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&oa(n)}}return We(n),Rf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=nt.current,tr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||l0(e.nodeValue,a)),e||Na(n,!0)}else e=rc(e).createTextNode(o),e[ln]=n,n.stateNode=e}return We(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=tr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else _s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),e=!1}else a=Fu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return We(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=tr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else _s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else u=Fu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),We(n),null);case 4:return Xt(),e===null&&Zf(n.stateNode.containerInfo),We(n),null;case 10:return ia(n.type),We(n),null;case 19:if(j(an),o=n.memoizedState,o===null)return We(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Eo(o,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Ll(e),h!==null){for(n.flags|=128,Eo(o,!1),e=h.updateQueue,n.updateQueue=e,Yl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Hp(a,e),a=a.sibling;return _t(an,an.current&1|2),Ee&&ea(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>Kl&&(n.flags|=128,u=!0,Eo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ll(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Yl(n,e),Eo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ee)return We(n),null}else 2*b()-o.renderingStartTime>Kl&&a!==536870912&&(n.flags|=128,u=!0,Eo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=an.current,_t(an,u?a&1|2:a&1),Ee&&ea(n,o.treeForkCount),e):(We(n),null);case 22:case 23:return ai(n),Zu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&j(Ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(fn),We(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Jx(e,n){switch(Ou(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ia(fn),Xt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));_s()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ai(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));_s()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(an),null;case 4:return Xt(),null;case 10:return ia(n.type),null;case 22:case 23:return ai(n),Zu(),e!==null&&j(Ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ia(fn),null;case 25:return null;default:return null}}function dg(e,n){switch(Ou(n),n.tag){case 3:ia(fn),Xt();break;case 26:case 27:case 5:$t(n);break;case 4:Xt();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:j(an);break;case 10:ia(n.type);break;case 22:case 23:ai(n),Zu(),e!==null&&j(Ss);break;case 24:ia(fn)}}function bo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==u)}}catch(A){ze(n,n.return,A)}}function Ha(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var B=a,$=A;try{$()}catch(ht){ze(u,B,ht)}}}o=o.next}while(o!==h)}}catch(ht){ze(n,n.return,ht)}}function pg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{am(n,a)}catch(o){ze(e,e.return,o)}}}function mg(e,n,a){a.props=Ts(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){ze(e,n,o)}}function To(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){ze(e,n,u)}}function Bi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){ze(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(e,n,u)}else a.current=null}function gg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){ze(e,e.return,u)}}function Cf(e,n,a){try{var o=e.stateNode;SS(o,e.type,a,n),o[_n]=n}catch(u){ze(e,e.return,u)}}function _g(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qa(e.type)||e.tag===4}function wf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||_g(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Df(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji));else if(o!==4&&(o===27&&qa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Df(e,n,a),e=e.sibling;e!==null;)Df(e,n,a),e=e.sibling}function Wl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Wl(e,n,a),e=e.sibling;e!==null;)Wl(e,n,a),e=e.sibling}function vg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[ln]=e,n[_n]=a}catch(h){ze(e,e.return,h)}}var la=!1,pn=!1,Uf=!1,xg=typeof WeakSet=="function"?WeakSet:Set,En=null;function $x(e,n){if(e=e.containerInfo,Jf=dc,e=Up(e),Eu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,A=-1,B=-1,$=0,ht=0,gt=e,it=null;e:for(;;){for(var rt;gt!==a||u!==0&&gt.nodeType!==3||(A=x+u),gt!==h||o!==0&&gt.nodeType!==3||(B=x+o),gt.nodeType===3&&(x+=gt.nodeValue.length),(rt=gt.firstChild)!==null;)it=gt,gt=rt;for(;;){if(gt===e)break e;if(it===a&&++$===u&&(A=x),it===h&&++ht===o&&(B=x),(rt=gt.nextSibling)!==null)break;gt=it,it=gt.parentNode}gt=rt}a=A===-1||B===-1?null:{start:A,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for($f={focusedElem:e,selectionRange:a},dc=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Gt=Ts(a.type,u);e=o.getSnapshotBeforeUpdate(Gt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){ze(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)nh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function Sg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),o&4&&bo(5,a);break;case 1:if(ua(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){ze(a,a.return,x)}else{var u=Ts(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){ze(a,a.return,x)}}o&64&&pg(a),o&512&&To(a,a.return);break;case 3:if(ua(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{am(e,n)}catch(x){ze(a,a.return,x)}}break;case 27:n===null&&o&4&&vg(a);case 26:case 5:ua(e,a),n===null&&o&4&&gg(a),o&512&&To(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),o&4&&Eg(e,a);break;case 13:ua(e,a),o&4&&bg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=lS.bind(null,a),CS(e,a))));break;case 22:if(o=a.memoizedState!==null||la,!o){n=n!==null&&n.memoizedState!==null||pn,u=la;var h=pn;la=o,(pn=n)&&!h?fa(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),la=u,pn=h}break;case 30:break;default:ua(e,a)}}function yg(e){var n=e.alternate;n!==null&&(e.alternate=null,yg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Jr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Yn=!1;function ca(e,n,a){for(a=a.child;a!==null;)Mg(e,n,a),a=a.sibling}function Mg(e,n,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:pn||Bi(a,n),ca(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||Bi(a,n);var o=Ke,u=Yn;qa(a.type)&&(Ke=a.stateNode,Yn=!1),ca(e,n,a),Oo(a.stateNode),Ke=o,Yn=u;break;case 5:pn||Bi(a,n);case 6:if(o=Ke,u=Yn,Ke=null,ca(e,n,a),Ke=o,Yn=u,Ke!==null)if(Yn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(h){ze(a,n,h)}else try{Ke.removeChild(a.stateNode)}catch(h){ze(a,n,h)}break;case 18:Ke!==null&&(Yn?(e=Ke,p0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yr(e)):p0(Ke,a.stateNode));break;case 4:o=Ke,u=Yn,Ke=a.stateNode.containerInfo,Yn=!0,ca(e,n,a),Ke=o,Yn=u;break;case 0:case 11:case 14:case 15:Ha(2,a,n),pn||Ha(4,a,n),ca(e,n,a);break;case 1:pn||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&mg(a,n,o)),ca(e,n,a);break;case 21:ca(e,n,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,ca(e,n,a),pn=o;break;default:ca(e,n,a)}}function Eg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yr(e)}catch(a){ze(n,n.return,a)}}}function bg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yr(e)}catch(a){ze(n,n.return,a)}}function tS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new xg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new xg),n;default:throw Error(s(435,e.tag))}}function ql(e,n){var a=tS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=cS.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(qa(A.type)){Ke=A.stateNode,Yn=!1;break t}break;case 5:Ke=A.stateNode,Yn=!1;break t;case 3:case 4:Ke=A.stateNode.containerInfo,Yn=!0;break t}A=A.return}if(Ke===null)throw Error(s(160));Mg(h,x,u),Ke=null,Yn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Tg(n,e),n=n.sibling}var Ri=null;function Tg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(Ha(3,e,e.return),bo(3,e),Ha(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(pn||a===null||Bi(a,a.return)),o&64&&la&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(Wn(n,e),qn(e),o&512&&(pn||a===null||Bi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[us]||h[ln]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Cn(h,o,a),h[ln]=e,k(h),o=h;break t;case"link":var x=T0("link","href",u).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(h=x[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}h=u.createElement(o),Cn(h,o,a),u.head.appendChild(h);break;case"meta":if(x=T0("meta","content",u).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(h=x[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}h=u.createElement(o),Cn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[ln]=e,k(h),o=h}e.stateNode=o}else A0(u,e.type,e.stateNode);else e.stateNode=b0(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?A0(u,e.type,e.stateNode):b0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(pn||a===null||Bi(a,a.return)),a!==null&&o&4&&Cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(pn||a===null||Bi(a,a.return)),e.flags&32){u=e.stateNode;try{zn(u,"")}catch(Gt){ze(e,e.return,Gt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Cf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Uf=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Gt){ze(e,e.return,Gt)}}break;case 3:if(cc=null,u=Ri,Ri=oc(n.containerInfo),Wn(n,e),Ri=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(Gt){ze(e,e.return,Gt)}Uf&&(Uf=!1,Ag(e));break;case 4:o=Ri,Ri=oc(e.stateNode.containerInfo),Wn(n,e),qn(e),Ri=o;break;case 12:Wn(n,e),qn(e);break;case 31:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ql(e,o)));break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zl=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ql(e,o)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=la,ht=pn;if(la=$||u,pn=ht||B,Wn(n,e),pn=ht,la=$,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||la||pn||As(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(h=B.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=B.stateNode;var gt=B.memoizedProps.style,it=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Gt){ze(B,B.return,Gt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Gt){ze(B,B.return,Gt)}}}else if(n.tag===18){if(a===null){B=n;try{var rt=B.stateNode;u?m0(rt,!0):m0(B.stateNode,!1)}catch(Gt){ze(B,B.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ql(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ql(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(_g(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=wf(e);Wl(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(zn(x,""),a.flags&=-33);var A=wf(e);Wl(e,A,x);break;case 3:case 4:var B=a.stateNode.containerInfo,$=wf(e);Df(e,$,B);break;default:throw Error(s(161))}}catch(ht){ze(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ag(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ag(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ua(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Sg(e,n.alternate,n),n=n.sibling}function As(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ha(4,n,n.return),As(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&mg(n,n.return,a),As(n);break;case 27:Oo(n.stateNode);case 26:case 5:Bi(n,n.return),As(n);break;case 22:n.memoizedState===null&&As(n);break;case 30:As(n);break;default:As(n)}e=e.sibling}}function fa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:fa(u,h,a),bo(4,h);break;case 1:if(fa(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){ze(o,o.return,$)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)im(B[u],A)}catch($){ze(o,o.return,$)}}a&&x&64&&pg(h),To(h,h.return);break;case 27:vg(h);case 26:case 5:fa(u,h,a),a&&o===null&&x&4&&gg(h),To(h,h.return);break;case 12:fa(u,h,a);break;case 31:fa(u,h,a),a&&x&4&&Eg(u,h);break;case 13:fa(u,h,a),a&&x&4&&bg(u,h);break;case 22:h.memoizedState===null&&fa(u,h,a),To(h,h.return);break;case 30:break;default:fa(u,h,a)}n=n.sibling}}function Lf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&uo(a))}function Nf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&uo(e))}function Ci(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Rg(e,n,a,o),n=n.sibling}function Rg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,o),u&2048&&bo(9,n);break;case 1:Ci(e,n,a,o);break;case 3:Ci(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&uo(e)));break;case 12:if(u&2048){Ci(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,x=h.id,A=h.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){ze(n,n.return,B)}}else Ci(e,n,a,o);break;case 31:Ci(e,n,a,o);break;case 13:Ci(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?Ci(e,n,a,o):Ao(e,n):h._visibility&2?Ci(e,n,a,o):(h._visibility|=2,ur(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Lf(x,n);break;case 24:Ci(e,n,a,o),u&2048&&Nf(n.alternate,n);break;default:Ci(e,n,a,o)}}function ur(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,A=a,B=o,$=x.flags;switch(x.tag){case 0:case 11:case 15:ur(h,x,A,B,u),bo(8,x);break;case 23:break;case 22:var ht=x.stateNode;x.memoizedState!==null?ht._visibility&2?ur(h,x,A,B,u):Ao(h,x):(ht._visibility|=2,ur(h,x,A,B,u)),u&&$&2048&&Lf(x.alternate,x);break;case 24:ur(h,x,A,B,u),u&&$&2048&&Nf(x.alternate,x);break;default:ur(h,x,A,B,u)}n=n.sibling}}function Ao(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ao(a,o),u&2048&&Lf(o.alternate,o);break;case 24:Ao(a,o),u&2048&&Nf(o.alternate,o);break;default:Ao(a,o)}n=n.sibling}}var Ro=8192;function fr(e,n,a){if(e.subtreeFlags&Ro)for(e=e.child;e!==null;)Cg(e,n,a),e=e.sibling}function Cg(e,n,a){switch(e.tag){case 26:fr(e,n,a),e.flags&Ro&&e.memoizedState!==null&&HS(a,Ri,e.memoizedState,e.memoizedProps);break;case 5:fr(e,n,a);break;case 3:case 4:var o=Ri;Ri=oc(e.stateNode.containerInfo),fr(e,n,a),Ri=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ro,Ro=16777216,fr(e,n,a),Ro=o):fr(e,n,a));break;default:fr(e,n,a)}}function wg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Ug(o,e)}wg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dg(e),e=e.sibling}function Dg(e){switch(e.tag){case 0:case 11:case 15:Co(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:Co(e);break;case 12:Co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,jl(e)):Co(e);break;default:Co(e)}}function jl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Ug(o,e)}wg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,jl(n));break;default:jl(n)}e=e.sibling}}function Ug(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=e;En!==null;){o=En;var u=o.sibling,h=o.return;if(yg(o),o===a){En=null;break t}if(u!==null){u.return=h,En=u;break t}En=h}}}var eS={getCacheForType:function(e){var n=An(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(fn).controller.signal}},nS=typeof WeakMap=="function"?WeakMap:Map,Le=0,ke=null,ve=null,ye=0,Ie=0,si=null,Ga=!1,hr=!1,Of=!1,ha=0,tn=0,Va=0,Rs=0,Pf=0,ri=0,dr=0,wo=null,jn=null,Ff=!1,Zl=0,Lg=0,Kl=1/0,Ql=null,Xa=null,xn=0,ka=null,pr=null,da=0,If=0,zf=null,Ng=null,Do=0,Bf=null;function oi(){return(Le&2)!==0&&ye!==0?ye&-ye:O.T!==null?Yf():Fi()}function Og(){if(ri===0)if((ye&536870912)===0||Ee){var e=At;At<<=1,(At&3932160)===0&&(At=262144),ri=e}else ri=536870912;return e=ii.current,e!==null&&(e.flags|=32),ri}function Zn(e,n,a){(e===ke&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(mr(e,0),Ya(e,ye,ri,!1)),Pn(e,a),((Le&2)===0||e!==ke)&&(e===ke&&((Le&2)===0&&(Rs|=a),tn===4&&Ya(e,ye,ri,!1)),Hi(e))}function Pg(e,n,a){if((Le&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Bt(e,n),u=o?sS(e,n):Gf(e,n,!0),h=o;do{if(u===0){hr&&!o&&Ya(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!iS(a)){u=Gf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=e;u=wo;var B=A.current.memoizedState.isDehydrated;if(B&&(mr(A,x).flags|=256),x=Gf(A,x,!1),x!==2){if(Of&&!B){A.errorRecoveryDisabledLanes|=h,Rs|=h,u=4;break t}h=jn,jn=u,h!==null&&(jn===null?jn=h:jn.push.apply(jn,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){mr(e,0),Ya(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ya(o,n,ri,!Ga);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Zl+300-b(),10<u)){if(Ya(o,n,ri,!Ga),ct(o,0,!0)!==0)break t;da=n,o.timeoutHandle=h0(Fg.bind(null,o,a,jn,Ql,Ff,n,ri,Rs,dr,Ga,h,"Throttled",-0,0),u);break t}Fg(o,a,jn,Ql,Ff,n,ri,Rs,dr,Ga,h,null,-0,0)}}break}while(!0);Hi(e)}function Fg(e,n,a,o,u,h,x,A,B,$,ht,gt,it,rt){if(e.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},Cg(n,h,gt);var Gt=(h&62914560)===h?Zl-b():(h&4194048)===h?Lg-b():0;if(Gt=GS(gt,Gt),Gt!==null){da=h,e.cancelPendingCommit=Gt(kg.bind(null,e,n,h,a,o,u,x,A,B,ht,gt,null,it,rt)),Ya(e,h,x,!$);return}}kg(e,n,h,a,o,u,x,A,B)}function iS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!ei(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(e,n,a,o){n&=~Pf,n&=~Rs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Nt(u),x=1<<h;o[h]=-1,u&=~x}a!==0&&Qr(e,a,n)}function Jl(){return(Le&6)===0?(Uo(0),!1):!0}function Hf(){if(ve!==null){if(Ie===0)var e=ve.return;else e=ve,na=vs=null,ef(e),sr=null,ho=0,e=ve;for(;e!==null;)dg(e.alternate,e),e=e.return;ve=null}}function mr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ES(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),da=0,Hf(),ke=e,ve=a=ta(e.current,null),ye=n,Ie=0,si=null,Ga=!1,hr=Bt(e,n),Of=!1,dr=ri=Pf=Rs=Va=tn=0,jn=wo=null,Ff=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Nt(o),h=1<<u;n|=e[u],o&=~h}return ha=n,xl(),a}function Ig(e,n){ce=null,O.H=yo,n===ar||n===Rl?(n=$p(),Ie=3):n===Xu?(n=$p(),Ie=4):Ie=n===vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,ve===null&&(tn=1,Gl(e,hi(n,e.current)))}function zg(){var e=ii.current;return e===null?!0:(ye&4194048)===ye?gi===null:(ye&62914560)===ye||(ye&536870912)!==0?e===gi:!1}function Bg(){var e=O.H;return O.H=yo,e===null?yo:e}function Hg(){var e=O.A;return O.A=eS,e}function $l(){tn=4,Ga||(ye&4194048)!==ye&&ii.current!==null||(hr=!0),(Va&134217727)===0&&(Rs&134217727)===0||ke===null||Ya(ke,ye,ri,!1)}function Gf(e,n,a){var o=Le;Le|=2;var u=Bg(),h=Hg();(ke!==e||ye!==n)&&(Ql=null,mr(e,n)),n=!1;var x=tn;t:do try{if(Ie!==0&&ve!==null){var A=ve,B=si;switch(Ie){case 8:Hf(),x=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var $=Ie;if(Ie=0,si=null,gr(e,A,B,$),a&&hr){x=0;break t}break;default:$=Ie,Ie=0,si=null,gr(e,A,B,$)}}aS(),x=tn;break}catch(ht){Ig(e,ht)}while(!0);return n&&e.shellSuspendCounter++,na=vs=null,Le=o,O.H=u,O.A=h,ve===null&&(ke=null,ye=0,xl()),x}function aS(){for(;ve!==null;)Gg(ve)}function sS(e,n){var a=Le;Le|=2;var o=Bg(),u=Hg();ke!==e||ye!==n?(Ql=null,Kl=b()+500,mr(e,n)):hr=Bt(e,n);t:do try{if(Ie!==0&&ve!==null){n=ve;var h=si;e:switch(Ie){case 1:Ie=0,si=null,gr(e,n,h,1);break;case 2:case 9:if(Qp(h)){Ie=0,si=null,Vg(n);break}n=function(){Ie!==2&&Ie!==9||ke!==e||(Ie=7),Hi(e)},h.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Qp(h)?(Ie=0,si=null,Vg(n)):(Ie=0,si=null,gr(e,n,h,7));break;case 5:var x=null;switch(ve.tag){case 26:x=ve.memoizedState;case 5:case 27:var A=ve;if(x?R0(x):A.stateNode.complete){Ie=0,si=null;var B=A.sibling;if(B!==null)ve=B;else{var $=A.return;$!==null?(ve=$,tc($)):ve=null}break e}}Ie=0,si=null,gr(e,n,h,5);break;case 6:Ie=0,si=null,gr(e,n,h,6);break;case 8:Hf(),tn=6;break t;default:throw Error(s(462))}}rS();break}catch(ht){Ig(e,ht)}while(!0);return na=vs=null,O.H=o,O.A=u,Le=a,ve!==null?0:(ke=null,ye=0,xl(),tn)}function rS(){for(;ve!==null&&!Wt();)Gg(ve)}function Gg(e){var n=fg(e.alternate,e,ha);e.memoizedProps=e.pendingProps,n===null?tc(e):ve=n}function Vg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=sg(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=sg(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:ef(n);default:dg(a,n),n=ve=Hp(n,ha),n=fg(a,n,ha)}e.memoizedProps=e.pendingProps,n===null?tc(e):ve=n}function gr(e,n,a,o){na=vs=null,ef(n),sr=null,ho=0;var u=n.return;try{if(jx(e,u,n,a,ye)){tn=1,Gl(e,hi(a,e.current)),ve=null;return}}catch(h){if(u!==null)throw ve=u,h;tn=1,Gl(e,hi(a,e.current)),ve=null;return}n.flags&32768?(Ee||o===1?e=!0:hr||(ye&536870912)!==0?e=!1:(Ga=e=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),Xg(n,e)):tc(n)}function tc(e){var n=e;do{if((n.flags&32768)!==0){Xg(n,Ga);return}e=n.return;var a=Qx(n.alternate,n,ha);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);tn===0&&(tn=5)}function Xg(e,n){do{var a=Jx(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);tn=6,ve=null}function kg(e,n,a,o,u,h,x,A,B){e.cancelPendingCommit=null;do ec();while(xn!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Cu,Mi(e,a,h,x,A,B),e===ke&&(ve=ke=null,ye=0),pr=n,ka=e,da=a,If=h,zf=u,Ng=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,uS(ut,function(){return Zg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=z.p,z.p=2,x=Le,Le|=4;try{$x(e,n,a)}finally{Le=x,z.p=u,O.T=o}}xn=1,Yg(),Wg(),qg()}}function Yg(){if(xn===1){xn=0;var e=ka,n=pr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=z.p;z.p=2;var u=Le;Le|=4;try{Tg(n,e);var h=$f,x=Up(e.containerInfo),A=h.focusedElem,B=h.selectionRange;if(x!==A&&A&&A.ownerDocument&&Dp(A.ownerDocument.documentElement,A)){if(B!==null&&Eu(A)){var $=B.start,ht=B.end;if(ht===void 0&&(ht=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(ht,A.value.length);else{var gt=A.ownerDocument||document,it=gt&&gt.defaultView||window;if(it.getSelection){var rt=it.getSelection(),Gt=A.textContent.length,Jt=Math.min(B.start,Gt),Ve=B.end===void 0?Jt:Math.min(B.end,Gt);!rt.extend&&Jt>Ve&&(x=Ve,Ve=Jt,Jt=x);var Z=wp(A,Jt),X=wp(A,Ve);if(Z&&X&&(rt.rangeCount!==1||rt.anchorNode!==Z.node||rt.anchorOffset!==Z.offset||rt.focusNode!==X.node||rt.focusOffset!==X.offset)){var Q=gt.createRange();Q.setStart(Z.node,Z.offset),rt.removeAllRanges(),Jt>Ve?(rt.addRange(Q),rt.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),rt.addRange(Q))}}}}for(gt=[],rt=A;rt=rt.parentNode;)rt.nodeType===1&&gt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var mt=gt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}dc=!!Jf,$f=Jf=null}finally{Le=u,z.p=o,O.T=a}}e.current=n,xn=2}}function Wg(){if(xn===2){xn=0;var e=ka,n=pr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=z.p;z.p=2;var u=Le;Le|=4;try{Sg(e,n.alternate,n)}finally{Le=u,z.p=o,O.T=a}}xn=3}}function qg(){if(xn===4||xn===3){xn=0,N();var e=ka,n=pr,a=da,o=Ng;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,pr=ka=null,jg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Xa=null),Vs(a),n=n.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=z.p,z.p=2,O.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var A=o[x];h(A.value,{componentStack:A.stack})}}finally{O.T=n,z.p=u}}(da&3)!==0&&ec(),Hi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Bf?Do++:(Do=0,Bf=e):Do=0,Uo(0)}}function jg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,uo(n)))}function ec(){return Yg(),Wg(),qg(),Zg()}function Zg(){if(xn!==5)return!1;var e=ka,n=If;If=0;var a=Vs(da),o=O.T,u=z.p;try{z.p=32>a?32:a,O.T=null,a=zf,zf=null;var h=ka,x=da;if(xn=0,pr=ka=null,da=0,(Le&6)!==0)throw Error(s(331));var A=Le;if(Le|=4,Dg(h.current),Rg(h,h.current,x,a),Le=A,Uo(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Et,h)}catch{}return!0}finally{z.p=u,O.T=o,jg(e,n)}}function Kg(e,n,a){n=hi(a,n),n=_f(e.stateNode,n,2),e=Ia(e,n,2),e!==null&&(Pn(e,2),Hi(e))}function ze(e,n,a){if(e.tag===3)Kg(e,e,a);else for(;n!==null;){if(n.tag===3){Kg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xa===null||!Xa.has(o))){e=hi(a,e),a=Qm(2),o=Ia(n,a,2),o!==null&&(Jm(a,o,n,e),Pn(o,2),Hi(o));break}}n=n.return}}function Vf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new nS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Of=!0,u.add(a),e=oS.bind(null,e,n,a),n.then(e,e))}function oS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(ye&a)===a&&(tn===4||tn===3&&(ye&62914560)===ye&&300>b()-Zl?(Le&2)===0&&mr(e,0):Pf|=a,dr===ye&&(dr=0)),Hi(e)}function Qg(e,n){n===0&&(n=Fe()),e=ms(e,n),e!==null&&(Pn(e,n),Hi(e))}function lS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Qg(e,a)}function cS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Qg(e,a)}function uS(e,n){return be(e,n)}var nc=null,_r=null,Xf=!1,ic=!1,kf=!1,Wa=0;function Hi(e){e!==_r&&e.next===null&&(_r===null?nc=_r=e:_r=_r.next=e),ic=!0,Xf||(Xf=!0,hS())}function Uo(e,n){if(!kf&&ic){kf=!0;do for(var a=!1,o=nc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Nt(42|e)+1)-1,h&=u&~(x&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,e0(o,h))}else h=ye,h=ct(o,o===ke?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Bt(o,h)||(a=!0,e0(o,h));o=o.next}while(a);kf=!1}}function fS(){Jg()}function Jg(){ic=Xf=!1;var e=0;Wa!==0&&MS()&&(e=Wa);for(var n=b(),a=null,o=nc;o!==null;){var u=o.next,h=$g(o,n);h===0?(o.next=null,a===null?nc=u:a.next=u,u===null&&(_r=a)):(a=o,(e!==0||(h&3)!==0)&&(ic=!0)),o=u}xn!==0&&xn!==5||Uo(e),Wa!==0&&(Wa=0)}function $g(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Nt(h),A=1<<x,B=u[x];B===-1?((A&a)===0||(A&o)!==0)&&(u[x]=ie(A,n)):B<=n&&(e.expiredLanes|=A),h&=~A}if(n=ke,a=ye,a=ct(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ne(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ne(o),Vs(a)){case 2:case 8:a=St;break;case 32:a=ut;break;case 268435456:a=wt;break;default:a=ut}return o=t0.bind(null,e),a=be(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ne(o),e.callbackPriority=2,e.callbackNode=null,2}function t0(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ec()&&e.callbackNode!==a)return null;var o=ye;return o=ct(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Pg(e,o,n),$g(e,b()),e.callbackNode!=null&&e.callbackNode===a?t0.bind(null,e):null)}function e0(e,n){if(ec())return null;Pg(e,n,!0)}function hS(){bS(function(){(Le&6)!==0?be(pt,fS):Jg()})}function Yf(){if(Wa===0){var e=nr;e===0&&(e=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),Wa=e}return Wa}function n0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fl(""+e)}function i0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function dS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=n0((u[_n]||null).action),x=o.submitter;x&&(n=(n=x[_n]||null)?n0(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var A=new ml("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var B=x?i0(u,x):new FormData(u);ff(a,{pending:!0,data:B,method:u.method,action:h},null,B)}}else typeof h=="function"&&(A.preventDefault(),B=x?i0(u,x):new FormData(u),ff(a,{pending:!0,data:B,method:u.method,action:h},h,B))},currentTarget:u}]})}}for(var Wf=0;Wf<Ru.length;Wf++){var qf=Ru[Wf],pS=qf.toLowerCase(),mS=qf[0].toUpperCase()+qf.slice(1);Ai(pS,"on"+mS)}Ai(Op,"onAnimationEnd"),Ai(Pp,"onAnimationIteration"),Ai(Fp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(Ux,"onTransitionRun"),Ai(Lx,"onTransitionStart"),Ai(Nx,"onTransitionCancel"),Ai(Ip,"onTransitionEnd"),Dt("onMouseEnter",["mouseout","mouseover"]),Dt("onMouseLeave",["mouseout","mouseover"]),Dt("onPointerEnter",["pointerout","pointerover"]),Dt("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function a0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],B=A.instance,$=A.currentTarget;if(A=A.listener,B!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=$;try{h(u)}catch(ht){vl(ht)}u.currentTarget=null,h=B}else for(x=0;x<o.length;x++){if(A=o[x],B=A.instance,$=A.currentTarget,A=A.listener,B!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=$;try{h(u)}catch(ht){vl(ht)}u.currentTarget=null,h=B}}}}function xe(e,n){var a=n[Ra];a===void 0&&(a=n[Ra]=new Set);var o=e+"__bubble";a.has(o)||(s0(n,e,2,!1),a.add(o))}function jf(e,n,a){var o=0;n&&(o|=4),s0(a,e,o,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function Zf(e){if(!e[ac]){e[ac]=!0,st.forEach(function(a){a!=="selectionchange"&&(gS.has(a)||jf(a,!1,e),jf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ac]||(n[ac]=!0,jf("selectionchange",!1,n))}}function s0(e,n,a,o){switch(O0(n)){case 2:var u=kS;break;case 8:u=YS;break;default:u=uh}a=u.bind(null,n,a,e),u=void 0,!pu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Kf(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=Ca(A),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){o=h=x;continue t}A=A.parentNode}}o=o.return}up(function(){var $=h,ht=hu(a),gt=[];t:{var it=zp.get(e);if(it!==void 0){var rt=ml,Gt=e;switch(e){case"keypress":if(dl(a)===0)break t;case"keydown":case"keyup":rt=cx;break;case"focusin":Gt="focus",rt=vu;break;case"focusout":Gt="blur",rt=vu;break;case"beforeblur":case"afterblur":rt=vu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=hx;break;case Op:case Pp:case Fp:rt=tx;break;case Ip:rt=px;break;case"scroll":case"scrollend":rt=Zv;break;case"wheel":rt=gx;break;case"copy":case"cut":case"paste":rt=nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=mp;break;case"toggle":case"beforetoggle":rt=vx}var Jt=(n&4)!==0,Ve=!Jt&&(e==="scroll"||e==="scrollend"),Z=Jt?it!==null?it+"Capture":null:it;Jt=[];for(var X=$,Q;X!==null;){var mt=X;if(Q=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||Q===null||Z===null||(mt=$r(X,Z),mt!=null&&Jt.push(No(X,mt,Q))),Ve)break;X=X.return}0<Jt.length&&(it=new rt(it,Gt,null,a,ht),gt.push({event:it,listeners:Jt}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",it&&a!==fu&&(Gt=a.relatedTarget||a.fromElement)&&(Ca(Gt)||Gt[Ki]))break t;if((rt||it)&&(it=ht.window===ht?ht:(it=ht.ownerDocument)?it.defaultView||it.parentWindow:window,rt?(Gt=a.relatedTarget||a.toElement,rt=$,Gt=Gt?Ca(Gt):null,Gt!==null&&(Ve=c(Gt),Jt=Gt.tag,Gt!==Ve||Jt!==5&&Jt!==27&&Jt!==6)&&(Gt=null)):(rt=null,Gt=$),rt!==Gt)){if(Jt=dp,mt="onMouseLeave",Z="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=mp,mt="onPointerLeave",Z="onPointerEnter",X="pointer"),Ve=rt==null?it:fs(rt),Q=Gt==null?it:fs(Gt),it=new Jt(mt,X+"leave",rt,a,ht),it.target=Ve,it.relatedTarget=Q,mt=null,Ca(ht)===$&&(Jt=new Jt(Z,X+"enter",Gt,a,ht),Jt.target=Q,Jt.relatedTarget=Ve,mt=Jt),Ve=mt,rt&&Gt)e:{for(Jt=_S,Z=rt,X=Gt,Q=0,mt=Z;mt;mt=Jt(mt))Q++;mt=0;for(var Qt=X;Qt;Qt=Jt(Qt))mt++;for(;0<Q-mt;)Z=Jt(Z),Q--;for(;0<mt-Q;)X=Jt(X),mt--;for(;Q--;){if(Z===X||X!==null&&Z===X.alternate){Jt=Z;break e}Z=Jt(Z),X=Jt(X)}Jt=null}else Jt=null;rt!==null&&r0(gt,it,rt,Jt,!1),Gt!==null&&Ve!==null&&r0(gt,Ve,Gt,Jt,!0)}}t:{if(it=$?fs($):window,rt=it.nodeName&&it.nodeName.toLowerCase(),rt==="select"||rt==="input"&&it.type==="file")var Ce=Ep;else if(yp(it))if(bp)Ce=Cx;else{Ce=Ax;var qt=Tx}else rt=it.nodeName,!rt||rt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?$&&ks($.elementType)&&(Ce=Ep):Ce=Rx;if(Ce&&(Ce=Ce(e,$))){Mp(gt,Ce,a,ht);break t}qt&&qt(e,it,$),e==="focusout"&&$&&it.type==="number"&&$.memoizedProps.value!=null&&bi(it,"number",it.value)}switch(qt=$?fs($):window,e){case"focusin":(yp(qt)||qt.contentEditable==="true")&&(js=qt,bu=$,oo=null);break;case"focusout":oo=bu=js=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Lp(gt,a,ht);break;case"selectionchange":if(Dx)break;case"keydown":case"keyup":Lp(gt,a,ht)}var he;if(Su)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else qs?xp(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(gp&&a.locale!=="ko"&&(qs||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&qs&&(he=fp()):(Da=ht,mu="value"in Da?Da.value:Da.textContent,qs=!0)),qt=sc($,Me),0<qt.length&&(Me=new pp(Me,e,null,a,ht),gt.push({event:Me,listeners:qt}),he?Me.data=he:(he=Sp(a),he!==null&&(Me.data=he)))),(he=Sx?yx(e,a):Mx(e,a))&&(Me=sc($,"onBeforeInput"),0<Me.length&&(qt=new pp("onBeforeInput","beforeinput",null,a,ht),gt.push({event:qt,listeners:Me}),qt.data=he)),dS(gt,e,$,a,ht)}a0(gt,n)})}function No(e,n,a){return{instance:e,listener:n,currentTarget:a}}function sc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=$r(e,a),u!=null&&o.unshift(No(e,u,h)),u=$r(e,n),u!=null&&o.push(No(e,u,h))),e.tag===3)return o;e=e.return}return[]}function _S(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function r0(e,n,a,o,u){for(var h=n._reactName,x=[];a!==null&&a!==o;){var A=a,B=A.alternate,$=A.stateNode;if(A=A.tag,B!==null&&B===o)break;A!==5&&A!==26&&A!==27||$===null||(B=$,u?($=$r(a,h),$!=null&&x.unshift(No(a,$,B))):u||($=$r(a,h),$!=null&&x.push(No(a,$,B)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var vS=/\r\n?/g,xS=/\u0000|\uFFFD/g;function o0(e){return(typeof e=="string"?e:""+e).replace(vS,`
`).replace(xS,"")}function l0(e,n){return n=o0(n),o0(e)===n}function Ge(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zn(e,""+o);break;case"className":se(e,"class",o);break;case"tabIndex":se(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":se(e,a,o);break;case"style":Qi(e,o,h);break;case"data":if(n!=="object"){se(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=fl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ge(e,n,"name",u.name,u,null),Ge(e,n,"formEncType",u.formEncType,u,null),Ge(e,n,"formMethod",u.formMethod,u,null),Ge(e,n,"formTarget",u.formTarget,u,null)):(Ge(e,n,"encType",u.encType,u,null),Ge(e,n,"method",u.method,u,null),Ge(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=fl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=fl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),ne(e,"popover",o);break;case"xlinkActuate":Ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ht(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ht(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ht(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ht(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ne(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=qv.get(a)||a,ne(e,a,o))}}function Qf(e,n,a,o,u,h){switch(a){case"style":Qi(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?zn(e,o):(typeof o=="number"||typeof o=="bigint")&&zn(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!et.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[_n]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ne(e,a,o)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(e,n,h,x,a,null)}}u&&Ge(e,n,"srcSet",a.srcSet,a,null),o&&Ge(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var A=h=x=u=null,B=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":x=ht;break;case"checked":B=ht;break;case"defaultChecked":$=ht;break;case"value":h=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Ge(e,n,o,ht,a,null)}}$n(e,h,A,B,$,x,u,!1);return;case"select":xe("invalid",e),o=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:Ge(e,n,u,A,a,null)}n=h,a=x,e.multiple=!!o,n!=null?ti(e,!!o,n,!1):a!=null&&ti(e,!!o,a,!0);return;case"textarea":xe("invalid",e),h=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ge(e,n,x,A,a,null)}cn(e,o,u,h);return;case"option":for(B in a)a.hasOwnProperty(B)&&(o=a[B],o!=null)&&(B==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ge(e,n,B,o,a,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<Lo.length;o++)xe(Lo[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(e,n,$,o,a,null)}return;default:if(ks(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&Qf(e,n,ht,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ge(e,n,A,o,a,null))}function SS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,A=null,B=null,$=null,ht=null;for(rt in a){var gt=a[rt];if(a.hasOwnProperty(rt)&&gt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":B=gt;default:o.hasOwnProperty(rt)||Ge(e,n,rt,null,o,gt)}}for(var it in o){var rt=o[it];if(gt=a[it],o.hasOwnProperty(it)&&(rt!=null||gt!=null))switch(it){case"type":h=rt;break;case"name":u=rt;break;case"checked":$=rt;break;case"defaultChecked":ht=rt;break;case"value":x=rt;break;case"defaultValue":A=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==gt&&Ge(e,n,it,rt,o,gt)}}In(e,x,A,B,$,ht,h,u);return;case"select":rt=x=A=it=null;for(h in a)if(B=a[h],a.hasOwnProperty(h)&&B!=null)switch(h){case"value":break;case"multiple":rt=B;default:o.hasOwnProperty(h)||Ge(e,n,h,null,o,B)}for(u in o)if(h=o[u],B=a[u],o.hasOwnProperty(u)&&(h!=null||B!=null))switch(u){case"value":it=h;break;case"defaultValue":A=h;break;case"multiple":x=h;default:h!==B&&Ge(e,n,u,h,o,B)}n=A,a=x,o=rt,it!=null?ti(e,!!a,it,!1):!!o!=!!a&&(n!=null?ti(e,!!a,n,!0):ti(e,!!a,a?[]:"",!1));return;case"textarea":rt=it=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ge(e,n,A,null,o,u)}for(x in o)if(u=o[x],h=a[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":it=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Ge(e,n,x,u,o,h)}Oe(e,it,rt);return;case"option":for(var Gt in a)it=a[Gt],a.hasOwnProperty(Gt)&&it!=null&&!o.hasOwnProperty(Gt)&&(Gt==="selected"?e.selected=!1:Ge(e,n,Gt,null,o,it));for(B in o)it=o[B],rt=a[B],o.hasOwnProperty(B)&&it!==rt&&(it!=null||rt!=null)&&(B==="selected"?e.selected=it&&typeof it!="function"&&typeof it!="symbol":Ge(e,n,B,it,o,rt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)it=a[Jt],a.hasOwnProperty(Jt)&&it!=null&&!o.hasOwnProperty(Jt)&&Ge(e,n,Jt,null,o,it);for($ in o)if(it=o[$],rt=a[$],o.hasOwnProperty($)&&it!==rt&&(it!=null||rt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Ge(e,n,$,it,o,rt)}return;default:if(ks(n)){for(var Ve in a)it=a[Ve],a.hasOwnProperty(Ve)&&it!==void 0&&!o.hasOwnProperty(Ve)&&Qf(e,n,Ve,void 0,o,it);for(ht in o)it=o[ht],rt=a[ht],!o.hasOwnProperty(ht)||it===rt||it===void 0&&rt===void 0||Qf(e,n,ht,it,o,rt);return}}for(var Z in a)it=a[Z],a.hasOwnProperty(Z)&&it!=null&&!o.hasOwnProperty(Z)&&Ge(e,n,Z,null,o,it);for(gt in o)it=o[gt],rt=a[gt],!o.hasOwnProperty(gt)||it===rt||it==null&&rt==null||Ge(e,n,gt,it,o,rt)}function c0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,x=u.initiatorType,A=u.duration;if(h&&A&&c0(x)){for(x=0,A=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],$=B.startTime;if($>A)break;var ht=B.transferSize,gt=B.initiatorType;ht&&c0(gt)&&(B=B.responseEnd,x+=ht*(B<A?1:(A-$)/(B-$)))}if(--o,n+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jf=null,$f=null;function rc(e){return e.nodeType===9?e:e.ownerDocument}function u0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function th(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var eh=null;function MS(){var e=window.event;return e&&e.type==="popstate"?e===eh?!1:(eh=e,!0):(eh=null,!1)}var h0=typeof setTimeout=="function"?setTimeout:void 0,ES=typeof clearTimeout=="function"?clearTimeout:void 0,d0=typeof Promise=="function"?Promise:void 0,bS=typeof queueMicrotask=="function"?queueMicrotask:typeof d0<"u"?function(e){return d0.resolve(null).then(e).catch(TS)}:h0;function TS(e){setTimeout(function(){throw e})}function qa(e){return e==="head"}function p0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),yr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Oo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Oo(a);for(var h=a.firstChild;h;){var x=h.nextSibling,A=h.nodeName;h[us]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&Oo(e.ownerDocument.body);a=u}while(a);yr(n)}function m0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function nh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nh(a),Jr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function AS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[us])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function RS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function g0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function ih(e){return e.data==="$?"||e.data==="$~"}function ah(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function CS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var sh=null;function _0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return _i(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function v0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function x0(e,n,a){switch(n=rc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Oo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Jr(e)}var vi=new Map,S0=new Set;function oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=z.d;z.d={f:wS,r:DS,D:US,C:LS,L:NS,m:OS,X:FS,S:PS,M:IS};function wS(){var e=pa.f(),n=Jl();return e||n}function DS(e){var n=wa(e);n!==null&&n.tag===5&&n.type==="form"?Im(n):pa.r(e)}var vr=typeof document>"u"?null:document;function y0(e,n,a){var o=vr;if(o&&typeof n=="string"&&n){var u=ae(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),S0.has(u)||(S0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",e),k(n),o.head.appendChild(n)))}}function US(e){pa.D(e),y0("dns-prefetch",e,null)}function LS(e,n){pa.C(e,n),y0("preconnect",e,n)}function NS(e,n,a){pa.L(e,n,a);var o=vr;if(o&&e&&n){var u='link[rel="preload"][as="'+ae(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ae(a.imageSizes)+'"]')):u+='[href="'+ae(e)+'"]';var h=u;switch(n){case"style":h=xr(e);break;case"script":h=Sr(e)}vi.has(h)||(e=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Po(h))||n==="script"&&o.querySelector(Fo(h))||(n=o.createElement("link"),Cn(n,"link",e),k(n),o.head.appendChild(n)))}}function OS(e,n){pa.m(e,n);var a=vr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ae(o)+'"][href="'+ae(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Sr(e)}if(!vi.has(h)&&(e=S({rel:"modulepreload",href:e},n),vi.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fo(h)))return}o=a.createElement("link"),Cn(o,"link",e),k(o),a.head.appendChild(o)}}}function PS(e,n,a){pa.S(e,n,a);var o=vr;if(o&&e){var u=R(o).hoistableStyles,h=xr(e);n=n||"default";var x=u.get(h);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(Po(h)))A.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(h))&&rh(e,a);var B=x=o.createElement("link");k(B),Cn(B,"link",e),B._p=new Promise(function($,ht){B.onload=$,B.onerror=ht}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,lc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(h,x)}}}function FS(e,n){pa.X(e,n);var a=vr;if(a&&e){var o=R(a).hoistableScripts,u=Sr(e),h=o.get(u);h||(h=a.querySelector(Fo(u)),h||(e=S({src:e,async:!0},n),(n=vi.get(u))&&oh(e,n),h=a.createElement("script"),k(h),Cn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function IS(e,n){pa.M(e,n);var a=vr;if(a&&e){var o=R(a).hoistableScripts,u=Sr(e),h=o.get(u);h||(h=a.querySelector(Fo(u)),h||(e=S({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&oh(e,n),h=a.createElement("script"),k(h),Cn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function M0(e,n,a,o){var u=(u=nt.current)?oc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xr(a.href),a=R(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xr(a.href);var h=R(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(Po(e)))&&!h._p&&(x.instance=h,x.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),h||zS(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Sr(a),a=R(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function xr(e){return'href="'+ae(e)+'"'}function Po(e){return'link[rel="stylesheet"]['+e+"]"}function E0(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function zS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),k(n),e.head.appendChild(n))}function Sr(e){return'[src="'+ae(e)+'"]'}function Fo(e){return"script[async]"+e}function b0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ae(a.href)+'"]');if(o)return n.instance=o,k(o),o;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),k(o),Cn(o,"style",u),lc(o,a.precedence,e),n.instance=o;case"stylesheet":u=xr(a.href);var h=e.querySelector(Po(u));if(h)return n.state.loading|=4,n.instance=h,k(h),h;o=E0(a),(u=vi.get(u))&&rh(o,u),h=(e.ownerDocument||e).createElement("link"),k(h);var x=h;return x._p=new Promise(function(A,B){x.onload=A,x.onerror=B}),Cn(h,"link",o),n.state.loading|=4,lc(h,a.precedence,e),n.instance=h;case"script":return h=Sr(a.src),(u=e.querySelector(Fo(h)))?(n.instance=u,k(u),u):(o=a,(u=vi.get(h))&&(o=S({},a),oh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),k(u),Cn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,lc(o,a.precedence,e));return n.instance}function lc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function rh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function oh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var cc=null;function T0(e,n,a){if(cc===null){var o=new Map,u=cc=new Map;u.set(a,o)}else u=cc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[us]||h[ln]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var A=o.get(x);A?A.push(h):o.set(x,[h])}}return o}function A0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function BS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function R0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function HS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xr(o.href),h=n.querySelector(Po(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=uc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,k(h);return}h=n.ownerDocument||n,o=E0(o),(u=vi.get(u))&&rh(o,u),h=h.createElement("link"),k(h);var x=h;x._p=new Promise(function(A,B){x.onload=A,x.onerror=B}),Cn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=uc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var lh=0;function GS(e,n){return e.stylesheets&&e.count===0&&hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&lh===0&&(lh=62500*yS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>lh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fc=null;function hc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fc=new Map,n.forEach(VS,e),fc=null,uc.call(e))}function VS(e,n){if(!(n.state.loading&4)){var a=fc.get(e);if(a)var o=a.get(null);else{a=new Map,fc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,u),a.set(x,u),this.count++,o=uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Io={$$typeof:D,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function XS(e,n,a,o,u,h,x,A,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function C0(e,n,a,o,u,h,x,A,B,$,ht,gt){return e=new XS(e,n,a,x,B,$,ht,gt,A),n=1,h===!0&&(n|=24),h=ni(3,null,null,n),e.current=h,h.stateNode=e,n=Hu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},ku(h),e}function w0(e){return e?(e=Qs,e):Qs}function D0(e,n,a,o,u,h){u=w0(u),o.context===null?o.context=u:o.pendingContext=u,o=Fa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ia(e,o,n),a!==null&&(Zn(a,e,n),mo(a,e,n))}function U0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ch(e,n){U0(e,n),(e=e.alternate)&&U0(e,n)}function L0(e){if(e.tag===13||e.tag===31){var n=ms(e,67108864);n!==null&&Zn(n,e,67108864),ch(e,67108864)}}function N0(e){if(e.tag===13||e.tag===31){var n=oi();n=Gs(n);var a=ms(e,n);a!==null&&Zn(a,e,n),ch(e,n)}}var dc=!0;function kS(e,n,a,o){var u=O.T;O.T=null;var h=z.p;try{z.p=2,uh(e,n,a,o)}finally{z.p=h,O.T=u}}function YS(e,n,a,o){var u=O.T;O.T=null;var h=z.p;try{z.p=8,uh(e,n,a,o)}finally{z.p=h,O.T=u}}function uh(e,n,a,o){if(dc){var u=fh(o);if(u===null)Kf(e,n,o,pc,a),P0(e,o);else if(qS(u,e,n,a,o))o.stopPropagation();else if(P0(e,o),n&4&&-1<WS.indexOf(e)){for(;u!==null;){var h=wa(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=Mt(h.pendingLanes);if(x!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var B=1<<31-Nt(x);A.entanglements[1]|=B,x&=~B}Hi(h),(Le&6)===0&&(Kl=b()+500,Uo(0))}}break;case 31:case 13:A=ms(h,2),A!==null&&Zn(A,h,2),Jl(),ch(h,2)}if(h=fh(o),h===null&&Kf(e,n,o,pc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Kf(e,n,o,null,a)}}function fh(e){return e=hu(e),hh(e)}var pc=null;function hh(e){if(pc=null,e=Ca(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return pc=e,null}function O0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case pt:return 2;case St:return 8;case ut:case kt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var dh=!1,ja=null,Za=null,Ka=null,zo=new Map,Bo=new Map,Qa=[],WS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function P0(e,n){switch(e){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function Ho(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=wa(n),n!==null&&L0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function qS(e,n,a,o,u){switch(n){case"focusin":return ja=Ho(ja,e,n,a,o,u),!0;case"dragenter":return Za=Ho(Za,e,n,a,o,u),!0;case"mouseover":return Ka=Ho(Ka,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return zo.set(h,Ho(zo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Bo.set(h,Ho(Bo.get(h)||null,e,n,a,o,u)),!0}return!1}function F0(e){var n=Ca(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Xs(e.priority,function(){N0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Xs(e.priority,function(){N0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=fh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);fu=o,a.target.dispatchEvent(o),fu=null}else return n=wa(a),n!==null&&L0(n),e.blockedOn=a,!1;n.shift()}return!0}function I0(e,n,a){mc(e)&&a.delete(n)}function jS(){dh=!1,ja!==null&&mc(ja)&&(ja=null),Za!==null&&mc(Za)&&(Za=null),Ka!==null&&mc(Ka)&&(Ka=null),zo.forEach(I0),Bo.forEach(I0)}function gc(e,n){e.blockedOn===n&&(e.blockedOn=null,dh||(dh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,jS)))}var _c=null;function z0(e){_c!==e&&(_c=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){_c===e&&(_c=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(hh(o||a)===null)continue;break}var h=wa(a);h!==null&&(e.splice(n,3),n-=3,ff(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function yr(e){function n(B){return gc(B,e)}ja!==null&&gc(ja,e),Za!==null&&gc(Za,e),Ka!==null&&gc(Ka,e),zo.forEach(n),Bo.forEach(n);for(var a=0;a<Qa.length;a++){var o=Qa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Qa.length&&(a=Qa[0],a.blockedOn===null);)F0(a),a.blockedOn===null&&Qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],x=u[_n]||null;if(typeof h=="function")x||z0(a);else if(x){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[_n]||null)A=x.formAction;else if(hh(u)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),z0(a)}}}function B0(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ph(e){this._internalRoot=e}vc.prototype.render=ph.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=oi();D0(a,o,e,n,null,null)},vc.prototype.unmount=ph.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;D0(e.current,2,null,e,null,null),Jl(),n[Ki]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Fi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Qa.length&&n!==0&&n<Qa[a].priority;a++);Qa.splice(a,0,e),a===0&&F0(e)}};var H0=t.version;if(H0!=="19.2.4")throw Error(s(527,H0,"19.2.4"));z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var ZS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{Et=xc.inject(ZS),yt=xc}catch{}}return Vo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=qm,h=jm,x=Zm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=C0(e,1,!1,null,null,a,o,null,u,h,x,B0),e[Ki]=n.current,Zf(e),new ph(n)},Vo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=qm,x=jm,A=Zm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=C0(e,1,!0,n,a??null,o,u,B,h,x,A,B0),n.context=w0(null),a=n.current,o=oi(),o=Gs(o),u=Fa(o),u.callback=null,Ia(a,u,o),a=o,n.current.lanes=a,Pn(n,a),Hi(n),e[Ki]=n.current,Zf(e),new vc(n)},Vo.version="19.2.4",Vo}var K0;function ry(){if(K0)return _h.exports;K0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),_h.exports=sy(),_h.exports}var oy=ry();const ly=av(oy);const Wd="183",Br={ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cy=0,Q0=1,uy=2,jc=1,fy=2,Ko=3,ls=0,Qn=1,Sa=2,Ma=0,Hr=1,J0=2,$0=3,t_=4,hy=5,Os=100,dy=101,py=102,my=103,gy=104,_y=200,vy=201,xy=202,Sy=203,td=204,ed=205,yy=206,My=207,Ey=208,by=209,Ty=210,Ay=211,Ry=212,Cy=213,wy=214,nd=0,id=1,ad=2,Vr=3,sd=4,rd=5,od=6,ld=7,sv=0,Dy=1,Uy=2,Yi=0,rv=1,ov=2,lv=3,cv=4,uv=5,fv=6,hv=7,dv=300,zs=301,Xr=302,yh=303,Mh=304,ru=306,cd=1e3,ya=1001,ud=1002,wn=1003,Ly=1004,Sc=1005,On=1006,Eh=1007,Fs=1008,yi=1009,pv=1010,mv=1011,tl=1012,qd=1013,ji=1014,ki=1015,ba=1016,jd=1017,Zd=1018,el=1020,gv=35902,_v=35899,vv=1021,xv=1022,Ni=1023,Ta=1026,Is=1027,Sv=1028,Kd=1029,kr=1030,Qd=1031,Jd=1033,Zc=33776,Kc=33777,Qc=33778,Jc=33779,fd=35840,hd=35841,dd=35842,pd=35843,md=36196,gd=37492,_d=37496,vd=37488,xd=37489,Sd=37490,yd=37491,Md=37808,Ed=37809,bd=37810,Td=37811,Ad=37812,Rd=37813,Cd=37814,wd=37815,Dd=37816,Ud=37817,Ld=37818,Nd=37819,Od=37820,Pd=37821,Fd=36492,Id=36494,zd=36495,Bd=36283,Hd=36284,Gd=36285,Vd=36286,Ny=3200,yv=0,Oy=1,rs="",Si="srgb",Yr="srgb-linear",tu="linear",Be="srgb",Mr=7680,e_=519,Py=512,Fy=513,Iy=514,$d=515,zy=516,By=517,tp=518,Hy=519,n_=35044,i_="300 es",Oi=2e3,nl=2001;function Gy(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function eu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Vy(){const r=eu("canvas");return r.style.display="block",r}const a_={};function s_(...r){const t="THREE."+r.shift();console.log(t,...r)}function Mv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ee(...r){r=Mv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function De(...r){r=Mv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function nu(...r){const t=r.join(" ");t in a_||(a_[t]=!0,ee(...r))}function Xy(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const ky={[nd]:id,[ad]:od,[sd]:ld,[Vr]:rd,[id]:nd,[od]:ad,[ld]:sd,[rd]:Vr};class Bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let r_=1234567;const Jo=Math.PI/180,il=180/Math.PI;function qr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function me(r,t,i){return Math.max(t,Math.min(i,r))}function ep(r,t){return(r%t+t)%t}function Yy(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function Wy(r,t,i){return r!==t?(i-r)/(t-r):0}function $o(r,t,i){return(1-i)*r+i*t}function qy(r,t,i,s){return $o(r,t,1-Math.exp(-i*s))}function jy(r,t=1){return t-Math.abs(ep(r,t*2)-t)}function Zy(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function Ky(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function Qy(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Jy(r,t){return r+Math.random()*(t-r)}function $y(r){return r*(.5-Math.random())}function tM(r){r!==void 0&&(r_=r);let t=r_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function eM(r){return r*Jo}function nM(r){return r*il}function iM(r){return(r&r-1)===0&&r!==0}function aM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function sM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function rM(r,t,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((t+s)/2),g=f((t+s)/2),S=c((t-s)/2),_=f((t-s)/2),M=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(d*g,m*S,m*_,d*p);break;case"YZY":r.set(m*_,d*g,m*S,d*p);break;case"ZXZ":r.set(m*S,m*_,d*g,d*p);break;case"XZX":r.set(d*g,m*E,m*M,d*p);break;case"YXY":r.set(m*M,d*g,m*E,d*p);break;case"ZYZ":r.set(m*E,m*M,d*g,d*p);break;default:ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ir(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ev={DEG2RAD:Jo,RAD2DEG:il,generateUUID:qr,clamp:me,euclideanModulo:ep,mapLinear:Yy,inverseLerp:Wy,lerp:$o,damp:qy,pingpong:jy,smoothstep:Zy,smootherstep:Ky,randInt:Qy,randFloat:Jy,randFloatSpread:$y,seededRandom:tM,degToRad:eM,radToDeg:nM,isPowerOfTwo:iM,ceilPowerOfTwo:aM,floorPowerOfTwo:sM,setQuaternionFromProperEuler:rM,normalize:Hn,denormalize:Ir};class pe{constructor(t=0,i=0){pe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],g=s[l+2],S=s[l+3],_=c[f+0],M=c[f+1],E=c[f+2],C=c[f+3];if(S!==C||m!==_||p!==M||g!==E){let y=m*_+p*M+g*E+S*C;y<0&&(_=-_,M=-M,E=-E,C=-C,y=-y);let v=1-d;if(y<.9995){const w=Math.acos(y),D=Math.sin(w);v=Math.sin(v*w)/D,d=Math.sin(d*w)/D,m=m*v+_*d,p=p*v+M*d,g=g*v+E*d,S=S*v+C*d}else{m=m*v+_*d,p=p*v+M*d,g=g*v+E*d,S=S*v+C*d;const w=1/Math.sqrt(m*m+p*p+g*g+S*S);m*=w,p*=w,g*=w,S*=w}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=S}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],S=c[f],_=c[f+1],M=c[f+2],E=c[f+3];return t[i]=d*E+g*S+m*M-p*_,t[i+1]=m*E+g*_+p*S-d*M,t[i+2]=p*E+g*M+d*_-m*S,t[i+3]=g*E-d*S-m*_-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),S=d(c/2),_=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=_*g*S+p*M*E,this._y=p*M*S-_*g*E,this._z=p*g*E+_*M*S,this._w=p*g*S-_*M*E;break;case"YXZ":this._x=_*g*S+p*M*E,this._y=p*M*S-_*g*E,this._z=p*g*E-_*M*S,this._w=p*g*S+_*M*E;break;case"ZXY":this._x=_*g*S-p*M*E,this._y=p*M*S+_*g*E,this._z=p*g*E+_*M*S,this._w=p*g*S-_*M*E;break;case"ZYX":this._x=_*g*S-p*M*E,this._y=p*M*S+_*g*E,this._z=p*g*E-_*M*S,this._w=p*g*S+_*M*E;break;case"YZX":this._x=_*g*S+p*M*E,this._y=p*M*S+_*g*E,this._z=p*g*E-_*M*S,this._w=p*g*S-_*M*E;break;case"XZY":this._x=_*g*S-p*M*E,this._y=p*M*S-_*g*E,this._z=p*g*E+_*M*S,this._w=p*g*S+_*M*E;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],S=i[10],_=s+d+S;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>d&&s>S){const M=2*Math.sqrt(1+s-d-S);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(d>S){const M=2*Math.sqrt(1+d-s-S);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+S-s-d);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-s*p,this._z=c*g+f*p+s*m-l*d,this._w=f*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,i=0,s=0){W.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(o_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(o_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),g=2*(d*i-c*l),S=2*(c*s-f*i);return this.x=i+m*p+f*S-d*g,this.y=s+m*g+d*p-c*S,this.z=l+m*S+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return bh.copy(this).projectOnVector(t),this.sub(bh)}reflect(t){return this.sub(bh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bh=new W,o_=new cs;class oe{constructor(t,i,s,l,c,f,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],g=s[4],S=s[7],_=s[2],M=s[5],E=s[8],C=l[0],y=l[3],v=l[6],w=l[1],D=l[4],U=l[7],G=l[2],I=l[5],F=l[8];return c[0]=f*C+d*w+m*G,c[3]=f*y+d*D+m*I,c[6]=f*v+d*U+m*F,c[1]=p*C+g*w+S*G,c[4]=p*y+g*D+S*I,c[7]=p*v+g*U+S*F,c[2]=_*C+M*w+E*G,c[5]=_*y+M*D+E*I,c[8]=_*v+M*U+E*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*d*p-s*c*g+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],S=g*f-d*p,_=d*m-g*c,M=p*c-f*m,E=i*S+s*_+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=S*C,t[1]=(l*p-g*s)*C,t[2]=(d*s-l*f)*C,t[3]=_*C,t[4]=(g*i-l*m)*C,t[5]=(l*c-d*i)*C,t[6]=M*C,t[7]=(s*m-p*i)*C,t[8]=(f*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Th.makeScale(t,i)),this}rotate(t){return this.premultiply(Th.makeRotation(-t)),this}translate(t,i){return this.premultiply(Th.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Th=new oe,l_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),c_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oM(){const r={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Be&&(l.r=Ea(l.r),l.g=Ea(l.g),l.b=Ea(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Be&&(l.r=Gr(l.r),l.g=Gr(l.g),l.b=Gr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rs?tu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return nu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return nu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Yr]:{primaries:t,whitePoint:s,transfer:tu,toXYZ:l_,fromXYZ:c_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:s,transfer:Be,toXYZ:l_,fromXYZ:c_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const Ae=oM();function Ea(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Er;class lM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Er===void 0&&(Er=eu("canvas")),Er.width=t.width,Er.height=t.height;const l=Er.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Er}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=eu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ea(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ea(i[s]/255)*255):i[s]=Ea(i[s]);return{data:i,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cM=0;class np{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=qr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Ah(l[f].image)):c.push(Ah(l[f]))}else c=Ah(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Ah(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?lM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}let uM=0;const Rh=new W;class Vn extends Bs{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=ya,l=ya,c=On,f=Fs,d=Ni,m=yi,p=Vn.DEFAULT_ANISOTROPY,g=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=qr(),this.name="",this.source=new np(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rh).x}get height(){return this.source.getSize(Rh).y}get depth(){return this.source.getSize(Rh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ee(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cd:t.x=t.x-Math.floor(t.x);break;case ya:t.x=t.x<0?0:1;break;case ud:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cd:t.y=t.y-Math.floor(t.y);break;case ya:t.y=t.y<0?0:1;break;case ud:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=dv;Vn.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,i=0,s=0,l=1){on.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],S=m[8],_=m[1],M=m[5],E=m[9],C=m[2],y=m[6],v=m[10];if(Math.abs(g-_)<.01&&Math.abs(S-C)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(S+C)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,U=(M+1)/2,G=(v+1)/2,I=(g+_)/4,F=(S+C)/4,T=(E+y)/4;return D>U&&D>G?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=I/s,c=F/s):U>G?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=I/l,c=T/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=F/c,l=T/c),this.set(s,l,c,i),this}let w=Math.sqrt((y-E)*(y-E)+(S-C)*(S-C)+(_-g)*(_-g));return Math.abs(w)<.001&&(w=1),this.x=(y-E)/w,this.y=(S-C)/w,this.z=(_-g)/w,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fM extends Bs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,t,i),this.scissorTest=!1,this.viewport=new on(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Vn(l),f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new np(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends fM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class bv extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hM extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(t,i,s,l,c,f,d,m,p,g,S,_,M,E,C,y){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,g,S,_,M,E,C,y)}set(t,i,s,l,c,f,d,m,p,g,S,_,M,E,C,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=S,v[14]=_,v[3]=M,v[7]=E,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/br.setFromMatrixColumn(t,0).length(),c=1/br.setFromMatrixColumn(t,1).length(),f=1/br.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),S=Math.sin(c);if(t.order==="XYZ"){const _=f*g,M=f*S,E=d*g,C=d*S;i[0]=m*g,i[4]=-m*S,i[8]=p,i[1]=M+E*p,i[5]=_-C*p,i[9]=-d*m,i[2]=C-_*p,i[6]=E+M*p,i[10]=f*m}else if(t.order==="YXZ"){const _=m*g,M=m*S,E=p*g,C=p*S;i[0]=_+C*d,i[4]=E*d-M,i[8]=f*p,i[1]=f*S,i[5]=f*g,i[9]=-d,i[2]=M*d-E,i[6]=C+_*d,i[10]=f*m}else if(t.order==="ZXY"){const _=m*g,M=m*S,E=p*g,C=p*S;i[0]=_-C*d,i[4]=-f*S,i[8]=E+M*d,i[1]=M+E*d,i[5]=f*g,i[9]=C-_*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const _=f*g,M=f*S,E=d*g,C=d*S;i[0]=m*g,i[4]=E*p-M,i[8]=_*p+C,i[1]=m*S,i[5]=C*p+_,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const _=f*m,M=f*p,E=d*m,C=d*p;i[0]=m*g,i[4]=C-_*S,i[8]=E*S+M,i[1]=S,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*S+E,i[10]=_-C*S}else if(t.order==="XZY"){const _=f*m,M=f*p,E=d*m,C=d*p;i[0]=m*g,i[4]=-S,i[8]=p*g,i[1]=_*S+C,i[5]=f*g,i[9]=M*S-E,i[2]=E*S-M,i[6]=d*g,i[10]=C*S+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dM,t,pM)}lookAt(t,i,s){const l=this.elements;return li.subVectors(t,i),li.lengthSq()===0&&(li.z=1),li.normalize(),$a.crossVectors(s,li),$a.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),$a.crossVectors(s,li)),$a.normalize(),yc.crossVectors(li,$a),l[0]=$a.x,l[4]=yc.x,l[8]=li.x,l[1]=$a.y,l[5]=yc.y,l[9]=li.y,l[2]=$a.z,l[6]=yc.z,l[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],g=s[1],S=s[5],_=s[9],M=s[13],E=s[2],C=s[6],y=s[10],v=s[14],w=s[3],D=s[7],U=s[11],G=s[15],I=l[0],F=l[4],T=l[8],L=l[12],ft=l[1],H=l[5],J=l[9],at=l[13],lt=l[2],tt=l[6],O=l[10],z=l[14],ot=l[3],dt=l[7],bt=l[11],P=l[15];return c[0]=f*I+d*ft+m*lt+p*ot,c[4]=f*F+d*H+m*tt+p*dt,c[8]=f*T+d*J+m*O+p*bt,c[12]=f*L+d*at+m*z+p*P,c[1]=g*I+S*ft+_*lt+M*ot,c[5]=g*F+S*H+_*tt+M*dt,c[9]=g*T+S*J+_*O+M*bt,c[13]=g*L+S*at+_*z+M*P,c[2]=E*I+C*ft+y*lt+v*ot,c[6]=E*F+C*H+y*tt+v*dt,c[10]=E*T+C*J+y*O+v*bt,c[14]=E*L+C*at+y*z+v*P,c[3]=w*I+D*ft+U*lt+G*ot,c[7]=w*F+D*H+U*tt+G*dt,c[11]=w*T+D*J+U*O+G*bt,c[15]=w*L+D*at+U*z+G*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],S=t[6],_=t[10],M=t[14],E=t[3],C=t[7],y=t[11],v=t[15],w=m*M-p*_,D=d*M-p*S,U=d*_-m*S,G=f*M-p*g,I=f*_-m*g,F=f*S-d*g;return i*(C*w-y*D+v*U)-s*(E*w-y*G+v*I)+l*(E*D-C*G+v*F)-c*(E*U-C*I+y*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],S=t[9],_=t[10],M=t[11],E=t[12],C=t[13],y=t[14],v=t[15],w=i*d-s*f,D=i*m-l*f,U=i*p-c*f,G=s*m-l*d,I=s*p-c*d,F=l*p-c*m,T=g*C-S*E,L=g*y-_*E,ft=g*v-M*E,H=S*y-_*C,J=S*v-M*C,at=_*v-M*y,lt=w*at-D*J+U*H+G*ft-I*L+F*T;if(lt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const tt=1/lt;return t[0]=(d*at-m*J+p*H)*tt,t[1]=(l*J-s*at-c*H)*tt,t[2]=(C*F-y*I+v*G)*tt,t[3]=(_*I-S*F-M*G)*tt,t[4]=(m*ft-f*at-p*L)*tt,t[5]=(i*at-l*ft+c*L)*tt,t[6]=(y*U-E*F-v*D)*tt,t[7]=(g*F-_*U+M*D)*tt,t[8]=(f*J-d*ft+p*T)*tt,t[9]=(s*ft-i*J-c*T)*tt,t[10]=(E*I-C*U+v*w)*tt,t[11]=(S*U-g*I-M*w)*tt,t[12]=(d*L-f*H-m*T)*tt,t[13]=(i*H-s*L+l*T)*tt,t[14]=(C*D-E*G-y*w)*tt,t[15]=(g*G-S*D+_*w)*tt,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,g=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,S=d+d,_=c*p,M=c*g,E=c*S,C=f*g,y=f*S,v=d*S,w=m*p,D=m*g,U=m*S,G=s.x,I=s.y,F=s.z;return l[0]=(1-(C+v))*G,l[1]=(M+U)*G,l[2]=(E-D)*G,l[3]=0,l[4]=(M-U)*I,l[5]=(1-(_+v))*I,l[6]=(y+w)*I,l[7]=0,l[8]=(E+D)*F,l[9]=(y-w)*F,l[10]=(1-(_+C))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=br.set(l[0],l[1],l[2]).length();const d=br.set(l[4],l[5],l[6]).length(),m=br.set(l[8],l[9],l[10]).length();c<0&&(f=-f),wi.copy(this);const p=1/f,g=1/d,S=1/m;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=g,wi.elements[5]*=g,wi.elements[6]*=g,wi.elements[8]*=S,wi.elements[9]*=S,wi.elements[10]*=S,i.setFromRotationMatrix(wi),s.x=f,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,f,d=Oi,m=!1){const p=this.elements,g=2*c/(i-t),S=2*c/(s-l),_=(i+t)/(i-t),M=(s+l)/(s-l);let E,C;if(m)E=c/(f-c),C=f*c/(f-c);else if(d===Oi)E=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(d===nl)E=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=S,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=Oi,m=!1){const p=this.elements,g=2/(i-t),S=2/(s-l),_=-(i+t)/(i-t),M=-(s+l)/(s-l);let E,C;if(m)E=1/(f-c),C=f/(f-c);else if(d===Oi)E=-2/(f-c),C=-(f+c)/(f-c);else if(d===nl)E=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=S,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const br=new W,wi=new nn,dM=new W(0,0,0),pM=new W(1,1,1),$a=new W,yc=new W,li=new W,u_=new nn,f_=new cs;class Aa{constructor(t=0,i=0,s=0,l=Aa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],S=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-me(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return u_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(u_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return f_.setFromEuler(this),this.setFromQuaternion(f_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Aa.DEFAULT_ORDER="XYZ";class Tv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mM=0;const h_=new W,Tr=new cs,ma=new nn,Mc=new W,Xo=new W,gM=new W,_M=new cs,d_=new W(1,0,0),p_=new W(0,1,0),m_=new W(0,0,1),g_={type:"added"},vM={type:"removed"},Ar={type:"childadded",child:null},Ch={type:"childremoved",child:null};class Jn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const t=new W,i=new Aa,s=new cs,l=new W(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new oe}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Tr.setFromAxisAngle(t,i),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(t,i){return Tr.setFromAxisAngle(t,i),this.quaternion.premultiply(Tr),this}rotateX(t){return this.rotateOnAxis(d_,t)}rotateY(t){return this.rotateOnAxis(p_,t)}rotateZ(t){return this.rotateOnAxis(m_,t)}translateOnAxis(t,i){return h_.copy(t).applyQuaternion(this.quaternion),this.position.add(h_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(d_,t)}translateY(t){return this.translateOnAxis(p_,t)}translateZ(t){return this.translateOnAxis(m_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Mc.copy(t):Mc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(Xo,Mc,this.up):ma.lookAt(Mc,Xo,this.up),this.quaternion.setFromRotationMatrix(ma),l&&(ma.extractRotation(l.matrixWorld),Tr.setFromRotationMatrix(ma),this.quaternion.premultiply(Tr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(g_),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(vM),Ch.child=t,this.dispatchEvent(Ch),Ch.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(g_),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,t,gM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,_M,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const S=m[p];c(t.shapes,S)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),S=f(t.shapes),_=f(t.skeletons),M=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),S.length>0&&(s.shapes=S),_.length>0&&(s.skeletons=_),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Jn.DEFAULT_UP=new W(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ec extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xM={type:"move"};class wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ec,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ec,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ec,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,s),v=this._getHandJoint(p,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],_=g.position.distanceTo(S.position),M=.02,E=.005;p.inputState.pinching&&_>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(xM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ec;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},bc={h:0,s:0,l:0};function Dh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ge{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ae.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ae.workingColorSpace){if(t=ep(t,1),i=me(i,0,1),s=me(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Dh(f,c,t+1/3),this.g=Dh(f,c,t),this.b=Dh(f,c,t-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(t,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ee("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const s=Av[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ea(t.r),this.g=Ea(t.g),this.b=Ea(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return Ae.workingToColorSpace(Ln.copy(this),t),Math.round(me(Ln.r*255,0,255))*65536+Math.round(me(Ln.g*255,0,255))*256+Math.round(me(Ln.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,c=Ln.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const S=f-d;switch(p=g<=.5?S/(f+d):S/(2-f-d),f){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ae.workingColorSpace){return Ae.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=Si){Ae.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,l=Ln.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+i,ts.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ts),t.getHSL(bc);const s=$o(ts.h,bc.h,i),l=$o(ts.s,bc.s,i),c=$o(ts.l,bc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new ge;ge.NAMES=Av;class SM extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Aa,this.environmentIntensity=1,this.environmentRotation=new Aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Di=new W,ga=new W,Uh=new W,_a=new W,Rr=new W,Cr=new W,__=new W,Lh=new W,Nh=new W,Oh=new W,Ph=new on,Fh=new on,Ih=new on;class Li{constructor(t=new W,i=new W,s=new W){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Di.subVectors(t,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Di.subVectors(l,i),ga.subVectors(s,i),Uh.subVectors(t,i);const f=Di.dot(Di),d=Di.dot(ga),m=Di.dot(Uh),p=ga.dot(ga),g=ga.dot(Uh),S=f*p-d*d;if(S===0)return c.set(0,0,0),null;const _=1/S,M=(p*m-d*g)*_,E=(f*g-d*m)*_;return c.set(1-M-E,E,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(f,_a.y),m.addScaledVector(d,_a.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Ph.setScalar(0),Fh.setScalar(0),Ih.setScalar(0),Ph.fromBufferAttribute(t,i),Fh.fromBufferAttribute(t,s),Ih.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Ph,c.x),f.addScaledVector(Fh,c.y),f.addScaledVector(Ih,c.z),f}static isFrontFacing(t,i,s,l){return Di.subVectors(s,i),ga.subVectors(t,i),Di.cross(ga).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Di.cross(ga).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Li.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Li.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;Rr.subVectors(l,s),Cr.subVectors(c,s),Lh.subVectors(t,s);const m=Rr.dot(Lh),p=Cr.dot(Lh);if(m<=0&&p<=0)return i.copy(s);Nh.subVectors(t,l);const g=Rr.dot(Nh),S=Cr.dot(Nh);if(g>=0&&S<=g)return i.copy(l);const _=m*S-g*p;if(_<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Rr,f);Oh.subVectors(t,c);const M=Rr.dot(Oh),E=Cr.dot(Oh);if(E>=0&&M<=E)return i.copy(c);const C=M*p-m*E;if(C<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(Cr,d);const y=g*E-M*S;if(y<=0&&S-g>=0&&M-E>=0)return __.subVectors(c,l),d=(S-g)/(S-g+(M-E)),i.copy(l).addScaledVector(__,d);const v=1/(y+C+_);return f=C*v,d=_*v,i.copy(s).addScaledVector(Rr,f).addScaledVector(Cr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class sl{constructor(t=new W(1/0,1/0,1/0),i=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Ui):Ui.fromBufferAttribute(c,f),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Tc.copy(s.boundingBox)),Tc.applyMatrix4(t.matrixWorld),this.union(Tc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ko),Ac.subVectors(this.max,ko),wr.subVectors(t.a,ko),Dr.subVectors(t.b,ko),Ur.subVectors(t.c,ko),es.subVectors(Dr,wr),ns.subVectors(Ur,Dr),Cs.subVectors(wr,Ur);let i=[0,-es.z,es.y,0,-ns.z,ns.y,0,-Cs.z,Cs.y,es.z,0,-es.x,ns.z,0,-ns.x,Cs.z,0,-Cs.x,-es.y,es.x,0,-ns.y,ns.x,0,-Cs.y,Cs.x,0];return!zh(i,wr,Dr,Ur,Ac)||(i=[1,0,0,0,1,0,0,0,1],!zh(i,wr,Dr,Ur,Ac))?!1:(Rc.crossVectors(es,ns),i=[Rc.x,Rc.y,Rc.z],zh(i,wr,Dr,Ur,Ac))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(va),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const va=[new W,new W,new W,new W,new W,new W,new W,new W],Ui=new W,Tc=new sl,wr=new W,Dr=new W,Ur=new W,es=new W,ns=new W,Cs=new W,ko=new W,Ac=new W,Rc=new W,ws=new W;function zh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){ws.fromArray(r,c);const d=l.x*Math.abs(ws.x)+l.y*Math.abs(ws.y)+l.z*Math.abs(ws.z),m=t.dot(ws),p=i.dot(ws),g=s.dot(ws);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const mn=new W,Cc=new pe;let yM=0;class qi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=n_,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Cc.fromBufferAttribute(this,i),Cc.applyMatrix3(t),this.setXY(i,Cc.x,Cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ir(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Hn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ir(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ir(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ir(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ir(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==n_&&(t.usage=this.usage),t}}class Rv extends qi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Cv extends qi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class gn extends qi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const MM=new sl,Yo=new W,Bh=new W;class ou{constructor(t=new W,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):MM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(Bh)),this.expandByPoint(Yo.copy(t.center).sub(Bh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let EM=0;const xi=new nn,Hh=new Jn,Lr=new W,ci=new sl,Wo=new sl,bn=new W;class Xn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gy(t)?Cv:Rv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new oe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,s){return xi.makeTranslation(t,i,s),this.applyMatrix4(xi),this}scale(t,i,s){return xi.makeScale(t,i,s),this.applyMatrix4(xi),this}lookAt(t){return Hh.lookAt(t),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new gn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ou);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Wo.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(ci.min,Wo.min),ci.expandByPoint(bn),bn.addVectors(ci.max,Wo.max),ci.expandByPoint(bn)):(ci.expandByPoint(Wo.min),ci.expandByPoint(Wo.max))}ci.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)bn.fromBufferAttribute(d,p),m&&(Lr.fromBufferAttribute(t,p),bn.add(Lr)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let T=0;T<s.count;T++)d[T]=new W,m[T]=new W;const p=new W,g=new W,S=new W,_=new pe,M=new pe,E=new pe,C=new W,y=new W;function v(T,L,ft){p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,L),S.fromBufferAttribute(s,ft),_.fromBufferAttribute(c,T),M.fromBufferAttribute(c,L),E.fromBufferAttribute(c,ft),g.sub(p),S.sub(p),M.sub(_),E.sub(_);const H=1/(M.x*E.y-E.x*M.y);isFinite(H)&&(C.copy(g).multiplyScalar(E.y).addScaledVector(S,-M.y).multiplyScalar(H),y.copy(S).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(H),d[T].add(C),d[L].add(C),d[ft].add(C),m[T].add(y),m[L].add(y),m[ft].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let T=0,L=w.length;T<L;++T){const ft=w[T],H=ft.start,J=ft.count;for(let at=H,lt=H+J;at<lt;at+=3)v(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const D=new W,U=new W,G=new W,I=new W;function F(T){G.fromBufferAttribute(l,T),I.copy(G);const L=d[T];D.copy(L),D.sub(G.multiplyScalar(G.dot(L))).normalize(),U.crossVectors(I,L);const H=U.dot(m[T])<0?-1:1;f.setXYZW(T,D.x,D.y,D.z,H)}for(let T=0,L=w.length;T<L;++T){const ft=w[T],H=ft.start,J=ft.count;for(let at=H,lt=H+J;at<lt;at+=3)F(t.getX(at+0)),F(t.getX(at+1)),F(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new qi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,M=s.count;_<M;_++)s.setXYZ(_,0,0,0);const l=new W,c=new W,f=new W,d=new W,m=new W,p=new W,g=new W,S=new W;if(t)for(let _=0,M=t.count;_<M;_+=3){const E=t.getX(_+0),C=t.getX(_+1),y=t.getX(_+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,y),g.subVectors(f,c),S.subVectors(l,c),g.cross(S),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,c),S.subVectors(l,c),g.cross(S),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,S=d.normalized,_=new p.constructor(m.length*g);let M=0,E=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*g;for(let v=0;v<g;v++)_[E++]=p[M++]}return new qi(_,g,S)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Xn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,S=p.length;g<S;g++){const _=p[g],M=t(_,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let S=0,_=p.length;S<_;S++){const M=p[S];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],S=c[p];for(let _=0,M=S.length;_<M;_++)g.push(S[_].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const S=f[p];this.addGroup(S.start,S.count,S.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let bM=0;class jr extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=Hr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=td,this.blendDst=ed,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ee(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(s.blending=this.blending),this.side!==ls&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==td&&(s.blendSrc=this.blendSrc),this.blendDst!==ed&&(s.blendDst=this.blendDst),this.blendEquation!==Os&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==e_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const xa=new W,Gh=new W,wc=new W,is=new W,Vh=new W,Dc=new W,Xh=new W;class ip{constructor(t=new W,i=new W(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=xa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Gh.copy(t).add(i).multiplyScalar(.5),wc.copy(i).sub(t).normalize(),is.copy(this.origin).sub(Gh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(wc),d=is.dot(this.direction),m=-is.dot(wc),p=is.lengthSq(),g=Math.abs(1-f*f);let S,_,M,E;if(g>0)if(S=f*m-d,_=f*d-m,E=c*g,S>=0)if(_>=-E)if(_<=E){const C=1/g;S*=C,_*=C,M=S*(S+f*_+2*d)+_*(f*S+_+2*m)+p}else _=c,S=Math.max(0,-(f*_+d)),M=-S*S+_*(_+2*m)+p;else _=-c,S=Math.max(0,-(f*_+d)),M=-S*S+_*(_+2*m)+p;else _<=-E?(S=Math.max(0,-(-f*c+d)),_=S>0?-c:Math.min(Math.max(-c,-m),c),M=-S*S+_*(_+2*m)+p):_<=E?(S=0,_=Math.min(Math.max(-c,-m),c),M=_*(_+2*m)+p):(S=Math.max(0,-(f*c+d)),_=S>0?c:Math.min(Math.max(-c,-m),c),M=-S*S+_*(_+2*m)+p);else _=f>0?-c:c,S=Math.max(0,-(f*_+d)),M=-S*S+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Gh).addScaledVector(wc,_),M}intersectSphere(t,i){xa.subVectors(t.center,this.origin);const s=xa.dot(this.direction),l=xa.dot(xa)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,S=1/this.direction.z,_=this.origin;return p>=0?(s=(t.min.x-_.x)*p,l=(t.max.x-_.x)*p):(s=(t.max.x-_.x)*p,l=(t.min.x-_.x)*p),g>=0?(c=(t.min.y-_.y)*g,f=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,f=(t.min.y-_.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),S>=0?(d=(t.min.z-_.z)*S,m=(t.max.z-_.z)*S):(d=(t.max.z-_.z)*S,m=(t.min.z-_.z)*S),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,xa)!==null}intersectTriangle(t,i,s,l,c){Vh.subVectors(i,t),Dc.subVectors(s,t),Xh.crossVectors(Vh,Dc);let f=this.direction.dot(Xh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;is.subVectors(this.origin,t);const m=d*this.direction.dot(Dc.crossVectors(is,Dc));if(m<0)return null;const p=d*this.direction.dot(Vh.cross(is));if(p<0||m+p>f)return null;const g=-d*is.dot(Xh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ap extends jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Aa,this.combine=sv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const v_=new nn,Ds=new ip,Uc=new ou,x_=new W,Lc=new W,Nc=new W,Oc=new W,kh=new W,Pc=new W,S_=new W,Fc=new W;class Pi extends Jn{constructor(t=new Xn,i=new ap){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],S=c[m];g!==0&&(kh.fromBufferAttribute(S,t),f?Pc.addScaledVector(kh,g):Pc.addScaledVector(kh.sub(i),g))}i.add(Pc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(c),Ds.copy(t.ray).recast(t.near),!(Uc.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Uc,x_)===null||Ds.origin.distanceToSquared(x_)>(t.far-t.near)**2))&&(v_.copy(c).invert(),Ds.copy(t.ray).applyMatrix4(v_),!(s.boundingBox!==null&&Ds.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ds)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,S=c.attributes.normal,_=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,C=_.length;E<C;E++){const y=_[E],v=f[y.materialIndex],w=Math.max(y.start,M.start),D=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let U=w,G=D;U<G;U+=3){const I=d.getX(U),F=d.getX(U+1),T=d.getX(U+2);l=Ic(this,v,t,s,p,g,S,I,F,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=E,v=C;y<v;y+=3){const w=d.getX(y),D=d.getX(y+1),U=d.getX(y+2);l=Ic(this,f,t,s,p,g,S,w,D,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,C=_.length;E<C;E++){const y=_[E],v=f[y.materialIndex],w=Math.max(y.start,M.start),D=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=w,G=D;U<G;U+=3){const I=U,F=U+1,T=U+2;l=Ic(this,v,t,s,p,g,S,I,F,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=E,v=C;y<v;y+=3){const w=y,D=y+1,U=y+2;l=Ic(this,f,t,s,p,g,S,w,D,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function TM(r,t,i,s,l,c,f,d){let m;if(t.side===Qn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===ls,d),m===null)return null;Fc.copy(d),Fc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Fc);return p<i.near||p>i.far?null:{distance:p,point:Fc.clone(),object:r}}function Ic(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Lc),r.getVertexPosition(m,Nc),r.getVertexPosition(p,Oc);const g=TM(r,t,i,s,Lc,Nc,Oc,S_);if(g){const S=new W;Li.getBarycoord(S_,Lc,Nc,Oc,S),l&&(g.uv=Li.getInterpolatedAttribute(l,d,m,p,S,new pe)),c&&(g.uv1=Li.getInterpolatedAttribute(c,d,m,p,S,new pe)),f&&(g.normal=Li.getInterpolatedAttribute(f,d,m,p,S,new W),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new W,materialIndex:0};Li.getNormal(Lc,Nc,Oc,_.normal),g.face=_,g.barycoord=S}return g}class AM extends Vn{constructor(t=null,i=1,s=1,l,c,f,d,m,p=wn,g=wn,S,_){super(null,f,d,m,p,g,l,c,S,_),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yh=new W,RM=new W,CM=new oe;class ss{constructor(t=new W(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Yh.subVectors(s,i).cross(RM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Yh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||CM.getNormalMatrix(t),l=this.coplanarPoint(Yh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new ou,wM=new pe(.5,.5),zc=new W;class wv{constructor(t=new ss,i=new ss,s=new ss,l=new ss,c=new ss,f=new ss){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Oi,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],g=c[4],S=c[5],_=c[6],M=c[7],E=c[8],C=c[9],y=c[10],v=c[11],w=c[12],D=c[13],U=c[14],G=c[15];if(l[0].setComponents(p-f,M-g,v-E,G-w).normalize(),l[1].setComponents(p+f,M+g,v+E,G+w).normalize(),l[2].setComponents(p+d,M+S,v+C,G+D).normalize(),l[3].setComponents(p-d,M-S,v-C,G-D).normalize(),s)l[4].setComponents(m,_,y,U).normalize(),l[5].setComponents(p-m,M-_,v-y,G-U).normalize();else if(l[4].setComponents(p-m,M-_,v-y,G-U).normalize(),i===Oi)l[5].setComponents(p+m,M+_,v+y,G+U).normalize();else if(i===nl)l[5].setComponents(m,_,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(t){Us.center.set(0,0,0);const i=wM.distanceTo(t.center);return Us.radius=.7071067811865476+i,Us.applyMatrix4(t.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(zc.x=l.normal.x>0?t.max.x:t.min.x,zc.y=l.normal.y>0?t.max.y:t.min.y,zc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(zc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rl extends jr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const iu=new W,au=new W,y_=new nn,qo=new ip,Bc=new ou,Wh=new W,M_=new W;class Dv extends Jn{constructor(t=new Xn,i=new rl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)iu.fromBufferAttribute(i,l-1),au.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=iu.distanceTo(au);t.setAttribute("lineDistance",new gn(s,1))}else ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=c,t.ray.intersectsSphere(Bc)===!1)return;y_.copy(l).invert(),qo.copy(t.ray).applyMatrix4(y_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,_=s.attributes.position;if(g!==null){const M=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let C=M,y=E-1;C<y;C+=p){const v=g.getX(C),w=g.getX(C+1),D=Hc(this,t,qo,m,v,w,C);D&&i.push(D)}if(this.isLineLoop){const C=g.getX(E-1),y=g.getX(M),v=Hc(this,t,qo,m,C,y,E-1);v&&i.push(v)}}else{const M=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let C=M,y=E-1;C<y;C+=p){const v=Hc(this,t,qo,m,C,C+1,C);v&&i.push(v)}if(this.isLineLoop){const C=Hc(this,t,qo,m,E-1,M,E-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Hc(r,t,i,s,l,c,f){const d=r.geometry.attributes.position;if(iu.fromBufferAttribute(d,l),au.fromBufferAttribute(d,c),i.distanceSqToSegment(iu,au,Wh,M_)>s)return;Wh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Wh);if(!(p<t.near||p>t.far))return{distance:p,point:M_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const E_=new W,b_=new W;class sp extends Dv{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)E_.fromBufferAttribute(i,l),b_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+E_.distanceTo(b_);t.setAttribute("lineDistance",new gn(s,1))}else ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Uv extends Vn{constructor(t=[],i=zs,s,l,c,f,d,m,p,g){super(t,i,s,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class al extends Vn{constructor(t,i,s=ji,l,c,f,d=wn,m=wn,p,g=Ta,S=1){if(g!==Ta&&g!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:S};super(_,l,c,f,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new np(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class DM extends al{constructor(t,i=ji,s=zs,l,c,f=wn,d=wn,m,p=Ta){const g={width:t,height:t,depth:1},S=[g,g,g,g,g,g];super(t,t,i,s,l,c,f,d,m,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Lv extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Zr extends Xn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],S=[];let _=0,M=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new gn(p,3)),this.setAttribute("normal",new gn(g,3)),this.setAttribute("uv",new gn(S,2));function E(C,y,v,w,D,U,G,I,F,T,L){const ft=U/F,H=G/T,J=U/2,at=G/2,lt=I/2,tt=F+1,O=T+1;let z=0,ot=0;const dt=new W;for(let bt=0;bt<O;bt++){const P=bt*H-at;for(let j=0;j<tt;j++){const _t=j*ft-J;dt[C]=_t*w,dt[y]=P*D,dt[v]=lt,p.push(dt.x,dt.y,dt.z),dt[C]=0,dt[y]=0,dt[v]=I>0?1:-1,g.push(dt.x,dt.y,dt.z),S.push(j/F),S.push(1-bt/T),z+=1}}for(let bt=0;bt<T;bt++)for(let P=0;P<F;P++){const j=_+P+tt*bt,_t=_+P+tt*(bt+1),Rt=_+(P+1)+tt*(bt+1),It=_+(P+1)+tt*bt;m.push(j,_t,It),m.push(_t,Rt,It),ot+=6}d.addGroup(M,ot,L),M+=ot,_+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class lu extends Xn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,S=t/d,_=i/m,M=[],E=[],C=[],y=[];for(let v=0;v<g;v++){const w=v*_-f;for(let D=0;D<p;D++){const U=D*S-c;E.push(U,-w,0),C.push(0,0,1),y.push(D/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let w=0;w<d;w++){const D=w+p*v,U=w+p*(v+1),G=w+1+p*(v+1),I=w+1+p*v;M.push(D,U,I),M.push(U,G,I)}this.setIndex(M),this.setAttribute("position",new gn(E,3)),this.setAttribute("normal",new gn(C,3)),this.setAttribute("uv",new gn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lu(t.width,t.height,t.widthSegments,t.heightSegments)}}class rp extends Xn{constructor(t=1,i=.4,s=64,l=8,c=2,f=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:s,radialSegments:l,p:c,q:f},s=Math.floor(s),l=Math.floor(l);const d=[],m=[],p=[],g=[],S=new W,_=new W,M=new W,E=new W,C=new W,y=new W,v=new W;for(let D=0;D<=s;++D){const U=D/s*c*Math.PI*2;w(U,c,f,t,M),w(U+.01,c,f,t,E),y.subVectors(E,M),v.addVectors(E,M),C.crossVectors(y,v),v.crossVectors(C,y),C.normalize(),v.normalize();for(let G=0;G<=l;++G){const I=G/l*Math.PI*2,F=-i*Math.cos(I),T=i*Math.sin(I);S.x=M.x+(F*v.x+T*C.x),S.y=M.y+(F*v.y+T*C.y),S.z=M.z+(F*v.z+T*C.z),m.push(S.x,S.y,S.z),_.subVectors(S,M).normalize(),p.push(_.x,_.y,_.z),g.push(D/s),g.push(G/l)}}for(let D=1;D<=s;D++)for(let U=1;U<=l;U++){const G=(l+1)*(D-1)+(U-1),I=(l+1)*D+(U-1),F=(l+1)*D+U,T=(l+1)*(D-1)+U;d.push(G,I,T),d.push(I,F,T)}this.setIndex(d),this.setAttribute("position",new gn(m,3)),this.setAttribute("normal",new gn(p,3)),this.setAttribute("uv",new gn(g,2));function w(D,U,G,I,F){const T=Math.cos(D),L=Math.sin(D),ft=G/U*D,H=Math.cos(ft);F.x=I*(2+H)*.5*T,F.y=I*(2+H)*L*.5,F.z=I*Math.sin(ft)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rp(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}function Wr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Gn(r){const t={};for(let i=0;i<r.length;i++){const s=Wr(r[i]);for(const l in s)t[l]=s[l]}return t}function UM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Nv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const LM={clone:Wr,merge:Gn};var NM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NM,this.fragmentShader=OM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wr(t.uniforms),this.uniformsGroups=UM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class PM extends Zi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class FM extends jr{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yv,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class IM extends jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ny,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zM extends jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Gc=new W,Vc=new cs,Gi=new W;class op extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Gc,Vc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Vc,Gi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Gc,Vc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Vc,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const as=new W,T_=new pe,A_=new pe;class ui extends op{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=il*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return il*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-t/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(as.x,as.y).multiplyScalar(-t/as.z)}getViewSize(t,i){return this.getViewBounds(t,T_,A_),i.subVectors(A_,T_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Jo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Ov extends op{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Nr=-90,Or=1;class BM extends Jn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(Nr,Or,t,i);l.layers=this.layers,this.add(l);const c=new ui(Nr,Or,t,i);c.layers=this.layers,this.add(c);const f=new ui(Nr,Or,t,i);f.layers=this.layers,this.add(f);const d=new ui(Nr,Or,t,i);d.layers=this.layers,this.add(d);const m=new ui(Nr,Or,t,i);m.layers=this.layers,this.add(m);const p=new ui(Nr,Or,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===Oi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===nl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,S=t.getRenderTarget(),_=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(S,_,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class HM extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class R_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class GM extends sp{constructor(t=10,i=10,s=4473924,l=8947848){s=new ge(s),l=new ge(l);const c=i/2,f=t/i,d=t/2,m=[],p=[];for(let _=0,M=0,E=-d;_<=i;_++,E+=f){m.push(-d,0,E,d,0,E),m.push(E,0,-d,E,0,d);const C=_===c?s:l;C.toArray(p,M),M+=3,C.toArray(p,M),M+=3,C.toArray(p,M),M+=3,C.toArray(p,M),M+=3}const g=new Xn;g.setAttribute("position",new gn(m,3)),g.setAttribute("color",new gn(p,3));const S=new rl({vertexColors:!0,toneMapped:!1});super(g,S),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Xc=new W,en=new op;class VM extends sp{constructor(t){const i=new Xn,s=new rl({color:16777215,vertexColors:!0,toneMapped:!1}),l=[],c=[],f={};d("n1","n2"),d("n2","n4"),d("n4","n3"),d("n3","n1"),d("f1","f2"),d("f2","f4"),d("f4","f3"),d("f3","f1"),d("n1","f1"),d("n2","f2"),d("n3","f3"),d("n4","f4"),d("p","n1"),d("p","n2"),d("p","n3"),d("p","n4"),d("u1","u2"),d("u2","u3"),d("u3","u1"),d("c","t"),d("p","c"),d("cn1","cn2"),d("cn3","cn4"),d("cf1","cf2"),d("cf3","cf4");function d(E,C){m(E),m(C)}function m(E){l.push(0,0,0),c.push(0,0,0),f[E]===void 0&&(f[E]=[]),f[E].push(l.length/3-1)}i.setAttribute("position",new gn(l,3)),i.setAttribute("color",new gn(c,3)),super(i,s),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=f,this.update();const p=new ge(16755200),g=new ge(16711680),S=new ge(43775),_=new ge(16777215),M=new ge(3355443);this.setColors(p,g,S,_,M)}setColors(t,i,s,l,c){const d=this.geometry.getAttribute("color");return d.setXYZ(0,t.r,t.g,t.b),d.setXYZ(1,t.r,t.g,t.b),d.setXYZ(2,t.r,t.g,t.b),d.setXYZ(3,t.r,t.g,t.b),d.setXYZ(4,t.r,t.g,t.b),d.setXYZ(5,t.r,t.g,t.b),d.setXYZ(6,t.r,t.g,t.b),d.setXYZ(7,t.r,t.g,t.b),d.setXYZ(8,t.r,t.g,t.b),d.setXYZ(9,t.r,t.g,t.b),d.setXYZ(10,t.r,t.g,t.b),d.setXYZ(11,t.r,t.g,t.b),d.setXYZ(12,t.r,t.g,t.b),d.setXYZ(13,t.r,t.g,t.b),d.setXYZ(14,t.r,t.g,t.b),d.setXYZ(15,t.r,t.g,t.b),d.setXYZ(16,t.r,t.g,t.b),d.setXYZ(17,t.r,t.g,t.b),d.setXYZ(18,t.r,t.g,t.b),d.setXYZ(19,t.r,t.g,t.b),d.setXYZ(20,t.r,t.g,t.b),d.setXYZ(21,t.r,t.g,t.b),d.setXYZ(22,t.r,t.g,t.b),d.setXYZ(23,t.r,t.g,t.b),d.setXYZ(24,i.r,i.g,i.b),d.setXYZ(25,i.r,i.g,i.b),d.setXYZ(26,i.r,i.g,i.b),d.setXYZ(27,i.r,i.g,i.b),d.setXYZ(28,i.r,i.g,i.b),d.setXYZ(29,i.r,i.g,i.b),d.setXYZ(30,i.r,i.g,i.b),d.setXYZ(31,i.r,i.g,i.b),d.setXYZ(32,s.r,s.g,s.b),d.setXYZ(33,s.r,s.g,s.b),d.setXYZ(34,s.r,s.g,s.b),d.setXYZ(35,s.r,s.g,s.b),d.setXYZ(36,s.r,s.g,s.b),d.setXYZ(37,s.r,s.g,s.b),d.setXYZ(38,l.r,l.g,l.b),d.setXYZ(39,l.r,l.g,l.b),d.setXYZ(40,c.r,c.g,c.b),d.setXYZ(41,c.r,c.g,c.b),d.setXYZ(42,c.r,c.g,c.b),d.setXYZ(43,c.r,c.g,c.b),d.setXYZ(44,c.r,c.g,c.b),d.setXYZ(45,c.r,c.g,c.b),d.setXYZ(46,c.r,c.g,c.b),d.setXYZ(47,c.r,c.g,c.b),d.setXYZ(48,c.r,c.g,c.b),d.setXYZ(49,c.r,c.g,c.b),d.needsUpdate=!0,this}update(){const t=this.geometry,i=this.pointMap,s=1,l=1;let c,f;if(en.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)c=1,f=0;else if(this.camera.coordinateSystem===Oi)c=-1,f=1;else if(this.camera.coordinateSystem===nl)c=0,f=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);rn("c",i,t,en,0,0,c),rn("t",i,t,en,0,0,f),rn("n1",i,t,en,-s,-l,c),rn("n2",i,t,en,s,-l,c),rn("n3",i,t,en,-s,l,c),rn("n4",i,t,en,s,l,c),rn("f1",i,t,en,-s,-l,f),rn("f2",i,t,en,s,-l,f),rn("f3",i,t,en,-s,l,f),rn("f4",i,t,en,s,l,f),rn("u1",i,t,en,s*.7,l*1.1,c),rn("u2",i,t,en,-s*.7,l*1.1,c),rn("u3",i,t,en,0,l*2,c),rn("cf1",i,t,en,-s,0,f),rn("cf2",i,t,en,s,0,f),rn("cf3",i,t,en,0,-l,f),rn("cf4",i,t,en,0,l,f),rn("cn1",i,t,en,-s,0,c),rn("cn2",i,t,en,s,0,c),rn("cn3",i,t,en,0,-l,c),rn("cn4",i,t,en,0,l,c),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function rn(r,t,i,s,l,c,f){Xc.set(l,c,f).unproject(s);const d=t[r];if(d!==void 0){const m=i.getAttribute("position");for(let p=0,g=d.length;p<g;p++)m.setXYZ(d[p],Xc.x,Xc.y,Xc.z)}}class C_ extends sp{constructor(t=1){const i=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new Xn;l.setAttribute("position",new gn(i,3)),l.setAttribute("color",new gn(s,3));const c=new rl({vertexColors:!0,toneMapped:!1});super(l,c),this.type="AxesHelper"}setColors(t,i,s){const l=new ge,c=this.geometry.attributes.color.array;return l.set(t),l.toArray(c,0),l.toArray(c,3),l.set(i),l.toArray(c,6),l.toArray(c,9),l.set(s),l.toArray(c,12),l.toArray(c,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}let XM=class extends Bs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ee("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function w_(r,t,i,s){const l=kM(s);switch(i){case vv:return r*t;case Sv:return r*t/l.components*l.byteLength;case Kd:return r*t/l.components*l.byteLength;case kr:return r*t*2/l.components*l.byteLength;case Qd:return r*t*2/l.components*l.byteLength;case xv:return r*t*3/l.components*l.byteLength;case Ni:return r*t*4/l.components*l.byteLength;case Jd:return r*t*4/l.components*l.byteLength;case Zc:case Kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qc:case Jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hd:case pd:return Math.max(r,16)*Math.max(t,8)/4;case fd:case dd:return Math.max(r,8)*Math.max(t,8)/2;case md:case gd:case vd:case xd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case _d:case Sd:case yd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Md:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ed:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case bd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Td:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Rd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case wd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Dd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Nd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Od:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Pd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Fd:case Id:case zd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Bd:case Hd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Gd:case Vd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function kM(r){switch(r){case yi:case pv:return{byteLength:1,components:1};case tl:case mv:case ba:return{byteLength:2,components:1};case jd:case Zd:return{byteLength:2,components:4};case ji:case qd:case ki:return{byteLength:4,components:1};case gv:case _v:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wd}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wd);function Pv(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function YM(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,S=p.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:S}}function s(d,m,p){const g=m.array,S=m.updateRanges;if(r.bindBuffer(p,d),S.length===0)r.bufferSubData(p,0,g);else{S.sort((M,E)=>M.start-E.start);let _=0;for(let M=1;M<S.length;M++){const E=S[_],C=S[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++_,S[_]=C)}S.length=_+1;for(let M=0,E=S.length;M<E;M++){const C=S[M];r.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var WM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$M=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,eE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_E=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ME="gl_FragColor = linearToOutputTexel( gl_FragColor );",EE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,OE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ab=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Db=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ob=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ib=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$b=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ET=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:WM,alphahash_pars_fragment:qM,alphamap_fragment:jM,alphamap_pars_fragment:ZM,alphatest_fragment:KM,alphatest_pars_fragment:QM,aomap_fragment:JM,aomap_pars_fragment:$M,batching_pars_vertex:tE,batching_vertex:eE,begin_vertex:nE,beginnormal_vertex:iE,bsdfs:aE,iridescence_fragment:sE,bumpmap_pars_fragment:rE,clipping_planes_fragment:oE,clipping_planes_pars_fragment:lE,clipping_planes_pars_vertex:cE,clipping_planes_vertex:uE,color_fragment:fE,color_pars_fragment:hE,color_pars_vertex:dE,color_vertex:pE,common:mE,cube_uv_reflection_fragment:gE,defaultnormal_vertex:_E,displacementmap_pars_vertex:vE,displacementmap_vertex:xE,emissivemap_fragment:SE,emissivemap_pars_fragment:yE,colorspace_fragment:ME,colorspace_pars_fragment:EE,envmap_fragment:bE,envmap_common_pars_fragment:TE,envmap_pars_fragment:AE,envmap_pars_vertex:RE,envmap_physical_pars_fragment:zE,envmap_vertex:CE,fog_vertex:wE,fog_pars_vertex:DE,fog_fragment:UE,fog_pars_fragment:LE,gradientmap_pars_fragment:NE,lightmap_pars_fragment:OE,lights_lambert_fragment:PE,lights_lambert_pars_fragment:FE,lights_pars_begin:IE,lights_toon_fragment:BE,lights_toon_pars_fragment:HE,lights_phong_fragment:GE,lights_phong_pars_fragment:VE,lights_physical_fragment:XE,lights_physical_pars_fragment:kE,lights_fragment_begin:YE,lights_fragment_maps:WE,lights_fragment_end:qE,logdepthbuf_fragment:jE,logdepthbuf_pars_fragment:ZE,logdepthbuf_pars_vertex:KE,logdepthbuf_vertex:QE,map_fragment:JE,map_pars_fragment:$E,map_particle_fragment:tb,map_particle_pars_fragment:eb,metalnessmap_fragment:nb,metalnessmap_pars_fragment:ib,morphinstance_vertex:ab,morphcolor_vertex:sb,morphnormal_vertex:rb,morphtarget_pars_vertex:ob,morphtarget_vertex:lb,normal_fragment_begin:cb,normal_fragment_maps:ub,normal_pars_fragment:fb,normal_pars_vertex:hb,normal_vertex:db,normalmap_pars_fragment:pb,clearcoat_normal_fragment_begin:mb,clearcoat_normal_fragment_maps:gb,clearcoat_pars_fragment:_b,iridescence_pars_fragment:vb,opaque_fragment:xb,packing:Sb,premultiplied_alpha_fragment:yb,project_vertex:Mb,dithering_fragment:Eb,dithering_pars_fragment:bb,roughnessmap_fragment:Tb,roughnessmap_pars_fragment:Ab,shadowmap_pars_fragment:Rb,shadowmap_pars_vertex:Cb,shadowmap_vertex:wb,shadowmask_pars_fragment:Db,skinbase_vertex:Ub,skinning_pars_vertex:Lb,skinning_vertex:Nb,skinnormal_vertex:Ob,specularmap_fragment:Pb,specularmap_pars_fragment:Fb,tonemapping_fragment:Ib,tonemapping_pars_fragment:zb,transmission_fragment:Bb,transmission_pars_fragment:Hb,uv_pars_fragment:Gb,uv_pars_vertex:Vb,uv_vertex:Xb,worldpos_vertex:kb,background_vert:Yb,background_frag:Wb,backgroundCube_vert:qb,backgroundCube_frag:jb,cube_vert:Zb,cube_frag:Kb,depth_vert:Qb,depth_frag:Jb,distance_vert:$b,distance_frag:tT,equirect_vert:eT,equirect_frag:nT,linedashed_vert:iT,linedashed_frag:aT,meshbasic_vert:sT,meshbasic_frag:rT,meshlambert_vert:oT,meshlambert_frag:lT,meshmatcap_vert:cT,meshmatcap_frag:uT,meshnormal_vert:fT,meshnormal_frag:hT,meshphong_vert:dT,meshphong_frag:pT,meshphysical_vert:mT,meshphysical_frag:gT,meshtoon_vert:_T,meshtoon_frag:vT,points_vert:xT,points_frag:ST,shadow_vert:yT,shadow_frag:MT,sprite_vert:ET,sprite_frag:bT},Lt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Xi={basic:{uniforms:Gn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Gn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Gn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Gn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Gn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ge(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Gn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Gn([Lt.points,Lt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Gn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Gn([Lt.common,Lt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Gn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Gn([Lt.sprite,Lt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Gn([Lt.common,Lt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Gn([Lt.lights,Lt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Xi.physical={uniforms:Gn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const kc={r:0,b:0,g:0},Ls=new Aa,TT=new nn;function AT(r,t,i,s,l,c){const f=new ge(0);let d=l===!0?0:1,m,p,g=null,S=0,_=null;function M(w){let D=w.isScene===!0?w.background:null;if(D&&D.isTexture){const U=w.backgroundBlurriness>0;D=t.get(D,U)}return D}function E(w){let D=!1;const U=M(w);U===null?y(f,d):U&&U.isColor&&(y(U,1),D=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,c):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(w,D){const U=M(D);U&&(U.isCubeTexture||U.mapping===ru)?(p===void 0&&(p=new Pi(new Zr(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Wr(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(G,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Ls.copy(D.backgroundRotation),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),p.material.uniforms.envMap.value=U,p.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(TT.makeRotationFromEuler(Ls)),p.material.toneMapped=Ae.getTransfer(U.colorSpace)!==Be,(g!==U||S!==U.version||_!==r.toneMapping)&&(p.material.needsUpdate=!0,g=U,S=U.version,_=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Pi(new lu(2,2),new Zi({name:"BackgroundMaterial",uniforms:Wr(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Ae.getTransfer(U.colorSpace)!==Be,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||S!==U.version||_!==r.toneMapping)&&(m.material.needsUpdate=!0,g=U,S=U.version,_=r.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function y(w,D){w.getRGB(kc,Nv(r)),i.buffers.color.setClear(kc.r,kc.g,kc.b,D,c)}function v(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,D=1){f.set(w),d=D,y(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,y(f,d)},render:E,addToRenderList:C,dispose:v}}function RT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,f=!1;function d(H,J,at,lt,tt){let O=!1;const z=S(H,lt,at,J);c!==z&&(c=z,p(c.object)),O=M(H,lt,at,tt),O&&E(H,lt,at,tt),tt!==null&&t.update(tt,r.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,U(H,J,at,lt),tt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function m(){return r.createVertexArray()}function p(H){return r.bindVertexArray(H)}function g(H){return r.deleteVertexArray(H)}function S(H,J,at,lt){const tt=lt.wireframe===!0;let O=s[J.id];O===void 0&&(O={},s[J.id]=O);const z=H.isInstancedMesh===!0?H.id:0;let ot=O[z];ot===void 0&&(ot={},O[z]=ot);let dt=ot[at.id];dt===void 0&&(dt={},ot[at.id]=dt);let bt=dt[tt];return bt===void 0&&(bt=_(m()),dt[tt]=bt),bt}function _(H){const J=[],at=[],lt=[];for(let tt=0;tt<i;tt++)J[tt]=0,at[tt]=0,lt[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:at,attributeDivisors:lt,object:H,attributes:{},index:null}}function M(H,J,at,lt){const tt=c.attributes,O=J.attributes;let z=0;const ot=at.getAttributes();for(const dt in ot)if(ot[dt].location>=0){const P=tt[dt];let j=O[dt];if(j===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(j=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(j=H.instanceColor)),P===void 0||P.attribute!==j||j&&P.data!==j.data)return!0;z++}return c.attributesNum!==z||c.index!==lt}function E(H,J,at,lt){const tt={},O=J.attributes;let z=0;const ot=at.getAttributes();for(const dt in ot)if(ot[dt].location>=0){let P=O[dt];P===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(P=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(P=H.instanceColor));const j={};j.attribute=P,P&&P.data&&(j.data=P.data),tt[dt]=j,z++}c.attributes=tt,c.attributesNum=z,c.index=lt}function C(){const H=c.newAttributes;for(let J=0,at=H.length;J<at;J++)H[J]=0}function y(H){v(H,0)}function v(H,J){const at=c.newAttributes,lt=c.enabledAttributes,tt=c.attributeDivisors;at[H]=1,lt[H]===0&&(r.enableVertexAttribArray(H),lt[H]=1),tt[H]!==J&&(r.vertexAttribDivisor(H,J),tt[H]=J)}function w(){const H=c.newAttributes,J=c.enabledAttributes;for(let at=0,lt=J.length;at<lt;at++)J[at]!==H[at]&&(r.disableVertexAttribArray(at),J[at]=0)}function D(H,J,at,lt,tt,O,z){z===!0?r.vertexAttribIPointer(H,J,at,tt,O):r.vertexAttribPointer(H,J,at,lt,tt,O)}function U(H,J,at,lt){C();const tt=lt.attributes,O=at.getAttributes(),z=J.defaultAttributeValues;for(const ot in O){const dt=O[ot];if(dt.location>=0){let bt=tt[ot];if(bt===void 0&&(ot==="instanceMatrix"&&H.instanceMatrix&&(bt=H.instanceMatrix),ot==="instanceColor"&&H.instanceColor&&(bt=H.instanceColor)),bt!==void 0){const P=bt.normalized,j=bt.itemSize,_t=t.get(bt);if(_t===void 0)continue;const Rt=_t.buffer,It=_t.type,nt=_t.bytesPerElement,vt=It===r.INT||It===r.UNSIGNED_INT||bt.gpuType===qd;if(bt.isInterleavedBufferAttribute){const Tt=bt.data,Xt=Tt.stride,Kt=bt.offset;if(Tt.isInstancedInterleavedBuffer){for(let $t=0;$t<dt.locationSize;$t++)v(dt.location+$t,Tt.meshPerAttribute);H.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let $t=0;$t<dt.locationSize;$t++)y(dt.location+$t);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let $t=0;$t<dt.locationSize;$t++)D(dt.location+$t,j/dt.locationSize,It,P,Xt*nt,(Kt+j/dt.locationSize*$t)*nt,vt)}else{if(bt.isInstancedBufferAttribute){for(let Tt=0;Tt<dt.locationSize;Tt++)v(dt.location+Tt,bt.meshPerAttribute);H.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Tt=0;Tt<dt.locationSize;Tt++)y(dt.location+Tt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Tt=0;Tt<dt.locationSize;Tt++)D(dt.location+Tt,j/dt.locationSize,It,P,j*nt,j/dt.locationSize*Tt*nt,vt)}}else if(z!==void 0){const P=z[ot];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(dt.location,P);break;case 3:r.vertexAttrib3fv(dt.location,P);break;case 4:r.vertexAttrib4fv(dt.location,P);break;default:r.vertexAttrib1fv(dt.location,P)}}}}w()}function G(){L();for(const H in s){const J=s[H];for(const at in J){const lt=J[at];for(const tt in lt){const O=lt[tt];for(const z in O)g(O[z].object),delete O[z];delete lt[tt]}}delete s[H]}}function I(H){if(s[H.id]===void 0)return;const J=s[H.id];for(const at in J){const lt=J[at];for(const tt in lt){const O=lt[tt];for(const z in O)g(O[z].object),delete O[z];delete lt[tt]}}delete s[H.id]}function F(H){for(const J in s){const at=s[J];for(const lt in at){const tt=at[lt];if(tt[H.id]===void 0)continue;const O=tt[H.id];for(const z in O)g(O[z].object),delete O[z];delete tt[H.id]}}}function T(H){for(const J in s){const at=s[J],lt=H.isInstancedMesh===!0?H.id:0,tt=at[lt];if(tt!==void 0){for(const O in tt){const z=tt[O];for(const ot in z)g(z[ot].object),delete z[ot];delete tt[O]}delete at[lt],Object.keys(at).length===0&&delete s[J]}}}function L(){ft(),f=!0,c!==l&&(c=l,p(c.object))}function ft(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:L,resetDefaultState:ft,dispose:G,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:y,disableUnusedAttributes:w}}function CT(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,S){S!==0&&(r.drawArraysInstanced(s,p,g,S),i.update(g,s,S))}function d(p,g,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,S);let M=0;for(let E=0;E<S;E++)M+=g[E];i.update(M,s,1)}function m(p,g,S,_){if(S===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],g[E],_[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,_,0,S);let E=0;for(let C=0;C<S;C++)E+=g[C]*_[C];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function wT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Ni&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const T=F===ba&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==yi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ki&&!T)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(ee("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const S=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:w,maxVaryings:D,maxFragmentUniforms:U,maxSamples:G,samples:I}}function DT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new ss,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const M=S.length!==0||_||s!==0||l;return l=_,s=S.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,_){i=g(S,_,0)},this.setState=function(S,_,M){const E=S.clippingPlanes,C=S.clipIntersection,y=S.clipShadows,v=r.get(S);if(!l||E===null||E.length===0||c&&!y)c?g(null):p();else{const w=c?0:s,D=w*4;let U=v.clippingState||null;m.value=U,U=g(E,_,D,M);for(let G=0;G!==D;++G)U[G]=i[G];v.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(S,_,M,E){const C=S!==null?S.length:0;let y=null;if(C!==0){if(y=m.value,E!==!0||y===null){const v=M+C*4,w=_.matrixWorldInverse;d.getNormalMatrix(w),(y===null||y.length<v)&&(y=new Float32Array(v));for(let D=0,U=M;D!==C;++D,U+=4)f.copy(S[D]).applyMatrix4(w,d),f.normal.toArray(y,U),y[U+3]=f.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}const os=4,D_=[.125,.215,.35,.446,.526,.582],Ps=20,UT=256,jo=new Ov,U_=new ge;let qh=null,jh=0,Zh=0,Kh=!1;const LT=new W;class L_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=LT}=c;qh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qh,jh,Zh),this._renderer.xr.enabled=Kh,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===zs||t.mapping===Xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:ba,format:Ni,colorSpace:Yr,depthBuffer:!1},l=N_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=NT(c)),this._blurMaterial=PT(c,t,i),this._ggxMaterial=OT(c,t,i)}return l}_compileMaterial(t){const i=new Pi(new Xn,t);this._renderer.compile(i,jo)}_sceneToCubeUV(t,i,s,l,c){const m=new ui(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],S=this._renderer,_=S.autoClear,M=S.toneMapping;S.getClearColor(U_),S.toneMapping=Yi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pi(new Zr,new ap({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let v=!1;const w=t.background;w?w.isColor&&(y.color.copy(w),t.background=null,v=!0):(y.color.copy(U_),v=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[D],c.y,c.z)):U===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[D]));const G=this._cubeSize;Pr(l,U*G,D>2?G:0,G,G),S.setRenderTarget(l),v&&S.render(C,m),S.render(t,m)}S.toneMapping=M,S.autoClear=_,t.background=w}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===zs||t.mapping===Xr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=P_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Pr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,jo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),S=Math.sqrt(p*p-g*g),_=0+p*1.25,M=S*_,{_lodMax:E}=this,C=this._sizeLods[s],y=3*C*(s>E-os?s-E+os:0),v=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=E-i,Pr(c,y,v,3*C,2*C),l.setRenderTarget(c),l.render(d,jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Pr(t,y,v,3*C,2*C),l.setRenderTarget(t),l.render(d,jo)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const g=3,S=this._lodMeshes[l];S.material=p;const _=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ps-1),C=c/E,y=isFinite(c)?1+Math.floor(g*C):Ps;y>Ps&&ee(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ps}`);const v=[];let w=0;for(let F=0;F<Ps;++F){const T=F/C,L=Math.exp(-T*T/2);v.push(L),F===0?w+=L:F<y&&(w+=2*L)}for(let F=0;F<v.length;F++)v[F]=v[F]/w;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=v,_.latitudinal.value=f==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:D}=this;_.dTheta.value=E,_.mipInt.value=D-s;const U=this._sizeLods[l],G=3*U*(l>D-os?l-D+os:0),I=4*(this._cubeSize-U);Pr(i,G,I,3*U,2*U),m.setRenderTarget(i),m.render(S,jo)}}function NT(r){const t=[],i=[],s=[];let l=r;const c=r-os+1+D_.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-os?m=D_[f-r+os-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,S=1+p,_=[g,g,S,g,S,S,g,g,S,S,g,S],M=6,E=6,C=3,y=2,v=1,w=new Float32Array(C*E*M),D=new Float32Array(y*E*M),U=new Float32Array(v*E*M);for(let I=0;I<M;I++){const F=I%3*2/3-1,T=I>2?0:-1,L=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];w.set(L,C*E*I),D.set(_,y*E*I);const ft=[I,I,I,I,I,I];U.set(ft,v*E*I)}const G=new Xn;G.setAttribute("position",new qi(w,C)),G.setAttribute("uv",new qi(D,y)),G.setAttribute("faceIndex",new qi(U,v)),s.push(new Pi(G,null)),l>os&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function N_(r,t,i){const s=new Wi(r,t,i);return s.texture.mapping=ru,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Pr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function OT(r,t,i){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:UT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function PT(r,t,i){const s=new Float32Array(Ps),l=new W(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function O_(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function P_(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Fv extends Wi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Uv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Zr(5,5,5),c=new Zi({name:"CubemapFromEquirect",uniforms:Wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:Ma});c.uniforms.tEquirect.value=i;const f=new Pi(l,c),d=i.minFilter;return i.minFilter===Fs&&(i.minFilter=On),new BM(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function FT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(_,M=!1){return _==null?null:M?f(_):c(_)}function c(_){if(_&&_.isTexture){const M=_.mapping;if(M===yh||M===Mh)if(t.has(_)){const E=t.get(_).texture;return d(E,_.mapping)}else{const E=_.image;if(E&&E.height>0){const C=new Fv(E.height);return C.fromEquirectangularTexture(r,_),t.set(_,C),_.addEventListener("dispose",p),d(C.texture,_.mapping)}else return null}}return _}function f(_){if(_&&_.isTexture){const M=_.mapping,E=M===yh||M===Mh,C=M===zs||M===Xr;if(E||C){let y=i.get(_);const v=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==v)return s===null&&(s=new L_(r)),y=E?s.fromEquirectangular(_,y):s.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const w=_.image;return E&&w&&w.height>0||C&&w&&m(w)?(s===null&&(s=new L_(r)),y=E?s.fromEquirectangular(_):s.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",g),y.texture):null}}}return _}function d(_,M){return M===yh?_.mapping=zs:M===Mh&&(_.mapping=Xr),_}function m(_){let M=0;const E=6;for(let C=0;C<E;C++)_[C]!==void 0&&M++;return M===E}function p(_){const M=_.target;M.removeEventListener("dispose",p);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function g(_){const M=_.target;M.removeEventListener("dispose",g);const E=i.get(M);E!==void 0&&(i.delete(M),E.dispose())}function S(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function IT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&nu("WebGLRenderer: "+s+" extension not supported."),l}}}function zT(r,t,i,s){const l={},c=new WeakMap;function f(S){const _=S.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",f),delete l[_.id];const M=c.get(_);M&&(t.remove(M),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(S,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(S){const _=S.attributes;for(const M in _)t.update(_[M],r.ARRAY_BUFFER)}function p(S){const _=[],M=S.index,E=S.attributes.position;let C=0;if(E===void 0)return;if(M!==null){const w=M.array;C=M.version;for(let D=0,U=w.length;D<U;D+=3){const G=w[D+0],I=w[D+1],F=w[D+2];_.push(G,I,I,F,F,G)}}else{const w=E.array;C=E.version;for(let D=0,U=w.length/3-1;D<U;D+=3){const G=D+0,I=D+1,F=D+2;_.push(G,I,I,F,F,G)}}const y=new(E.count>=65535?Cv:Rv)(_,1);y.version=C;const v=c.get(S);v&&t.remove(v),c.set(S,y)}function g(S){const _=c.get(S);if(_){const M=S.index;M!==null&&_.version<M.version&&p(S)}else p(S);return c.get(S)}return{get:d,update:m,getWireframeAttribute:g}}function BT(r,t,i){let s;function l(_){s=_}let c,f;function d(_){c=_.type,f=_.bytesPerElement}function m(_,M){r.drawElements(s,M,c,_*f),i.update(M,s,1)}function p(_,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,_*f,E),i.update(M,s,E))}function g(_,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,_,0,E);let y=0;for(let v=0;v<E;v++)y+=M[v];i.update(y,s,1)}function S(_,M,E,C){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<_.length;v++)p(_[v]/f,M[v],C[v]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,_,0,C,0,E);let v=0;for(let w=0;w<E;w++)v+=M[w]*C[w];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=S}function HT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:De("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function GT(r,t,i){const s=new WeakMap,l=new on;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=g!==void 0?g.length:0;let _=s.get(d);if(_===void 0||_.count!==S){let ft=function(){T.dispose(),s.delete(d),d.removeEventListener("dispose",ft)};var M=ft;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let U=0;E===!0&&(U=1),C===!0&&(U=2),y===!0&&(U=3);let G=d.attributes.position.count*U,I=1;G>t.maxTextureSize&&(I=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const F=new Float32Array(G*I*4*S),T=new bv(F,G,I,S);T.type=ki,T.needsUpdate=!0;const L=U*4;for(let H=0;H<S;H++){const J=v[H],at=w[H],lt=D[H],tt=G*I*4*H;for(let O=0;O<J.count;O++){const z=O*L;E===!0&&(l.fromBufferAttribute(J,O),F[tt+z+0]=l.x,F[tt+z+1]=l.y,F[tt+z+2]=l.z,F[tt+z+3]=0),C===!0&&(l.fromBufferAttribute(at,O),F[tt+z+4]=l.x,F[tt+z+5]=l.y,F[tt+z+6]=l.z,F[tt+z+7]=0),y===!0&&(l.fromBufferAttribute(lt,O),F[tt+z+8]=l.x,F[tt+z+9]=l.y,F[tt+z+10]=l.z,F[tt+z+11]=lt.itemSize===4?l.w:1)}}_={count:S,texture:T,size:new pe(G,I)},s.set(d,_),d.addEventListener("dispose",ft)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const C=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function VT(r,t,i,s,l){let c=new WeakMap;function f(p){const g=l.render.frame,S=p.geometry,_=t.get(p,S);if(c.get(_)!==g&&(t.update(_),c.set(_,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==g&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,g))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==g&&(M.update(),c.set(M,g))}return _}function d(){c=new WeakMap}function m(p){const g=p.target;g.removeEventListener("dispose",m),s.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:d}}const XT={[rv]:"LINEAR_TONE_MAPPING",[ov]:"REINHARD_TONE_MAPPING",[lv]:"CINEON_TONE_MAPPING",[cv]:"ACES_FILMIC_TONE_MAPPING",[fv]:"AGX_TONE_MAPPING",[hv]:"NEUTRAL_TONE_MAPPING",[uv]:"CUSTOM_TONE_MAPPING"};function kT(r,t,i,s,l){const c=new Wi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Wi(t,i,{type:ba,depthBuffer:!1,stencilBuffer:!1}),d=new Xn;d.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new gn([0,2,0,0,2,0],2));const m=new PM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Pi(d,m),g=new Ov(-1,1,1,-1,0,1);let S=null,_=null,M=!1,E,C=null,y=[],v=!1;this.setSize=function(w,D){c.setSize(w,D),f.setSize(w,D);for(let U=0;U<y.length;U++){const G=y[U];G.setSize&&G.setSize(w,D)}},this.setEffects=function(w){y=w,v=y.length>0&&y[0].isRenderPass===!0;const D=c.width,U=c.height;for(let G=0;G<y.length;G++){const I=y[G];I.setSize&&I.setSize(D,U)}},this.begin=function(w,D){if(M||w.toneMapping===Yi&&y.length===0)return!1;if(C=D,D!==null){const U=D.width,G=D.height;(c.width!==U||c.height!==G)&&this.setSize(U,G)}return v===!1&&w.setRenderTarget(c),E=w.toneMapping,w.toneMapping=Yi,!0},this.hasRenderPass=function(){return v},this.end=function(w,D){w.toneMapping=E,M=!0;let U=c,G=f;for(let I=0;I<y.length;I++){const F=y[I];if(F.enabled!==!1&&(F.render(w,G,U,D),F.needsSwap!==!1)){const T=U;U=G,G=T}}if(S!==w.outputColorSpace||_!==w.toneMapping){S=w.outputColorSpace,_=w.toneMapping,m.defines={},Ae.getTransfer(S)===Be&&(m.defines.SRGB_TRANSFER="");const I=XT[_];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,w.setRenderTarget(C),w.render(p,g),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const Iv=new Vn,Xd=new al(1,1),zv=new bv,Bv=new hM,Hv=new Uv,F_=[],I_=[],z_=new Float32Array(16),B_=new Float32Array(9),H_=new Float32Array(4);function Kr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=F_[l];if(c===void 0&&(c=new Float32Array(l),F_[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function yn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Mn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function uu(r,t){let i=I_[t];i===void 0&&(i=new Int32Array(t),I_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function YT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function WT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2fv(this.addr,t),Mn(i,t)}}function qT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(yn(i,t))return;r.uniform3fv(this.addr,t),Mn(i,t)}}function jT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4fv(this.addr,t),Mn(i,t)}}function ZT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,s))return;H_.set(s),r.uniformMatrix2fv(this.addr,!1,H_),Mn(i,s)}}function KT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,s))return;B_.set(s),r.uniformMatrix3fv(this.addr,!1,B_),Mn(i,s)}}function QT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,s))return;z_.set(s),r.uniformMatrix4fv(this.addr,!1,z_),Mn(i,s)}}function JT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function $T(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2iv(this.addr,t),Mn(i,t)}}function t1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;r.uniform3iv(this.addr,t),Mn(i,t)}}function e1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4iv(this.addr,t),Mn(i,t)}}function n1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function i1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2uiv(this.addr,t),Mn(i,t)}}function a1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;r.uniform3uiv(this.addr,t),Mn(i,t)}}function s1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4uiv(this.addr,t),Mn(i,t)}}function r1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Xd.compareFunction=i.isReversedDepthBuffer()?tp:$d,c=Xd):c=Iv,i.setTexture2D(t||c,l)}function o1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Bv,l)}function l1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Hv,l)}function c1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||zv,l)}function u1(r){switch(r){case 5126:return YT;case 35664:return WT;case 35665:return qT;case 35666:return jT;case 35674:return ZT;case 35675:return KT;case 35676:return QT;case 5124:case 35670:return JT;case 35667:case 35671:return $T;case 35668:case 35672:return t1;case 35669:case 35673:return e1;case 5125:return n1;case 36294:return i1;case 36295:return a1;case 36296:return s1;case 35678:case 36198:case 36298:case 36306:case 35682:return r1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return c1}}function f1(r,t){r.uniform1fv(this.addr,t)}function h1(r,t){const i=Kr(t,this.size,2);r.uniform2fv(this.addr,i)}function d1(r,t){const i=Kr(t,this.size,3);r.uniform3fv(this.addr,i)}function p1(r,t){const i=Kr(t,this.size,4);r.uniform4fv(this.addr,i)}function m1(r,t){const i=Kr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function g1(r,t){const i=Kr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function _1(r,t){const i=Kr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function v1(r,t){r.uniform1iv(this.addr,t)}function x1(r,t){r.uniform2iv(this.addr,t)}function S1(r,t){r.uniform3iv(this.addr,t)}function y1(r,t){r.uniform4iv(this.addr,t)}function M1(r,t){r.uniform1uiv(this.addr,t)}function E1(r,t){r.uniform2uiv(this.addr,t)}function b1(r,t){r.uniform3uiv(this.addr,t)}function T1(r,t){r.uniform4uiv(this.addr,t)}function A1(r,t,i){const s=this.cache,l=t.length,c=uu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Xd:f=Iv;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function R1(r,t,i){const s=this.cache,l=t.length,c=uu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Bv,c[f])}function C1(r,t,i){const s=this.cache,l=t.length,c=uu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Hv,c[f])}function w1(r,t,i){const s=this.cache,l=t.length,c=uu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||zv,c[f])}function D1(r){switch(r){case 5126:return f1;case 35664:return h1;case 35665:return d1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return _1;case 5124:case 35670:return v1;case 35667:case 35671:return x1;case 35668:case 35672:return S1;case 35669:case 35673:return y1;case 5125:return M1;case 36294:return E1;case 36295:return b1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return w1}}class U1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=u1(i.type)}}class L1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=D1(i.type)}}class N1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Qh=/(\w+)(\])?(\[|\.)?/g;function G_(r,t){r.seq.push(t),r.map[t.id]=t}function O1(r,t,i){const s=r.name,l=s.length;for(Qh.lastIndex=0;;){const c=Qh.exec(s),f=Qh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){G_(i,p===void 0?new U1(d,r,t):new L1(d,r,t));break}else{let S=i.map[d];S===void 0&&(S=new N1(d),G_(i,S)),i=S}}}class $c{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);O1(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function V_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const P1=37297;let F1=0;function I1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const X_=new oe;function z1(r){Ae._getMatrix(X_,Ae.workingColorSpace,r);const t=`mat3( ${X_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(r)){case tu:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function k_(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+I1(r.getShaderSource(t),d)}else return c}function B1(r,t){const i=z1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const H1={[rv]:"Linear",[ov]:"Reinhard",[lv]:"Cineon",[cv]:"ACESFilmic",[fv]:"AgX",[hv]:"Neutral",[uv]:"Custom"};function G1(r,t){const i=H1[t];return i===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yc=new W;function V1(){Ae.getLuminanceCoefficients(Yc);const r=Yc.x.toFixed(4),t=Yc.y.toFixed(4),i=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function k1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function Y1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function Qo(r){return r!==""}function Y_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function W_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const W1=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(r){return r.replace(W1,j1)}const q1=new Map;function j1(r,t){let i=de[t];if(i===void 0){const s=q1.get(t);if(s!==void 0)i=de[s],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return kd(i)}const Z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q_(r){return r.replace(Z1,K1)}function K1(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function j_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Q1={[jc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function J1(r){return Q1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $1={[zs]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE",[ru]:"ENVMAP_TYPE_CUBE_UV"};function tA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":$1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const eA={[Xr]:"ENVMAP_MODE_REFRACTION"};function nA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":eA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iA={[sv]:"ENVMAP_BLENDING_MULTIPLY",[Dy]:"ENVMAP_BLENDING_MIX",[Uy]:"ENVMAP_BLENDING_ADD"};function aA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":iA[r.combine]||"ENVMAP_BLENDING_NONE"}function sA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function rA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=J1(i),p=tA(i),g=nA(i),S=aA(i),_=sA(i),M=X1(i),E=k1(c),C=l.createProgram();let y,v,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Qo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Qo).join(`
`),v.length>0&&(v+=`
`)):(y=[j_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),v=[j_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+S:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?de.tonemapping_pars_fragment:"",i.toneMapping!==Yi?G1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,B1("linearToOutputTexel",i.outputColorSpace),V1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qo).join(`
`)),f=kd(f),f=Y_(f,i),f=W_(f,i),d=kd(d),d=Y_(d,i),d=W_(d,i),f=q_(f),d=q_(d),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===i_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===i_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=w+y+f,U=w+v+d,G=V_(l,l.VERTEX_SHADER,D),I=V_(l,l.FRAGMENT_SHADER,U);l.attachShader(C,G),l.attachShader(C,I),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(H){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(C)||"",at=l.getShaderInfoLog(G)||"",lt=l.getShaderInfoLog(I)||"",tt=J.trim(),O=at.trim(),z=lt.trim();let ot=!0,dt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ot=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,G,I);else{const bt=k_(l,G,"vertex"),P=k_(l,I,"fragment");De("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+tt+`
`+bt+`
`+P)}else tt!==""?ee("WebGLProgram: Program Info Log:",tt):(O===""||z==="")&&(dt=!1);dt&&(H.diagnostics={runnable:ot,programLog:tt,vertexShader:{log:O,prefix:y},fragmentShader:{log:z,prefix:v}})}l.deleteShader(G),l.deleteShader(I),T=new $c(l,C),L=Y1(l,C)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let ft=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ft===!1&&(ft=l.getProgramParameter(C,P1)),ft},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=F1++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=I,this}let oA=0;class lA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new cA(t),i.set(t,s)),s}}class cA{constructor(t){this.id=oA++,this.code=t,this.usedTimes=0}}function uA(r,t,i,s,l,c){const f=new Tv,d=new lA,m=new Set,p=[],g=new Map,S=s.logarithmicDepthBuffer;let _=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,L,ft,H,J){const at=H.fog,lt=J.geometry,tt=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,z=t.get(T.envMap||tt,O),ot=z&&z.mapping===ru?z.image.height:null,dt=M[T.type];T.precision!==null&&(_=s.getMaxPrecision(T.precision),_!==T.precision&&ee("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const bt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,P=bt!==void 0?bt.length:0;let j=0;lt.morphAttributes.position!==void 0&&(j=1),lt.morphAttributes.normal!==void 0&&(j=2),lt.morphAttributes.color!==void 0&&(j=3);let _t,Rt,It,nt;if(dt){const Te=Xi[dt];_t=Te.vertexShader,Rt=Te.fragmentShader}else _t=T.vertexShader,Rt=T.fragmentShader,d.update(T),It=d.getVertexShaderID(T),nt=d.getFragmentShaderID(T);const vt=r.getRenderTarget(),Tt=r.state.buffers.depth.getReversed(),Xt=J.isInstancedMesh===!0,Kt=J.isBatchedMesh===!0,$t=!!T.map,Je=!!T.matcap,Se=!!z,_e=!!T.aoMap,Ue=!!T.lightMap,le=!!T.bumpMap,Qe=!!T.normalMap,V=!!T.displacementMap,qe=!!T.emissiveMap,be=!!T.metalnessMap,Ne=!!T.roughnessMap,Wt=T.anisotropy>0,N=T.clearcoat>0,b=T.dispersion>0,q=T.iridescence>0,pt=T.sheen>0,St=T.transmission>0,ut=Wt&&!!T.anisotropyMap,kt=N&&!!T.clearcoatMap,wt=N&&!!T.clearcoatNormalMap,Zt=N&&!!T.clearcoatRoughnessMap,te=q&&!!T.iridescenceMap,Et=q&&!!T.iridescenceThicknessMap,yt=pt&&!!T.sheenColorMap,Ot=pt&&!!T.sheenRoughnessMap,Nt=!!T.specularMap,Pt=!!T.specularColorMap,ue=!!T.specularIntensityMap,Y=St&&!!T.transmissionMap,Ct=St&&!!T.thicknessMap,At=!!T.gradientMap,Ft=!!T.alphaMap,Mt=T.alphaTest>0,ct=!!T.alphaHash,Bt=!!T.extensions;let ie=Yi;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ie=r.toneMapping);const Fe={shaderID:dt,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:Rt,defines:T.defines,customVertexShaderID:It,customFragmentShaderID:nt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Kt,batchingColor:Kt&&J._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&J.instanceColor!==null,instancingMorph:Xt&&J.morphTexture!==null,outputColorSpace:vt===null?r.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Yr,alphaToCoverage:!!T.alphaToCoverage,map:$t,matcap:Je,envMap:Se,envMapMode:Se&&z.mapping,envMapCubeUVHeight:ot,aoMap:_e,lightMap:Ue,bumpMap:le,normalMap:Qe,displacementMap:V,emissiveMap:qe,normalMapObjectSpace:Qe&&T.normalMapType===Oy,normalMapTangentSpace:Qe&&T.normalMapType===yv,metalnessMap:be,roughnessMap:Ne,anisotropy:Wt,anisotropyMap:ut,clearcoat:N,clearcoatMap:kt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Zt,dispersion:b,iridescence:q,iridescenceMap:te,iridescenceThicknessMap:Et,sheen:pt,sheenColorMap:yt,sheenRoughnessMap:Ot,specularMap:Nt,specularColorMap:Pt,specularIntensityMap:ue,transmission:St,transmissionMap:Y,thicknessMap:Ct,gradientMap:At,opaque:T.transparent===!1&&T.blending===Hr&&T.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Mt,alphaHash:ct,combine:T.combine,mapUv:$t&&E(T.map.channel),aoMapUv:_e&&E(T.aoMap.channel),lightMapUv:Ue&&E(T.lightMap.channel),bumpMapUv:le&&E(T.bumpMap.channel),normalMapUv:Qe&&E(T.normalMap.channel),displacementMapUv:V&&E(T.displacementMap.channel),emissiveMapUv:qe&&E(T.emissiveMap.channel),metalnessMapUv:be&&E(T.metalnessMap.channel),roughnessMapUv:Ne&&E(T.roughnessMap.channel),anisotropyMapUv:ut&&E(T.anisotropyMap.channel),clearcoatMapUv:kt&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:wt&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&E(T.sheenRoughnessMap.channel),specularMapUv:Nt&&E(T.specularMap.channel),specularColorMapUv:Pt&&E(T.specularColorMap.channel),specularIntensityMapUv:ue&&E(T.specularIntensityMap.channel),transmissionMapUv:Y&&E(T.transmissionMap.channel),thicknessMapUv:Ct&&E(T.thicknessMap.channel),alphaMapUv:Ft&&E(T.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Qe||Wt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!lt.attributes.uv&&($t||Ft),fog:!!at,useFog:T.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||lt.attributes.normal===void 0&&Qe===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Tt,skinning:J.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:j,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&ft.length>0,shadowMapType:r.shadowMap.type,toneMapping:ie,decodeVideoTexture:$t&&T.map.isVideoTexture===!0&&Ae.getTransfer(T.map.colorSpace)===Be,decodeVideoTextureEmissive:qe&&T.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(T.emissiveMap.colorSpace)===Be,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Sa,flipSided:T.side===Qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Bt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&T.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Fe.vertexUv1s=m.has(1),Fe.vertexUv2s=m.has(2),Fe.vertexUv3s=m.has(3),m.clear(),Fe}function y(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ft in T.defines)L.push(ft),L.push(T.defines[ft]);return T.isRawShaderMaterial===!1&&(v(L,T),w(L,T),L.push(r.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function v(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function w(T,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),T.push(f.mask)}function D(T){const L=M[T.type];let ft;if(L){const H=Xi[L];ft=LM.clone(H.uniforms)}else ft=T.uniforms;return ft}function U(T,L){let ft=g.get(L);return ft!==void 0?++ft.usedTimes:(ft=new rA(r,L,T,l),p.push(ft),g.set(L,ft)),ft}function G(T){if(--T.usedTimes===0){const L=p.indexOf(T);p[L]=p[p.length-1],p.pop(),g.delete(T.cacheKey),T.destroy()}}function I(T){d.remove(T)}function F(){d.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:D,acquireProgram:U,releaseProgram:G,releaseShaderCache:I,programs:p,dispose:F}}function fA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function hA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Z_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function K_(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function d(_,M,E,C,y,v){let w=r[t];return w===void 0?(w={id:_.id,object:_,geometry:M,material:E,materialVariant:f(_),groupOrder:C,renderOrder:_.renderOrder,z:y,group:v},r[t]=w):(w.id=_.id,w.object=_,w.geometry=M,w.material=E,w.materialVariant=f(_),w.groupOrder=C,w.renderOrder=_.renderOrder,w.z=y,w.group=v),t++,w}function m(_,M,E,C,y,v){const w=d(_,M,E,C,y,v);E.transmission>0?s.push(w):E.transparent===!0?l.push(w):i.push(w)}function p(_,M,E,C,y,v){const w=d(_,M,E,C,y,v);E.transmission>0?s.unshift(w):E.transparent===!0?l.unshift(w):i.unshift(w)}function g(_,M){i.length>1&&i.sort(_||hA),s.length>1&&s.sort(M||Z_),l.length>1&&l.sort(M||Z_)}function S(){for(let _=t,M=r.length;_<M;_++){const E=r[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:S,sort:g}}function dA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new K_,r.set(s,[f])):l>=c.length?(f=new K_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function pA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new W,color:new ge};break;case"SpotLight":i={position:new W,direction:new W,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new W,color:new ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new W,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":i={color:new ge,position:new W,halfWidth:new W,halfHeight:new W};break}return r[t.id]=i,i}}}function mA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let gA=0;function _A(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function vA(r){const t=new pA,i=mA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new W);const l=new W,c=new nn,f=new nn;function d(p){let g=0,S=0,_=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let M=0,E=0,C=0,y=0,v=0,w=0,D=0,U=0,G=0,I=0,F=0;p.sort(_A);for(let L=0,ft=p.length;L<ft;L++){const H=p[L],J=H.color,at=H.intensity,lt=H.distance;let tt=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===kr?tt=H.shadow.map.texture:tt=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=J.r*at,S+=J.g*at,_+=J.b*at;else if(H.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(H.sh.coefficients[O],at);F++}else if(H.isDirectionalLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const z=H.shadow,ot=i.get(H);ot.shadowIntensity=z.intensity,ot.shadowBias=z.bias,ot.shadowNormalBias=z.normalBias,ot.shadowRadius=z.radius,ot.shadowMapSize=z.mapSize,s.directionalShadow[M]=ot,s.directionalShadowMap[M]=tt,s.directionalShadowMatrix[M]=H.shadow.matrix,w++}s.directional[M]=O,M++}else if(H.isSpotLight){const O=t.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(J).multiplyScalar(at),O.distance=lt,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,s.spot[C]=O;const z=H.shadow;if(H.map&&(s.spotLightMap[G]=H.map,G++,z.updateMatrices(H),H.castShadow&&I++),s.spotLightMatrix[C]=z.matrix,H.castShadow){const ot=i.get(H);ot.shadowIntensity=z.intensity,ot.shadowBias=z.bias,ot.shadowNormalBias=z.normalBias,ot.shadowRadius=z.radius,ot.shadowMapSize=z.mapSize,s.spotShadow[C]=ot,s.spotShadowMap[C]=tt,U++}C++}else if(H.isRectAreaLight){const O=t.get(H);O.color.copy(J).multiplyScalar(at),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=O,y++}else if(H.isPointLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const z=H.shadow,ot=i.get(H);ot.shadowIntensity=z.intensity,ot.shadowBias=z.bias,ot.shadowNormalBias=z.normalBias,ot.shadowRadius=z.radius,ot.shadowMapSize=z.mapSize,ot.shadowCameraNear=z.camera.near,ot.shadowCameraFar=z.camera.far,s.pointShadow[E]=ot,s.pointShadowMap[E]=tt,s.pointShadowMatrix[E]=H.shadow.matrix,D++}s.point[E]=O,E++}else if(H.isHemisphereLight){const O=t.get(H);O.skyColor.copy(H.color).multiplyScalar(at),O.groundColor.copy(H.groundColor).multiplyScalar(at),s.hemi[v]=O,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=S,s.ambient[2]=_;const T=s.hash;(T.directionalLength!==M||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==y||T.hemiLength!==v||T.numDirectionalShadows!==w||T.numPointShadows!==D||T.numSpotShadows!==U||T.numSpotMaps!==G||T.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=U+G-I,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=F,T.directionalLength=M,T.pointLength=E,T.spotLength=C,T.rectAreaLength=y,T.hemiLength=v,T.numDirectionalShadows=w,T.numPointShadows=D,T.numSpotShadows=U,T.numSpotMaps=G,T.numLightProbes=F,s.version=gA++)}function m(p,g){let S=0,_=0,M=0,E=0,C=0;const y=g.matrixWorldInverse;for(let v=0,w=p.length;v<w;v++){const D=p[v];if(D.isDirectionalLight){const U=s.directional[S];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),S++}else if(D.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const U=s.rectArea[E];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),f.identity(),c.copy(D.matrixWorld),c.premultiply(y),f.extractRotation(c),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const U=s.point[_];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),_++}else if(D.isHemisphereLight){const U=s.hemi[C];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:s}}function Q_(r){const t=new vA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function xA(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Q_(r),t.set(l,[d])):c>=f.length?(d=new Q_(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const SA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,MA=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],EA=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],J_=new nn,Zo=new W,Jh=new W;function bA(r,t,i){let s=new wv;const l=new pe,c=new pe,f=new on,d=new IM,m=new zM,p={},g=i.maxTextureSize,S={[ls]:Qn,[Qn]:ls,[Sa]:Sa},_=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:SA,fragmentShader:yA}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const E=new Xn;E.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Pi(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc;let v=this.type;this.render=function(I,F,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===fy&&(ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jc);const L=r.getRenderTarget(),ft=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Ma),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const at=v!==this.type;at&&F.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach(tt=>tt.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,tt=I.length;lt<tt;lt++){const O=I[lt],z=O.shadow;if(z===void 0){ee("WebGLShadowMap:",O,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const ot=z.getFrameExtents();l.multiply(ot),c.copy(z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ot.x),l.x=c.x*ot.x,z.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ot.y),l.y=c.y*ot.y,z.mapSize.y=c.y));const dt=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=dt,z.map===null||at===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ko){if(O.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Wi(l.x,l.y,{format:kr,type:ba,minFilter:On,magFilter:On,generateMipmaps:!1}),z.map.texture.name=O.name+".shadowMap",z.map.depthTexture=new al(l.x,l.y,ki),z.map.depthTexture.name=O.name+".shadowMapDepth",z.map.depthTexture.format=Ta,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=wn,z.map.depthTexture.magFilter=wn}else O.isPointLight?(z.map=new Fv(l.x),z.map.depthTexture=new DM(l.x,ji)):(z.map=new Wi(l.x,l.y),z.map.depthTexture=new al(l.x,l.y,ji)),z.map.depthTexture.name=O.name+".shadowMap",z.map.depthTexture.format=Ta,this.type===jc?(z.map.depthTexture.compareFunction=dt?tp:$d,z.map.depthTexture.minFilter=On,z.map.depthTexture.magFilter=On):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=wn,z.map.depthTexture.magFilter=wn);z.camera.updateProjectionMatrix()}const bt=z.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<bt;P++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,P),r.clear();else{P===0&&(r.setRenderTarget(z.map),r.clear());const j=z.getViewport(P);f.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),J.viewport(f)}if(O.isPointLight){const j=z.camera,_t=z.matrix,Rt=O.distance||j.far;Rt!==j.far&&(j.far=Rt,j.updateProjectionMatrix()),Zo.setFromMatrixPosition(O.matrixWorld),j.position.copy(Zo),Jh.copy(j.position),Jh.add(MA[P]),j.up.copy(EA[P]),j.lookAt(Jh),j.updateMatrixWorld(),_t.makeTranslation(-Zo.x,-Zo.y,-Zo.z),J_.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z._frustum.setFromProjectionMatrix(J_,j.coordinateSystem,j.reversedDepth)}else z.updateMatrices(O);s=z.getFrustum(),U(F,T,z.camera,O,this.type)}z.isPointLightShadow!==!0&&this.type===Ko&&w(z,T),z.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(L,ft,H)};function w(I,F){const T=t.update(C);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Wi(l.x,l.y,{format:kr,type:ba})),_.uniforms.shadow_pass.value=I.map.depthTexture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(F,null,T,_,C,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(F,null,T,M,C,null)}function D(I,F,T,L){let ft=null;const H=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)ft=H;else if(ft=T.isPointLight===!0?m:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const J=ft.uuid,at=F.uuid;let lt=p[J];lt===void 0&&(lt={},p[J]=lt);let tt=lt[at];tt===void 0&&(tt=ft.clone(),lt[at]=tt,F.addEventListener("dispose",G)),ft=tt}if(ft.visible=F.visible,ft.wireframe=F.wireframe,L===Ko?ft.side=F.shadowSide!==null?F.shadowSide:F.side:ft.side=F.shadowSide!==null?F.shadowSide:S[F.side],ft.alphaMap=F.alphaMap,ft.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,ft.map=F.map,ft.clipShadows=F.clipShadows,ft.clippingPlanes=F.clippingPlanes,ft.clipIntersection=F.clipIntersection,ft.displacementMap=F.displacementMap,ft.displacementScale=F.displacementScale,ft.displacementBias=F.displacementBias,ft.wireframeLinewidth=F.wireframeLinewidth,ft.linewidth=F.linewidth,T.isPointLight===!0&&ft.isMeshDistanceMaterial===!0){const J=r.properties.get(ft);J.light=T}return ft}function U(I,F,T,L,ft){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&ft===Ko)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const at=t.update(I),lt=I.material;if(Array.isArray(lt)){const tt=at.groups;for(let O=0,z=tt.length;O<z;O++){const ot=tt[O],dt=lt[ot.materialIndex];if(dt&&dt.visible){const bt=D(I,dt,L,ft);I.onBeforeShadow(r,I,F,T,at,bt,ot),r.renderBufferDirect(T,null,at,bt,I,ot),I.onAfterShadow(r,I,F,T,at,bt,ot)}}}else if(lt.visible){const tt=D(I,lt,L,ft);I.onBeforeShadow(r,I,F,T,at,tt,null),r.renderBufferDirect(T,null,at,tt,I,null),I.onAfterShadow(r,I,F,T,at,tt,null)}}const J=I.children;for(let at=0,lt=J.length;at<lt;at++)U(J[at],F,T,L,ft)}function G(I){I.target.removeEventListener("dispose",G);for(const T in p){const L=p[T],ft=I.target.uuid;ft in L&&(L[ft].dispose(),delete L[ft])}}}function TA(r,t){function i(){let Y=!1;const Ct=new on;let At=null;const Ft=new on(0,0,0,0);return{setMask:function(Mt){At!==Mt&&!Y&&(r.colorMask(Mt,Mt,Mt,Mt),At=Mt)},setLocked:function(Mt){Y=Mt},setClear:function(Mt,ct,Bt,ie,Fe){Fe===!0&&(Mt*=ie,ct*=ie,Bt*=ie),Ct.set(Mt,ct,Bt,ie),Ft.equals(Ct)===!1&&(r.clearColor(Mt,ct,Bt,ie),Ft.copy(Ct))},reset:function(){Y=!1,At=null,Ft.set(-1,0,0,0)}}}function s(){let Y=!1,Ct=!1,At=null,Ft=null,Mt=null;return{setReversed:function(ct){if(Ct!==ct){const Bt=t.get("EXT_clip_control");ct?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Ct=ct;const ie=Mt;Mt=null,this.setClear(ie)}},getReversed:function(){return Ct},setTest:function(ct){ct?vt(r.DEPTH_TEST):Tt(r.DEPTH_TEST)},setMask:function(ct){At!==ct&&!Y&&(r.depthMask(ct),At=ct)},setFunc:function(ct){if(Ct&&(ct=ky[ct]),Ft!==ct){switch(ct){case nd:r.depthFunc(r.NEVER);break;case id:r.depthFunc(r.ALWAYS);break;case ad:r.depthFunc(r.LESS);break;case Vr:r.depthFunc(r.LEQUAL);break;case sd:r.depthFunc(r.EQUAL);break;case rd:r.depthFunc(r.GEQUAL);break;case od:r.depthFunc(r.GREATER);break;case ld:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ft=ct}},setLocked:function(ct){Y=ct},setClear:function(ct){Mt!==ct&&(Mt=ct,Ct&&(ct=1-ct),r.clearDepth(ct))},reset:function(){Y=!1,At=null,Ft=null,Mt=null,Ct=!1}}}function l(){let Y=!1,Ct=null,At=null,Ft=null,Mt=null,ct=null,Bt=null,ie=null,Fe=null;return{setTest:function(Te){Y||(Te?vt(r.STENCIL_TEST):Tt(r.STENCIL_TEST))},setMask:function(Te){Ct!==Te&&!Y&&(r.stencilMask(Te),Ct=Te)},setFunc:function(Te,Pn,Mi){(At!==Te||Ft!==Pn||Mt!==Mi)&&(r.stencilFunc(Te,Pn,Mi),At=Te,Ft=Pn,Mt=Mi)},setOp:function(Te,Pn,Mi){(ct!==Te||Bt!==Pn||ie!==Mi)&&(r.stencilOp(Te,Pn,Mi),ct=Te,Bt=Pn,ie=Mi)},setLocked:function(Te){Y=Te},setClear:function(Te){Fe!==Te&&(r.clearStencil(Te),Fe=Te)},reset:function(){Y=!1,Ct=null,At=null,Ft=null,Mt=null,ct=null,Bt=null,ie=null,Fe=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},S={},_=new WeakMap,M=[],E=null,C=!1,y=null,v=null,w=null,D=null,U=null,G=null,I=null,F=new ge(0,0,0),T=0,L=!1,ft=null,H=null,J=null,at=null,lt=null;const tt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,z=0;const ot=r.getParameter(r.VERSION);ot.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(ot)[1]),O=z>=1):ot.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),O=z>=2);let dt=null,bt={};const P=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),_t=new on().fromArray(P),Rt=new on().fromArray(j);function It(Y,Ct,At,Ft){const Mt=new Uint8Array(4),ct=r.createTexture();r.bindTexture(Y,ct),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<At;Bt++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Ct,0,r.RGBA,1,1,Ft,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(Ct+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return ct}const nt={};nt[r.TEXTURE_2D]=It(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=It(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=It(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=It(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),vt(r.DEPTH_TEST),f.setFunc(Vr),le(!1),Qe(Q0),vt(r.CULL_FACE),_e(Ma);function vt(Y){g[Y]!==!0&&(r.enable(Y),g[Y]=!0)}function Tt(Y){g[Y]!==!1&&(r.disable(Y),g[Y]=!1)}function Xt(Y,Ct){return S[Y]!==Ct?(r.bindFramebuffer(Y,Ct),S[Y]=Ct,Y===r.DRAW_FRAMEBUFFER&&(S[r.FRAMEBUFFER]=Ct),Y===r.FRAMEBUFFER&&(S[r.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Kt(Y,Ct){let At=M,Ft=!1;if(Y){At=_.get(Ct),At===void 0&&(At=[],_.set(Ct,At));const Mt=Y.textures;if(At.length!==Mt.length||At[0]!==r.COLOR_ATTACHMENT0){for(let ct=0,Bt=Mt.length;ct<Bt;ct++)At[ct]=r.COLOR_ATTACHMENT0+ct;At.length=Mt.length,Ft=!0}}else At[0]!==r.BACK&&(At[0]=r.BACK,Ft=!0);Ft&&r.drawBuffers(At)}function $t(Y){return E!==Y?(r.useProgram(Y),E=Y,!0):!1}const Je={[Os]:r.FUNC_ADD,[dy]:r.FUNC_SUBTRACT,[py]:r.FUNC_REVERSE_SUBTRACT};Je[my]=r.MIN,Je[gy]=r.MAX;const Se={[_y]:r.ZERO,[vy]:r.ONE,[xy]:r.SRC_COLOR,[td]:r.SRC_ALPHA,[Ty]:r.SRC_ALPHA_SATURATE,[Ey]:r.DST_COLOR,[yy]:r.DST_ALPHA,[Sy]:r.ONE_MINUS_SRC_COLOR,[ed]:r.ONE_MINUS_SRC_ALPHA,[by]:r.ONE_MINUS_DST_COLOR,[My]:r.ONE_MINUS_DST_ALPHA,[Ay]:r.CONSTANT_COLOR,[Ry]:r.ONE_MINUS_CONSTANT_COLOR,[Cy]:r.CONSTANT_ALPHA,[wy]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(Y,Ct,At,Ft,Mt,ct,Bt,ie,Fe,Te){if(Y===Ma){C===!0&&(Tt(r.BLEND),C=!1);return}if(C===!1&&(vt(r.BLEND),C=!0),Y!==hy){if(Y!==y||Te!==L){if((v!==Os||U!==Os)&&(r.blendEquation(r.FUNC_ADD),v=Os,U=Os),Te)switch(Y){case Hr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case J0:r.blendFunc(r.ONE,r.ONE);break;case $0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case t_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:De("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Hr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case J0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case $0:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case t_:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",Y);break}w=null,D=null,G=null,I=null,F.set(0,0,0),T=0,y=Y,L=Te}return}Mt=Mt||Ct,ct=ct||At,Bt=Bt||Ft,(Ct!==v||Mt!==U)&&(r.blendEquationSeparate(Je[Ct],Je[Mt]),v=Ct,U=Mt),(At!==w||Ft!==D||ct!==G||Bt!==I)&&(r.blendFuncSeparate(Se[At],Se[Ft],Se[ct],Se[Bt]),w=At,D=Ft,G=ct,I=Bt),(ie.equals(F)===!1||Fe!==T)&&(r.blendColor(ie.r,ie.g,ie.b,Fe),F.copy(ie),T=Fe),y=Y,L=!1}function Ue(Y,Ct){Y.side===Sa?Tt(r.CULL_FACE):vt(r.CULL_FACE);let At=Y.side===Qn;Ct&&(At=!At),le(At),Y.blending===Hr&&Y.transparent===!1?_e(Ma):_e(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Ft=Y.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),qe(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?vt(r.SAMPLE_ALPHA_TO_COVERAGE):Tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function le(Y){ft!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),ft=Y)}function Qe(Y){Y!==cy?(vt(r.CULL_FACE),Y!==H&&(Y===Q0?r.cullFace(r.BACK):Y===uy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Tt(r.CULL_FACE),H=Y}function V(Y){Y!==J&&(O&&r.lineWidth(Y),J=Y)}function qe(Y,Ct,At){Y?(vt(r.POLYGON_OFFSET_FILL),(at!==Ct||lt!==At)&&(at=Ct,lt=At,f.getReversed()&&(Ct=-Ct),r.polygonOffset(Ct,At))):Tt(r.POLYGON_OFFSET_FILL)}function be(Y){Y?vt(r.SCISSOR_TEST):Tt(r.SCISSOR_TEST)}function Ne(Y){Y===void 0&&(Y=r.TEXTURE0+tt-1),dt!==Y&&(r.activeTexture(Y),dt=Y)}function Wt(Y,Ct,At){At===void 0&&(dt===null?At=r.TEXTURE0+tt-1:At=dt);let Ft=bt[At];Ft===void 0&&(Ft={type:void 0,texture:void 0},bt[At]=Ft),(Ft.type!==Y||Ft.texture!==Ct)&&(dt!==At&&(r.activeTexture(At),dt=At),r.bindTexture(Y,Ct||nt[Y]),Ft.type=Y,Ft.texture=Ct)}function N(){const Y=bt[dt];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(Y){De("WebGLState:",Y)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(Y){De("WebGLState:",Y)}}function pt(){try{r.texSubImage2D(...arguments)}catch(Y){De("WebGLState:",Y)}}function St(){try{r.texSubImage3D(...arguments)}catch(Y){De("WebGLState:",Y)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){De("WebGLState:",Y)}}function kt(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){De("WebGLState:",Y)}}function wt(){try{r.texStorage2D(...arguments)}catch(Y){De("WebGLState:",Y)}}function Zt(){try{r.texStorage3D(...arguments)}catch(Y){De("WebGLState:",Y)}}function te(){try{r.texImage2D(...arguments)}catch(Y){De("WebGLState:",Y)}}function Et(){try{r.texImage3D(...arguments)}catch(Y){De("WebGLState:",Y)}}function yt(Y){_t.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),_t.copy(Y))}function Ot(Y){Rt.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),Rt.copy(Y))}function Nt(Y,Ct){let At=p.get(Ct);At===void 0&&(At=new WeakMap,p.set(Ct,At));let Ft=At.get(Y);Ft===void 0&&(Ft=r.getUniformBlockIndex(Ct,Y.name),At.set(Y,Ft))}function Pt(Y,Ct){const Ft=p.get(Ct).get(Y);m.get(Ct)!==Ft&&(r.uniformBlockBinding(Ct,Ft,Y.__bindingPointIndex),m.set(Ct,Ft))}function ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},dt=null,bt={},S={},_=new WeakMap,M=[],E=null,C=!1,y=null,v=null,w=null,D=null,U=null,G=null,I=null,F=new ge(0,0,0),T=0,L=!1,ft=null,H=null,J=null,at=null,lt=null,_t.set(0,0,r.canvas.width,r.canvas.height),Rt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:vt,disable:Tt,bindFramebuffer:Xt,drawBuffers:Kt,useProgram:$t,setBlending:_e,setMaterial:Ue,setFlipSided:le,setCullFace:Qe,setLineWidth:V,setPolygonOffset:qe,setScissorTest:be,activeTexture:Ne,bindTexture:Wt,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:q,texImage2D:te,texImage3D:Et,updateUBOMapping:Nt,uniformBlockBinding:Pt,texStorage2D:wt,texStorage3D:Zt,texSubImage2D:pt,texSubImage3D:St,compressedTexSubImage2D:ut,compressedTexSubImage3D:kt,scissor:yt,viewport:Ot,reset:ue}}function AA(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new pe,g=new WeakMap;let S;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return M?new OffscreenCanvas(N,b):eu("canvas")}function C(N,b,q){let pt=1;const St=Wt(N);if((St.width>q||St.height>q)&&(pt=q/Math.max(St.width,St.height)),pt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ut=Math.floor(pt*St.width),kt=Math.floor(pt*St.height);S===void 0&&(S=E(ut,kt));const wt=b?E(ut,kt):S;return wt.width=ut,wt.height=kt,wt.getContext("2d").drawImage(N,0,0,ut,kt),ee("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ut+"x"+kt+")."),wt}else return"data"in N&&ee("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),N;return N}function y(N){return N.generateMipmaps}function v(N){r.generateMipmap(N)}function w(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(N,b,q,pt,St=!1){if(N!==null){if(r[N]!==void 0)return r[N];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ut=b;if(b===r.RED&&(q===r.FLOAT&&(ut=r.R32F),q===r.HALF_FLOAT&&(ut=r.R16F),q===r.UNSIGNED_BYTE&&(ut=r.R8)),b===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ut=r.R8UI),q===r.UNSIGNED_SHORT&&(ut=r.R16UI),q===r.UNSIGNED_INT&&(ut=r.R32UI),q===r.BYTE&&(ut=r.R8I),q===r.SHORT&&(ut=r.R16I),q===r.INT&&(ut=r.R32I)),b===r.RG&&(q===r.FLOAT&&(ut=r.RG32F),q===r.HALF_FLOAT&&(ut=r.RG16F),q===r.UNSIGNED_BYTE&&(ut=r.RG8)),b===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ut=r.RG8UI),q===r.UNSIGNED_SHORT&&(ut=r.RG16UI),q===r.UNSIGNED_INT&&(ut=r.RG32UI),q===r.BYTE&&(ut=r.RG8I),q===r.SHORT&&(ut=r.RG16I),q===r.INT&&(ut=r.RG32I)),b===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),q===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),q===r.UNSIGNED_INT&&(ut=r.RGB32UI),q===r.BYTE&&(ut=r.RGB8I),q===r.SHORT&&(ut=r.RGB16I),q===r.INT&&(ut=r.RGB32I)),b===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),q===r.UNSIGNED_INT&&(ut=r.RGBA32UI),q===r.BYTE&&(ut=r.RGBA8I),q===r.SHORT&&(ut=r.RGBA16I),q===r.INT&&(ut=r.RGBA32I)),b===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ut=r.R11F_G11F_B10F)),b===r.RGBA){const kt=St?tu:Ae.getTransfer(pt);q===r.FLOAT&&(ut=r.RGBA32F),q===r.HALF_FLOAT&&(ut=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ut=kt===Be?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function U(N,b){let q;return N?b===null||b===ji||b===el?q=r.DEPTH24_STENCIL8:b===ki?q=r.DEPTH32F_STENCIL8:b===tl&&(q=r.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ji||b===el?q=r.DEPTH_COMPONENT24:b===ki?q=r.DEPTH_COMPONENT32F:b===tl&&(q=r.DEPTH_COMPONENT16),q}function G(N,b){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==wn&&N.minFilter!==On?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function I(N){const b=N.target;b.removeEventListener("dispose",I),T(b),b.isVideoTexture&&g.delete(b)}function F(N){const b=N.target;b.removeEventListener("dispose",F),ft(b)}function T(N){const b=s.get(N);if(b.__webglInit===void 0)return;const q=N.source,pt=_.get(q);if(pt){const St=pt[b.__cacheKey];St.usedTimes--,St.usedTimes===0&&L(N),Object.keys(pt).length===0&&_.delete(q)}s.remove(N)}function L(N){const b=s.get(N);r.deleteTexture(b.__webglTexture);const q=N.source,pt=_.get(q);delete pt[b.__cacheKey],f.memory.textures--}function ft(N){const b=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(b.__webglFramebuffer[pt]))for(let St=0;St<b.__webglFramebuffer[pt].length;St++)r.deleteFramebuffer(b.__webglFramebuffer[pt][St]);else r.deleteFramebuffer(b.__webglFramebuffer[pt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[pt])}else{if(Array.isArray(b.__webglFramebuffer))for(let pt=0;pt<b.__webglFramebuffer.length;pt++)r.deleteFramebuffer(b.__webglFramebuffer[pt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pt=0;pt<b.__webglColorRenderbuffer.length;pt++)b.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[pt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=N.textures;for(let pt=0,St=q.length;pt<St;pt++){const ut=s.get(q[pt]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),f.memory.textures--),s.remove(q[pt])}s.remove(N)}let H=0;function J(){H=0}function at(){const N=H;return N>=l.maxTextures&&ee("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),H+=1,N}function lt(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function tt(N,b){const q=s.get(N);if(N.isVideoTexture&&be(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){const pt=N.image;if(pt===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(q,N,b);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+b)}function O(N,b){const q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){nt(q,N,b);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+b)}function z(N,b){const q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){nt(q,N,b);return}i.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+b)}function ot(N,b){const q=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){vt(q,N,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+b)}const dt={[cd]:r.REPEAT,[ya]:r.CLAMP_TO_EDGE,[ud]:r.MIRRORED_REPEAT},bt={[wn]:r.NEAREST,[Ly]:r.NEAREST_MIPMAP_NEAREST,[Sc]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[Eh]:r.LINEAR_MIPMAP_NEAREST,[Fs]:r.LINEAR_MIPMAP_LINEAR},P={[Py]:r.NEVER,[Hy]:r.ALWAYS,[Fy]:r.LESS,[$d]:r.LEQUAL,[Iy]:r.EQUAL,[tp]:r.GEQUAL,[zy]:r.GREATER,[By]:r.NOTEQUAL};function j(N,b){if(b.type===ki&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===On||b.magFilter===Eh||b.magFilter===Sc||b.magFilter===Fs||b.minFilter===On||b.minFilter===Eh||b.minFilter===Sc||b.minFilter===Fs)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,dt[b.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,dt[b.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,dt[b.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,bt[b.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,bt[b.minFilter]),b.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,P[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===wn||b.minFilter!==Sc&&b.minFilter!==Fs||b.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function _t(N,b){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",I));const pt=b.source;let St=_.get(pt);St===void 0&&(St={},_.set(pt,St));const ut=lt(b);if(ut!==N.__cacheKey){St[ut]===void 0&&(St[ut]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,q=!0),St[ut].usedTimes++;const kt=St[N.__cacheKey];kt!==void 0&&(St[N.__cacheKey].usedTimes--,kt.usedTimes===0&&L(b)),N.__cacheKey=ut,N.__webglTexture=St[ut].texture}return q}function Rt(N,b,q){return Math.floor(Math.floor(N/q)/b)}function It(N,b,q,pt){const ut=N.updateRanges;if(ut.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,q,pt,b.data);else{ut.sort((Et,yt)=>Et.start-yt.start);let kt=0;for(let Et=1;Et<ut.length;Et++){const yt=ut[kt],Ot=ut[Et],Nt=yt.start+yt.count,Pt=Rt(Ot.start,b.width,4),ue=Rt(yt.start,b.width,4);Ot.start<=Nt+1&&Pt===ue&&Rt(Ot.start+Ot.count-1,b.width,4)===Pt?yt.count=Math.max(yt.count,Ot.start+Ot.count-yt.start):(++kt,ut[kt]=Ot)}ut.length=kt+1;const wt=r.getParameter(r.UNPACK_ROW_LENGTH),Zt=r.getParameter(r.UNPACK_SKIP_PIXELS),te=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Et=0,yt=ut.length;Et<yt;Et++){const Ot=ut[Et],Nt=Math.floor(Ot.start/4),Pt=Math.ceil(Ot.count/4),ue=Nt%b.width,Y=Math.floor(Nt/b.width),Ct=Pt,At=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ue),r.pixelStorei(r.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(r.TEXTURE_2D,0,ue,Y,Ct,At,q,pt,b.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,wt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Zt),r.pixelStorei(r.UNPACK_SKIP_ROWS,te)}}function nt(N,b,q){let pt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pt=r.TEXTURE_3D);const St=_t(N,b),ut=b.source;i.bindTexture(pt,N.__webglTexture,r.TEXTURE0+q);const kt=s.get(ut);if(ut.version!==kt.__version||St===!0){i.activeTexture(r.TEXTURE0+q);const wt=Ae.getPrimaries(Ae.workingColorSpace),Zt=b.colorSpace===rs?null:Ae.getPrimaries(b.colorSpace),te=b.colorSpace===rs||wt===Zt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Et=C(b.image,!1,l.maxTextureSize);Et=Ne(b,Et);const yt=c.convert(b.format,b.colorSpace),Ot=c.convert(b.type);let Nt=D(b.internalFormat,yt,Ot,b.colorSpace,b.isVideoTexture);j(pt,b);let Pt;const ue=b.mipmaps,Y=b.isVideoTexture!==!0,Ct=kt.__version===void 0||St===!0,At=ut.dataReady,Ft=G(b,Et);if(b.isDepthTexture)Nt=U(b.format===Is,b.type),Ct&&(Y?i.texStorage2D(r.TEXTURE_2D,1,Nt,Et.width,Et.height):i.texImage2D(r.TEXTURE_2D,0,Nt,Et.width,Et.height,0,yt,Ot,null));else if(b.isDataTexture)if(ue.length>0){Y&&Ct&&i.texStorage2D(r.TEXTURE_2D,Ft,Nt,ue[0].width,ue[0].height);for(let Mt=0,ct=ue.length;Mt<ct;Mt++)Pt=ue[Mt],Y?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,yt,Ot,Pt.data):i.texImage2D(r.TEXTURE_2D,Mt,Nt,Pt.width,Pt.height,0,yt,Ot,Pt.data);b.generateMipmaps=!1}else Y?(Ct&&i.texStorage2D(r.TEXTURE_2D,Ft,Nt,Et.width,Et.height),At&&It(b,Et,yt,Ot)):i.texImage2D(r.TEXTURE_2D,0,Nt,Et.width,Et.height,0,yt,Ot,Et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Y&&Ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,Nt,ue[0].width,ue[0].height,Et.depth);for(let Mt=0,ct=ue.length;Mt<ct;Mt++)if(Pt=ue[Mt],b.format!==Ni)if(yt!==null)if(Y){if(At)if(b.layerUpdates.size>0){const Bt=w_(Pt.width,Pt.height,b.format,b.type);for(const ie of b.layerUpdates){const Fe=Pt.data.subarray(ie*Bt/Pt.data.BYTES_PER_ELEMENT,(ie+1)*Bt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,ie,Pt.width,Pt.height,1,yt,Fe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Pt.width,Pt.height,Et.depth,yt,Pt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Mt,Nt,Pt.width,Pt.height,Et.depth,0,Pt.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?At&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Pt.width,Pt.height,Et.depth,yt,Ot,Pt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Mt,Nt,Pt.width,Pt.height,Et.depth,0,yt,Ot,Pt.data)}else{Y&&Ct&&i.texStorage2D(r.TEXTURE_2D,Ft,Nt,ue[0].width,ue[0].height);for(let Mt=0,ct=ue.length;Mt<ct;Mt++)Pt=ue[Mt],b.format!==Ni?yt!==null?Y?At&&i.compressedTexSubImage2D(r.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,yt,Pt.data):i.compressedTexImage2D(r.TEXTURE_2D,Mt,Nt,Pt.width,Pt.height,0,Pt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,yt,Ot,Pt.data):i.texImage2D(r.TEXTURE_2D,Mt,Nt,Pt.width,Pt.height,0,yt,Ot,Pt.data)}else if(b.isDataArrayTexture)if(Y){if(Ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,Nt,Et.width,Et.height,Et.depth),At)if(b.layerUpdates.size>0){const Mt=w_(Et.width,Et.height,b.format,b.type);for(const ct of b.layerUpdates){const Bt=Et.data.subarray(ct*Mt/Et.data.BYTES_PER_ELEMENT,(ct+1)*Mt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ct,Et.width,Et.height,1,yt,Ot,Bt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,yt,Ot,Et.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Nt,Et.width,Et.height,Et.depth,0,yt,Ot,Et.data);else if(b.isData3DTexture)Y?(Ct&&i.texStorage3D(r.TEXTURE_3D,Ft,Nt,Et.width,Et.height,Et.depth),At&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,yt,Ot,Et.data)):i.texImage3D(r.TEXTURE_3D,0,Nt,Et.width,Et.height,Et.depth,0,yt,Ot,Et.data);else if(b.isFramebufferTexture){if(Ct)if(Y)i.texStorage2D(r.TEXTURE_2D,Ft,Nt,Et.width,Et.height);else{let Mt=Et.width,ct=Et.height;for(let Bt=0;Bt<Ft;Bt++)i.texImage2D(r.TEXTURE_2D,Bt,Nt,Mt,ct,0,yt,Ot,null),Mt>>=1,ct>>=1}}else if(ue.length>0){if(Y&&Ct){const Mt=Wt(ue[0]);i.texStorage2D(r.TEXTURE_2D,Ft,Nt,Mt.width,Mt.height)}for(let Mt=0,ct=ue.length;Mt<ct;Mt++)Pt=ue[Mt],Y?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,yt,Ot,Pt):i.texImage2D(r.TEXTURE_2D,Mt,Nt,yt,Ot,Pt);b.generateMipmaps=!1}else if(Y){if(Ct){const Mt=Wt(Et);i.texStorage2D(r.TEXTURE_2D,Ft,Nt,Mt.width,Mt.height)}At&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,yt,Ot,Et)}else i.texImage2D(r.TEXTURE_2D,0,Nt,yt,Ot,Et);y(b)&&v(pt),kt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function vt(N,b,q){if(b.image.length!==6)return;const pt=_t(N,b),St=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+q);const ut=s.get(St);if(St.version!==ut.__version||pt===!0){i.activeTexture(r.TEXTURE0+q);const kt=Ae.getPrimaries(Ae.workingColorSpace),wt=b.colorSpace===rs?null:Ae.getPrimaries(b.colorSpace),Zt=b.colorSpace===rs||kt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const te=b.isCompressedTexture||b.image[0].isCompressedTexture,Et=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let ct=0;ct<6;ct++)!te&&!Et?yt[ct]=C(b.image[ct],!0,l.maxCubemapSize):yt[ct]=Et?b.image[ct].image:b.image[ct],yt[ct]=Ne(b,yt[ct]);const Ot=yt[0],Nt=c.convert(b.format,b.colorSpace),Pt=c.convert(b.type),ue=D(b.internalFormat,Nt,Pt,b.colorSpace),Y=b.isVideoTexture!==!0,Ct=ut.__version===void 0||pt===!0,At=St.dataReady;let Ft=G(b,Ot);j(r.TEXTURE_CUBE_MAP,b);let Mt;if(te){Y&&Ct&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,ue,Ot.width,Ot.height);for(let ct=0;ct<6;ct++){Mt=yt[ct].mipmaps;for(let Bt=0;Bt<Mt.length;Bt++){const ie=Mt[Bt];b.format!==Ni?Nt!==null?Y?At&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,0,0,ie.width,ie.height,Nt,ie.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,ue,ie.width,ie.height,0,ie.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,0,0,ie.width,ie.height,Nt,Pt,ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,ue,ie.width,ie.height,0,Nt,Pt,ie.data)}}}else{if(Mt=b.mipmaps,Y&&Ct){Mt.length>0&&Ft++;const ct=Wt(yt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,ue,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Et){Y?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,yt[ct].width,yt[ct].height,Nt,Pt,yt[ct].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ue,yt[ct].width,yt[ct].height,0,Nt,Pt,yt[ct].data);for(let Bt=0;Bt<Mt.length;Bt++){const Fe=Mt[Bt].image[ct].image;Y?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,0,0,Fe.width,Fe.height,Nt,Pt,Fe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,ue,Fe.width,Fe.height,0,Nt,Pt,Fe.data)}}else{Y?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Nt,Pt,yt[ct]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ue,Nt,Pt,yt[ct]);for(let Bt=0;Bt<Mt.length;Bt++){const ie=Mt[Bt];Y?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,0,0,Nt,Pt,ie.image[ct]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,ue,Nt,Pt,ie.image[ct])}}}y(b)&&v(r.TEXTURE_CUBE_MAP),ut.__version=St.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Tt(N,b,q,pt,St,ut){const kt=c.convert(q.format,q.colorSpace),wt=c.convert(q.type),Zt=D(q.internalFormat,kt,wt,q.colorSpace),te=s.get(b),Et=s.get(q);if(Et.__renderTarget=b,!te.__hasExternalTextures){const yt=Math.max(1,b.width>>ut),Ot=Math.max(1,b.height>>ut);St===r.TEXTURE_3D||St===r.TEXTURE_2D_ARRAY?i.texImage3D(St,ut,Zt,yt,Ot,b.depth,0,kt,wt,null):i.texImage2D(St,ut,Zt,yt,Ot,0,kt,wt,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),qe(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,St,Et.__webglTexture,0,V(b)):(St===r.TEXTURE_2D||St>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pt,St,Et.__webglTexture,ut),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(N,b,q){if(r.bindRenderbuffer(r.RENDERBUFFER,N),b.depthBuffer){const pt=b.depthTexture,St=pt&&pt.isDepthTexture?pt.type:null,ut=U(b.stencilBuffer,St),kt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;qe(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(b),ut,b.width,b.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(b),ut,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ut,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,kt,r.RENDERBUFFER,N)}else{const pt=b.textures;for(let St=0;St<pt.length;St++){const ut=pt[St],kt=c.convert(ut.format,ut.colorSpace),wt=c.convert(ut.type),Zt=D(ut.internalFormat,kt,wt,ut.colorSpace);qe(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(b),Zt,b.width,b.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(b),Zt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Zt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Kt(N,b,q){const pt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=s.get(b.depthTexture);if(St.__renderTarget=b,(!St.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),pt){if(St.__webglInit===void 0&&(St.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),St.__webglTexture===void 0){St.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,St.__webglTexture),j(r.TEXTURE_CUBE_MAP,b.depthTexture);const te=c.convert(b.depthTexture.format),Et=c.convert(b.depthTexture.type);let yt;b.depthTexture.format===Ta?yt=r.DEPTH_COMPONENT24:b.depthTexture.format===Is&&(yt=r.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,yt,b.width,b.height,0,te,Et,null)}}else tt(b.depthTexture,0);const ut=St.__webglTexture,kt=V(b),wt=pt?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,Zt=b.depthTexture.format===Is?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ta)qe(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Zt,wt,ut,0,kt):r.framebufferTexture2D(r.FRAMEBUFFER,Zt,wt,ut,0);else if(b.depthTexture.format===Is)qe(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Zt,wt,ut,0,kt):r.framebufferTexture2D(r.FRAMEBUFFER,Zt,wt,ut,0);else throw new Error("Unknown depthTexture format")}function $t(N){const b=s.get(N),q=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const pt=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pt){const St=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pt.removeEventListener("dispose",St)};pt.addEventListener("dispose",St),b.__depthDisposeCallback=St}b.__boundDepthTexture=pt}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let pt=0;pt<6;pt++)Kt(b.__webglFramebuffer[pt],N,pt);else{const pt=N.texture.mipmaps;pt&&pt.length>0?Kt(b.__webglFramebuffer[0],N,0):Kt(b.__webglFramebuffer,N,0)}else if(q){b.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[pt]),b.__webglDepthbuffer[pt]===void 0)b.__webglDepthbuffer[pt]=r.createRenderbuffer(),Xt(b.__webglDepthbuffer[pt],N,!1);else{const St=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer[pt];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ut)}}else{const pt=N.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Xt(b.__webglDepthbuffer,N,!1);else{const St=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ut)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(N,b,q){const pt=s.get(N);b!==void 0&&Tt(pt.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&$t(N)}function Se(N){const b=N.texture,q=s.get(N),pt=s.get(b);N.addEventListener("dispose",F);const St=N.textures,ut=N.isWebGLCubeRenderTarget===!0,kt=St.length>1;if(kt||(pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture()),pt.__version=b.version,f.memory.textures++),ut){q.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[wt]=[];for(let Zt=0;Zt<b.mipmaps.length;Zt++)q.__webglFramebuffer[wt][Zt]=r.createFramebuffer()}else q.__webglFramebuffer[wt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let wt=0;wt<b.mipmaps.length;wt++)q.__webglFramebuffer[wt]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(kt)for(let wt=0,Zt=St.length;wt<Zt;wt++){const te=s.get(St[wt]);te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture(),f.memory.textures++)}if(N.samples>0&&qe(N)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let wt=0;wt<St.length;wt++){const Zt=St[wt];q.__webglColorRenderbuffer[wt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[wt]);const te=c.convert(Zt.format,Zt.colorSpace),Et=c.convert(Zt.type),yt=D(Zt.internalFormat,te,Et,Zt.colorSpace,N.isXRRenderTarget===!0),Ot=V(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot,yt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,q.__webglColorRenderbuffer[wt])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Xt(q.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){i.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),j(r.TEXTURE_CUBE_MAP,b);for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Zt=0;Zt<b.mipmaps.length;Zt++)Tt(q.__webglFramebuffer[wt][Zt],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Zt);else Tt(q.__webglFramebuffer[wt],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(b)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(kt){for(let wt=0,Zt=St.length;wt<Zt;wt++){const te=St[wt],Et=s.get(te);let yt=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(yt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(yt,Et.__webglTexture),j(yt,te),Tt(q.__webglFramebuffer,N,te,r.COLOR_ATTACHMENT0+wt,yt,0),y(te)&&v(yt)}i.unbindTexture()}else{let wt=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(wt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,pt.__webglTexture),j(wt,b),b.mipmaps&&b.mipmaps.length>0)for(let Zt=0;Zt<b.mipmaps.length;Zt++)Tt(q.__webglFramebuffer[Zt],N,b,r.COLOR_ATTACHMENT0,wt,Zt);else Tt(q.__webglFramebuffer,N,b,r.COLOR_ATTACHMENT0,wt,0);y(b)&&v(wt),i.unbindTexture()}N.depthBuffer&&$t(N)}function _e(N){const b=N.textures;for(let q=0,pt=b.length;q<pt;q++){const St=b[q];if(y(St)){const ut=w(N),kt=s.get(St).__webglTexture;i.bindTexture(ut,kt),v(ut),i.unbindTexture()}}}const Ue=[],le=[];function Qe(N){if(N.samples>0){if(qe(N)===!1){const b=N.textures,q=N.width,pt=N.height;let St=r.COLOR_BUFFER_BIT;const ut=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,kt=s.get(N),wt=b.length>1;if(wt)for(let te=0;te<b.length;te++)i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const Zt=N.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let te=0;te<b.length;te++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(St|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(St|=r.STENCIL_BUFFER_BIT)),wt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,kt.__webglColorRenderbuffer[te]);const Et=s.get(b[te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,q,pt,0,0,q,pt,St,r.NEAREST),m===!0&&(Ue.length=0,le.length=0,Ue.push(r.COLOR_ATTACHMENT0+te),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ue.push(ut),le.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,le)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ue))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),wt)for(let te=0;te<b.length;te++){i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,kt.__webglColorRenderbuffer[te]);const Et=s.get(b[te]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,Et,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function V(N){return Math.min(l.maxSamples,N.samples)}function qe(N){const b=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function be(N){const b=f.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function Ne(N,b){const q=N.colorSpace,pt=N.format,St=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==Yr&&q!==rs&&(Ae.getTransfer(q)===Be?(pt!==Ni||St!==yi)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",q)),b}function Wt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=J,this.setTexture2D=tt,this.setTexture2DArray=O,this.setTexture3D=z,this.setTextureCube=ot,this.rebindTextures=Je,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function RA(r,t){function i(s,l=rs){let c;const f=Ae.getTransfer(l);if(s===yi)return r.UNSIGNED_BYTE;if(s===jd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Zd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===gv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===_v)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===pv)return r.BYTE;if(s===mv)return r.SHORT;if(s===tl)return r.UNSIGNED_SHORT;if(s===qd)return r.INT;if(s===ji)return r.UNSIGNED_INT;if(s===ki)return r.FLOAT;if(s===ba)return r.HALF_FLOAT;if(s===vv)return r.ALPHA;if(s===xv)return r.RGB;if(s===Ni)return r.RGBA;if(s===Ta)return r.DEPTH_COMPONENT;if(s===Is)return r.DEPTH_STENCIL;if(s===Sv)return r.RED;if(s===Kd)return r.RED_INTEGER;if(s===kr)return r.RG;if(s===Qd)return r.RG_INTEGER;if(s===Jd)return r.RGBA_INTEGER;if(s===Zc||s===Kc||s===Qc||s===Jc)if(f===Be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===fd||s===hd||s===dd||s===pd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===fd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===hd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===dd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===pd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===md||s===gd||s===_d||s===vd||s===xd||s===Sd||s===yd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===md||s===gd)return f===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===_d)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===vd)return c.COMPRESSED_R11_EAC;if(s===xd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Sd)return c.COMPRESSED_RG11_EAC;if(s===yd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Md||s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Ld||s===Nd||s===Od||s===Pd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Md)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ed)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Td)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ad)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Dd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ud)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ld)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Nd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Od)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Pd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fd||s===Id||s===zd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Fd)return f===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Id)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===zd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Bd||s===Hd||s===Gd||s===Vd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Bd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Hd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Gd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===el?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const CA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class DA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Lv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Zi({vertexShader:CA,fragmentShader:wA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Pi(new lu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UA extends Bs{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,S=null,_=null,M=null,E=null;const C=typeof XRWebGLBinding<"u",y=new DA,v={},w=i.getContextAttributes();let D=null,U=null;const G=[],I=[],F=new pe;let T=null;const L=new ui;L.viewport=new on;const ft=new ui;ft.viewport=new on;const H=[L,ft],J=new HM;let at=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let vt=G[nt];return vt===void 0&&(vt=new wh,G[nt]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(nt){let vt=G[nt];return vt===void 0&&(vt=new wh,G[nt]=vt),vt.getGripSpace()},this.getHand=function(nt){let vt=G[nt];return vt===void 0&&(vt=new wh,G[nt]=vt),vt.getHandSpace()};function tt(nt){const vt=I.indexOf(nt.inputSource);if(vt===-1)return;const Tt=G[vt];Tt!==void 0&&(Tt.update(nt.inputSource,nt.frame,p||f),Tt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function O(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",z);for(let nt=0;nt<G.length;nt++){const vt=I[nt];vt!==null&&(I[nt]=null,G[nt].disconnect(vt))}at=null,lt=null,y.reset();for(const nt in v)delete v[nt];t.setRenderTarget(D),M=null,_=null,S=null,l=null,U=null,It.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,s.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",O),l.addEventListener("inputsourceschange",z),w.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Xt=null,Kt=null;w.depth&&(Kt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=w.stencil?Is:Ta,Xt=w.stencil?el:ji);const $t={colorFormat:i.RGBA8,depthFormat:Kt,scaleFactor:c};S=this.getBinding(),_=S.createProjectionLayer($t),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),U=new Wi(_.textureWidth,_.textureHeight,{format:Ni,type:yi,depthTexture:new al(_.textureWidth,_.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Tt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Wi(M.framebufferWidth,M.framebufferHeight,{format:Ni,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),It.setContext(l),It.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function z(nt){for(let vt=0;vt<nt.removed.length;vt++){const Tt=nt.removed[vt],Xt=I.indexOf(Tt);Xt>=0&&(I[Xt]=null,G[Xt].disconnect(Tt))}for(let vt=0;vt<nt.added.length;vt++){const Tt=nt.added[vt];let Xt=I.indexOf(Tt);if(Xt===-1){for(let $t=0;$t<G.length;$t++)if($t>=I.length){I.push(Tt),Xt=$t;break}else if(I[$t]===null){I[$t]=Tt,Xt=$t;break}if(Xt===-1)break}const Kt=G[Xt];Kt&&Kt.connect(Tt)}}const ot=new W,dt=new W;function bt(nt,vt,Tt){ot.setFromMatrixPosition(vt.matrixWorld),dt.setFromMatrixPosition(Tt.matrixWorld);const Xt=ot.distanceTo(dt),Kt=vt.projectionMatrix.elements,$t=Tt.projectionMatrix.elements,Je=Kt[14]/(Kt[10]-1),Se=Kt[14]/(Kt[10]+1),_e=(Kt[9]+1)/Kt[5],Ue=(Kt[9]-1)/Kt[5],le=(Kt[8]-1)/Kt[0],Qe=($t[8]+1)/$t[0],V=Je*le,qe=Je*Qe,be=Xt/(-le+Qe),Ne=be*-le;if(vt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Ne),nt.translateZ(be),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Kt[10]===-1)nt.projectionMatrix.copy(vt.projectionMatrix),nt.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Wt=Je+be,N=Se+be,b=V-Ne,q=qe+(Xt-Ne),pt=_e*Se/N*Wt,St=Ue*Se/N*Wt;nt.projectionMatrix.makePerspective(b,q,pt,St,Wt,N),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function P(nt,vt){vt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(vt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let vt=nt.near,Tt=nt.far;y.texture!==null&&(y.depthNear>0&&(vt=y.depthNear),y.depthFar>0&&(Tt=y.depthFar)),J.near=ft.near=L.near=vt,J.far=ft.far=L.far=Tt,(at!==J.near||lt!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),at=J.near,lt=J.far),J.layers.mask=nt.layers.mask|6,L.layers.mask=J.layers.mask&-5,ft.layers.mask=J.layers.mask&-3;const Xt=nt.parent,Kt=J.cameras;P(J,Xt);for(let $t=0;$t<Kt.length;$t++)P(Kt[$t],Xt);Kt.length===2?bt(J,L,ft):J.projectionMatrix.copy(L.projectionMatrix),j(nt,J,Xt)};function j(nt,vt,Tt){Tt===null?nt.matrix.copy(vt.matrixWorld):(nt.matrix.copy(Tt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(vt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(vt.projectionMatrix),nt.projectionMatrixInverse.copy(vt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=il*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(nt){m=nt,_!==null&&(_.fixedFoveation=nt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=nt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function(nt){return v[nt]};let _t=null;function Rt(nt,vt){if(g=vt.getViewerPose(p||f),E=vt,g!==null){const Tt=g.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let Xt=!1;Tt.length!==J.cameras.length&&(J.cameras.length=0,Xt=!0);for(let Se=0;Se<Tt.length;Se++){const _e=Tt[Se];let Ue=null;if(M!==null)Ue=M.getViewport(_e);else{const Qe=S.getViewSubImage(_,_e);Ue=Qe.viewport,Se===0&&(t.setRenderTargetTextures(U,Qe.colorTexture,Qe.depthStencilTexture),t.setRenderTarget(U))}let le=H[Se];le===void 0&&(le=new ui,le.layers.enable(Se),le.viewport=new on,H[Se]=le),le.matrix.fromArray(_e.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(_e.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Se===0&&(J.matrix.copy(le.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Xt===!0&&J.cameras.push(le)}const Kt=l.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){S=s.getBinding();const Se=S.getDepthInformation(Tt[0]);Se&&Se.isValid&&Se.texture&&y.init(Se,l.renderState)}if(Kt&&Kt.includes("camera-access")&&C){t.state.unbindTexture(),S=s.getBinding();for(let Se=0;Se<Tt.length;Se++){const _e=Tt[Se].camera;if(_e){let Ue=v[_e];Ue||(Ue=new Lv,v[_e]=Ue);const le=S.getCameraImage(_e);Ue.sourceTexture=le}}}}for(let Tt=0;Tt<G.length;Tt++){const Xt=I[Tt],Kt=G[Tt];Xt!==null&&Kt!==void 0&&Kt.update(Xt,vt,p||f)}_t&&_t(nt,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),E=null}const It=new Pv;It.setAnimationLoop(Rt),this.setAnimationLoop=function(nt){_t=nt},this.dispose=function(){}}}const Ns=new Aa,LA=new nn;function NA(r,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,Nv(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,w,D,U){v.isMeshBasicMaterial?c(y,v):v.isMeshLambertMaterial?(c(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(y,v),S(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(y,v),_(y,v),v.isMeshPhysicalMaterial&&M(y,v,U)):v.isMeshMatcapMaterial?(c(y,v),E(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),C(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,w,D):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Qn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Qn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const w=t.get(v),D=w.envMap,U=w.envMapRotation;D&&(y.envMap.value=D,Ns.copy(U),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),y.envMapRotation.value.setFromMatrix4(LA.makeRotationFromEuler(Ns)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,w,D){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*w,y.scale.value=D*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function S(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function _(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,w){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Qn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const w=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function OA(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,D){const U=D.program;s.uniformBlockBinding(w,U)}function p(w,D){let U=l[w.id];U===void 0&&(E(w),U=g(w),l[w.id]=U,w.addEventListener("dispose",y));const G=D.program;s.updateUBOMapping(w,G);const I=t.render.frame;c[w.id]!==I&&(_(w),c[w.id]=I)}function g(w){const D=S();w.__bindingPointIndex=D;const U=r.createBuffer(),G=w.__size,I=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,G,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,U),U}function S(){for(let w=0;w<d;w++)if(f.indexOf(w)===-1)return f.push(w),w;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const D=l[w.id],U=w.uniforms,G=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let I=0,F=U.length;I<F;I++){const T=Array.isArray(U[I])?U[I]:[U[I]];for(let L=0,ft=T.length;L<ft;L++){const H=T[L];if(M(H,I,L,G)===!0){const J=H.__offset,at=Array.isArray(H.value)?H.value:[H.value];let lt=0;for(let tt=0;tt<at.length;tt++){const O=at[tt],z=C(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,J+lt,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,lt),lt+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(w,D,U,G){const I=w.value,F=D+"_"+U;if(G[F]===void 0)return typeof I=="number"||typeof I=="boolean"?G[F]=I:G[F]=I.clone(),!0;{const T=G[F];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return G[F]=I,!0}else if(T.equals(I)===!1)return T.copy(I),!0}return!1}function E(w){const D=w.uniforms;let U=0;const G=16;for(let F=0,T=D.length;F<T;F++){const L=Array.isArray(D[F])?D[F]:[D[F]];for(let ft=0,H=L.length;ft<H;ft++){const J=L[ft],at=Array.isArray(J.value)?J.value:[J.value];for(let lt=0,tt=at.length;lt<tt;lt++){const O=at[lt],z=C(O),ot=U%G,dt=ot%z.boundary,bt=ot+dt;U+=dt,bt!==0&&G-bt<z.storage&&(U+=G-bt),J.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=U,U+=z.storage}}}const I=U%G;return I>0&&(U+=G-I),w.__size=U,w.__cache={},this}function C(w){const D={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(D.boundary=4,D.storage=4):w.isVector2?(D.boundary=8,D.storage=8):w.isVector3||w.isColor?(D.boundary=16,D.storage=12):w.isVector4?(D.boundary=16,D.storage=16):w.isMatrix3?(D.boundary=48,D.storage=48):w.isMatrix4?(D.boundary=64,D.storage=64):w.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ee("WebGLRenderer: Unsupported uniform value type.",w),D}function y(w){const D=w.target;D.removeEventListener("dispose",y);const U=f.indexOf(D.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function v(){for(const w in l)r.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const PA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function FA(){return Vi===null&&(Vi=new AM(PA,16,16,kr,ba),Vi.name="DFG_LUT",Vi.minFilter=On,Vi.magFilter=On,Vi.wrapS=ya,Vi.wrapT=ya,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class IA{constructor(t={}){const{canvas:i=Vy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:_=!1,outputBufferType:M=yi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const C=M,y=new Set([Jd,Qd,Kd]),v=new Set([yi,ji,tl,el,jd,Zd]),w=new Uint32Array(4),D=new Int32Array(4);let U=null,G=null;const I=[],F=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let ft=!1;this._outputColorSpace=Si;let H=0,J=0,at=null,lt=-1,tt=null;const O=new on,z=new on;let ot=null;const dt=new ge(0);let bt=0,P=i.width,j=i.height,_t=1,Rt=null,It=null;const nt=new on(0,0,P,j),vt=new on(0,0,P,j);let Tt=!1;const Xt=new wv;let Kt=!1,$t=!1;const Je=new nn,Se=new W,_e=new on,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function Qe(){return at===null?_t:1}let V=s;function qe(R,k){return i.getContext(R,k)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Wd}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",ie,!1),i.addEventListener("webglcontextcreationerror",Fe,!1),V===null){const k="webgl2";if(V=qe(k,R),V===null)throw qe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw De("WebGLRenderer: "+R.message),R}let be,Ne,Wt,N,b,q,pt,St,ut,kt,wt,Zt,te,Et,yt,Ot,Nt,Pt,ue,Y,Ct,At,Ft;function Mt(){be=new IT(V),be.init(),Ct=new RA(V,be),Ne=new wT(V,be,t,Ct),Wt=new TA(V,be),Ne.reversedDepthBuffer&&_&&Wt.buffers.depth.setReversed(!0),N=new HT(V),b=new fA,q=new AA(V,be,Wt,b,Ne,Ct,N),pt=new FT(L),St=new YM(V),At=new RT(V,St),ut=new zT(V,St,N,At),kt=new VT(V,ut,St,At,N),Pt=new GT(V,Ne,q),yt=new DT(b),wt=new uA(L,pt,be,Ne,At,yt),Zt=new NA(L,b),te=new dA,Et=new xA(be),Nt=new AT(L,pt,Wt,kt,E,m),Ot=new bA(L,kt,Ne),Ft=new OA(V,N,Ne,Wt),ue=new CT(V,be,N),Y=new BT(V,be,N),N.programs=wt.programs,L.capabilities=Ne,L.extensions=be,L.properties=b,L.renderLists=te,L.shadowMap=Ot,L.state=Wt,L.info=N}Mt(),C!==yi&&(T=new kT(C,i.width,i.height,l,c));const ct=new UA(L,V);this.xr=ct,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=be.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=be.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(R){R!==void 0&&(_t=R,this.setSize(P,j,!1))},this.getSize=function(R){return R.set(P,j)},this.setSize=function(R,k,st=!0){if(ct.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,j=k,i.width=Math.floor(R*_t),i.height=Math.floor(k*_t),st===!0&&(i.style.width=R+"px",i.style.height=k+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(P*_t,j*_t).floor()},this.setDrawingBufferSize=function(R,k,st){P=R,j=k,_t=st,i.width=Math.floor(R*st),i.height=Math.floor(k*st),this.setViewport(0,0,R,k)},this.setEffects=function(R){if(C===yi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let k=0;k<R.length;k++)if(R[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,k,st,et){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,k,st,et),Wt.viewport(O.copy(nt).multiplyScalar(_t).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,k,st,et){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,k,st,et),Wt.scissor(z.copy(vt).multiplyScalar(_t).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(R){Wt.setScissorTest(Tt=R)},this.setOpaqueSort=function(R){Rt=R},this.setTransparentSort=function(R){It=R},this.getClearColor=function(R){return R.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,st=!0){let et=0;if(R){let K=!1;if(at!==null){const Dt=at.texture.format;K=y.has(Dt)}if(K){const Dt=at.texture.type,zt=v.has(Dt),Ut=Nt.getClearColor(),Yt=Nt.getClearAlpha(),jt=Ut.r,ne=Ut.g,se=Ut.b;zt?(w[0]=jt,w[1]=ne,w[2]=se,w[3]=Yt,V.clearBufferuiv(V.COLOR,0,w)):(D[0]=jt,D[1]=ne,D[2]=se,D[3]=Yt,V.clearBufferiv(V.COLOR,0,D))}else et|=V.COLOR_BUFFER_BIT}k&&(et|=V.DEPTH_BUFFER_BIT),st&&(et|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&V.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",ie,!1),i.removeEventListener("webglcontextcreationerror",Fe,!1),Nt.dispose(),te.dispose(),Et.dispose(),b.dispose(),pt.dispose(),kt.dispose(),At.dispose(),Ft.dispose(),wt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Gs),ct.removeEventListener("sessionend",Vs),Fi.stop()};function Bt(R){R.preventDefault(),s_("WebGLRenderer: Context Lost."),ft=!0}function ie(){s_("WebGLRenderer: Context Restored."),ft=!1;const R=N.autoReset,k=Ot.enabled,st=Ot.autoUpdate,et=Ot.needsUpdate,K=Ot.type;Mt(),N.autoReset=R,Ot.enabled=k,Ot.autoUpdate=st,Ot.needsUpdate=et,Ot.type=K}function Fe(R){De("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Te(R){const k=R.target;k.removeEventListener("dispose",Te),Pn(k)}function Pn(R){Mi(R),b.remove(R)}function Mi(R){const k=b.get(R).programs;k!==void 0&&(k.forEach(function(st){wt.releaseProgram(st)}),R.isShaderMaterial&&wt.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,st,et,K,Dt){k===null&&(k=Ue);const zt=K.isMesh&&K.matrixWorld.determinant()<0,Ut=ul(R,k,st,et,K);Wt.setMaterial(et,zt);let Yt=st.index,jt=1;if(et.wireframe===!0){if(Yt=ut.getWireframeAttribute(st),Yt===void 0)return;jt=2}const ne=st.drawRange,se=st.attributes.position;let Ht=ne.start*jt,fe=(ne.start+ne.count)*jt;Dt!==null&&(Ht=Math.max(Ht,Dt.start*jt),fe=Math.min(fe,(Dt.start+Dt.count)*jt)),Yt!==null?(Ht=Math.max(Ht,0),fe=Math.min(fe,Yt.count)):se!=null&&(Ht=Math.max(Ht,0),fe=Math.min(fe,se.count));const je=fe-Ht;if(je<0||je===1/0)return;At.setup(K,et,Ut,st,Yt);let Ze,Re=ue;if(Yt!==null&&(Ze=St.get(Yt),Re=Y,Re.setIndex(Ze)),K.isMesh)et.wireframe===!0?(Wt.setLineWidth(et.wireframeLinewidth*Qe()),Re.setMode(V.LINES)):Re.setMode(V.TRIANGLES);else if(K.isLine){let vn=et.linewidth;vn===void 0&&(vn=1),Wt.setLineWidth(vn*Qe()),K.isLineSegments?Re.setMode(V.LINES):K.isLineLoop?Re.setMode(V.LINE_LOOP):Re.setMode(V.LINE_STRIP)}else K.isPoints?Re.setMode(V.POINTS):K.isSprite&&Re.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)nu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))Re.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const vn=K._multiDrawStarts,Vt=K._multiDrawCounts,Fn=K._multiDrawCount,ae=Yt?St.get(Yt).bytesPerElement:1,In=b.get(et).currentProgram.getUniforms();for(let $n=0;$n<Fn;$n++)In.setValue(V,"_gl_DrawID",$n),Re.render(vn[$n]/ae,Vt[$n])}else if(K.isInstancedMesh)Re.renderInstances(Ht,je,K.count);else if(st.isInstancedBufferGeometry){const vn=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Vt=Math.min(st.instanceCount,vn);Re.renderInstances(Ht,je,Vt)}else Re.render(Ht,je)};function Qr(R,k,st){R.transparent===!0&&R.side===Sa&&R.forceSinglePass===!1?(R.side=Qn,R.needsUpdate=!0,Ra(R,k,st),R.side=ls,R.needsUpdate=!0,Ra(R,k,st),R.side=Sa):Ra(R,k,st)}this.compile=function(R,k,st=null){st===null&&(st=R),G=Et.get(st),G.init(k),F.push(G),st.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(G.pushLight(K),K.castShadow&&G.pushShadow(K))}),R!==st&&R.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(G.pushLight(K),K.castShadow&&G.pushShadow(K))}),G.setupLights();const et=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Dt=K.material;if(Dt)if(Array.isArray(Dt))for(let zt=0;zt<Dt.length;zt++){const Ut=Dt[zt];Qr(Ut,st,K),et.add(Ut)}else Qr(Dt,st,K),et.add(Dt)}),G=F.pop(),et},this.compileAsync=function(R,k,st=null){const et=this.compile(R,k,st);return new Promise(K=>{function Dt(){if(et.forEach(function(zt){b.get(zt).currentProgram.isReady()&&et.delete(zt)}),et.size===0){K(R);return}setTimeout(Dt,10)}be.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Hs=null;function ol(R){Hs&&Hs(R)}function Gs(){Fi.stop()}function Vs(){Fi.start()}const Fi=new Pv;Fi.setAnimationLoop(ol),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(R){Hs=R,ct.setAnimationLoop(R),R===null?Fi.stop():Fi.start()},ct.addEventListener("sessionstart",Gs),ct.addEventListener("sessionend",Vs),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ft===!0)return;const st=ct.enabled===!0&&ct.isPresenting===!0,et=T!==null&&(at===null||st)&&T.begin(L,at);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(k),k=ct.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,k,at),G=Et.get(R,F.length),G.init(k),F.push(G),Je.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Xt.setFromProjectionMatrix(Je,Oi,k.reversedDepth),$t=this.localClippingEnabled,Kt=yt.init(this.clippingPlanes,$t),U=te.get(R,I.length),U.init(),I.push(U),ct.enabled===!0&&ct.isPresenting===!0){const zt=L.xr.getDepthSensingMesh();zt!==null&&Xs(zt,k,-1/0,L.sortObjects)}Xs(R,k,0,L.sortObjects),U.finish(),L.sortObjects===!0&&U.sort(Rt,It),le=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,le&&Nt.addToRenderList(U,R),this.info.render.frame++,Kt===!0&&yt.beginShadows();const K=G.state.shadowsArray;if(Ot.render(K,R,k),Kt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&T.hasRenderPass())===!1){const zt=U.opaque,Ut=U.transmissive;if(G.setupLights(),k.isArrayCamera){const Yt=k.cameras;if(Ut.length>0)for(let jt=0,ne=Yt.length;jt<ne;jt++){const se=Yt[jt];ln(zt,Ut,R,se)}le&&Nt.render(R);for(let jt=0,ne=Yt.length;jt<ne;jt++){const se=Yt[jt];Ei(U,R,se,se.viewport)}}else Ut.length>0&&ln(zt,Ut,R,k),le&&Nt.render(R),Ei(U,R,k)}at!==null&&J===0&&(q.updateMultisampleRenderTarget(at),q.updateRenderTargetMipmap(at)),et&&T.end(L),R.isScene===!0&&R.onAfterRender(L,R,k),At.resetDefaultState(),lt=-1,tt=null,F.pop(),F.length>0?(G=F[F.length-1],Kt===!0&&yt.setGlobalState(L.clippingPlanes,G.state.camera)):G=null,I.pop(),I.length>0?U=I[I.length-1]:U=null};function Xs(R,k,st,et){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)G.pushLight(R),R.castShadow&&G.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xt.intersectsSprite(R)){et&&_e.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Je);const zt=kt.update(R),Ut=R.material;Ut.visible&&U.push(R,zt,Ut,st,_e.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xt.intersectsObject(R))){const zt=kt.update(R),Ut=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_e.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),_e.copy(zt.boundingSphere.center)),_e.applyMatrix4(R.matrixWorld).applyMatrix4(Je)),Array.isArray(Ut)){const Yt=zt.groups;for(let jt=0,ne=Yt.length;jt<ne;jt++){const se=Yt[jt],Ht=Ut[se.materialIndex];Ht&&Ht.visible&&U.push(R,zt,Ht,st,_e.z,se)}}else Ut.visible&&U.push(R,zt,Ut,st,_e.z,null)}}const Dt=R.children;for(let zt=0,Ut=Dt.length;zt<Ut;zt++)Xs(Dt[zt],k,st,et)}function Ei(R,k,st,et){const{opaque:K,transmissive:Dt,transparent:zt}=R;G.setupLightsView(st),Kt===!0&&yt.setGlobalState(L.clippingPlanes,st),et&&Wt.viewport(O.copy(et)),K.length>0&&_n(K,k,st),Dt.length>0&&_n(Dt,k,st),zt.length>0&&_n(zt,k,st),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function ln(R,k,st,et){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(G.state.transmissionRenderTarget[et.id]===void 0){const Ht=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");G.state.transmissionRenderTarget[et.id]=new Wi(1,1,{generateMipmaps:!0,type:Ht?ba:yi,minFilter:Fs,samples:Ne.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}const Dt=G.state.transmissionRenderTarget[et.id],zt=et.viewport||O;Dt.setSize(zt.z*L.transmissionResolutionScale,zt.w*L.transmissionResolutionScale);const Ut=L.getRenderTarget(),Yt=L.getActiveCubeFace(),jt=L.getActiveMipmapLevel();L.setRenderTarget(Dt),L.getClearColor(dt),bt=L.getClearAlpha(),bt<1&&L.setClearColor(16777215,.5),L.clear(),le&&Nt.render(st);const ne=L.toneMapping;L.toneMapping=Yi;const se=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),G.setupLightsView(et),Kt===!0&&yt.setGlobalState(L.clippingPlanes,et),_n(R,st,et),q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt),be.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let fe=0,je=k.length;fe<je;fe++){const Ze=k[fe],{object:Re,geometry:vn,material:Vt,group:Fn}=Ze;if(Vt.side===Sa&&Re.layers.test(et.layers)){const ae=Vt.side;Vt.side=Qn,Vt.needsUpdate=!0,Ki(Re,st,et,vn,Vt,Fn),Vt.side=ae,Vt.needsUpdate=!0,Ht=!0}}Ht===!0&&(q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt))}L.setRenderTarget(Ut,Yt,jt),L.setClearColor(dt,bt),se!==void 0&&(et.viewport=se),L.toneMapping=ne}function _n(R,k,st){const et=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Dt=R.length;K<Dt;K++){const zt=R[K],{object:Ut,geometry:Yt,group:jt}=zt;let ne=zt.material;ne.allowOverride===!0&&et!==null&&(ne=et),Ut.layers.test(st.layers)&&Ki(Ut,k,st,Yt,ne,jt)}}function Ki(R,k,st,et,K,Dt){R.onBeforeRender(L,k,st,et,K,Dt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(L,k,st,et,R,Dt),K.transparent===!0&&K.side===Sa&&K.forceSinglePass===!1?(K.side=Qn,K.needsUpdate=!0,L.renderBufferDirect(st,k,et,K,R,Dt),K.side=ls,K.needsUpdate=!0,L.renderBufferDirect(st,k,et,K,R,Dt),K.side=Sa):L.renderBufferDirect(st,k,et,K,R,Dt),R.onAfterRender(L,k,st,et,K,Dt)}function Ra(R,k,st){k.isScene!==!0&&(k=Ue);const et=b.get(R),K=G.state.lights,Dt=G.state.shadowsArray,zt=K.state.version,Ut=wt.getParameters(R,K.state,Dt,k,st),Yt=wt.getProgramCacheKey(Ut);let jt=et.programs;et.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?k.environment:null,et.fog=k.fog;const ne=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;et.envMap=pt.get(R.envMap||et.environment,ne),et.envMapRotation=et.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",Te),jt=new Map,et.programs=jt);let se=jt.get(Yt);if(se!==void 0){if(et.currentProgram===se&&et.lightsStateVersion===zt)return cl(R,Ut),se}else Ut.uniforms=wt.getUniforms(R),R.onBeforeCompile(Ut,L),se=wt.acquireProgram(Ut,Yt),jt.set(Yt,se),et.uniforms=Ut.uniforms;const Ht=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ht.clippingPlanes=yt.uniform),cl(R,Ut),et.needsLights=Jr(R),et.lightsStateVersion=zt,et.needsLights&&(Ht.ambientLightColor.value=K.state.ambient,Ht.lightProbe.value=K.state.probe,Ht.directionalLights.value=K.state.directional,Ht.directionalLightShadows.value=K.state.directionalShadow,Ht.spotLights.value=K.state.spot,Ht.spotLightShadows.value=K.state.spotShadow,Ht.rectAreaLights.value=K.state.rectArea,Ht.ltc_1.value=K.state.rectAreaLTC1,Ht.ltc_2.value=K.state.rectAreaLTC2,Ht.pointLights.value=K.state.point,Ht.pointLightShadows.value=K.state.pointShadow,Ht.hemisphereLights.value=K.state.hemi,Ht.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ht.spotLightMatrix.value=K.state.spotLightMatrix,Ht.spotLightMap.value=K.state.spotLightMap,Ht.pointShadowMatrix.value=K.state.pointShadowMatrix),et.currentProgram=se,et.uniformsList=null,se}function ll(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=$c.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function cl(R,k){const st=b.get(R);st.outputColorSpace=k.outputColorSpace,st.batching=k.batching,st.batchingColor=k.batchingColor,st.instancing=k.instancing,st.instancingColor=k.instancingColor,st.instancingMorph=k.instancingMorph,st.skinning=k.skinning,st.morphTargets=k.morphTargets,st.morphNormals=k.morphNormals,st.morphColors=k.morphColors,st.morphTargetsCount=k.morphTargetsCount,st.numClippingPlanes=k.numClippingPlanes,st.numIntersection=k.numClipIntersection,st.vertexAlphas=k.vertexAlphas,st.vertexTangents=k.vertexTangents,st.toneMapping=k.toneMapping}function ul(R,k,st,et,K){k.isScene!==!0&&(k=Ue),q.resetTextureUnits();const Dt=k.fog,zt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?k.environment:null,Ut=at===null?L.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Yr,Yt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,jt=pt.get(et.envMap||zt,Yt),ne=et.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,se=!!st.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Ht=!!st.morphAttributes.position,fe=!!st.morphAttributes.normal,je=!!st.morphAttributes.color;let Ze=Yi;et.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ze=L.toneMapping);const Re=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,vn=Re!==void 0?Re.length:0,Vt=b.get(et),Fn=G.state.lights;if(Kt===!0&&($t===!0||R!==tt)){const un=R===tt&&et.id===lt;yt.setState(et,R,un)}let ae=!1;et.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Fn.state.version||Vt.outputColorSpace!==Ut||K.isBatchedMesh&&Vt.batching===!1||!K.isBatchedMesh&&Vt.batching===!0||K.isBatchedMesh&&Vt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Vt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Vt.instancing===!1||!K.isInstancedMesh&&Vt.instancing===!0||K.isSkinnedMesh&&Vt.skinning===!1||!K.isSkinnedMesh&&Vt.skinning===!0||K.isInstancedMesh&&Vt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Vt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Vt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Vt.instancingMorph===!1&&K.morphTexture!==null||Vt.envMap!==jt||et.fog===!0&&Vt.fog!==Dt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==yt.numPlanes||Vt.numIntersection!==yt.numIntersection)||Vt.vertexAlphas!==ne||Vt.vertexTangents!==se||Vt.morphTargets!==Ht||Vt.morphNormals!==fe||Vt.morphColors!==je||Vt.toneMapping!==Ze||Vt.morphTargetsCount!==vn)&&(ae=!0):(ae=!0,Vt.__version=et.version);let In=Vt.currentProgram;ae===!0&&(In=Ra(et,k,K));let $n=!1,bi=!1,ti=!1;const Oe=In.getUniforms(),cn=Vt.uniforms;if(Wt.useProgram(In.program)&&($n=!0,bi=!0,ti=!0),et.id!==lt&&(lt=et.id,bi=!0),$n||tt!==R){Wt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Oe.setValue(V,"projectionMatrix",R.projectionMatrix),Oe.setValue(V,"viewMatrix",R.matrixWorldInverse);const Ti=Oe.map.cameraPosition;Ti!==void 0&&Ti.setValue(V,Se.setFromMatrixPosition(R.matrixWorld)),Ne.logarithmicDepthBuffer&&Oe.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Oe.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),tt!==R&&(tt=R,bi=!0,ti=!0)}if(Vt.needsLights&&(Fn.state.directionalShadowMap.length>0&&Oe.setValue(V,"directionalShadowMap",Fn.state.directionalShadowMap,q),Fn.state.spotShadowMap.length>0&&Oe.setValue(V,"spotShadowMap",Fn.state.spotShadowMap,q),Fn.state.pointShadowMap.length>0&&Oe.setValue(V,"pointShadowMap",Fn.state.pointShadowMap,q)),K.isSkinnedMesh){Oe.setOptional(V,K,"bindMatrix"),Oe.setOptional(V,K,"bindMatrixInverse");const un=K.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Oe.setValue(V,"boneTexture",un.boneTexture,q))}K.isBatchedMesh&&(Oe.setOptional(V,K,"batchingTexture"),Oe.setValue(V,"batchingTexture",K._matricesTexture,q),Oe.setOptional(V,K,"batchingIdTexture"),Oe.setValue(V,"batchingIdTexture",K._indirectTexture,q),Oe.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Oe.setValue(V,"batchingColorTexture",K._colorsTexture,q));const zn=st.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Pt.update(K,st,In),(bi||Vt.receiveShadow!==K.receiveShadow)&&(Vt.receiveShadow=K.receiveShadow,Oe.setValue(V,"receiveShadow",K.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&k.environment!==null&&(cn.envMapIntensity.value=k.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=FA()),bi&&(Oe.setValue(V,"toneMappingExposure",L.toneMappingExposure),Vt.needsLights&&us(cn,ti),Dt&&et.fog===!0&&Zt.refreshFogUniforms(cn,Dt),Zt.refreshMaterialUniforms(cn,et,_t,j,G.state.transmissionRenderTarget[R.id]),$c.upload(V,ll(Vt),cn,q)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&($c.upload(V,ll(Vt),cn,q),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Oe.setValue(V,"center",K.center),Oe.setValue(V,"modelViewMatrix",K.modelViewMatrix),Oe.setValue(V,"normalMatrix",K.normalMatrix),Oe.setValue(V,"modelMatrix",K.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const un=et.uniformsGroups;for(let Ti=0,Qi=un.length;Ti<Qi;Ti++){const ks=un[Ti];Ft.update(ks,In),Ft.bind(ks,In)}}return In}function us(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Jr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(R,k,st){const et=b.get(R);et.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=k,b.get(R.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:st,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){const st=b.get(R);st.__webglFramebuffer=k,st.__useDefaultFramebuffer=k===void 0};const Ca=V.createFramebuffer();this.setRenderTarget=function(R,k=0,st=0){at=R,H=k,J=st;let et=null,K=!1,Dt=!1;if(R){const Ut=b.get(R);if(Ut.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(V.FRAMEBUFFER,Ut.__webglFramebuffer),O.copy(R.viewport),z.copy(R.scissor),ot=R.scissorTest,Wt.viewport(O),Wt.scissor(z),Wt.setScissorTest(ot),lt=-1;return}else if(Ut.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Ut.__hasExternalTextures)q.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ne=R.depthTexture;if(Ut.__boundDepthTexture!==ne){if(ne!==null&&b.has(ne)&&(R.width!==ne.image.width||R.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const Yt=R.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Dt=!0);const jt=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(jt[k])?et=jt[k][st]:et=jt[k],K=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?et=b.get(R).__webglMultisampledFramebuffer:Array.isArray(jt)?et=jt[st]:et=jt,O.copy(R.viewport),z.copy(R.scissor),ot=R.scissorTest}else O.copy(nt).multiplyScalar(_t).floor(),z.copy(vt).multiplyScalar(_t).floor(),ot=Tt;if(st!==0&&(et=Ca),Wt.bindFramebuffer(V.FRAMEBUFFER,et)&&Wt.drawBuffers(R,et),Wt.viewport(O),Wt.scissor(z),Wt.setScissorTest(ot),K){const Ut=b.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ut.__webglTexture,st)}else if(Dt){const Ut=k;for(let Yt=0;Yt<R.textures.length;Yt++){const jt=b.get(R.textures[Yt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Yt,jt.__webglTexture,st,Ut)}}else if(R!==null&&st!==0){const Ut=b.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ut.__webglTexture,st)}lt=-1},this.readRenderTargetPixels=function(R,k,st,et,K,Dt,zt,Ut=0){if(!(R&&R.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Yt=Yt[zt]),Yt){Wt.bindFramebuffer(V.FRAMEBUFFER,Yt);try{const jt=R.textures[Ut],ne=jt.format,se=jt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ut),!Ne.textureFormatReadable(ne)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(se)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-et&&st>=0&&st<=R.height-K&&V.readPixels(k,st,et,K,Ct.convert(ne),Ct.convert(se),Dt)}finally{const jt=at!==null?b.get(at).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(R,k,st,et,K,Dt,zt,Ut=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Yt=Yt[zt]),Yt)if(k>=0&&k<=R.width-et&&st>=0&&st<=R.height-K){Wt.bindFramebuffer(V.FRAMEBUFFER,Yt);const jt=R.textures[Ut],ne=jt.format,se=jt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ut),!Ne.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ht),V.bufferData(V.PIXEL_PACK_BUFFER,Dt.byteLength,V.STREAM_READ),V.readPixels(k,st,et,K,Ct.convert(ne),Ct.convert(se),0);const fe=at!==null?b.get(at).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,fe);const je=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Xy(V,je,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ht),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Dt),V.deleteBuffer(Ht),V.deleteSync(je),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,st=0){const et=Math.pow(2,-st),K=Math.floor(R.image.width*et),Dt=Math.floor(R.image.height*et),zt=k!==null?k.x:0,Ut=k!==null?k.y:0;q.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,st,0,0,zt,Ut,K,Dt),Wt.unbindTexture()};const wa=V.createFramebuffer(),fs=V.createFramebuffer();this.copyTextureToTexture=function(R,k,st=null,et=null,K=0,Dt=0){let zt,Ut,Yt,jt,ne,se,Ht,fe,je;const Ze=R.isCompressedTexture?R.mipmaps[Dt]:R.image;if(st!==null)zt=st.max.x-st.min.x,Ut=st.max.y-st.min.y,Yt=st.isBox3?st.max.z-st.min.z:1,jt=st.min.x,ne=st.min.y,se=st.isBox3?st.min.z:0;else{const cn=Math.pow(2,-K);zt=Math.floor(Ze.width*cn),Ut=Math.floor(Ze.height*cn),R.isDataArrayTexture?Yt=Ze.depth:R.isData3DTexture?Yt=Math.floor(Ze.depth*cn):Yt=1,jt=0,ne=0,se=0}et!==null?(Ht=et.x,fe=et.y,je=et.z):(Ht=0,fe=0,je=0);const Re=Ct.convert(k.format),vn=Ct.convert(k.type);let Vt;k.isData3DTexture?(q.setTexture3D(k,0),Vt=V.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(q.setTexture2DArray(k,0),Vt=V.TEXTURE_2D_ARRAY):(q.setTexture2D(k,0),Vt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,k.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,k.unpackAlignment);const Fn=V.getParameter(V.UNPACK_ROW_LENGTH),ae=V.getParameter(V.UNPACK_IMAGE_HEIGHT),In=V.getParameter(V.UNPACK_SKIP_PIXELS),$n=V.getParameter(V.UNPACK_SKIP_ROWS),bi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ze.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ze.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ne),V.pixelStorei(V.UNPACK_SKIP_IMAGES,se);const ti=R.isDataArrayTexture||R.isData3DTexture,Oe=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){const cn=b.get(R),zn=b.get(k),un=b.get(cn.__renderTarget),Ti=b.get(zn.__renderTarget);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,un.__webglFramebuffer),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Qi=0;Qi<Yt;Qi++)ti&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(R).__webglTexture,K,se+Qi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(k).__webglTexture,Dt,je+Qi)),V.blitFramebuffer(jt,ne,zt,Ut,Ht,fe,zt,Ut,V.DEPTH_BUFFER_BIT,V.NEAREST);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||b.has(R)){const cn=b.get(R),zn=b.get(k);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,wa),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,fs);for(let un=0;un<Yt;un++)ti?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,cn.__webglTexture,K,se+un):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,cn.__webglTexture,K),Oe?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,zn.__webglTexture,Dt,je+un):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,zn.__webglTexture,Dt),K!==0?V.blitFramebuffer(jt,ne,zt,Ut,Ht,fe,zt,Ut,V.COLOR_BUFFER_BIT,V.NEAREST):Oe?V.copyTexSubImage3D(Vt,Dt,Ht,fe,je+un,jt,ne,zt,Ut):V.copyTexSubImage2D(Vt,Dt,Ht,fe,jt,ne,zt,Ut);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Oe?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Vt,Dt,Ht,fe,je,zt,Ut,Yt,Re,vn,Ze.data):k.isCompressedArrayTexture?V.compressedTexSubImage3D(Vt,Dt,Ht,fe,je,zt,Ut,Yt,Re,Ze.data):V.texSubImage3D(Vt,Dt,Ht,fe,je,zt,Ut,Yt,Re,vn,Ze):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Dt,Ht,fe,zt,Ut,Re,vn,Ze.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Dt,Ht,fe,Ze.width,Ze.height,Re,Ze.data):V.texSubImage2D(V.TEXTURE_2D,Dt,Ht,fe,zt,Ut,Re,vn,Ze);V.pixelStorei(V.UNPACK_ROW_LENGTH,Fn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ae),V.pixelStorei(V.UNPACK_SKIP_PIXELS,In),V.pixelStorei(V.UNPACK_SKIP_ROWS,$n),V.pixelStorei(V.UNPACK_SKIP_IMAGES,bi),Dt===0&&k.generateMipmaps&&V.generateMipmap(Vt),Wt.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),Wt.unbindTexture()},this.resetState=function(){H=0,J=0,at=null,Wt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}function zA(r){return xt.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",padding:24},children:xt.jsxs("div",{style:{width:"min(960px, 100%)"},children:[xt.jsx("h1",{style:{margin:0,fontSize:36},children:"Camera Geometry Playground"}),xt.jsx("p",{style:{marginTop:8,opacity:.8},children:"Select a tutorial."}),xt.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:16,marginTop:20},children:[xt.jsxs("button",{onClick:()=>r.onSelect("intrinsics"),style:{textAlign:"left",padding:18,borderRadius:14,border:"1px solid #ddd",background:"white",cursor:"pointer",boxShadow:"0 1px 10px rgba(0,0,0,0.06)"},children:[xt.jsx("div",{style:{fontSize:18,fontWeight:800},children:"Camera Intrinsics"}),xt.jsx("div",{style:{marginTop:8,opacity:.8,lineHeight:1.35},children:"Understand K (fx, fy, cx, cy, skew), rays, distortion, and 3D↔2D projection."})]}),xt.jsxs("button",{onClick:()=>r.onSelect("bev"),style:{textAlign:"left",padding:18,borderRadius:14,border:"1px solid #ddd",background:"white",cursor:"pointer",boxShadow:"0 1px 10px rgba(0,0,0,0.06)"},children:[xt.jsx("div",{style:{fontSize:18,fontWeight:800},children:"BEV / IPM Demo"}),xt.jsx("div",{style:{marginTop:8,opacity:.8,lineHeight:1.35},children:"Build a bird’s-eye view from a single camera using intrinsics + pose on the ground plane."})]})]}),xt.jsx("div",{style:{marginTop:18,fontSize:12,opacity:.65},children:"Tip: Start with Intrinsics, then jump into BEV once the pose feels intuitive."})]})})}function Nn(r){const{label:t,value:i,min:s,max:l,step:c,onChange:f,disabled:d,fmt:m}=r;return xt.jsxs("div",{style:{display:"grid",gridTemplateColumns:"90px 1fr 70px",gap:8,alignItems:"center",margin:"8px 0"},children:[xt.jsx("div",{children:t}),xt.jsx("input",{type:"range",min:s,max:l,step:c,value:i,disabled:d,onChange:p=>f(Number(p.target.value))}),xt.jsx("div",{style:{textAlign:"right",fontFamily:"ui-monospace, Menlo, monospace"},children:m?m(i):i.toFixed(2)})]})}function Gv(r){const{params:t,setParams:i,locked:s}=r,l=c=>s?.has(c)??!1;return xt.jsxs("div",{style:{padding:12,borderBottom:"1px solid #ddd",overflow:"auto"},children:[xt.jsx("div",{style:{fontWeight:800,margin:"6px 0"},children:"Intrinsics (K)"}),xt.jsx(Nn,{label:"fx",value:t.K.fx,min:200,max:1600,step:1,disabled:l("fx"),fmt:c=>c.toFixed(0),onChange:c=>i(f=>({...f,K:{...f.K,fx:c}}))}),xt.jsx(Nn,{label:"fy",value:t.K.fy,min:200,max:1600,step:1,disabled:l("fy"),fmt:c=>c.toFixed(0),onChange:c=>i(f=>({...f,K:{...f.K,fy:c}}))}),xt.jsx(Nn,{label:"cx",value:t.K.cx,min:0,max:t.K.width,step:1,disabled:l("cx"),fmt:c=>c.toFixed(0),onChange:c=>i(f=>({...f,K:{...f.K,cx:c}}))}),xt.jsx(Nn,{label:"cy",value:t.K.cy,min:0,max:t.K.height,step:1,disabled:l("cy"),fmt:c=>c.toFixed(0),onChange:c=>i(f=>({...f,K:{...f.K,cy:c}}))}),xt.jsx(Nn,{label:"skew",value:t.K.skew,min:-200,max:200,step:1,disabled:l("skew"),fmt:c=>c.toFixed(0),onChange:c=>i(f=>({...f,K:{...f.K,skew:c}}))}),xt.jsx("div",{style:{fontWeight:800,margin:"12px 0 6px"},children:"Extrinsics (pose)"}),xt.jsx(Nn,{label:"Cx",value:t.pose.Cx,min:-5,max:5,step:.01,disabled:l("Cx"),onChange:c=>i(f=>({...f,pose:{...f.pose,Cx:c}}))}),xt.jsx(Nn,{label:"Cy",value:t.pose.Cy,min:-5,max:5,step:.01,disabled:l("Cy"),onChange:c=>i(f=>({...f,pose:{...f.pose,Cy:c}}))}),xt.jsx(Nn,{label:"Cz",value:t.pose.Cz,min:-5,max:8,step:.01,disabled:l("Cz"),onChange:c=>i(f=>({...f,pose:{...f.pose,Cz:c}}))}),xt.jsx(Nn,{label:"yaw",value:t.pose.yaw,min:-Math.PI,max:Math.PI,step:Math.PI/180,disabled:l("yaw"),fmt:c=>`${(c*180/Math.PI).toFixed(0)}°`,onChange:c=>i(f=>({...f,pose:{...f.pose,yaw:c}}))}),xt.jsx(Nn,{label:"pitch",value:t.pose.pitch,min:-1.55,max:1.55,step:Math.PI/180,disabled:l("pitch"),fmt:c=>`${(c*180/Math.PI).toFixed(0)}°`,onChange:c=>i(f=>({...f,pose:{...f.pose,pitch:c}}))}),xt.jsx(Nn,{label:"roll",value:t.pose.roll,min:-Math.PI,max:Math.PI,step:Math.PI/180,disabled:l("roll"),fmt:c=>`${(c*180/Math.PI).toFixed(0)}°`,onChange:c=>i(f=>({...f,pose:{...f.pose,roll:c}}))}),xt.jsx("div",{style:{fontWeight:800,margin:"12px 0 6px"},children:"Distortion"}),xt.jsx("div",{style:{display:"flex",gap:10,alignItems:"center",marginBottom:6},children:xt.jsxs("label",{style:{display:"flex",gap:8,alignItems:"center"},children:[xt.jsx("input",{type:"checkbox",checked:t.dist.enabled,disabled:l("dist"),onChange:c=>i(f=>({...f,dist:{...f.dist,enabled:c.target.checked}}))}),"Enable distortion"]})}),xt.jsx(Nn,{label:"k1",value:t.dist.k1,min:-1,max:1,step:.01,disabled:!t.dist.enabled||l("dist"),onChange:c=>i(f=>({...f,dist:{...f.dist,k1:c}}))}),xt.jsx(Nn,{label:"k2",value:t.dist.k2,min:-1,max:1,step:.01,disabled:!t.dist.enabled||l("dist"),onChange:c=>i(f=>({...f,dist:{...f.dist,k2:c}}))}),xt.jsx(Nn,{label:"k3",value:t.dist.k3,min:-1,max:1,step:.01,disabled:!t.dist.enabled||l("dist"),onChange:c=>i(f=>({...f,dist:{...f.dist,k3:c}}))}),xt.jsx(Nn,{label:"p1",value:t.dist.p1,min:-.5,max:.5,step:.001,disabled:!t.dist.enabled||l("dist"),onChange:c=>i(f=>({...f,dist:{...f.dist,p1:c}}))}),xt.jsx(Nn,{label:"p2",value:t.dist.p2,min:-.5,max:.5,step:.001,disabled:!t.dist.enabled||l("dist"),onChange:c=>i(f=>({...f,dist:{...f.dist,p2:c}}))}),xt.jsx("div",{style:{marginTop:10,fontSize:12,color:"#666"},children:"Tip: negative k1 often looks like barrel distortion; positive k1 like pincushion."})]})}function BA(r){const{lesson:t,index:i,total:s,onPrev:l,onNext:c,onReset:f}=r;return xt.jsxs("div",{style:{padding:12,borderBottom:"1px solid #ddd"},children:[xt.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"baseline"},children:[xt.jsx("div",{style:{fontWeight:900},children:t.title}),xt.jsxs("div",{style:{color:"#666",fontSize:12},children:[i+1," / ",s]})]}),xt.jsx("div",{style:{marginTop:6,color:"#222",lineHeight:1.35},children:t.body}),xt.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[xt.jsx("button",{onClick:l,disabled:i===0,children:"◀ Prev"}),xt.jsx("button",{onClick:c,disabled:i===s-1,children:"Next ▶"}),xt.jsx("button",{onClick:f,style:{marginLeft:"auto"},children:"Reset lesson state"})]})]})}const $_={type:"change"},lp={type:"start"},Vv={type:"end"},Wc=new ip,tv=new ss,HA=Math.cos(70*Ev.DEG2RAD),Sn=new W,Kn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$h=1e-6;class GA extends XM{constructor(t,i=null){super(t,i),this.state=Xe.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Br.ROTATE,MIDDLE:Br.DOLLY,RIGHT:Br.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new cs,this._lastTargetPosition=new W,this._quat=new cs().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new R_,this._sphericalDelta=new R_,this._scale=1,this._panOffset=new W,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new W,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=XA.bind(this),this._onPointerDown=VA.bind(this),this._onPointerUp=kA.bind(this),this._onContextMenu=QA.bind(this),this._onMouseWheel=qA.bind(this),this._onKeyDown=jA.bind(this),this._onTouchStart=ZA.bind(this),this._onTouchMove=KA.bind(this),this._onMouseDown=YA.bind(this),this._onMouseMove=WA.bind(this),this._interceptControlDown=JA.bind(this),this._interceptControlUp=$A.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($_),this.update(),this.state=Xe.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;Sn.copy(i).sub(this.target),Sn.applyQuaternion(this._quat),this._spherical.setFromVector3(Sn),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Sn.setFromSpherical(this._spherical),Sn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=Sn.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new W(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new W(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=Sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Wc.origin.copy(this.object.position),Wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wc.direction))<HA?this.object.lookAt(this.target):(tv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wc.intersectPlane(tv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>$h||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$h||this._lastTargetPosition.distanceToSquared(this.target)>$h?(this.dispatchEvent($_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Kn/60*this.autoRotateSpeed*t:Kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Sn.setFromMatrixColumn(i,0),Sn.multiplyScalar(-t),this._panOffset.add(Sn)}_panUp(t,i){this.screenSpacePanning===!0?Sn.setFromMatrixColumn(i,1):(Sn.setFromMatrixColumn(i,0),Sn.crossVectors(this.object.up,Sn)),Sn.multiplyScalar(t),this._panOffset.add(Sn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Sn.copy(l).sub(this.target);let c=Sn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new pe,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function VA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function XA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function kA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vv),this.state=Xe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function YA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Br.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Xe.DOLLY;break;case Br.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}break;case Br.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(lp)}function WA(r){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function qA(r){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(r.preventDefault(),this.dispatchEvent(lp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Vv))}function jA(r){this.enabled!==!1&&this._handleKeyDown(r)}function ZA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Xe.TOUCH_ROTATE;break;case zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Xe.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(lp)}function KA(r){switch(this._trackPointer(r),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Xe.NONE}}function QA(r){this.enabled!==!1&&r.preventDefault()}function JA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $A(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function su(r,t,i){const s=Math.cos(r),l=Math.sin(r),c=Math.cos(t),f=Math.sin(t),d=Math.cos(i),m=Math.sin(i),p=new oe().set(s,0,l,0,1,0,-l,0,s),g=new oe().set(1,0,0,0,c,-f,0,f,c);return new oe().set(d,-m,0,m,d,0,0,0,1).clone().multiply(g).multiply(p)}function tR(r,t){const i=t.clone().sub(r).normalize(),s=Math.atan2(i.x,-i.z),l=-Math.asin(Ev.clamp(i.y,-1,1));return{yaw:s,pitch:l}}function Xv(r,t,i){const s=new W(t.Cx,t.Cy,t.Cz);return r.clone().sub(s).applyMatrix3(i)}function eR(r,t){const i=t.clone().transpose();return r.clone().applyMatrix3(i)}function kv(r,t,i){const s=r*r+t*t,l=s*s,c=l*s,f=1+i.k1*s+i.k2*l+i.k3*c,d=2*i.p1*r*t+i.p2*(s+2*r*r),m=i.p1*(s+2*t*t)+2*i.p2*r*t;return{xd:r*f+d,yd:t*f+m}}function nR(r,t,i,s=8){let l=r,c=t;for(let f=0;f<s;f++){const{xd:d,yd:m}=kv(l,c,i);l+=r-d,c+=t-m}return{x:l,y:c}}function Yv(r,t,i){const{x:s,y:l,z:c}=r;if(c>=-1e-6)return null;const f=-c;let d=s/f,m=l/f;if(i.enabled){const S=kv(d,m,i);d=S.xd,m=S.yd}const p=t.fx*d+t.skew*m+t.cx,g=t.fy*m+t.cy;return{u:p,v:g,xn:d,yn:m,z:c}}function iR(r,t,i){const s=(t-i.cy)/i.fy;return{x:(r-i.cx-i.skew*s)/i.fx,y:s}}function aR(r,t){const i=r,s=i.getAttribute("position"),l=i.index;if(!s||!l){const y=[];for(let v=0;v<Math.min(t,s.count);v++)y.push(new W(s.getX(v),s.getY(v),s.getZ(v)));return y}const c=l.count/3,f=new Float32Array(c);let d=0;const m=new W,p=new W,g=new W,S=new W,_=new W,M=new W;for(let y=0;y<c;y++){const v=l.getX(3*y),w=l.getX(3*y+1),D=l.getX(3*y+2);m.set(s.getX(v),s.getY(v),s.getZ(v)),p.set(s.getX(w),s.getY(w),s.getZ(w)),g.set(s.getX(D),s.getY(D),s.getZ(D)),S.subVectors(p,m),_.subVectors(g,m),M.crossVectors(S,_);const U=.5*M.length();d+=U,f[y]=d}function E(y){let v=0,w=c-1;for(;v<w;){const D=v+w>>1;y<=f[D]?w=D:v=D+1}return v}const C=[];for(let y=0;y<t;y++){const v=Math.random()*d,w=E(v),D=l.getX(3*w),U=l.getX(3*w+1),G=l.getX(3*w+2);m.set(s.getX(D),s.getY(D),s.getZ(D)),p.set(s.getX(U),s.getY(U),s.getZ(U)),g.set(s.getX(G),s.getY(G),s.getZ(G));let I=Math.random(),F=Math.random();I+F>1&&(I=1-I,F=1-F);const T=1-I-F;C.push(new W(m.x*T+p.x*I+g.x*F,m.y*T+p.y*I+g.y*F,m.z*T+p.z*I+g.z*F))}return C}function Wv(r=900){const t=new rp(.9,.28,260,36),i=new FM({flatShading:!1}),s=new Pi(t,i);s.position.set(0,1.2,0);const c=aR(t,r).map(f=>f.clone().add(s.position));return{mesh:s,points:c}}function sR(r){const t=Pe.useRef(null),i=Pe.useRef(null),s=Pe.useRef(null),l=Pe.useRef(null),c=Pe.useRef(null),f=Pe.useRef(null),d=Pe.useRef(null),m=Pe.useRef(null),p=Pe.useRef(null),g=Pe.useMemo(()=>Wv(900),[]);return Pe.useEffect(()=>{const S=t.current;if(!S)return;const _=new IA({antialias:!0});_.setPixelRatio(window.devicePixelRatio??1),_.setSize(S.clientWidth,S.clientHeight),S.appendChild(_.domElement);const M=new SM;M.background=new ge(16777215);const E=new ui(60,S.clientWidth/S.clientHeight,.01,200);E.position.set(6,5,8);const C=new GA(E,_.domElement);C.target.set(0,1.2,0),C.update(),M.add(new GM(10,10)),M.add(new C_(2));const y=new ui(60,1,.01,100);y.position.set(2,2,4);const v=new VM(y);M.add(v);const w=new Pi(new Zr(.18,.12,.24),new ap({color:1118481}));w.name="teachCamBody",y.add(w),M.add(y),m.current=y,p.current=v,M.add(g.mesh);const D=new C_(.6);M.add(D);const U=new Xn().setFromPoints([new W,new W(0,0,-1)]),G=new rl({color:255}),I=new Dv(U,G);M.add(I),i.current=_,s.current=M,l.current=E,c.current=C,f.current=D,d.current=I;let F=0;const T=()=>{F=requestAnimationFrame(T);const ft=t.current;if(ft&&i.current&&l.current&&s.current){const H=ft.clientWidth,J=ft.clientHeight;i.current.setSize(H,J,!1),l.current.aspect=H/J,l.current.updateProjectionMatrix(),i.current.render(s.current,l.current)}};T();const L=()=>{};return window.addEventListener("resize",L),()=>{cancelAnimationFrame(F),window.removeEventListener("resize",L),C.dispose(),_.dispose(),S.removeChild(_.domElement)}},[r.params,g.mesh,g.points]),Pe.useEffect(()=>{const S=s.current,_=f.current,M=d.current;if(!S||!_||!M)return;const E=m.current,C=p.current;if(!E||!C)return;E.position.set(r.params.pose.Cx,r.params.pose.Cy,r.params.pose.Cz);const y=su(r.params.pose.yaw,r.params.pose.pitch,r.params.pose.roll),v=new nn().setFromMatrix3(y);E.setRotationFromMatrix(v),C.update()},[r.params,r.ray]),xt.jsx("div",{ref:t,style:{width:"100%",height:"100%"}})}function rR(r){const t=Pe.useRef(null),i=Pe.useMemo(()=>Wv(900),[]);return Pe.useEffect(()=>{const s=t.current;if(!s)return;const l=s.getContext("2d");if(!l)return;const{K:c,pose:f,dist:d}=r.params,m=su(f.yaw,f.pitch,f.roll);l.clearRect(0,0,c.width,c.height),l.strokeStyle="#ddd",l.strokeRect(.5,.5,c.width-1,c.height-1),l.strokeStyle="#999",l.beginPath(),l.moveTo(c.cx-10,c.cy),l.lineTo(c.cx+10,c.cy),l.moveTo(c.cx,c.cy-10),l.lineTo(c.cx,c.cy+10),l.stroke();const p=i.points.map(g=>{const S=Xv(g,f,m);return Yv(S,c,d)});for(const g of p){if(!g)continue;const S=g.u>=0&&g.u<c.width&&g.v>=0&&g.v<c.height;l.fillStyle=S?"#111":"#bbb",l.beginPath(),l.arc(g.u,g.v,2.2,0,Math.PI*2),l.fill()}if(d.enabled){l.globalAlpha=.25,l.strokeStyle="#888",l.lineWidth=1;for(let g=0;g<=c.width;g+=80)l.beginPath(),l.moveTo(g+.5,0),l.lineTo(g+.5,c.height),l.stroke();for(let g=0;g<=c.height;g+=60)l.beginPath(),l.moveTo(0,g+.5),l.lineTo(c.width,g+.5),l.stroke();l.globalAlpha=1}},[r.params,i.mesh,i.points]),Pe.useEffect(()=>{const s=t.current;if(!s)return;const l=c=>{const f=s.getBoundingClientRect(),d=(c.clientX-f.left)*(s.width/f.width),m=(c.clientY-f.top)*(s.height/f.height),{K:p,pose:g,dist:S}=r.params,_=su(g.yaw,g.pitch,g.roll);let M=iR(d,m,p);if(S.enabled){const v=nR(M.x,M.y,S,10);M={x:v.x,y:v.y}}const E=new W(M.x,M.y,-1).normalize(),C=new W(g.Cx,g.Cy,g.Cz),y=eR(E,_).normalize();r.onPixelClickRay({origin:C,dir:y})};return s.addEventListener("click",l),()=>s.removeEventListener("click",l)},[r.params,r.onPixelClickRay]),xt.jsx("canvas",{ref:t,width:r.params.K.width,height:r.params.K.height,style:{width:"100%",height:"100%",display:"block",background:"#fafafa"}})}function Fr(r){return structuredClone(r)}const qc=[{id:"intro",title:"Welcome: What is projection?",body:"We project 3D points to pixels with u = fx*x + cx and v = fy*y + cy (after dividing by depth). Try moving the camera (extrinsics) vs changing fx/fy (intrinsics).",apply:r=>{const t=Fr(r);return t.K.fx=800,t.K.fy=800,t.K.cx=320,t.K.cy=240,t.K.skew=0,t.pose.Cx=2,t.pose.Cy=2,t.pose.Cz=4,t.pose.yaw=-25*Math.PI/180,t.pose.pitch=-10*Math.PI/180,t.pose.roll=0,t.dist.enabled=!1,t}},{id:"focal",title:"Intrinsics: Focal length (fx, fy)",body:"Increase fx/fy: the image zooms in (narrower field of view). Decrease fx/fy: zoom out (wider view). Notice pixels move away/toward the principal point.",apply:r=>{const t=Fr(r);return t.pose.Cx=2,t.pose.Cy=2,t.pose.Cz=4,t.pose.yaw=-20*Math.PI/180,t.pose.pitch=-10*Math.PI/180,t.dist.enabled=!1,t},lock:["Cx","Cy","Cz","yaw","pitch","roll","dist"]},{id:"principal",title:"Intrinsics: Principal point (cx, cy)",body:"Move cx/cy: you're shifting where the optical axis hits the image. Everything appears translated relative to the new principal point crosshair.",apply:r=>{const t=Fr(r);return t.K.fx=800,t.K.fy=800,t.K.cx=320,t.K.cy=240,t.dist.enabled=!1,t},lock:["fx","fy","Cx","Cy","Cz","yaw","pitch","roll","dist"]},{id:"extrinsics",title:"Extrinsics: Move & rotate the camera",body:"Extrinsics change the camera pose in the world. Translate (Cx,Cy,Cz) and rotate (yaw,pitch,roll) to see perspective changes without changing K.",apply:r=>{const t=Fr(r);return t.K.fx=800,t.K.fy=800,t.K.cx=320,t.K.cy=240,t.K.skew=0,t.dist.enabled=!1,t},lock:["fx","fy","cx","cy","skew","dist"]},{id:"distortion",title:"Lens distortion",body:"Enable distortion to see barrel/pincushion warping. k1 < 0 often looks like barrel; k1 > 0 like pincushion. Tangential (p1,p2) creates asymmetric warp.",apply:r=>{const t=Fr(r);return t.dist.enabled=!0,t.dist.k1=-.25,t.dist.k2=.08,t.dist.k3=0,t.dist.p1=0,t.dist.p2=0,t}},{id:"ray",title:"Click pixel → 3D ray",body:"Click a pixel on the image plane. We'll compute a 3D ray from the camera center through that pixel. If distortion is enabled, we undistort the clicked normalized point before creating the ray.",apply:r=>Fr(r)}];function oR(r){const{params:t,setParams:i}=r,[s,l]=Pe.useState(0),[c,f]=Pe.useState(null),d=qc[s],m=Pe.useMemo(()=>new Set(d.lock??[]),[d]),p=g=>{const S=qc[g];l(g),f(null),r.setParams(_=>S.apply(_))};return xt.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.2fr 1fr",height:"100%"},children:[xt.jsxs("div",{style:{position:"relative"},children:[xt.jsx(sR,{params:t,ray:c}),xt.jsxs("div",{style:{position:"absolute",left:12,top:12,padding:"8px 10px",background:"rgba(255,255,255,0.9)",border:"1px solid #eee",borderRadius:10,fontSize:12,color:"#333"},children:[xt.jsx("div",{style:{fontWeight:800},children:"3D World"}),xt.jsx("div",{children:"Click pixels on the right to cast a ray."})]})]}),xt.jsxs("div",{style:{display:"grid",gridTemplateRows:"auto auto 1fr",borderLeft:"1px solid #ddd"},children:[xt.jsx(BA,{lesson:d,index:s,total:qc.length,onPrev:()=>p(Math.max(0,s-1)),onNext:()=>p(Math.min(qc.length-1,s+1)),onReset:()=>p(s)}),xt.jsx(Gv,{params:t,setParams:i,locked:m}),xt.jsxs("div",{style:{position:"relative"},children:[xt.jsx(rR,{params:t,onPixelClickRay:g=>f(g)}),xt.jsxs("div",{style:{position:"absolute",left:12,bottom:12,padding:"8px 10px",background:"rgba(255,255,255,0.9)",border:"1px solid #eee",borderRadius:10,fontSize:12,color:"#333"},children:[xt.jsxs("div",{style:{fontWeight:800},children:["2D Image Plane (",t.K.width,"×",t.K.height,")"]}),xt.jsx("div",{children:"fx/fy zoom, cx/cy shifts principal point."}),xt.jsx("div",{children:"Distortion warps normalized coords before K."})]}),xt.jsxs("div",{style:{position:"absolute",right:12,bottom:12,padding:"8px 10px",background:"rgba(255,255,255,0.9)",border:"1px solid #eee",borderRadius:10,fontSize:12,color:"#333",width:260},children:[xt.jsx("div",{style:{fontWeight:900},children:"K"}),xt.jsx("pre",{style:{margin:0},children:`[ ${t.K.fx.toFixed(0)}  ${t.K.skew.toFixed(0)}  ${t.K.cx.toFixed(0)} ]
[ 0  ${t.K.fy.toFixed(0)}  ${t.K.cy.toFixed(0)} ]
[ 0   0    1 ]`}),xt.jsx("div",{style:{height:6}}),xt.jsx("div",{style:{fontWeight:900},children:"C (world)"}),xt.jsx("pre",{style:{margin:0},children:`(${t.pose.Cx.toFixed(2)}, ${t.pose.Cy.toFixed(2)}, ${t.pose.Cz.toFixed(2)})`})]})]})]})]})}function lR(r,t,i,s,l){const c=Math.floor(s),f=Math.floor(l),d=c+1,m=f+1;if(c<0||f<0||d>=t||m>=i)return[0,0,0,0];const p=s-c,g=l-f,S=(v,w)=>(w*t+v)*4,_=S(c,f),M=S(d,f),E=S(c,m),C=S(d,m),y=[0,0,0,0];for(let v=0;v<4;v++){const w=r[_+v]*(1-p)+r[M+v]*p,D=r[E+v]*(1-p)+r[C+v]*p;y[v]=w*(1-g)+D*g}return y}function cR(r,t,i,s,l,c,f,d){const m=new ImageData(t,i),p=m.data,g=su(c.yaw,c.pitch,c.roll);for(let S=0;S<i;S++){const _=-l*(1-S/(i-1));for(let M=0;M<t;M++){const E=(M/(t-1)*2-1)*s,C=new W(E,0,_),y=Xv(C,c,g),v=Yv(y,f,d);if(!v)continue;const[w,D,U,G]=lR(r.data,r.width,r.height,v.u,v.v),I=(S*t+M)*4;p[I+0]=w,p[I+1]=D,p[I+2]=U,p[I+3]=G}}return m}function uR(r){const{params:t,setParams:i}=r,[s,l]=Pe.useState(null),[c,f]=Pe.useState(6),[d,m]=Pe.useState(20),[p,g]=Pe.useState(512),S=Pe.useRef(null),_=Pe.useRef(null);return Pe.useEffect(()=>{if(!s)return;const M=new Image;M.crossOrigin="anonymous",M.onload=()=>{const E=S.current;if(!E)return;const{width:C,height:y}=t.K;E.width=C,E.height=y;const v=E.getContext("2d");v&&(v.clearRect(0,0,C,y),v.drawImage(M,0,0,C,y))},M.src=s},[s,t.K.width,t.K.height]),Pe.useEffect(()=>{const M=S.current,E=_.current;if(!M||!E)return;const C=M.getContext("2d"),y=E.getContext("2d");if(!C||!y)return;const v=C.getImageData(0,0,M.width,M.height),w=p,D=p,U=cR(v,w,D,c,d,t.pose,t.K,t.dist);E.width=w,E.height=D,y.putImageData(U,0,0)},[t,c,d,p]),xt.jsxs("div",{style:{display:"grid",gridTemplateColumns:"420px 1fr",gap:16,padding:12,height:"100%"},children:[xt.jsxs("div",{style:{overflow:"auto",borderRight:"1px solid #eee",paddingRight:12},children:[xt.jsx("h3",{style:{margin:"0 0 8px 0"},children:"BEV / Inverse Perspective Mapping"}),xt.jsx("input",{type:"file",accept:"image/*",onChange:M=>{const E=M.target.files?.[0];if(!E)return;const C=URL.createObjectURL(E);l(C)}}),xt.jsxs("div",{style:{marginTop:12},children:[xt.jsxs("label",{children:["Half-width (m): ",c.toFixed(1)]}),xt.jsx("input",{type:"range",min:1,max:20,step:.5,value:c,onChange:M=>f(parseFloat(M.target.value)),style:{width:"100%"}})]}),xt.jsxs("div",{style:{marginTop:12},children:[xt.jsxs("label",{children:["Forward (m): ",d.toFixed(1)]}),xt.jsx("input",{type:"range",min:2,max:60,step:1,value:d,onChange:M=>m(parseFloat(M.target.value)),style:{width:"100%"}})]}),xt.jsxs("div",{style:{marginTop:12},children:[xt.jsxs("label",{children:["Output size: ",p,"px"]}),xt.jsx("input",{type:"range",min:256,max:1024,step:64,value:p,onChange:M=>g(parseInt(M.target.value,10)),style:{width:"100%"}})]}),xt.jsxs("div",{style:{marginTop:12,fontSize:12,opacity:.8},children:[xt.jsxs("div",{children:[xt.jsx("b",{children:"Ground:"})," Y=0"]}),xt.jsxs("div",{children:[xt.jsx("b",{children:"Forward:"})," -Z"]}),xt.jsxs("div",{style:{marginTop:6,fontFamily:"ui-monospace, Menlo, monospace"},children:["fx=",t.K.fx.toFixed(0)," fy=",t.K.fy.toFixed(0)," cx=",t.K.cx.toFixed(0)," cy=",t.K.cy.toFixed(0),xt.jsx("br",{}),"C=(",t.pose.Cx.toFixed(2),", ",t.pose.Cy.toFixed(2),", ",t.pose.Cz.toFixed(2),")",xt.jsx("br",{}),"ypr=(",(t.pose.yaw*180/Math.PI).toFixed(0),"°, ",(t.pose.pitch*180/Math.PI).toFixed(0),"°, ",(t.pose.roll*180/Math.PI).toFixed(0),"°)"]})]}),xt.jsx("div",{style:{marginTop:12},children:xt.jsx(Gv,{params:t,setParams:i})}),xt.jsx("canvas",{ref:S,style:{width:"100%",marginTop:12,border:"1px solid #ddd"}})]}),xt.jsxs("div",{style:{height:"100%",minHeight:0},children:[xt.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Bird’s-eye view"}),xt.jsx("canvas",{ref:_,style:{width:"100%",border:"1px solid #ddd"}})]})]})}const ev=new W(0,1.2,5),nv=640,iv=480,fR=1.25,hR={K:{fx:800,fy:800,cx:nv/2,cy:iv/2,skew:0,width:nv,height:iv},pose:{Cx:2,Cy:2,Cz:4,yaw:-25*Math.PI/180,pitch:-10*Math.PI/180,roll:0},dist:{enabled:!1,k1:0,k2:0,k3:0,p1:0,p2:0}};function dR(r){const t=r.K.height,i=r.K.width,s=2*Math.atan(t/2/r.K.fy),l=2*Math.atan(i/2/r.K.fx),c=Math.min(s,l)/2,f=fR/Math.tan(c)*1.2,d=ev.clone().add(new W(0,0,f)),{yaw:m,pitch:p}=tR(d,ev);return{...r,pose:{...r.pose,Cx:d.x,Cy:d.y,Cz:d.z,yaw:m,pitch:p,roll:0}}}function pR(){const[r,t]=Pe.useState("landing"),[i,s]=Pe.useState(()=>dR(hR)),l=c=>{s(f=>c(f))};return r==="landing"?xt.jsx(zA,{onSelect:c=>t(c)}):xt.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[xt.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",borderBottom:"1px solid #eee",background:"white"},children:[xt.jsx("button",{onClick:()=>t("landing"),children:"← Home"}),xt.jsx("div",{style:{fontWeight:900},children:r==="intrinsics"?"Camera Intrinsics":"BEV / IPM Demo"}),xt.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[xt.jsx("button",{onClick:()=>t("intrinsics"),disabled:r==="intrinsics",children:"Intrinsics"}),xt.jsx("button",{onClick:()=>t("bev"),disabled:r==="bev",children:"BEV"})]})]}),xt.jsx("div",{style:{flex:1,minHeight:0},children:r==="intrinsics"?xt.jsx(oR,{params:i,setParams:l}):xt.jsx(uR,{params:i,setParams:l})})]})}ly.createRoot(document.getElementById("root")).render(xt.jsx(ty.StrictMode,{children:xt.jsx(pR,{})}));
