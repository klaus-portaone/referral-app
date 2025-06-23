(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ic(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const xe={},qr=[],Zt=()=>{},O_=()=>!1,Jo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),oc=n=>n.startsWith("onUpdate:"),vt=Object.assign,ac=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},M_=Object.prototype.hasOwnProperty,Ae=(n,e)=>M_.call(n,e),se=Array.isArray,Hr=n=>vi(n)==="[object Map]",cs=n=>vi(n)==="[object Set]",fh=n=>vi(n)==="[object Date]",he=n=>typeof n=="function",qe=n=>typeof n=="string",sn=n=>typeof n=="symbol",De=n=>n!==null&&typeof n=="object",Sf=n=>(De(n)||he(n))&&he(n.then)&&he(n.catch),Pf=Object.prototype.toString,vi=n=>Pf.call(n),L_=n=>vi(n).slice(8,-1),Cf=n=>vi(n)==="[object Object]",lc=n=>qe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,js=ic(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},F_=/-(\w)/g,Kn=Xo(n=>n.replace(F_,(e,t)=>t?t.toUpperCase():"")),U_=/\B([A-Z])/g,Pr=Xo(n=>n.replace(U_,"-$1").toLowerCase()),xf=Xo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ga=Xo(n=>n?`on${xf(n)}`:""),$n=(n,e)=>!Object.is(n,e),co=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},yl=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},bo=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ph;const Zo=()=>ph||(ph=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cc(n){if(se(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=qe(r)?q_(r):cc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(n)||De(n))return n}const $_=/;(?![^(]*\))/g,B_=/:([^]+)/,j_=/\/\*[^]*?\*\//g;function q_(n){const e={};return n.replace(j_,"").split($_).forEach(t=>{if(t){const r=t.split(B_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Er(n){let e="";if(qe(n))e=n;else if(se(n))for(let t=0;t<n.length;t++){const r=Er(n[t]);r&&(e+=r+" ")}else if(De(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const H_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",z_=ic(H_);function kf(n){return!!n||n===""}function W_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=Tr(n[r],e[r]);return t}function Tr(n,e){if(n===e)return!0;let t=fh(n),r=fh(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=sn(n),r=sn(e),t||r)return n===e;if(t=se(n),r=se(e),t||r)return t&&r?W_(n,e):!1;if(t=De(n),r=De(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Tr(n[o],e[o]))return!1}}return String(n)===String(e)}function uc(n,e){return n.findIndex(t=>Tr(t,e))}const Df=n=>!!(n&&n.__v_isRef===!0),Se=n=>qe(n)?n:n==null?"":se(n)||De(n)&&(n.toString===Pf||!he(n.toString))?Df(n)?Se(n.value):JSON.stringify(n,Vf,2):String(n),Vf=(n,e)=>Df(e)?Vf(n,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Qa(r,i)+" =>"]=s,t),{})}:cs(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Qa(t))}:sn(e)?Qa(e):De(e)&&!se(e)&&!Cf(e)?String(e):e,Qa=(n,e="")=>{var t;return sn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tt;class K_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Tt,!e&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Tt;try{return Tt=this,e()}finally{Tt=t}}}on(){++this._on===1&&(this.prevScope=Tt,Tt=this)}off(){this._on>0&&--this._on===0&&(Tt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function G_(){return Tt}let ke;const Ya=new WeakSet;class Nf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tt&&Tt.active&&Tt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ya.has(this)&&(Ya.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Mf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,mh(this),Lf(this);const e=ke,t=jt;ke=this,jt=!0;try{return this.fn()}finally{Ff(this),ke=e,jt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fc(e);this.deps=this.depsTail=void 0,mh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ya.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vl(this)&&this.run()}get dirty(){return vl(this)}}let Of=0,qs,Hs;function Mf(n,e=!1){if(n.flags|=8,e){n.next=Hs,Hs=n;return}n.next=qs,qs=n}function hc(){Of++}function dc(){if(--Of>0)return;if(Hs){let e=Hs;for(Hs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;qs;){let e=qs;for(qs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Lf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ff(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),fc(r),Q_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function vl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Uf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Uf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ni)||(n.globalVersion=ni,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!vl(n))))return;n.flags|=2;const e=n.dep,t=ke,r=jt;ke=n,jt=!0;try{Lf(n);const s=n.fn(n._value);(e.version===0||$n(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ke=t,jt=r,Ff(n),n.flags&=-3}}function fc(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)fc(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Q_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let jt=!0;const $f=[];function vn(){$f.push(jt),jt=!1}function En(){const n=$f.pop();jt=n===void 0?!0:n}function mh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ke;ke=void 0;try{e()}finally{ke=t}}}let ni=0;class Y_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ke||!jt||ke===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ke)t=this.activeLink=new Y_(ke,this),ke.deps?(t.prevDep=ke.depsTail,ke.depsTail.nextDep=t,ke.depsTail=t):ke.deps=ke.depsTail=t,Bf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=ke.depsTail,t.nextDep=void 0,ke.depsTail.nextDep=t,ke.depsTail=t,ke.deps===t&&(ke.deps=r)}return t}trigger(e){this.version++,ni++,this.notify(e)}notify(e){hc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{dc()}}}function Bf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Bf(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const El=new WeakMap,vr=Symbol(""),Tl=Symbol(""),ri=Symbol("");function lt(n,e,t){if(jt&&ke){let r=El.get(n);r||El.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new pc),s.map=r,s.key=t),s.track()}}function fn(n,e,t,r,s,i){const o=El.get(n);if(!o){ni++;return}const l=c=>{c&&c.trigger()};if(hc(),e==="clear")o.forEach(l);else{const c=se(n),h=c&&lc(t);if(c&&t==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===ri||!sn(g)&&g>=f)&&l(p)})}else switch((t!==void 0||o.has(void 0))&&l(o.get(t)),h&&l(o.get(ri)),e){case"add":c?h&&l(o.get("length")):(l(o.get(vr)),Hr(n)&&l(o.get(Tl)));break;case"delete":c||(l(o.get(vr)),Hr(n)&&l(o.get(Tl)));break;case"set":Hr(n)&&l(o.get(vr));break}}dc()}function Mr(n){const e=be(n);return e===n?e:(lt(e,"iterate",ri),Lt(n)?e:e.map(et))}function ea(n){return lt(n=be(n),"iterate",ri),n}const J_={__proto__:null,[Symbol.iterator](){return Ja(this,Symbol.iterator,et)},concat(...n){return Mr(this).concat(...n.map(e=>se(e)?Mr(e):e))},entries(){return Ja(this,"entries",n=>(n[1]=et(n[1]),n))},every(n,e){return hn(this,"every",n,e,void 0,arguments)},filter(n,e){return hn(this,"filter",n,e,t=>t.map(et),arguments)},find(n,e){return hn(this,"find",n,e,et,arguments)},findIndex(n,e){return hn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return hn(this,"findLast",n,e,et,arguments)},findLastIndex(n,e){return hn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return hn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Xa(this,"includes",n)},indexOf(...n){return Xa(this,"indexOf",n)},join(n){return Mr(this).join(n)},lastIndexOf(...n){return Xa(this,"lastIndexOf",n)},map(n,e){return hn(this,"map",n,e,void 0,arguments)},pop(){return Vs(this,"pop")},push(...n){return Vs(this,"push",n)},reduce(n,...e){return gh(this,"reduce",n,e)},reduceRight(n,...e){return gh(this,"reduceRight",n,e)},shift(){return Vs(this,"shift")},some(n,e){return hn(this,"some",n,e,void 0,arguments)},splice(...n){return Vs(this,"splice",n)},toReversed(){return Mr(this).toReversed()},toSorted(n){return Mr(this).toSorted(n)},toSpliced(...n){return Mr(this).toSpliced(...n)},unshift(...n){return Vs(this,"unshift",n)},values(){return Ja(this,"values",et)}};function Ja(n,e,t){const r=ea(n),s=r[e]();return r!==n&&!Lt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const X_=Array.prototype;function hn(n,e,t,r,s,i){const o=ea(n),l=o!==n&&!Lt(n),c=o[e];if(c!==X_[e]){const p=c.apply(n,i);return l?et(p):p}let h=t;o!==n&&(l?h=function(p,g){return t.call(this,et(p),g,n)}:t.length>2&&(h=function(p,g){return t.call(this,p,g,n)}));const f=c.call(o,h,r);return l&&s?s(f):f}function gh(n,e,t,r){const s=ea(n);let i=t;return s!==n&&(Lt(n)?t.length>3&&(i=function(o,l,c){return t.call(this,o,l,c,n)}):i=function(o,l,c){return t.call(this,o,et(l),c,n)}),s[e](i,...r)}function Xa(n,e,t){const r=be(n);lt(r,"iterate",ri);const s=r[e](...t);return(s===-1||s===!1)&&_c(t[0])?(t[0]=be(t[0]),r[e](...t)):s}function Vs(n,e,t=[]){vn(),hc();const r=be(n)[e].apply(n,t);return dc(),En(),r}const Z_=ic("__proto__,__v_isRef,__isVue"),jf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(sn));function ey(n){sn(n)||(n=String(n));const e=be(this);return lt(e,"has",n),e.hasOwnProperty(n)}class qf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?uy:Kf:i?Wf:zf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=se(e);if(!s){let c;if(o&&(c=J_[t]))return c;if(t==="hasOwnProperty")return ey}const l=Reflect.get(e,t,ut(e)?e:r);return(sn(t)?jf.has(t):Z_(t))||(s||lt(e,"get",t),i)?l:ut(l)?o&&lc(t)?l:l.value:De(l)?s?Gf(l):si(l):l}}class Hf extends qf{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const c=Gn(i);if(!Lt(r)&&!Gn(r)&&(i=be(i),r=be(r)),!se(e)&&ut(i)&&!ut(r))return c?!1:(i.value=r,!0)}const o=se(e)&&lc(t)?Number(t)<e.length:Ae(e,t),l=Reflect.set(e,t,r,ut(e)?e:s);return e===be(s)&&(o?$n(r,i)&&fn(e,"set",t,r):fn(e,"add",t,r)),l}deleteProperty(e,t){const r=Ae(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&fn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!sn(t)||!jf.has(t))&&lt(e,"has",t),r}ownKeys(e){return lt(e,"iterate",se(e)?"length":vr),Reflect.ownKeys(e)}}class ty extends qf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ny=new Hf,ry=new ty,sy=new Hf(!0);const wl=n=>n,Xi=n=>Reflect.getPrototypeOf(n);function iy(n,e,t){return function(...r){const s=this.__v_raw,i=be(s),o=Hr(i),l=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,h=s[n](...r),f=t?wl:e?Ao:et;return!e&&lt(i,"iterate",c?Tl:vr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Zi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function oy(n,e){const t={get(s){const i=this.__v_raw,o=be(i),l=be(s);n||($n(s,l)&&lt(o,"get",s),lt(o,"get",l));const{has:c}=Xi(o),h=e?wl:n?Ao:et;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!n&&lt(be(s),"iterate",vr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=be(i),l=be(s);return n||($n(s,l)&&lt(o,"has",s),lt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=be(l),h=e?wl:n?Ao:et;return!n&&lt(c,"iterate",vr),l.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return vt(t,n?{add:Zi("add"),set:Zi("set"),delete:Zi("delete"),clear:Zi("clear")}:{add(s){!e&&!Lt(s)&&!Gn(s)&&(s=be(s));const i=be(this);return Xi(i).has.call(i,s)||(i.add(s),fn(i,"add",s,s)),this},set(s,i){!e&&!Lt(i)&&!Gn(i)&&(i=be(i));const o=be(this),{has:l,get:c}=Xi(o);let h=l.call(o,s);h||(s=be(s),h=l.call(o,s));const f=c.call(o,s);return o.set(s,i),h?$n(i,f)&&fn(o,"set",s,i):fn(o,"add",s,i),this},delete(s){const i=be(this),{has:o,get:l}=Xi(i);let c=o.call(i,s);c||(s=be(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&fn(i,"delete",s,void 0),h},clear(){const s=be(this),i=s.size!==0,o=s.clear();return i&&fn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=iy(s,n,e)}),t}function mc(n,e){const t=oy(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Ae(t,s)&&s in r?t:r,s,i)}const ay={get:mc(!1,!1)},ly={get:mc(!1,!0)},cy={get:mc(!0,!1)};const zf=new WeakMap,Wf=new WeakMap,Kf=new WeakMap,uy=new WeakMap;function hy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dy(n){return n.__v_skip||!Object.isExtensible(n)?0:hy(L_(n))}function si(n){return Gn(n)?n:gc(n,!1,ny,ay,zf)}function fy(n){return gc(n,!1,sy,ly,Wf)}function Gf(n){return gc(n,!0,ry,cy,Kf)}function gc(n,e,t,r,s){if(!De(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=dy(n);if(i===0)return n;const o=s.get(n);if(o)return o;const l=new Proxy(n,i===2?r:t);return s.set(n,l),l}function zr(n){return Gn(n)?zr(n.__v_raw):!!(n&&n.__v_isReactive)}function Gn(n){return!!(n&&n.__v_isReadonly)}function Lt(n){return!!(n&&n.__v_isShallow)}function _c(n){return n?!!n.__v_raw:!1}function be(n){const e=n&&n.__v_raw;return e?be(e):n}function py(n){return!Ae(n,"__v_skip")&&Object.isExtensible(n)&&yl(n,"__v_skip",!0),n}const et=n=>De(n)?si(n):n,Ao=n=>De(n)?Gf(n):n;function ut(n){return n?n.__v_isRef===!0:!1}function Xe(n){return my(n,!1)}function my(n,e){return ut(n)?n:new gy(n,e)}class gy{constructor(e,t){this.dep=new pc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:be(e),this._value=t?e:et(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Lt(e)||Gn(e);e=r?e:be(e),$n(e,t)&&(this._rawValue=e,this._value=r?e:et(e),this.dep.trigger())}}function Oe(n){return ut(n)?n.value:n}const _y={get:(n,e,t)=>e==="__v_raw"?n:Oe(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return ut(s)&&!ut(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Qf(n){return zr(n)?n:new Proxy(n,_y)}class yy{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new pc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ni-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return Mf(this,!0),!0}get value(){const e=this.dep.track();return Uf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function vy(n,e,t=!1){let r,s;return he(n)?r=n:(r=n.get,s=n.set),new yy(r,s,t)}const eo={},Ro=new WeakMap;let gr;function Ey(n,e=!1,t=gr){if(t){let r=Ro.get(t);r||Ro.set(t,r=[]),r.push(n)}}function Ty(n,e,t=xe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=t,h=W=>s?W:Lt(W)||s===!1||s===0?pn(W,1):pn(W);let f,p,g,R,k=!1,N=!1;if(ut(n)?(p=()=>n.value,k=Lt(n)):zr(n)?(p=()=>h(n),k=!0):se(n)?(N=!0,k=n.some(W=>zr(W)||Lt(W)),p=()=>n.map(W=>{if(ut(W))return W.value;if(zr(W))return h(W);if(he(W))return c?c(W,2):W()})):he(n)?e?p=c?()=>c(n,2):n:p=()=>{if(g){vn();try{g()}finally{En()}}const W=gr;gr=f;try{return c?c(n,3,[R]):n(R)}finally{gr=W}}:p=Zt,e&&s){const W=p,ye=s===!0?1/0:s;p=()=>pn(W(),ye)}const M=G_(),Q=()=>{f.stop(),M&&M.active&&ac(M.effects,f)};if(i&&e){const W=e;e=(...ye)=>{W(...ye),Q()}}let J=N?new Array(n.length).fill(eo):eo;const X=W=>{if(!(!(f.flags&1)||!f.dirty&&!W))if(e){const ye=f.run();if(s||k||(N?ye.some((we,b)=>$n(we,J[b])):$n(ye,J))){g&&g();const we=gr;gr=f;try{const b=[ye,J===eo?void 0:N&&J[0]===eo?[]:J,R];J=ye,c?c(e,3,b):e(...b)}finally{gr=we}}}else f.run()};return l&&l(X),f=new Nf(p),f.scheduler=o?()=>o(X,!1):X,R=W=>Ey(W,!1,f),g=f.onStop=()=>{const W=Ro.get(f);if(W){if(c)c(W,4);else for(const ye of W)ye();Ro.delete(f)}},e?r?X(!0):J=f.run():o?o(X.bind(null,!0),!0):f.run(),Q.pause=f.pause.bind(f),Q.resume=f.resume.bind(f),Q.stop=Q,Q}function pn(n,e=1/0,t){if(e<=0||!De(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,ut(n))pn(n.value,e,t);else if(se(n))for(let r=0;r<n.length;r++)pn(n[r],e,t);else if(cs(n)||Hr(n))n.forEach(r=>{pn(r,e,t)});else if(Cf(n)){for(const r in n)pn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&pn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ei(n,e,t,r){try{return r?n(...r):n()}catch(s){ta(s,e,t)}}function on(n,e,t,r){if(he(n)){const s=Ei(n,e,t,r);return s&&Sf(s)&&s.catch(i=>{ta(i,e,t)}),s}if(se(n)){const s=[];for(let i=0;i<n.length;i++)s.push(on(n[i],e,t,r));return s}}function ta(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](n,c,h)===!1)return}l=l.parent}if(i){vn(),Ei(i,null,10,[n,c,h]),En();return}}wy(n,t,s,r,o)}function wy(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const gt=[];let Yt=-1;const Wr=[];let Vn=null,Lr=0;const Yf=Promise.resolve();let So=null;function Jf(n){const e=So||Yf;return n?e.then(this?n.bind(this):n):e}function Iy(n){let e=Yt+1,t=gt.length;for(;e<t;){const r=e+t>>>1,s=gt[r],i=ii(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function yc(n){if(!(n.flags&1)){const e=ii(n),t=gt[gt.length-1];!t||!(n.flags&2)&&e>=ii(t)?gt.push(n):gt.splice(Iy(e),0,n),n.flags|=1,Xf()}}function Xf(){So||(So=Yf.then(ep))}function by(n){se(n)?Wr.push(...n):Vn&&n.id===-1?Vn.splice(Lr+1,0,n):n.flags&1||(Wr.push(n),n.flags|=1),Xf()}function _h(n,e,t=Yt+1){for(;t<gt.length;t++){const r=gt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;gt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Zf(n){if(Wr.length){const e=[...new Set(Wr)].sort((t,r)=>ii(t)-ii(r));if(Wr.length=0,Vn){Vn.push(...e);return}for(Vn=e,Lr=0;Lr<Vn.length;Lr++){const t=Vn[Lr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Vn=null,Lr=0}}const ii=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ep(n){try{for(Yt=0;Yt<gt.length;Yt++){const e=gt[Yt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ei(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Yt<gt.length;Yt++){const e=gt[Yt];e&&(e.flags&=-2)}Yt=-1,gt.length=0,Zf(),So=null,(gt.length||Wr.length)&&ep()}}let Ot=null,tp=null;function Po(n){const e=Ot;return Ot=n,tp=n&&n.type.__scopeId||null,e}function Ay(n,e=Ot,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Sh(-1);const i=Po(e);let o;try{o=n(...s)}finally{Po(i),r._d&&Sh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function yh(n,e){if(Ot===null)return n;const t=aa(Ot),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=xe]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&pn(o),r.push({dir:i,instance:t,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function pr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(vn(),on(c,t,8,[n.el,l,n,e]),En())}}const Ry=Symbol("_vte"),Sy=n=>n.__isTeleport;function vc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,vc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function np(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function zs(n,e,t,r,s=!1){if(se(n)){n.forEach((k,N)=>zs(k,e&&(se(e)?e[N]:e),t,r,s));return}if(Ws(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&zs(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?aa(r.component):r.el,o=s?null:i,{i:l,r:c}=n,h=e&&e.r,f=l.refs===xe?l.refs={}:l.refs,p=l.setupState,g=be(p),R=p===xe?()=>!1:k=>Ae(g,k);if(h!=null&&h!==c&&(qe(h)?(f[h]=null,R(h)&&(p[h]=null)):ut(h)&&(h.value=null)),he(c))Ei(c,l,12,[o,f]);else{const k=qe(c),N=ut(c);if(k||N){const M=()=>{if(n.f){const Q=k?R(c)?p[c]:f[c]:c.value;s?se(Q)&&ac(Q,i):se(Q)?Q.includes(i)||Q.push(i):k?(f[c]=[i],R(c)&&(p[c]=f[c])):(c.value=[i],n.k&&(f[n.k]=c.value))}else k?(f[c]=o,R(c)&&(p[c]=o)):N&&(c.value=o,n.k&&(f[n.k]=o))};o?(M.id=-1,St(M,t)):M()}}}Zo().requestIdleCallback;Zo().cancelIdleCallback;const Ws=n=>!!n.type.__asyncLoader,rp=n=>n.type.__isKeepAlive;function Py(n,e){sp(n,"a",e)}function Cy(n,e){sp(n,"da",e)}function sp(n,e,t=yt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(na(e,r,t),t){let s=t.parent;for(;s&&s.parent;)rp(s.parent.vnode)&&xy(r,e,t,s),s=s.parent}}function xy(n,e,t,r){const s=na(e,n,r,!0);Ec(()=>{ac(r[e],s)},t)}function na(n,e,t=yt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{vn();const l=Ti(t),c=on(e,t,n,o);return l(),En(),c});return r?s.unshift(i):s.push(i),i}}const Rn=n=>(e,t=yt)=>{(!li||n==="sp")&&na(n,(...r)=>e(...r),t)},ky=Rn("bm"),ra=Rn("m"),Dy=Rn("bu"),Vy=Rn("u"),Ny=Rn("bum"),Ec=Rn("um"),Oy=Rn("sp"),My=Rn("rtg"),Ly=Rn("rtc");function Fy(n,e=yt){na("ec",n,e)}const Uy=Symbol.for("v-ndc");function oi(n,e,t,r){let s;const i=t,o=se(n);if(o||qe(n)){const l=o&&zr(n);let c=!1,h=!1;l&&(c=!Lt(n),h=Gn(n),n=ea(n)),s=new Array(n.length);for(let f=0,p=n.length;f<p;f++)s[f]=e(c?h?Ao(et(n[f])):et(n[f]):n[f],f,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(De(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(n[f],f,c,i)}}else s=[];return s}const Il=n=>n?bp(n)?aa(n):Il(n.parent):null,Ks=vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Il(n.parent),$root:n=>Il(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>op(n),$forceUpdate:n=>n.f||(n.f=()=>{yc(n.update)}),$nextTick:n=>n.n||(n.n=Jf.bind(n.proxy)),$watch:n=>av.bind(n)}),Za=(n,e)=>n!==xe&&!n.__isScriptSetup&&Ae(n,e),$y={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=n;let h;if(e[0]!=="$"){const R=o[e];if(R!==void 0)switch(R){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Za(r,e))return o[e]=1,r[e];if(s!==xe&&Ae(s,e))return o[e]=2,s[e];if((h=n.propsOptions[0])&&Ae(h,e))return o[e]=3,i[e];if(t!==xe&&Ae(t,e))return o[e]=4,t[e];bl&&(o[e]=0)}}const f=Ks[e];let p,g;if(f)return e==="$attrs"&&lt(n.attrs,"get",""),f(n);if((p=l.__cssModules)&&(p=p[e]))return p;if(t!==xe&&Ae(t,e))return o[e]=4,t[e];if(g=c.config.globalProperties,Ae(g,e))return g[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Za(s,e)?(s[e]=t,!0):r!==xe&&Ae(r,e)?(r[e]=t,!0):Ae(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!t[o]||n!==xe&&Ae(n,o)||Za(e,o)||(l=i[0])&&Ae(l,o)||Ae(r,o)||Ae(Ks,o)||Ae(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ae(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function vh(n){return se(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let bl=!0;function By(n){const e=op(n),t=n.proxy,r=n.ctx;bl=!1,e.beforeCreate&&Eh(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:R,updated:k,activated:N,deactivated:M,beforeDestroy:Q,beforeUnmount:J,destroyed:X,unmounted:W,render:ye,renderTracked:we,renderTriggered:b,errorCaptured:_,serverPrefetch:E,expose:T,inheritAttrs:A,components:P,directives:v,filters:ft}=e;if(h&&jy(h,r,null),o)for(const q in o){const Z=o[q];he(Z)&&(r[q]=Z.bind(t))}if(s){const q=s.call(t,t);De(q)&&(n.data=si(q))}if(bl=!0,i)for(const q in i){const Z=i[q],ve=he(Z)?Z.bind(t,t):he(Z.get)?Z.get.bind(t,t):Zt,Ke=!he(Z)&&he(Z.set)?Z.set.bind(t):Zt,Et=Qs({get:ve,set:Ke});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>Et.value,set:Le=>Et.value=Le})}if(l)for(const q in l)ip(l[q],r,t,q);if(c){const q=he(c)?c.call(t):c;Reflect.ownKeys(q).forEach(Z=>{Gy(Z,q[Z])})}f&&Eh(f,n,"c");function Y(q,Z){se(Z)?Z.forEach(ve=>q(ve.bind(t))):Z&&q(Z.bind(t))}if(Y(ky,p),Y(ra,g),Y(Dy,R),Y(Vy,k),Y(Py,N),Y(Cy,M),Y(Fy,_),Y(Ly,we),Y(My,b),Y(Ny,J),Y(Ec,W),Y(Oy,E),se(T))if(T.length){const q=n.exposed||(n.exposed={});T.forEach(Z=>{Object.defineProperty(q,Z,{get:()=>t[Z],set:ve=>t[Z]=ve})})}else n.exposed||(n.exposed={});ye&&n.render===Zt&&(n.render=ye),A!=null&&(n.inheritAttrs=A),P&&(n.components=P),v&&(n.directives=v),E&&np(n)}function jy(n,e,t=Zt){se(n)&&(n=Al(n));for(const r in n){const s=n[r];let i;De(s)?"default"in s?i=uo(s.from||r,s.default,!0):i=uo(s.from||r):i=uo(s),ut(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Eh(n,e,t){on(se(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function ip(n,e,t,r){let s=r.includes(".")?vp(t,r):()=>t[r];if(qe(n)){const i=e[n];he(i)&&tl(s,i)}else if(he(n))tl(s,n.bind(t));else if(De(n))if(se(n))n.forEach(i=>ip(i,e,t,r));else{const i=he(n.handler)?n.handler.bind(t):e[n.handler];he(i)&&tl(s,i,n)}}function op(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(h=>Co(c,h,o,!0)),Co(c,e,o)),De(e)&&i.set(e,c),c}function Co(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Co(n,i,t,!0),s&&s.forEach(o=>Co(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const l=qy[o]||t&&t[o];n[o]=l?l(n[o],e[o]):e[o]}return n}const qy={data:Th,props:wh,emits:wh,methods:Os,computed:Os,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Os,directives:Os,watch:zy,provide:Th,inject:Hy};function Th(n,e){return e?n?function(){return vt(he(n)?n.call(this,this):n,he(e)?e.call(this,this):e)}:e:n}function Hy(n,e){return Os(Al(n),Al(e))}function Al(n){if(se(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function mt(n,e){return n?[...new Set([].concat(n,e))]:e}function Os(n,e){return n?vt(Object.create(null),n,e):e}function wh(n,e){return n?se(n)&&se(e)?[...new Set([...n,...e])]:vt(Object.create(null),vh(n),vh(e??{})):e}function zy(n,e){if(!n)return e;if(!e)return n;const t=vt(Object.create(null),n);for(const r in e)t[r]=mt(n[r],e[r]);return t}function ap(){return{app:null,config:{isNativeTag:O_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wy=0;function Ky(n,e){return function(r,s=null){he(r)||(r=vt({},r)),s!=null&&!De(s)&&(s=null);const i=ap(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Wy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Sv,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&he(f.install)?(o.add(f),f.install(h,...p)):he(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!c){const R=h._ceVNode||de(r,s);return R.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),n(R,f,g),c=!0,h._container=f,f.__vue_app__=h,aa(R.component)}},onUnmount(f){l.push(f)},unmount(){c&&(on(l,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Kr;Kr=h;try{return f()}finally{Kr=p}}};return h}}let Kr=null;function Gy(n,e){if(yt){let t=yt.provides;const r=yt.parent&&yt.parent.provides;r===t&&(t=yt.provides=Object.create(r)),t[n]=e}}function uo(n,e,t=!1){const r=yt||Ot;if(r||Kr){let s=Kr?Kr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&he(e)?e.call(r&&r.proxy):e}}const lp={},cp=()=>Object.create(lp),up=n=>Object.getPrototypeOf(n)===lp;function Qy(n,e,t,r=!1){const s={},i=cp();n.propsDefaults=Object.create(null),hp(n,e,s,i);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=r?s:fy(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function Yy(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=n,l=be(s),[c]=n.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=n.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(sa(n.emitsOptions,g))continue;const R=e[g];if(c)if(Ae(i,g))R!==i[g]&&(i[g]=R,h=!0);else{const k=Kn(g);s[k]=Rl(c,l,k,R,n,!1)}else R!==i[g]&&(i[g]=R,h=!0)}}}else{hp(n,e,s,i)&&(h=!0);let f;for(const p in l)(!e||!Ae(e,p)&&((f=Pr(p))===p||!Ae(e,f)))&&(c?t&&(t[p]!==void 0||t[f]!==void 0)&&(s[p]=Rl(c,l,p,void 0,n,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ae(e,p))&&(delete i[p],h=!0)}h&&fn(n.attrs,"set","")}function hp(n,e,t,r){const[s,i]=n.propsOptions;let o=!1,l;if(e)for(let c in e){if(js(c))continue;const h=e[c];let f;s&&Ae(s,f=Kn(c))?!i||!i.includes(f)?t[f]=h:(l||(l={}))[f]=h:sa(n.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=be(t),h=l||xe;for(let f=0;f<i.length;f++){const p=i[f];t[p]=Rl(s,c,p,h[p],n,!Ae(h,p))}}return o}function Rl(n,e,t,r,s,i){const o=n[t];if(o!=null){const l=Ae(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&he(c)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const f=Ti(s);r=h[t]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(t,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Pr(t))&&(r=!0))}return r}const Jy=new WeakMap;function dp(n,e,t=!1){const r=t?Jy:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,o={},l=[];let c=!1;if(!he(n)){const f=p=>{c=!0;const[g,R]=dp(p,e,!0);vt(o,g),R&&l.push(...R)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!i&&!c)return De(n)&&r.set(n,qr),qr;if(se(i))for(let f=0;f<i.length;f++){const p=Kn(i[f]);Ih(p)&&(o[p]=xe)}else if(i)for(const f in i){const p=Kn(f);if(Ih(p)){const g=i[f],R=o[p]=se(g)||he(g)?{type:g}:vt({},g),k=R.type;let N=!1,M=!0;if(se(k))for(let Q=0;Q<k.length;++Q){const J=k[Q],X=he(J)&&J.name;if(X==="Boolean"){N=!0;break}else X==="String"&&(M=!1)}else N=he(k)&&k.name==="Boolean";R[0]=N,R[1]=M,(N||Ae(R,"default"))&&l.push(p)}}const h=[o,l];return De(n)&&r.set(n,h),h}function Ih(n){return n[0]!=="$"&&!js(n)}const Tc=n=>n[0]==="_"||n==="$stable",wc=n=>se(n)?n.map(Xt):[Xt(n)],Xy=(n,e,t)=>{if(e._n)return e;const r=Ay((...s)=>wc(e(...s)),t);return r._c=!1,r},fp=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Tc(s))continue;const i=n[s];if(he(i))e[s]=Xy(s,i,r);else if(i!=null){const o=wc(i);e[s]=()=>o}}},pp=(n,e)=>{const t=wc(e);n.slots.default=()=>t},mp=(n,e,t)=>{for(const r in e)(t||!Tc(r))&&(n[r]=e[r])},Zy=(n,e,t)=>{const r=n.slots=cp();if(n.vnode.shapeFlag&32){const s=e.__;s&&yl(r,"__",s,!0);const i=e._;i?(mp(r,e,t),t&&yl(r,"_",i,!0)):fp(e,r)}else e&&pp(n,e)},ev=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,o=xe;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:mp(s,e,t):(i=!e.$stable,fp(e,s)),o=e}else e&&(pp(n,e),o={default:1});if(i)for(const l in s)!Tc(l)&&o[l]==null&&delete s[l]},St=pv;function tv(n){return nv(n)}function nv(n,e){const t=Zo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:R=Zt,insertStaticContent:k}=n,N=(y,w,x,F=null,O=null,L=null,z=void 0,B=null,$=!!w.dynamicChildren)=>{if(y===w)return;y&&!Ns(y,w)&&(F=ln(y),Le(y,O,L,!0),y=null),w.patchFlag===-2&&($=!1,w.dynamicChildren=null);const{type:U,ref:te,shapeFlag:H}=w;switch(U){case ia:M(y,w,x,F);break;case Qn:Q(y,w,x,F);break;case nl:y==null&&J(w,x,F,z);break;case _t:P(y,w,x,F,O,L,z,B,$);break;default:H&1?ye(y,w,x,F,O,L,z,B,$):H&6?v(y,w,x,F,O,L,z,B,$):(H&64||H&128)&&U.process(y,w,x,F,O,L,z,B,$,Gt)}te!=null&&O?zs(te,y&&y.ref,L,w||y,!w):te==null&&y&&y.ref!=null&&zs(y.ref,null,L,y,!0)},M=(y,w,x,F)=>{if(y==null)r(w.el=l(w.children),x,F);else{const O=w.el=y.el;w.children!==y.children&&h(O,w.children)}},Q=(y,w,x,F)=>{y==null?r(w.el=c(w.children||""),x,F):w.el=y.el},J=(y,w,x,F)=>{[y.el,y.anchor]=k(y.children,w,x,F,y.el,y.anchor)},X=({el:y,anchor:w},x,F)=>{let O;for(;y&&y!==w;)O=g(y),r(y,x,F),y=O;r(w,x,F)},W=({el:y,anchor:w})=>{let x;for(;y&&y!==w;)x=g(y),s(y),y=x;s(w)},ye=(y,w,x,F,O,L,z,B,$)=>{w.type==="svg"?z="svg":w.type==="math"&&(z="mathml"),y==null?we(w,x,F,O,L,z,B,$):E(y,w,O,L,z,B,$)},we=(y,w,x,F,O,L,z,B)=>{let $,U;const{props:te,shapeFlag:H,transition:ee,dirs:ae}=y;if($=y.el=o(y.type,L,te&&te.is,te),H&8?f($,y.children):H&16&&_(y.children,$,null,F,O,el(y,L),z,B),ae&&pr(y,null,F,"created"),b($,y,y.scopeId,z,F),te){for(const ue in te)ue!=="value"&&!js(ue)&&i($,ue,null,te[ue],L,F);"value"in te&&i($,"value",null,te.value,L),(U=te.onVnodeBeforeMount)&&Qt(U,F,y)}ae&&pr(y,null,F,"beforeMount");const re=rv(O,ee);re&&ee.beforeEnter($),r($,w,x),((U=te&&te.onVnodeMounted)||re||ae)&&St(()=>{U&&Qt(U,F,y),re&&ee.enter($),ae&&pr(y,null,F,"mounted")},O)},b=(y,w,x,F,O)=>{if(x&&R(y,x),F)for(let L=0;L<F.length;L++)R(y,F[L]);if(O){let L=O.subTree;if(w===L||Tp(L.type)&&(L.ssContent===w||L.ssFallback===w)){const z=O.vnode;b(y,z,z.scopeId,z.slotScopeIds,O.parent)}}},_=(y,w,x,F,O,L,z,B,$=0)=>{for(let U=$;U<y.length;U++){const te=y[U]=B?Nn(y[U]):Xt(y[U]);N(null,te,w,x,F,O,L,z,B)}},E=(y,w,x,F,O,L,z)=>{const B=w.el=y.el;let{patchFlag:$,dynamicChildren:U,dirs:te}=w;$|=y.patchFlag&16;const H=y.props||xe,ee=w.props||xe;let ae;if(x&&mr(x,!1),(ae=ee.onVnodeBeforeUpdate)&&Qt(ae,x,w,y),te&&pr(w,y,x,"beforeUpdate"),x&&mr(x,!0),(H.innerHTML&&ee.innerHTML==null||H.textContent&&ee.textContent==null)&&f(B,""),U?T(y.dynamicChildren,U,B,x,F,el(w,O),L):z||Z(y,w,B,null,x,F,el(w,O),L,!1),$>0){if($&16)A(B,H,ee,x,O);else if($&2&&H.class!==ee.class&&i(B,"class",null,ee.class,O),$&4&&i(B,"style",H.style,ee.style,O),$&8){const re=w.dynamicProps;for(let ue=0;ue<re.length;ue++){const Ee=re[ue],Ge=H[Ee],Qe=ee[Ee];(Qe!==Ge||Ee==="value")&&i(B,Ee,Ge,Qe,O,x)}}$&1&&y.children!==w.children&&f(B,w.children)}else!z&&U==null&&A(B,H,ee,x,O);((ae=ee.onVnodeUpdated)||te)&&St(()=>{ae&&Qt(ae,x,w,y),te&&pr(w,y,x,"updated")},F)},T=(y,w,x,F,O,L,z)=>{for(let B=0;B<w.length;B++){const $=y[B],U=w[B],te=$.el&&($.type===_t||!Ns($,U)||$.shapeFlag&198)?p($.el):x;N($,U,te,null,F,O,L,z,!0)}},A=(y,w,x,F,O)=>{if(w!==x){if(w!==xe)for(const L in w)!js(L)&&!(L in x)&&i(y,L,w[L],null,O,F);for(const L in x){if(js(L))continue;const z=x[L],B=w[L];z!==B&&L!=="value"&&i(y,L,B,z,O,F)}"value"in x&&i(y,"value",w.value,x.value,O)}},P=(y,w,x,F,O,L,z,B,$)=>{const U=w.el=y?y.el:l(""),te=w.anchor=y?y.anchor:l("");let{patchFlag:H,dynamicChildren:ee,slotScopeIds:ae}=w;ae&&(B=B?B.concat(ae):ae),y==null?(r(U,x,F),r(te,x,F),_(w.children||[],x,te,O,L,z,B,$)):H>0&&H&64&&ee&&y.dynamicChildren?(T(y.dynamicChildren,ee,x,O,L,z,B),(w.key!=null||O&&w===O.subTree)&&gp(y,w,!0)):Z(y,w,x,te,O,L,z,B,$)},v=(y,w,x,F,O,L,z,B,$)=>{w.slotScopeIds=B,y==null?w.shapeFlag&512?O.ctx.activate(w,x,F,z,$):ft(w,x,F,O,L,z,$):Wt(y,w,$)},ft=(y,w,x,F,O,L,z)=>{const B=y.component=Tv(y,F,O);if(rp(y)&&(B.ctx.renderer=Gt),wv(B,!1,z),B.asyncDep){if(O&&O.registerDep(B,Y,z),!y.el){const $=B.subTree=de(Qn);Q(null,$,w,x)}}else Y(B,y,w,x,O,L,z)},Wt=(y,w,x)=>{const F=w.component=y.component;if(dv(y,w,x))if(F.asyncDep&&!F.asyncResolved){q(F,w,x);return}else F.next=w,F.update();else w.el=y.el,F.vnode=w},Y=(y,w,x,F,O,L,z)=>{const B=()=>{if(y.isMounted){let{next:H,bu:ee,u:ae,parent:re,vnode:ue}=y;{const rt=_p(y);if(rt){H&&(H.el=ue.el,q(y,H,z)),rt.asyncDep.then(()=>{y.isUnmounted||B()});return}}let Ee=H,Ge;mr(y,!1),H?(H.el=ue.el,q(y,H,z)):H=ue,ee&&co(ee),(Ge=H.props&&H.props.onVnodeBeforeUpdate)&&Qt(Ge,re,H,ue),mr(y,!0);const Qe=Ah(y),Dt=y.subTree;y.subTree=Qe,N(Dt,Qe,p(Dt.el),ln(Dt),y,O,L),H.el=Qe.el,Ee===null&&fv(y,Qe.el),ae&&St(ae,O),(Ge=H.props&&H.props.onVnodeUpdated)&&St(()=>Qt(Ge,re,H,ue),O)}else{let H;const{el:ee,props:ae}=w,{bm:re,m:ue,parent:Ee,root:Ge,type:Qe}=y,Dt=Ws(w);mr(y,!1),re&&co(re),!Dt&&(H=ae&&ae.onVnodeBeforeMount)&&Qt(H,Ee,w),mr(y,!0);{Ge.ce&&Ge.ce._def.shadowRoot!==!1&&Ge.ce._injectChildStyle(Qe);const rt=y.subTree=Ah(y);N(null,rt,x,F,y,O,L),w.el=rt.el}if(ue&&St(ue,O),!Dt&&(H=ae&&ae.onVnodeMounted)){const rt=w;St(()=>Qt(H,Ee,rt),O)}(w.shapeFlag&256||Ee&&Ws(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&y.a&&St(y.a,O),y.isMounted=!0,w=x=F=null}};y.scope.on();const $=y.effect=new Nf(B);y.scope.off();const U=y.update=$.run.bind($),te=y.job=$.runIfDirty.bind($);te.i=y,te.id=y.uid,$.scheduler=()=>yc(te),mr(y,!0),U()},q=(y,w,x)=>{w.component=y;const F=y.vnode.props;y.vnode=w,y.next=null,Yy(y,w.props,F,x),ev(y,w.children,x),vn(),_h(y),En()},Z=(y,w,x,F,O,L,z,B,$=!1)=>{const U=y&&y.children,te=y?y.shapeFlag:0,H=w.children,{patchFlag:ee,shapeFlag:ae}=w;if(ee>0){if(ee&128){Ke(U,H,x,F,O,L,z,B,$);return}else if(ee&256){ve(U,H,x,F,O,L,z,B,$);return}}ae&8?(te&16&&cr(U,O,L),H!==U&&f(x,H)):te&16?ae&16?Ke(U,H,x,F,O,L,z,B,$):cr(U,O,L,!0):(te&8&&f(x,""),ae&16&&_(H,x,F,O,L,z,B,$))},ve=(y,w,x,F,O,L,z,B,$)=>{y=y||qr,w=w||qr;const U=y.length,te=w.length,H=Math.min(U,te);let ee;for(ee=0;ee<H;ee++){const ae=w[ee]=$?Nn(w[ee]):Xt(w[ee]);N(y[ee],ae,x,null,O,L,z,B,$)}U>te?cr(y,O,L,!0,!1,H):_(w,x,F,O,L,z,B,$,H)},Ke=(y,w,x,F,O,L,z,B,$)=>{let U=0;const te=w.length;let H=y.length-1,ee=te-1;for(;U<=H&&U<=ee;){const ae=y[U],re=w[U]=$?Nn(w[U]):Xt(w[U]);if(Ns(ae,re))N(ae,re,x,null,O,L,z,B,$);else break;U++}for(;U<=H&&U<=ee;){const ae=y[H],re=w[ee]=$?Nn(w[ee]):Xt(w[ee]);if(Ns(ae,re))N(ae,re,x,null,O,L,z,B,$);else break;H--,ee--}if(U>H){if(U<=ee){const ae=ee+1,re=ae<te?w[ae].el:F;for(;U<=ee;)N(null,w[U]=$?Nn(w[U]):Xt(w[U]),x,re,O,L,z,B,$),U++}}else if(U>ee)for(;U<=H;)Le(y[U],O,L,!0),U++;else{const ae=U,re=U,ue=new Map;for(U=re;U<=ee;U++){const Ye=w[U]=$?Nn(w[U]):Xt(w[U]);Ye.key!=null&&ue.set(Ye.key,U)}let Ee,Ge=0;const Qe=ee-re+1;let Dt=!1,rt=0;const Pn=new Array(Qe);for(U=0;U<Qe;U++)Pn[U]=0;for(U=ae;U<=H;U++){const Ye=y[U];if(Ge>=Qe){Le(Ye,O,L,!0);continue}let Vt;if(Ye.key!=null)Vt=ue.get(Ye.key);else for(Ee=re;Ee<=ee;Ee++)if(Pn[Ee-re]===0&&Ns(Ye,w[Ee])){Vt=Ee;break}Vt===void 0?Le(Ye,O,L,!0):(Pn[Vt-re]=U+1,Vt>=rt?rt=Vt:Dt=!0,N(Ye,w[Vt],x,null,O,L,z,B,$),Ge++)}const Es=Dt?sv(Pn):qr;for(Ee=Es.length-1,U=Qe-1;U>=0;U--){const Ye=re+U,Vt=w[Ye],Mi=Ye+1<te?w[Ye+1].el:F;Pn[U]===0?N(null,Vt,x,Mi,O,L,z,B,$):Dt&&(Ee<0||U!==Es[Ee]?Et(Vt,x,Mi,2):Ee--)}}},Et=(y,w,x,F,O=null)=>{const{el:L,type:z,transition:B,children:$,shapeFlag:U}=y;if(U&6){Et(y.component.subTree,w,x,F);return}if(U&128){y.suspense.move(w,x,F);return}if(U&64){z.move(y,w,x,Gt);return}if(z===_t){r(L,w,x);for(let H=0;H<$.length;H++)Et($[H],w,x,F);r(y.anchor,w,x);return}if(z===nl){X(y,w,x);return}if(F!==2&&U&1&&B)if(F===0)B.beforeEnter(L),r(L,w,x),St(()=>B.enter(L),O);else{const{leave:H,delayLeave:ee,afterLeave:ae}=B,re=()=>{y.ctx.isUnmounted?s(L):r(L,w,x)},ue=()=>{H(L,()=>{re(),ae&&ae()})};ee?ee(L,re,ue):ue()}else r(L,w,x)},Le=(y,w,x,F=!1,O=!1)=>{const{type:L,props:z,ref:B,children:$,dynamicChildren:U,shapeFlag:te,patchFlag:H,dirs:ee,cacheIndex:ae}=y;if(H===-2&&(O=!1),B!=null&&(vn(),zs(B,null,x,y,!0),En()),ae!=null&&(w.renderCache[ae]=void 0),te&256){w.ctx.deactivate(y);return}const re=te&1&&ee,ue=!Ws(y);let Ee;if(ue&&(Ee=z&&z.onVnodeBeforeUnmount)&&Qt(Ee,w,y),te&6)kt(y.component,x,F);else{if(te&128){y.suspense.unmount(x,F);return}re&&pr(y,null,w,"beforeUnmount"),te&64?y.type.remove(y,w,x,Gt,F):U&&!U.hasOnce&&(L!==_t||H>0&&H&64)?cr(U,w,x,!1,!0):(L===_t&&H&384||!O&&te&16)&&cr($,w,x),F&&pe(y)}(ue&&(Ee=z&&z.onVnodeUnmounted)||re)&&St(()=>{Ee&&Qt(Ee,w,y),re&&pr(y,null,w,"unmounted")},x)},pe=y=>{const{type:w,el:x,anchor:F,transition:O}=y;if(w===_t){Kt(x,F);return}if(w===nl){W(y);return}const L=()=>{s(x),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(y.shapeFlag&1&&O&&!O.persisted){const{leave:z,delayLeave:B}=O,$=()=>z(x,L);B?B(y.el,L,$):$()}else L()},Kt=(y,w)=>{let x;for(;y!==w;)x=g(y),s(y),y=x;s(w)},kt=(y,w,x)=>{const{bum:F,scope:O,job:L,subTree:z,um:B,m:$,a:U,parent:te,slots:{__:H}}=y;bh($),bh(U),F&&co(F),te&&se(H)&&H.forEach(ee=>{te.renderCache[ee]=void 0}),O.stop(),L&&(L.flags|=8,Le(z,y,w,x)),B&&St(B,w),St(()=>{y.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},cr=(y,w,x,F=!1,O=!1,L=0)=>{for(let z=L;z<y.length;z++)Le(y[z],w,x,F,O)},ln=y=>{if(y.shapeFlag&6)return ln(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const w=g(y.anchor||y.el),x=w&&w[Ry];return x?g(x):w};let ys=!1;const Oi=(y,w,x)=>{y==null?w._vnode&&Le(w._vnode,null,null,!0):N(w._vnode||null,y,w,null,null,null,x),w._vnode=y,ys||(ys=!0,_h(),Zf(),ys=!1)},Gt={p:N,um:Le,m:Et,r:pe,mt:ft,mc:_,pc:Z,pbc:T,n:ln,o:n};return{render:Oi,hydrate:void 0,createApp:Ky(Oi)}}function el({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function mr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function rv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function gp(n,e,t=!1){const r=n.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Nn(s[i]),l.el=o.el),!t&&l.patchFlag!==-2&&gp(o,l)),l.type===ia&&(l.el=o.el),l.type===Qn&&!l.el&&(l.el=o.el)}}function sv(n){const e=n.slice(),t=[0];let r,s,i,o,l;const c=n.length;for(r=0;r<c;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,o=t.length-1;i<o;)l=i+o>>1,n[t[l]]<h?i=l+1:o=l;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function _p(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_p(e)}function bh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const iv=Symbol.for("v-scx"),ov=()=>uo(iv);function tl(n,e,t){return yp(n,e,t)}function yp(n,e,t=xe){const{immediate:r,deep:s,flush:i,once:o}=t,l=vt({},t),c=e&&r||!e&&i!=="post";let h;if(li){if(i==="sync"){const R=ov();h=R.__watcherHandles||(R.__watcherHandles=[])}else if(!c){const R=()=>{};return R.stop=Zt,R.resume=Zt,R.pause=Zt,R}}const f=yt;l.call=(R,k,N)=>on(R,f,k,N);let p=!1;i==="post"?l.scheduler=R=>{St(R,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(R,k)=>{k?R():yc(R)}),l.augmentJob=R=>{e&&(R.flags|=4),p&&(R.flags|=2,f&&(R.id=f.uid,R.i=f))};const g=Ty(n,e,l);return li&&(h?h.push(g):c&&g()),g}function av(n,e,t){const r=this.proxy,s=qe(n)?n.includes(".")?vp(r,n):()=>r[n]:n.bind(r,r);let i;he(e)?i=e:(i=e.handler,t=e);const o=Ti(this),l=yp(s,i.bind(r),t);return o(),l}function vp(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const lv=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Kn(e)}Modifiers`]||n[`${Pr(e)}Modifiers`];function cv(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||xe;let s=t;const i=e.startsWith("update:"),o=i&&lv(r,e.slice(7));o&&(o.trim&&(s=t.map(f=>qe(f)?f.trim():f)),o.number&&(s=t.map(bo)));let l,c=r[l=Ga(e)]||r[l=Ga(Kn(e))];!c&&i&&(c=r[l=Ga(Pr(e))]),c&&on(c,n,6,s);const h=r[l+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,on(h,n,6,s)}}function Ep(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let o={},l=!1;if(!he(n)){const c=h=>{const f=Ep(h,e,!0);f&&(l=!0,vt(o,f))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(De(n)&&r.set(n,null),null):(se(i)?i.forEach(c=>o[c]=null):vt(o,i),De(n)&&r.set(n,o),o)}function sa(n,e){return!n||!Jo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(n,e[0].toLowerCase()+e.slice(1))||Ae(n,Pr(e))||Ae(n,e))}function Ah(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:f,props:p,data:g,setupState:R,ctx:k,inheritAttrs:N}=n,M=Po(n);let Q,J;try{if(t.shapeFlag&4){const W=s||r,ye=W;Q=Xt(h.call(ye,W,f,p,R,g,k)),J=l}else{const W=e;Q=Xt(W.length>1?W(p,{attrs:l,slots:o,emit:c}):W(p,null)),J=e.props?l:uv(l)}}catch(W){Gs.length=0,ta(W,n,1),Q=de(Qn)}let X=Q;if(J&&N!==!1){const W=Object.keys(J),{shapeFlag:ye}=X;W.length&&ye&7&&(i&&W.some(oc)&&(J=hv(J,i)),X=Zr(X,J,!1,!0))}return t.dirs&&(X=Zr(X,null,!1,!0),X.dirs=X.dirs?X.dirs.concat(t.dirs):t.dirs),t.transition&&vc(X,t.transition),Q=X,Po(M),Q}const uv=n=>{let e;for(const t in n)(t==="class"||t==="style"||Jo(t))&&((e||(e={}))[t]=n[t]);return e},hv=(n,e)=>{const t={};for(const r in n)(!oc(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function dv(n,e,t){const{props:r,children:s,component:i}=n,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Rh(r,o,h):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!sa(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Rh(r,o,h):!0:!!o;return!1}function Rh(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!sa(t,i))return!0}return!1}function fv({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Tp=n=>n.__isSuspense;function pv(n,e){e&&e.pendingBranch?se(n)?e.effects.push(...n):e.effects.push(n):by(n)}const _t=Symbol.for("v-fgt"),ia=Symbol.for("v-txt"),Qn=Symbol.for("v-cmt"),nl=Symbol.for("v-stc"),Gs=[];let Pt=null;function ge(n=!1){Gs.push(Pt=n?null:[])}function mv(){Gs.pop(),Pt=Gs[Gs.length-1]||null}let ai=1;function Sh(n,e=!1){ai+=n,n<0&&Pt&&e&&(Pt.hasOnce=!0)}function wp(n){return n.dynamicChildren=ai>0?Pt||qr:null,mv(),ai>0&&Pt&&Pt.push(n),n}function Re(n,e,t,r,s,i){return wp(I(n,e,t,r,s,i,!0))}function Gr(n,e,t,r,s){return wp(de(n,e,t,r,s,!0))}function xo(n){return n?n.__v_isVNode===!0:!1}function Ns(n,e){return n.type===e.type&&n.key===e.key}const Ip=({key:n})=>n??null,ho=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?qe(n)||ut(n)||he(n)?{i:Ot,r:n,k:e,f:!!t}:n:null);function I(n,e=null,t=null,r=0,s=null,i=n===_t?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ip(e),ref:e&&ho(e),scopeId:tp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ot};return l?(bc(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=qe(t)?8:16),ai>0&&!o&&Pt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pt.push(c),c}const de=gv;function gv(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===Uy)&&(n=Qn),xo(n)){const l=Zr(n,e,!0);return t&&bc(l,t),ai>0&&!i&&Pt&&(l.shapeFlag&6?Pt[Pt.indexOf(n)]=l:Pt.push(l)),l.patchFlag=-2,l}if(Rv(n)&&(n=n.__vccOpts),e){e=_v(e);let{class:l,style:c}=e;l&&!qe(l)&&(e.class=Er(l)),De(c)&&(_c(c)&&!se(c)&&(c=vt({},c)),e.style=cc(c))}const o=qe(n)?1:Tp(n)?128:Sy(n)?64:De(n)?4:he(n)?2:0;return I(n,e,t,r,s,o,i,!0)}function _v(n){return n?_c(n)||up(n)?vt({},n):n:null}function Zr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=n,h=e?yv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Ip(h),ref:e&&e.ref?t&&i?se(i)?i.concat(ho(e)):[i,ho(e)]:ho(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==_t?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Zr(n.ssContent),ssFallback:n.ssFallback&&Zr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&vc(f,c.clone(f)),f}function Ic(n=" ",e=0){return de(ia,null,n,e)}function oa(n="",e=!1){return e?(ge(),Gr(Qn,null,n)):de(Qn,null,n)}function Xt(n){return n==null||typeof n=="boolean"?de(Qn):se(n)?de(_t,null,n.slice()):xo(n)?Nn(n):de(ia,null,String(n))}function Nn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Zr(n)}function bc(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(se(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),bc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!up(e)?e._ctx=Ot:s===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Ot},t=32):(e=String(e),r&64?(t=16,e=[Ic(e)]):t=8);n.children=e,n.shapeFlag|=t}function yv(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Er([e.class,r.class]));else if(s==="style")e.style=cc([e.style,r.style]);else if(Jo(s)){const i=e[s],o=r[s];o&&i!==o&&!(se(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Qt(n,e,t,r=null){on(n,e,7,[t,r])}const vv=ap();let Ev=0;function Tv(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||vv,i={uid:Ev++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new K_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dp(r,s),emitsOptions:Ep(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=cv.bind(null,i),n.ce&&n.ce(i),i}let yt=null,ko,Sl;{const n=Zo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ko=e("__VUE_INSTANCE_SETTERS__",t=>yt=t),Sl=e("__VUE_SSR_SETTERS__",t=>li=t)}const Ti=n=>{const e=yt;return ko(n),n.scope.on(),()=>{n.scope.off(),ko(e)}},Ph=()=>{yt&&yt.scope.off(),ko(null)};function bp(n){return n.vnode.shapeFlag&4}let li=!1;function wv(n,e=!1,t=!1){e&&Sl(e);const{props:r,children:s}=n.vnode,i=bp(n);Qy(n,r,i,e),Zy(n,s,t||e);const o=i?Iv(n,e):void 0;return e&&Sl(!1),o}function Iv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,$y);const{setup:r}=t;if(r){vn();const s=n.setupContext=r.length>1?Av(n):null,i=Ti(n),o=Ei(r,n,0,[n.props,s]),l=Sf(o);if(En(),i(),(l||n.sp)&&!Ws(n)&&np(n),l){if(o.then(Ph,Ph),e)return o.then(c=>{Ch(n,c)}).catch(c=>{ta(c,n,0)});n.asyncDep=o}else Ch(n,o)}else Ap(n)}function Ch(n,e,t){he(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:De(e)&&(n.setupState=Qf(e)),Ap(n)}function Ap(n,e,t){const r=n.type;n.render||(n.render=r.render||Zt);{const s=Ti(n);vn();try{By(n)}finally{En(),s()}}}const bv={get(n,e){return lt(n,"get",""),n[e]}};function Av(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,bv),slots:n.slots,emit:n.emit,expose:e}}function aa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Qf(py(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ks)return Ks[t](n)},has(e,t){return t in e||t in Ks}})):n.proxy}function Rv(n){return he(n)&&"__vccOpts"in n}const Qs=(n,e)=>vy(n,e,li);function Pl(n,e,t){const r=arguments.length;return r===2?De(e)&&!se(e)?xo(e)?de(n,null,[e]):de(n,e):de(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&xo(t)&&(t=[t]),de(n,e,t))}const Sv="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cl;const xh=typeof window<"u"&&window.trustedTypes;if(xh)try{Cl=xh.createPolicy("vue",{createHTML:n=>n})}catch{}const Rp=Cl?n=>Cl.createHTML(n):n=>n,Pv="http://www.w3.org/2000/svg",Cv="http://www.w3.org/1998/Math/MathML",dn=typeof document<"u"?document:null,kh=dn&&dn.createElement("template"),xv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?dn.createElementNS(Pv,n):e==="mathml"?dn.createElementNS(Cv,n):t?dn.createElement(n,{is:t}):dn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>dn.createTextNode(n),createComment:n=>dn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>dn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const o=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{kh.innerHTML=Rp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=kh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},kv=Symbol("_vtc");function Dv(n,e,t){const r=n[kv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Dh=Symbol("_vod"),Vv=Symbol("_vsh"),Nv=Symbol(""),Ov=/(^|;)\s*display\s*:/;function Mv(n,e,t){const r=n.style,s=qe(t);let i=!1;if(t&&!s){if(e)if(qe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&fo(r,l,"")}else for(const o in e)t[o]==null&&fo(r,o,"");for(const o in t)o==="display"&&(i=!0),fo(r,o,t[o])}else if(s){if(e!==t){const o=r[Nv];o&&(t+=";"+o),r.cssText=t,i=Ov.test(t)}}else e&&n.removeAttribute("style");Dh in n&&(n[Dh]=i?r.display:"",n[Vv]&&(r.display="none"))}const Vh=/\s*!important$/;function fo(n,e,t){if(se(t))t.forEach(r=>fo(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Lv(n,e);Vh.test(t)?n.setProperty(Pr(r),t.replace(Vh,""),"important"):n[r]=t}}const Nh=["Webkit","Moz","ms"],rl={};function Lv(n,e){const t=rl[e];if(t)return t;let r=Kn(e);if(r!=="filter"&&r in n)return rl[e]=r;r=xf(r);for(let s=0;s<Nh.length;s++){const i=Nh[s]+r;if(i in n)return rl[e]=i}return e}const Oh="http://www.w3.org/1999/xlink";function Mh(n,e,t,r,s,i=z_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Oh,e.slice(6,e.length)):n.setAttributeNS(Oh,e,t):t==null||i&&!kf(t)?n.removeAttribute(e):n.setAttribute(e,i?"":sn(t)?String(t):t)}function Lh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Rp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=kf(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function mn(n,e,t,r){n.addEventListener(e,t,r)}function Fv(n,e,t,r){n.removeEventListener(e,t,r)}const Fh=Symbol("_vei");function Uv(n,e,t,r,s=null){const i=n[Fh]||(n[Fh]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=$v(e);if(r){const h=i[e]=qv(r,s);mn(n,l,h,c)}else o&&(Fv(n,l,o,c),i[e]=void 0)}}const Uh=/(?:Once|Passive|Capture)$/;function $v(n){let e;if(Uh.test(n)){e={};let r;for(;r=n.match(Uh);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Pr(n.slice(2)),e]}let sl=0;const Bv=Promise.resolve(),jv=()=>sl||(Bv.then(()=>sl=0),sl=Date.now());function qv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;on(Hv(r,t.value),e,5,[r])};return t.value=n,t.attached=jv(),t}function Hv(n,e){if(se(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const $h=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,zv=(n,e,t,r,s,i)=>{const o=s==="svg";e==="class"?Dv(n,r,o):e==="style"?Mv(n,t,r):Jo(e)?oc(e)||Uv(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wv(n,e,r,o))?(Lh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mh(n,e,r,o,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!qe(r))?Lh(n,Kn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Mh(n,e,r,o))};function Wv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&$h(e)&&he(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return $h(e)&&qe(t)?!1:e in n}const Yn=n=>{const e=n.props["onUpdate:modelValue"]||!1;return se(e)?t=>co(e,t):e};function Kv(n){n.target.composing=!0}function Bh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ft=Symbol("_assign"),xl={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Ft]=Yn(s);const i=r||s.props&&s.props.type==="number";mn(n,e?"change":"input",o=>{if(o.target.composing)return;let l=n.value;t&&(l=l.trim()),i&&(l=bo(l)),n[Ft](l)}),t&&mn(n,"change",()=>{n.value=n.value.trim()}),e||(mn(n,"compositionstart",Kv),mn(n,"compositionend",Bh),mn(n,"change",Bh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},o){if(n[Ft]=Yn(o),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?bo(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c))}},Gv={deep:!0,created(n,e,t){n[Ft]=Yn(t),mn(n,"change",()=>{const r=n._modelValue,s=es(n),i=n.checked,o=n[Ft];if(se(r)){const l=uc(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const h=[...r];h.splice(l,1),o(h)}}else if(cs(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Sp(n,i))})},mounted:jh,beforeUpdate(n,e,t){n[Ft]=Yn(t),jh(n,e,t)}};function jh(n,{value:e,oldValue:t},r){n._modelValue=e;let s;if(se(e))s=uc(e,r.props.value)>-1;else if(cs(e))s=e.has(r.props.value);else{if(e===t)return;s=Tr(e,Sp(n,!0))}n.checked!==s&&(n.checked=s)}const Qv={created(n,{value:e},t){n.checked=Tr(e,t.props.value),n[Ft]=Yn(t),mn(n,"change",()=>{n[Ft](es(n))})},beforeUpdate(n,{value:e,oldValue:t},r){n[Ft]=Yn(r),e!==t&&(n.checked=Tr(e,r.props.value))}},Yv={deep:!0,created(n,{value:e,modifiers:{number:t}},r){const s=cs(e);mn(n,"change",()=>{const i=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?bo(es(o)):es(o));n[Ft](n.multiple?s?new Set(i):i:i[0]),n._assigning=!0,Jf(()=>{n._assigning=!1})}),n[Ft]=Yn(r)},mounted(n,{value:e}){qh(n,e)},beforeUpdate(n,e,t){n[Ft]=Yn(t)},updated(n,{value:e}){n._assigning||qh(n,e)}};function qh(n,e){const t=n.multiple,r=se(e);if(!(t&&!r&&!cs(e))){for(let s=0,i=n.options.length;s<i;s++){const o=n.options[s],l=es(o);if(t)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(h=>String(h)===String(l)):o.selected=uc(e,l)>-1}else o.selected=e.has(l);else if(Tr(es(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function es(n){return"_value"in n?n._value:n.value}function Sp(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Jv={created(n,e,t){to(n,e,t,null,"created")},mounted(n,e,t){to(n,e,t,null,"mounted")},beforeUpdate(n,e,t,r){to(n,e,t,r,"beforeUpdate")},updated(n,e,t,r){to(n,e,t,r,"updated")}};function Xv(n,e){switch(n){case"SELECT":return Yv;case"TEXTAREA":return xl;default:switch(e){case"checkbox":return Gv;case"radio":return Qv;default:return xl}}}function to(n,e,t,r,s){const o=Xv(n.tagName,t.props&&t.props.type)[s];o&&o(n,e,t,r)}const Zv=["ctrl","shift","alt","meta"],eE={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Zv.some(t=>n[`${t}Key`]&&!e.includes(t))},Ac=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=eE[e[o]];if(l&&l(s,e))return}return n(s,...i)})},tE=vt({patchProp:zv},xv);let Hh;function nE(){return Hh||(Hh=tv(tE))}const rE=(...n)=>{const e=nE().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=iE(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,sE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function sE(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function iE(n){return qe(n)?document.querySelector(n):n}const oE=()=>{};var zh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},aE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Cp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,l=o?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,R=h&63;c||(R=64,o||(g=64)),r.push(t[f],t[p],t[g],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Pp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):aE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new lE;const g=i<<2|l>>4;if(r.push(g),h!==64){const R=l<<4&240|h>>2;if(r.push(R),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class lE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cE=function(n){const e=Pp(n);return Cp.encodeByteArray(e,!0)},Do=function(n){return cE(n).replace(/\./g,"")},xp=function(n){try{return Cp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=()=>uE().__FIREBASE_DEFAULTS__,dE=()=>{if(typeof process>"u"||typeof zh>"u")return;const n=zh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},fE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xp(n[1]);return e&&JSON.parse(e)},la=()=>{try{return oE()||hE()||dE()||fE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kp=n=>{var e,t;return(t=(e=la())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},pE=n=>{const e=kp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Dp=()=>{var n;return(n=la())===null||n===void 0?void 0:n.config},Vp=n=>{var e;return(e=la())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(n){return n.endsWith(".cloudworkstations.dev")}async function Np(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Do(JSON.stringify(t)),Do(JSON.stringify(o)),""].join(".")}const Ys={};function _E(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ys))Ys[e]?n.emulator.push(e):n.prod.push(e);return n}function yE(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Wh=!1;function Op(n,e){if(typeof window>"u"||typeof document>"u"||!wi(window.location.host)||Ys[n]===e||Ys[n]||Wh)return;Ys[n]=e;function t(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=_E().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,R){g.setAttribute("width","24"),g.setAttribute("id",R),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Wh=!0,o()},g}function f(g,R){g.setAttribute("id",R),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=yE(r),R=t("text"),k=document.getElementById(R)||document.createElement("span"),N=t("learnmore"),M=document.getElementById(N)||document.createElement("a"),Q=t("preprendIcon"),J=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const X=g.element;l(X),f(M,N);const W=h();c(J,Q),X.append(J,k,M,W),document.body.appendChild(X)}i?(k.innerText="Preview backend disconnected.",J.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(J.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function EE(){var n;const e=(n=la())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function IE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bE(){const n=ht();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function AE(){return!EE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function RE(){try{return typeof indexedDB=="object"}catch{return!1}}function SE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="FirebaseError";class Sn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=PE,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?CE(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Sn(s,l,r)}}function CE(n,e){return n.replace(xE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xE=/\{\$([^}]+)}/g;function kE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Kh(i)&&Kh(o)){if(!wr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Kh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ms(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ls(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function DE(n,e){const t=new VE(n,e);return t.subscribe.bind(t)}class VE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");NE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=il),s.error===void 0&&(s.error=il),s.complete===void 0&&(s.complete=il);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function il(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(n){return n&&n._delegate?n._delegate:n}class Ir{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new mE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LE(e))try{this.getOrInitializeService({instanceIdentifier:_r})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_r){return this.instances.has(e)}getOptions(e=_r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ME(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_r){return this.component?this.component.multipleInstances?e:_r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ME(n){return n===_r?void 0:n}function LE(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new OE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(me||(me={}));const UE={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},$E=me.INFO,BE={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},jE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=BE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rc{constructor(e){this.name=e,this._logLevel=$E,this._logHandler=jE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const qE=(n,e)=>e.some(t=>n instanceof t);let Gh,Qh;function HE(){return Gh||(Gh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zE(){return Qh||(Qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mp=new WeakMap,kl=new WeakMap,Lp=new WeakMap,ol=new WeakMap,Sc=new WeakMap;function WE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Bn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Mp.set(t,n)}).catch(()=>{}),Sc.set(e,n),e}function KE(n){if(kl.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});kl.set(n,e)}let Dl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return kl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Lp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Bn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function GE(n){Dl=n(Dl)}function QE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(al(this),e,...t);return Lp.set(r,e.sort?e.sort():[e]),Bn(r)}:zE().includes(n)?function(...e){return n.apply(al(this),e),Bn(Mp.get(this))}:function(...e){return Bn(n.apply(al(this),e))}}function YE(n){return typeof n=="function"?QE(n):(n instanceof IDBTransaction&&KE(n),qE(n,HE())?new Proxy(n,Dl):n)}function Bn(n){if(n instanceof IDBRequest)return WE(n);if(ol.has(n))return ol.get(n);const e=YE(n);return e!==n&&(ol.set(n,e),Sc.set(e,n)),e}const al=n=>Sc.get(n);function JE(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),l=Bn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Bn(o.result),c.oldVersion,c.newVersion,Bn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const XE=["get","getKey","getAll","getAllKeys","count"],ZE=["put","add","delete","clear"],ll=new Map;function Yh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ll.get(e))return ll.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=ZE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||XE.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return ll.set(e,i),i}GE(n=>({...n,get:(e,t,r)=>Yh(e,t)||n.get(e,t,r),has:(e,t)=>!!Yh(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(t0(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function t0(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vl="@firebase/app",Jh="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new Rc("@firebase/app"),n0="@firebase/app-compat",r0="@firebase/analytics-compat",s0="@firebase/analytics",i0="@firebase/app-check-compat",o0="@firebase/app-check",a0="@firebase/auth",l0="@firebase/auth-compat",c0="@firebase/database",u0="@firebase/data-connect",h0="@firebase/database-compat",d0="@firebase/functions",f0="@firebase/functions-compat",p0="@firebase/installations",m0="@firebase/installations-compat",g0="@firebase/messaging",_0="@firebase/messaging-compat",y0="@firebase/performance",v0="@firebase/performance-compat",E0="@firebase/remote-config",T0="@firebase/remote-config-compat",w0="@firebase/storage",I0="@firebase/storage-compat",b0="@firebase/firestore",A0="@firebase/ai",R0="@firebase/firestore-compat",S0="firebase",P0="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="[DEFAULT]",C0={[Vl]:"fire-core",[n0]:"fire-core-compat",[s0]:"fire-analytics",[r0]:"fire-analytics-compat",[o0]:"fire-app-check",[i0]:"fire-app-check-compat",[a0]:"fire-auth",[l0]:"fire-auth-compat",[c0]:"fire-rtdb",[u0]:"fire-data-connect",[h0]:"fire-rtdb-compat",[d0]:"fire-fn",[f0]:"fire-fn-compat",[p0]:"fire-iid",[m0]:"fire-iid-compat",[g0]:"fire-fcm",[_0]:"fire-fcm-compat",[y0]:"fire-perf",[v0]:"fire-perf-compat",[E0]:"fire-rc",[T0]:"fire-rc-compat",[w0]:"fire-gcs",[I0]:"fire-gcs-compat",[b0]:"fire-fst",[R0]:"fire-fst-compat",[A0]:"fire-vertex","fire-js":"fire-js",[S0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new Map,x0=new Map,Ol=new Map;function Xh(n,e){try{n.container.addComponent(e)}catch(t){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ts(n){const e=n.name;if(Ol.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;Ol.set(e,n);for(const t of Vo.values())Xh(t,n);for(const t of x0.values())Xh(t,n);return!0}function Pc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Nt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jn=new Ii("app","Firebase",k0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=P0;function Fp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nl,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw jn.create("bad-app-name",{appName:String(s)});if(t||(t=Dp()),!t)throw jn.create("no-options");const i=Vo.get(s);if(i){if(wr(t,i.options)&&wr(r,i.config))return i;throw jn.create("duplicate-app",{appName:s})}const o=new FE(s);for(const c of Ol.values())o.addComponent(c);const l=new D0(t,r,o);return Vo.set(s,l),l}function Up(n=Nl){const e=Vo.get(n);if(!e&&n===Nl&&Dp())return Fp();if(!e)throw jn.create("no-app",{appName:n});return e}function qn(n,e,t){var r;let s=(r=C0[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(l.join(" "));return}ts(new Ir(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0="firebase-heartbeat-database",N0=1,ci="firebase-heartbeat-store";let cl=null;function $p(){return cl||(cl=JE(V0,N0,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ci)}catch(t){console.warn(t)}}}}).catch(n=>{throw jn.create("idb-open",{originalErrorMessage:n.message})})),cl}async function O0(n){try{const t=(await $p()).transaction(ci),r=await t.objectStore(ci).get(Bp(n));return await t.done,r}catch(e){if(e instanceof Sn)Tn.warn(e.message);else{const t=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(t.message)}}}async function Zh(n,e){try{const r=(await $p()).transaction(ci,"readwrite");await r.objectStore(ci).put(e,Bp(n)),await r.done}catch(t){if(t instanceof Sn)Tn.warn(t.message);else{const r=jn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tn.warn(r.message)}}}function Bp(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=1024,L0=30;class F0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $0(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ed();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>L0){const o=B0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ed(),{heartbeatsToSend:r,unsentEntries:s}=U0(this._heartbeatsCache.heartbeats),i=Do(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Tn.warn(t),""}}}function ed(){return new Date().toISOString().substring(0,10)}function U0(n,e=M0){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),td(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),td(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class $0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RE()?SE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await O0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function td(n){return Do(JSON.stringify({version:2,heartbeats:n})).length}function B0(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(n){ts(new Ir("platform-logger",e=>new e0(e),"PRIVATE")),ts(new Ir("heartbeat",e=>new F0(e),"PRIVATE")),qn(Vl,Jh,n),qn(Vl,Jh,"esm2017"),qn("fire-js","")}j0("");function Cc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function jp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q0=jp,qp=new Ii("auth","Firebase",jp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Rc("@firebase/auth");function H0(n,...e){No.logLevel<=me.WARN&&No.warn(`Auth (${us}): ${n}`,...e)}function po(n,...e){No.logLevel<=me.ERROR&&No.error(`Auth (${us}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(n,...e){throw xc(n,...e)}function en(n,...e){return xc(n,...e)}function Hp(n,e,t){const r=Object.assign(Object.assign({},q0()),{[e]:t});return new Ii("auth","Firebase",r).create(e,{appName:n.name})}function yn(n){return Hp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return qp.create(n,...e)}function ie(n,e,...t){if(!n)throw xc(e,...t)}function gn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw po(e),new Error(e)}function wn(n,e){n||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function z0(){return nd()==="http:"||nd()==="https:"}function nd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(z0()||wE()||"connection"in navigator)?navigator.onLine:!0}function K0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t){this.shortDelay=e,this.longDelay=t,wn(t>e,"Short delay should be less than long delay!"),this.isMobile=vE()||IE()}get(){return W0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(n,e){wn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Y0=new Ai(3e4,6e4);function sr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ir(n,e,t,r,s={}){return Wp(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=bi(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},i);return TE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&wi(n.emulatorConfig.host)&&(h.credentials="include"),zp.fetch()(await Kp(n,n.config.apiHost,t,l),h)})}async function Wp(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},G0),e);try{const s=new X0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw no(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw no(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw no(n,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Hp(n,f,h);Ht(n,f)}}catch(s){if(s instanceof Sn)throw s;Ht(n,"network-request-failed",{message:String(s)})}}async function Ri(n,e,t,r,s={}){const i=await ir(n,e,t,r,s);return"mfaPendingCredential"in i&&Ht(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Kp(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?kc(n.config,s):`${n.config.apiScheme}://${s}`;return Q0.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function J0(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class X0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),Y0.get())})}}function no(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=en(n,e,r);return s.customData._tokenResponse=t,s}function rd(n){return n!==void 0&&n.enterprise!==void 0}class Z0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return J0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function eT(n,e){return ir(n,"GET","/v2/recaptchaConfig",sr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tT(n,e){return ir(n,"POST","/v1/accounts:delete",e)}async function Oo(n,e){return ir(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nT(n,e=!1){const t=$e(n),r=await t.getIdToken(e),s=Dc(r);ie(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Js(ul(s.auth_time)),issuedAtTime:Js(ul(s.iat)),expirationTime:Js(ul(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ul(n){return Number(n)*1e3}function Dc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return po("JWT malformed, contained fewer than 3 sections"),null;try{const s=xp(t);return s?JSON.parse(s):(po("Failed to decode base64 JWT payload"),null)}catch(s){return po("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function sd(n){const e=Dc(n);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Sn&&rT(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function rT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(n){var e;const t=n.auth,r=await n.getIdToken(),s=await ui(n,Oo(t,{idToken:r}));ie(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Gp(i.providerUserInfo):[],l=oT(n.providerData,o),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ll(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function iT(n){const e=$e(n);await Mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oT(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Gp(n){return n.map(e=>{var{providerId:t}=e,r=Cc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aT(n,e){const t=await Wp(n,{},async()=>{const r=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await Kp(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",zp.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function lT(n,e){return ir(n,"POST","/v2/accounts:revokeToken",sr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const t=sd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await aT(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Qr;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n,e){ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Cc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ll(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ui(this,this.stsTokenManager.getToken(this.auth,e));return ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nT(this,e)}reload(){return iT(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Mo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(yn(this.auth));const e=await this.getIdToken();return await ui(this,tT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,l,c,h,f;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,R=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=t.photoURL)!==null&&o!==void 0?o:void 0,N=(l=t.tenantId)!==null&&l!==void 0?l:void 0,M=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,Q=(h=t.createdAt)!==null&&h!==void 0?h:void 0,J=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:X,emailVerified:W,isAnonymous:ye,providerData:we,stsTokenManager:b}=t;ie(X&&b,e,"internal-error");const _=Qr.fromJSON(this.name,b);ie(typeof X=="string",e,"internal-error"),Dn(p,e.name),Dn(g,e.name),ie(typeof W=="boolean",e,"internal-error"),ie(typeof ye=="boolean",e,"internal-error"),Dn(R,e.name),Dn(k,e.name),Dn(N,e.name),Dn(M,e.name),Dn(Q,e.name),Dn(J,e.name);const E=new Bt({uid:X,auth:e,email:g,emailVerified:W,displayName:p,isAnonymous:ye,photoURL:k,phoneNumber:R,tenantId:N,stsTokenManager:_,createdAt:Q,lastLoginAt:J});return we&&Array.isArray(we)&&(E.providerData=we.map(T=>Object.assign({},T))),M&&(E._redirectEventId=M),E}static async _fromIdTokenResponse(e,t,r=!1){const s=new Qr;s.updateFromServerResponse(t);const i=new Bt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Mo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Gp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Qr;l.updateFromIdToken(r);const c=new Bt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ll(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=new Map;function _n(n){wn(n instanceof Function,"Expected a class definition");let e=id.get(n);return e?(wn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,id.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Qp.type="NONE";const od=Qp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(n,e,t){return`firebase:${n}:${e}:${t}`}class Yr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=mo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Oo(this.auth,{idToken:e}).catch(()=>{});return t?Bt._fromGetAccountInfoResponse(this.auth,t,e):null}return Bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Yr(_n(od),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||_n(od);const o=mo(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await Oo(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Bt._fromGetAccountInfoResponse(e,g,f)}else p=Bt._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Yr(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Yr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tm(e))return"Blackberry";if(nm(e))return"Webos";if(Jp(e))return"Safari";if((e.includes("chrome/")||Xp(e))&&!e.includes("edge/"))return"Chrome";if(em(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yp(n=ht()){return/firefox\//i.test(n)}function Jp(n=ht()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xp(n=ht()){return/crios\//i.test(n)}function Zp(n=ht()){return/iemobile/i.test(n)}function em(n=ht()){return/android/i.test(n)}function tm(n=ht()){return/blackberry/i.test(n)}function nm(n=ht()){return/webos/i.test(n)}function Vc(n=ht()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function cT(n=ht()){var e;return Vc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uT(){return bE()&&document.documentMode===10}function rm(n=ht()){return Vc(n)||em(n)||nm(n)||tm(n)||/windows phone/i.test(n)||Zp(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(n,e=[]){let t;switch(n){case"Browser":t=ad(ht());break;case"Worker":t=`${ad(ht())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${us}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dT(n,e={}){return ir(n,"GET","/v2/passwordPolicy",sr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=6;class pT{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:fT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ld(this),this.idTokenSubscription=new ld(this),this.beforeStateQueue=new hT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_n(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Yr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Oo(this,{idToken:e}),r=await Bt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=K0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nt(this.app))return Promise.reject(yn(this));const t=e?$e(e):null;return t&&ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nt(this.app)?Promise.reject(yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dT(this),t=new pT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ii("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await lT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_n(e)||this._popupRedirectResolver;ie(t,this,"argument-error"),this.redirectPersistenceManager=await Yr.create(this,[_n(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&H0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Cr(n){return $e(n)}class ld{constructor(e){this.auth=e,this.observer=null,this.addObserver=DE(t=>this.observer=t)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gT(n){ca=n}function im(n){return ca.loadJS(n)}function _T(){return ca.recaptchaEnterpriseScript}function yT(){return ca.gapiScript}function vT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class ET{constructor(){this.enterprise=new TT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class TT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const wT="recaptcha-enterprise",om="NO_RECAPTCHA";class IT{constructor(e){this.type=wT,this.auth=Cr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{eT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new Z0(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;rd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(om)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ET().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!t&&rd(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=_T();c.length!==0&&(c+=l),im(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function cd(n,e,t,r=!1,s=!1){const i=new IT(n);let o;if(s)o=om;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Fl(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await cd(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await cd(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(n,e){const t=Pc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(wr(i,e??{}))return s;Ht(s,"already-initialized")}return t.initialize({options:e})}function AT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(_n);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RT(n,e,t){const r=Cr(n);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=am(e),{host:o,port:l}=ST(e),c=l===null?"":`:${l}`,h={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(wr(h,r.config.emulator)&&wr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,wi(o)?(Np(`${i}//${o}${c}`),Op("Auth",!0)):PT()}function am(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ST(n){const e=am(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ud(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ud(o)}}}function ud(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function PT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,t){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function CT(n,e){return ir(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(n,e){return Ri(n,"POST","/v1/accounts:signInWithPassword",sr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kT(n,e){return Ri(n,"POST","/v1/accounts:signInWithEmailLink",sr(n,e))}async function DT(n,e){return Ri(n,"POST","/v1/accounts:signInWithEmailLink",sr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Nc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new hi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new hi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fl(e,t,"signInWithPassword",xT);case"emailLink":return kT(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fl(e,r,"signUpPassword",CT);case"emailLink":return DT(e,{idToken:t,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(n,e){return Ri(n,"POST","/v1/accounts:signInWithIdp",sr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="http://localhost";class br extends Nc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ht("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Cc(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new br(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Jr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Jr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Jr(e,t)}buildRequest(){const e={requestUri:VT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=bi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OT(n){const e=Ms(Ls(n)).link,t=e?Ms(Ls(e)).deep_link_id:null,r=Ms(Ls(n)).deep_link_id;return(r?Ms(Ls(r)).link:null)||r||t||e||n}class Oc{constructor(e){var t,r,s,i,o,l;const c=Ms(Ls(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=NT((s=c.mode)!==null&&s!==void 0?s:null);ie(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=OT(e);try{return new Oc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.providerId=hs.PROVIDER_ID}static credential(e,t){return hi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Oc.parseLink(t);return ie(r,"argument-error"),hi._fromEmailAndCode(e,r.code,r.tenantId)}}hs.PROVIDER_ID="password";hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends lm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Si{constructor(){super("facebook.com")}static credential(e){return br._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return br._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Mn.credential(t,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Si{constructor(){super("github.com")}static credential(e){return br._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Si{constructor(){super("twitter.com")}static credential(e,t){return br._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Fn.credential(t,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MT(n,e){return Ri(n,"POST","/v1/accounts:signUp",sr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Bt._fromIdTokenResponse(e,r,s),o=hd(r);return new Ar({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=hd(r);return new Ar({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function hd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends Sn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Lo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Lo(e,t,r,s)}}function cm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Lo._fromErrorAndOperation(n,i,e,r):i})}async function LT(n,e,t=!1){const r=await ui(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ar._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(n,e,t=!1){const{auth:r}=n;if(Nt(r.app))return Promise.reject(yn(r));const s="reauthenticate";try{const i=await ui(n,cm(r,s,e,n),t);ie(i.idToken,r,"internal-error");const o=Dc(i.idToken);ie(o,r,"internal-error");const{sub:l}=o;return ie(n.uid===l,r,"user-mismatch"),Ar._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function um(n,e,t=!1){if(Nt(n.app))return Promise.reject(yn(n));const r="signIn",s=await cm(n,r,e),i=await Ar._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function UT(n,e){return um(Cr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(n){const e=Cr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $T(n,e,t){if(Nt(n.app))return Promise.reject(yn(n));const r=Cr(n),o=await Fl(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",MT).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&hm(n),c}),l=await Ar._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function BT(n,e,t){return Nt(n.app)?Promise.reject(yn(n)):UT($e(n),hs.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hm(n),r})}function jT(n,e,t,r){return $e(n).onIdTokenChanged(e,t,r)}function qT(n,e,t){return $e(n).beforeAuthStateChanged(e,t)}function HT(n,e,t,r){return $e(n).onAuthStateChanged(e,t,r)}function zT(n){return $e(n).signOut()}const Fo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fo,"1"),this.storage.removeItem(Fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=1e3,KT=10;class fm extends dm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,KT):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},WT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fm.type="LOCAL";const GT=fm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm extends dm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pm.type="SESSION";const mm=pm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ua(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(t.origin,i)),c=await QT(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ua.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Mc("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function JT(n){tn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function XT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ew(){return gm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="firebaseLocalStorageDb",tw=1,Uo="firebaseLocalStorage",ym="fbase_key";class Pi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ha(n,e){return n.transaction([Uo],e?"readwrite":"readonly").objectStore(Uo)}function nw(){const n=indexedDB.deleteDatabase(_m);return new Pi(n).toPromise()}function Ul(){const n=indexedDB.open(_m,tw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Uo,{keyPath:ym})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Uo)?e(r):(r.close(),await nw(),e(await Ul()))})})}async function dd(n,e,t){const r=ha(n,!0).put({[ym]:e,value:t});return new Pi(r).toPromise()}async function rw(n,e){const t=ha(n,!1).get(e),r=await new Pi(t).toPromise();return r===void 0?null:r.value}function fd(n,e){const t=ha(n,!0).delete(e);return new Pi(t).toPromise()}const sw=800,iw=3;class vm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ul(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>iw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ua._getInstance(ew()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await XT(),!this.activeServiceWorker)return;this.sender=new YT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ul();return await dd(e,Fo,"1"),await fd(e,Fo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>dd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>rw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ha(s,!1).getAll();return new Pi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vm.type="LOCAL";const ow=vm;new Ai(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(n,e){return e?_n(e):(ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc extends Nc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Jr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lw(n){return um(n.auth,new Lc(n),n.bypassAuthState)}function cw(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),FT(t,new Lc(n),n.bypassAuthState)}async function uw(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),LT(t,new Lc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lw;case"linkViaPopup":case"linkViaRedirect":return uw;case"reauthViaPopup":case"reauthViaRedirect":return cw;default:Ht(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=new Ai(2e3,1e4);class jr extends Em{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Mc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hw.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="pendingRedirect",go=new Map;class fw extends Em{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=go.get(this.auth._key());if(!e){try{const r=await pw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}go.set(this.auth._key(),e)}return this.bypassAuthState||go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pw(n,e){const t=_w(e),r=gw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function mw(n,e){go.set(n._key(),e)}function gw(n){return _n(n._redirectPersistence)}function _w(n){return mo(dw,n.config.apiKey,n.name)}async function yw(n,e,t=!1){if(Nt(n.app))return Promise.reject(yn(n));const r=Cr(n),s=aw(r,e),o=await new fw(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=10*60*1e3;class Ew{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Tm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(en(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vw&&this.cachedEventUids.clear(),this.cachedEventUids.has(pd(e))}saveEventToCache(e){this.cachedEventUids.add(pd(e)),this.lastProcessedEventTime=Date.now()}}function pd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Tm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Tw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tm(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww(n,e={}){return ir(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bw=/^https?/;async function Aw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ww(n);for(const t of e)try{if(Rw(t))return}catch{}Ht(n,"unauthorized-domain")}function Rw(n){const e=Ml(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!bw.test(t))return!1;if(Iw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=new Ai(3e4,6e4);function md(){const n=tn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Pw(n){return new Promise((e,t)=>{var r,s,i;function o(){md(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{md(),t(en(n,"network-request-failed"))},timeout:Sw.get()})}if(!((s=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=tn().gapi)===null||i===void 0)&&i.load)o();else{const l=vT("iframefcb");return tn()[l]=()=>{gapi.load?o():t(en(n,"network-request-failed"))},im(`${yT()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw _o=null,e})}let _o=null;function Cw(n){return _o=_o||Pw(n),_o}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=new Ai(5e3,15e3),kw="__/auth/iframe",Dw="emulator/auth/iframe",Vw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ow(n){const e=n.config;ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?kc(e,Dw):`https://${n.config.authDomain}/${kw}`,r={apiKey:e.apiKey,appName:n.name,v:us},s=Nw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${bi(r).slice(1)}`}async function Mw(n){const e=await Cw(n),t=tn().gapi;return ie(t,n,"internal-error"),e.open({where:document.body,url:Ow(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=en(n,"network-request-failed"),l=tn().setTimeout(()=>{i(o)},xw.get());function c(){tn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fw=500,Uw=600,$w="_blank",Bw="http://localhost";class gd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jw(n,e,t,r=Fw,s=Uw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Lw),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ht().toLowerCase();t&&(l=Xp(h)?$w:t),Yp(h)&&(e=e||Bw,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[R,k])=>`${g}${R}=${k},`,"");if(cT(h)&&l!=="_self")return qw(e||"",l),new gd(null);const p=window.open(e||"",l,f);ie(p,n,"popup-blocked");try{p.focus()}catch{}return new gd(p)}function qw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="__/auth/handler",zw="emulator/auth/handler",Ww=encodeURIComponent("fac");async function _d(n,e,t,r,s,i){ie(n.config.authDomain,n,"auth-domain-config-required"),ie(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:us,eventId:s};if(e instanceof lm){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",kE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Si){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${Ww}=${encodeURIComponent(c)}`:"";return`${Kw(n)}?${bi(l).slice(1)}${h}`}function Kw({config:n}){return n.emulator?kc(n,zw):`https://${n.authDomain}/${Hw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="webStorageSupport";class Gw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mm,this._completeRedirectFn=yw,this._overrideRedirectResult=mw}async _openPopup(e,t,r,s){var i;wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await _d(e,t,r,Ml(),s);return jw(e,o,Mc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await _d(e,t,r,Ml(),s);return JT(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Mw(e),r=new Ew(e);return t.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(hl,{type:hl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[hl];o!==void 0&&t(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Aw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return rm()||Jp()||Vc()}}const Qw=Gw;var yd="@firebase/auth",vd="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Xw(n){ts(new Ir("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sm(n)},h=new mT(r,s,i,c);return AT(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ts(new Ir("auth-internal",e=>{const t=Cr(e.getProvider("auth").getImmediate());return(r=>new Yw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(yd,vd,Jw(n)),qn(yd,vd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=5*60,eI=Vp("authIdTokenMaxAge")||Zw;let Ed=null;const tI=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>eI)return;const s=t==null?void 0:t.token;Ed!==s&&(Ed=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function nI(n=Up()){const e=Pc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=bT(n,{popupRedirectResolver:Qw,persistence:[ow,GT,mm]}),r=Vp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=tI(i.toString());qT(t,o,()=>o(t.currentUser)),jT(t,l=>o(l))}}const s=kp("auth");return s&&RT(t,`http://${s}`),t}function rI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}gT({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=en("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",rI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Xw("Browser");var sI="firebase",iI="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qn(sI,iI,"app");var Td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hn,wm;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function E(){}E.prototype=_.prototype,b.D=_.prototype,b.prototype=new E,b.prototype.constructor=b,b.C=function(T,A,P){for(var v=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)v[ft-2]=arguments[ft];return _.prototype[A].apply(T,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,_,E){E||(E=0);var T=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)T[A]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(A=0;16>A;++A)T[A]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=b.g[0],E=b.g[1],A=b.g[2];var P=b.g[3],v=_+(P^E&(A^P))+T[0]+3614090360&4294967295;_=E+(v<<7&4294967295|v>>>25),v=P+(A^_&(E^A))+T[1]+3905402710&4294967295,P=_+(v<<12&4294967295|v>>>20),v=A+(E^P&(_^E))+T[2]+606105819&4294967295,A=P+(v<<17&4294967295|v>>>15),v=E+(_^A&(P^_))+T[3]+3250441966&4294967295,E=A+(v<<22&4294967295|v>>>10),v=_+(P^E&(A^P))+T[4]+4118548399&4294967295,_=E+(v<<7&4294967295|v>>>25),v=P+(A^_&(E^A))+T[5]+1200080426&4294967295,P=_+(v<<12&4294967295|v>>>20),v=A+(E^P&(_^E))+T[6]+2821735955&4294967295,A=P+(v<<17&4294967295|v>>>15),v=E+(_^A&(P^_))+T[7]+4249261313&4294967295,E=A+(v<<22&4294967295|v>>>10),v=_+(P^E&(A^P))+T[8]+1770035416&4294967295,_=E+(v<<7&4294967295|v>>>25),v=P+(A^_&(E^A))+T[9]+2336552879&4294967295,P=_+(v<<12&4294967295|v>>>20),v=A+(E^P&(_^E))+T[10]+4294925233&4294967295,A=P+(v<<17&4294967295|v>>>15),v=E+(_^A&(P^_))+T[11]+2304563134&4294967295,E=A+(v<<22&4294967295|v>>>10),v=_+(P^E&(A^P))+T[12]+1804603682&4294967295,_=E+(v<<7&4294967295|v>>>25),v=P+(A^_&(E^A))+T[13]+4254626195&4294967295,P=_+(v<<12&4294967295|v>>>20),v=A+(E^P&(_^E))+T[14]+2792965006&4294967295,A=P+(v<<17&4294967295|v>>>15),v=E+(_^A&(P^_))+T[15]+1236535329&4294967295,E=A+(v<<22&4294967295|v>>>10),v=_+(A^P&(E^A))+T[1]+4129170786&4294967295,_=E+(v<<5&4294967295|v>>>27),v=P+(E^A&(_^E))+T[6]+3225465664&4294967295,P=_+(v<<9&4294967295|v>>>23),v=A+(_^E&(P^_))+T[11]+643717713&4294967295,A=P+(v<<14&4294967295|v>>>18),v=E+(P^_&(A^P))+T[0]+3921069994&4294967295,E=A+(v<<20&4294967295|v>>>12),v=_+(A^P&(E^A))+T[5]+3593408605&4294967295,_=E+(v<<5&4294967295|v>>>27),v=P+(E^A&(_^E))+T[10]+38016083&4294967295,P=_+(v<<9&4294967295|v>>>23),v=A+(_^E&(P^_))+T[15]+3634488961&4294967295,A=P+(v<<14&4294967295|v>>>18),v=E+(P^_&(A^P))+T[4]+3889429448&4294967295,E=A+(v<<20&4294967295|v>>>12),v=_+(A^P&(E^A))+T[9]+568446438&4294967295,_=E+(v<<5&4294967295|v>>>27),v=P+(E^A&(_^E))+T[14]+3275163606&4294967295,P=_+(v<<9&4294967295|v>>>23),v=A+(_^E&(P^_))+T[3]+4107603335&4294967295,A=P+(v<<14&4294967295|v>>>18),v=E+(P^_&(A^P))+T[8]+1163531501&4294967295,E=A+(v<<20&4294967295|v>>>12),v=_+(A^P&(E^A))+T[13]+2850285829&4294967295,_=E+(v<<5&4294967295|v>>>27),v=P+(E^A&(_^E))+T[2]+4243563512&4294967295,P=_+(v<<9&4294967295|v>>>23),v=A+(_^E&(P^_))+T[7]+1735328473&4294967295,A=P+(v<<14&4294967295|v>>>18),v=E+(P^_&(A^P))+T[12]+2368359562&4294967295,E=A+(v<<20&4294967295|v>>>12),v=_+(E^A^P)+T[5]+4294588738&4294967295,_=E+(v<<4&4294967295|v>>>28),v=P+(_^E^A)+T[8]+2272392833&4294967295,P=_+(v<<11&4294967295|v>>>21),v=A+(P^_^E)+T[11]+1839030562&4294967295,A=P+(v<<16&4294967295|v>>>16),v=E+(A^P^_)+T[14]+4259657740&4294967295,E=A+(v<<23&4294967295|v>>>9),v=_+(E^A^P)+T[1]+2763975236&4294967295,_=E+(v<<4&4294967295|v>>>28),v=P+(_^E^A)+T[4]+1272893353&4294967295,P=_+(v<<11&4294967295|v>>>21),v=A+(P^_^E)+T[7]+4139469664&4294967295,A=P+(v<<16&4294967295|v>>>16),v=E+(A^P^_)+T[10]+3200236656&4294967295,E=A+(v<<23&4294967295|v>>>9),v=_+(E^A^P)+T[13]+681279174&4294967295,_=E+(v<<4&4294967295|v>>>28),v=P+(_^E^A)+T[0]+3936430074&4294967295,P=_+(v<<11&4294967295|v>>>21),v=A+(P^_^E)+T[3]+3572445317&4294967295,A=P+(v<<16&4294967295|v>>>16),v=E+(A^P^_)+T[6]+76029189&4294967295,E=A+(v<<23&4294967295|v>>>9),v=_+(E^A^P)+T[9]+3654602809&4294967295,_=E+(v<<4&4294967295|v>>>28),v=P+(_^E^A)+T[12]+3873151461&4294967295,P=_+(v<<11&4294967295|v>>>21),v=A+(P^_^E)+T[15]+530742520&4294967295,A=P+(v<<16&4294967295|v>>>16),v=E+(A^P^_)+T[2]+3299628645&4294967295,E=A+(v<<23&4294967295|v>>>9),v=_+(A^(E|~P))+T[0]+4096336452&4294967295,_=E+(v<<6&4294967295|v>>>26),v=P+(E^(_|~A))+T[7]+1126891415&4294967295,P=_+(v<<10&4294967295|v>>>22),v=A+(_^(P|~E))+T[14]+2878612391&4294967295,A=P+(v<<15&4294967295|v>>>17),v=E+(P^(A|~_))+T[5]+4237533241&4294967295,E=A+(v<<21&4294967295|v>>>11),v=_+(A^(E|~P))+T[12]+1700485571&4294967295,_=E+(v<<6&4294967295|v>>>26),v=P+(E^(_|~A))+T[3]+2399980690&4294967295,P=_+(v<<10&4294967295|v>>>22),v=A+(_^(P|~E))+T[10]+4293915773&4294967295,A=P+(v<<15&4294967295|v>>>17),v=E+(P^(A|~_))+T[1]+2240044497&4294967295,E=A+(v<<21&4294967295|v>>>11),v=_+(A^(E|~P))+T[8]+1873313359&4294967295,_=E+(v<<6&4294967295|v>>>26),v=P+(E^(_|~A))+T[15]+4264355552&4294967295,P=_+(v<<10&4294967295|v>>>22),v=A+(_^(P|~E))+T[6]+2734768916&4294967295,A=P+(v<<15&4294967295|v>>>17),v=E+(P^(A|~_))+T[13]+1309151649&4294967295,E=A+(v<<21&4294967295|v>>>11),v=_+(A^(E|~P))+T[4]+4149444226&4294967295,_=E+(v<<6&4294967295|v>>>26),v=P+(E^(_|~A))+T[11]+3174756917&4294967295,P=_+(v<<10&4294967295|v>>>22),v=A+(_^(P|~E))+T[2]+718787259&4294967295,A=P+(v<<15&4294967295|v>>>17),v=E+(P^(A|~_))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(A+(v<<21&4294967295|v>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+P&4294967295}r.prototype.u=function(b,_){_===void 0&&(_=b.length);for(var E=_-this.blockSize,T=this.B,A=this.h,P=0;P<_;){if(A==0)for(;P<=E;)s(this,b,P),P+=this.blockSize;if(typeof b=="string"){for(;P<_;)if(T[A++]=b.charCodeAt(P++),A==this.blockSize){s(this,T),A=0;break}}else for(;P<_;)if(T[A++]=b[P++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;var E=8*this.o;for(_=b.length-8;_<b.length;++_)b[_]=E&255,E/=256;for(this.u(b),b=Array(16),_=E=0;4>_;++_)for(var T=0;32>T;T+=8)b[E++]=this.g[_]>>>T&255;return b};function i(b,_){var E=l;return Object.prototype.hasOwnProperty.call(E,b)?E[b]:E[b]=_(b)}function o(b,_){this.h=_;for(var E=[],T=!0,A=b.length-1;0<=A;A--){var P=b[A]|0;T&&P==_||(E[A]=P,T=!1)}this.g=E}var l={};function c(b){return-128<=b&&128>b?i(b,function(_){return new o([_|0],0>_?-1:0)}):new o([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return M(h(-b));for(var _=[],E=1,T=0;b>=E;T++)_[T]=b/E|0,E*=4294967296;return new o(_,0)}function f(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return M(f(b.substring(1),_));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(_,8)),T=p,A=0;A<b.length;A+=8){var P=Math.min(8,b.length-A),v=parseInt(b.substring(A,A+P),_);8>P?(P=h(Math.pow(_,P)),T=T.j(P).add(h(v))):(T=T.j(E),T=T.add(h(v)))}return T}var p=c(0),g=c(1),R=c(16777216);n=o.prototype,n.m=function(){if(N(this))return-M(this).m();for(var b=0,_=1,E=0;E<this.g.length;E++){var T=this.i(E);b+=(0<=T?T:4294967296+T)*_,_*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(k(this))return"0";if(N(this))return"-"+M(this).toString(b);for(var _=h(Math.pow(b,6)),E=this,T="";;){var A=W(E,_).g;E=Q(E,A.j(_));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(b);if(E=A,k(E))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function k(b){if(b.h!=0)return!1;for(var _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function N(b){return b.h==-1}n.l=function(b){return b=Q(this,b),N(b)?-1:k(b)?0:1};function M(b){for(var _=b.g.length,E=[],T=0;T<_;T++)E[T]=~b.g[T];return new o(E,~b.h).add(g)}n.abs=function(){return N(this)?M(this):this},n.add=function(b){for(var _=Math.max(this.g.length,b.g.length),E=[],T=0,A=0;A<=_;A++){var P=T+(this.i(A)&65535)+(b.i(A)&65535),v=(P>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);T=v>>>16,P&=65535,v&=65535,E[A]=v<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function Q(b,_){return b.add(M(_))}n.j=function(b){if(k(this)||k(b))return p;if(N(this))return N(b)?M(this).j(M(b)):M(M(this).j(b));if(N(b))return M(this.j(M(b)));if(0>this.l(R)&&0>b.l(R))return h(this.m()*b.m());for(var _=this.g.length+b.g.length,E=[],T=0;T<2*_;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<b.g.length;A++){var P=this.i(T)>>>16,v=this.i(T)&65535,ft=b.i(A)>>>16,Wt=b.i(A)&65535;E[2*T+2*A]+=v*Wt,J(E,2*T+2*A),E[2*T+2*A+1]+=P*Wt,J(E,2*T+2*A+1),E[2*T+2*A+1]+=v*ft,J(E,2*T+2*A+1),E[2*T+2*A+2]+=P*ft,J(E,2*T+2*A+2)}for(T=0;T<_;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=_;T<2*_;T++)E[T]=0;return new o(E,0)};function J(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function X(b,_){this.g=b,this.h=_}function W(b,_){if(k(_))throw Error("division by zero");if(k(b))return new X(p,p);if(N(b))return _=W(M(b),_),new X(M(_.g),M(_.h));if(N(_))return _=W(b,M(_)),new X(M(_.g),_.h);if(30<b.g.length){if(N(b)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,T=_;0>=T.l(b);)E=ye(E),T=ye(T);var A=we(E,1),P=we(T,1);for(T=we(T,2),E=we(E,2);!k(T);){var v=P.add(T);0>=v.l(b)&&(A=A.add(E),P=v),T=we(T,1),E=we(E,1)}return _=Q(b,A.j(_)),new X(A,_)}for(A=p;0<=b.l(_);){for(E=Math.max(1,Math.floor(b.m()/_.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=h(E),v=P.j(_);N(v)||0<v.l(b);)E-=T,P=h(E),v=P.j(_);k(P)&&(P=g),A=A.add(P),b=Q(b,v)}return new X(A,b)}n.A=function(b){return W(this,b).h},n.and=function(b){for(var _=Math.max(this.g.length,b.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)&b.i(T);return new o(E,this.h&b.h)},n.or=function(b){for(var _=Math.max(this.g.length,b.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)|b.i(T);return new o(E,this.h|b.h)},n.xor=function(b){for(var _=Math.max(this.g.length,b.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)^b.i(T);return new o(E,this.h^b.h)};function ye(b){for(var _=b.g.length+1,E=[],T=0;T<_;T++)E[T]=b.i(T)<<1|b.i(T-1)>>>31;return new o(E,b.h)}function we(b,_){var E=_>>5;_%=32;for(var T=b.g.length-E,A=[],P=0;P<T;P++)A[P]=0<_?b.i(P+E)>>>_|b.i(P+E+1)<<32-_:b.i(P+E);return new o(A,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,wm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Hn=o}).apply(typeof Td<"u"?Td:typeof self<"u"?self:typeof window<"u"?window:{});var ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Im,Fs,bm,yo,$l,Am,Rm,Sm;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ro=="object"&&ro];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var S=a[m];if(!(S in d))break e;d=d[S]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,S={next:function(){if(!m&&d<a.length){var C=d++;return{value:u(C,a[C]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function R(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function k(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,S,C){for(var j=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)j[Ce-2]=arguments[Ce];return u.prototype[S].apply(m,j)}}function N(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function M(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const S=a.length||0,C=m.length||0;a.length=S+C;for(let j=0;j<C;j++)a[S+j]=m[j]}else a.push(m)}}class Q{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function J(a){return/^[\s\xa0]*$/.test(a)}function X(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function W(a){return W[" "](a),a}W[" "]=function(){};var ye=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function we(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function b(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function _(a){const u={};for(const d in a)u[d]=a[d];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,u){let d,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(d in m)a[d]=m[d];for(let C=0;C<E.length;C++)d=E[C],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function A(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function v(){var a=ve;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ft{constructor(){this.h=this.g=null}add(u,d){const m=Wt.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Wt=new Q(()=>new Y,a=>a.reset());class Y{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let q,Z=!1,ve=new ft,Ke=()=>{const a=l.Promise.resolve(void 0);q=()=>{a.then(Et)}};var Et=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(d){P(d)}var u=Wt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}Z=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Kt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return a}();function kt(a,u){if(pe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ye){e:{try{W(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:cr[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&kt.aa.h.call(this)}}k(kt,pe);var cr={2:"touch",3:"pen",4:"mouse"};kt.prototype.h=function(){kt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ln="closure_listenable_"+(1e6*Math.random()|0),ys=0;function Oi(a,u,d,m,S){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=S,this.key=++ys,this.da=this.fa=!1}function Gt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function vs(a){this.src=a,this.g={},this.h=0}vs.prototype.add=function(a,u,d,m,S){var C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);var j=w(a,u,m,S);return-1<j?(u=a[j],d||(u.fa=!1)):(u=new Oi(u,this.src,C,!!m,S),u.fa=d,a.push(u)),u};function y(a,u){var d=u.type;if(d in a.g){var m=a.g[d],S=Array.prototype.indexOf.call(m,u,void 0),C;(C=0<=S)&&Array.prototype.splice.call(m,S,1),C&&(Gt(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function w(a,u,d,m){for(var S=0;S<a.length;++S){var C=a[S];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==m)return S}return-1}var x="closure_lm_"+(1e6*Math.random()|0),F={};function O(a,u,d,m,S){if(Array.isArray(u)){for(var C=0;C<u.length;C++)O(a,u[C],d,m,S);return null}return d=ae(d),a&&a[ln]?a.K(u,d,h(m)?!!m.capture:!1,S):L(a,u,d,!1,m,S)}function L(a,u,d,m,S,C){if(!u)throw Error("Invalid event type");var j=h(S)?!!S.capture:!!S,Ce=H(a);if(Ce||(a[x]=Ce=new vs(a)),d=Ce.add(u,d,m,j,C),d.proxy)return d;if(m=z(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Kt||(S=j),S===void 0&&(S=!1),a.addEventListener(u.toString(),m,S);else if(a.attachEvent)a.attachEvent(U(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function z(){function a(d){return u.call(a.src,a.listener,d)}const u=te;return a}function B(a,u,d,m,S){if(Array.isArray(u))for(var C=0;C<u.length;C++)B(a,u[C],d,m,S);else m=h(m)?!!m.capture:!!m,d=ae(d),a&&a[ln]?(a=a.i,u=String(u).toString(),u in a.g&&(C=a.g[u],d=w(C,d,m,S),-1<d&&(Gt(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete a.g[u],a.h--)))):a&&(a=H(a))&&(u=a.g[u.toString()],a=-1,u&&(a=w(u,d,m,S)),(d=-1<a?u[a]:null)&&$(d))}function $(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[ln])y(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(U(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=H(u))?(y(d,a),d.h==0&&(d.src=null,u[x]=null)):Gt(a)}}}function U(a){return a in F?F[a]:F[a]="on"+a}function te(a,u){if(a.da)a=!0;else{u=new kt(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&$(a),a=d.call(m,u)}return a}function H(a){return a=a[x],a instanceof vs?a:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[ee]||(a[ee]=function(u){return a.handleEvent(u)}),a[ee])}function re(){Le.call(this),this.i=new vs(this),this.M=this,this.F=null}k(re,Le),re.prototype[ln]=!0,re.prototype.removeEventListener=function(a,u,d,m){B(this,a,u,d,m)};function ue(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new pe(u,a);else if(u instanceof pe)u.target=u.target||a;else{var S=u;u=new pe(m,a),T(u,S)}if(S=!0,d)for(var C=d.length-1;0<=C;C--){var j=u.g=d[C];S=Ee(j,m,!0,u)&&S}if(j=u.g=a,S=Ee(j,m,!0,u)&&S,S=Ee(j,m,!1,u)&&S,d)for(C=0;C<d.length;C++)j=u.g=d[C],S=Ee(j,m,!1,u)&&S}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)Gt(d[m]);delete a.g[u],a.h--}}this.F=null},re.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},re.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Ee(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,C=0;C<u.length;++C){var j=u[C];if(j&&!j.da&&j.capture==d){var Ce=j.listener,Je=j.ha||j.src;j.fa&&y(a.i,j),S=Ce.call(Je,m)!==!1&&S}}return S&&!m.defaultPrevented}function Ge(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Qe(a){a.g=Ge(()=>{a.g=null,a.i&&(a.i=!1,Qe(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Dt extends Le{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Qe(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rt(a){Le.call(this),this.h=a,this.g={}}k(rt,Le);var Pn=[];function Es(a){we(a.g,function(u,d){this.g.hasOwnProperty(d)&&$(u)},a),a.g={}}rt.prototype.N=function(){rt.aa.N.call(this),Es(this)},rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ye=l.JSON.stringify,Vt=l.JSON.parse,Mi=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Va(){}Va.prototype.h=null;function wu(a){return a.h||(a.h=a.i())}function Iu(){}var Ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Na(){pe.call(this,"d")}k(Na,pe);function Oa(){pe.call(this,"c")}k(Oa,pe);var ur={},bu=null;function Li(){return bu=bu||new re}ur.La="serverreachability";function Au(a){pe.call(this,ur.La,a)}k(Au,pe);function ws(a){const u=Li();ue(u,new Au(u))}ur.STAT_EVENT="statevent";function Ru(a,u){pe.call(this,ur.STAT_EVENT,a),this.stat=u}k(Ru,pe);function pt(a){const u=Li();ue(u,new Ru(u,a))}ur.Ma="timingevent";function Su(a,u){pe.call(this,ur.Ma,a),this.size=u}k(Su,pe);function Is(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function bs(){this.g=!0}bs.prototype.xa=function(){this.g=!1};function d_(a,u,d,m,S,C){a.info(function(){if(a.g)if(C)for(var j="",Ce=C.split("&"),Je=0;Je<Ce.length;Je++){var Ie=Ce[Je].split("=");if(1<Ie.length){var st=Ie[0];Ie=Ie[1];var it=st.split("_");j=2<=it.length&&it[1]=="type"?j+(st+"="+Ie+"&"):j+(st+"=redacted&")}}else j=null;else j=C;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+u+`
`+d+`
`+j})}function f_(a,u,d,m,S,C,j){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+u+`
`+d+`
`+C+" "+j})}function Dr(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+m_(a,d)+(m?" "+m:"")})}function p_(a,u){a.info(function(){return"TIMEOUT: "+u})}bs.prototype.info=function(){};function m_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var j=1;j<S.length;j++)S[j]=""}}}}return Ye(d)}catch{return u}}var Fi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ma;function Ui(){}k(Ui,Va),Ui.prototype.g=function(){return new XMLHttpRequest},Ui.prototype.i=function(){return{}},Ma=new Ui;function Cn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new rt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cu}function Cu(){this.i=null,this.g="",this.h=!1}var xu={},La={};function Fa(a,u,d){a.L=1,a.v=qi(cn(u)),a.m=d,a.P=!0,ku(a,null)}function ku(a,u){a.F=Date.now(),$i(a),a.A=cn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),zu(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Cu,a.g=ch(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Dt(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(Pn[0]=S.toString()),S=Pn);for(var C=0;C<S.length;C++){var j=O(d,S[C],m||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),ws(),d_(a.i,a.u,a.A,a.l,a.R,a.m)}Cn.prototype.ca=function(a){a=a.target;const u=this.M;u&&un(a)==3?u.j():this.Y(a)},Cn.prototype.Y=function(a){try{if(a==this.g)e:{const it=un(this.g);var u=this.g.Ba();const Or=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Xu(this.g)))){this.J||it!=4||u==7||(u==8||0>=Or?ws(3):ws(2)),Ua(this);var d=this.g.Z();this.X=d;t:if(Du(this)){var m=Xu(this.g);a="";var S=m.length,C=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hr(this),As(this);var j="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(C&&u==S-1)});m.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,f_(this.i,this.u,this.A,this.l,this.R,it,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,Je=this.g;if((Ce=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(Ce)){var Ie=Ce;break t}}Ie=null}if(d=Ie)Dr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$a(this,d);else{this.o=!1,this.s=3,pt(12),hr(this),As(this);break e}}if(this.P){d=!0;let $t;for(;!this.J&&this.C<j.length;)if($t=g_(this,j),$t==La){it==4&&(this.s=4,pt(14),d=!1),Dr(this.i,this.l,null,"[Incomplete Response]");break}else if($t==xu){this.s=4,pt(15),Dr(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else Dr(this.i,this.l,$t,null),$a(this,$t);if(Du(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||j.length!=0||this.h.h||(this.s=1,pt(16),d=!1),this.o=this.o&&d,!d)Dr(this.i,this.l,j,"[Invalid Chunked Response]"),hr(this),As(this);else if(0<j.length&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.ba&&!st.M&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Wa(st),st.M=!0,pt(11))}}else Dr(this.i,this.l,j,null),$a(this,j);it==4&&hr(this),this.o&&!this.J&&(it==4?ih(this.j,this):(this.o=!1,$i(this)))}else V_(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),hr(this),As(this)}}}catch{}finally{}};function Du(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function g_(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?La:(d=Number(u.substring(d,m)),isNaN(d)?xu:(m+=1,m+d>u.length?La:(u=u.slice(m,m+d),a.C=m+d,u)))}Cn.prototype.cancel=function(){this.J=!0,hr(this)};function $i(a){a.S=Date.now()+a.I,Vu(a,a.I)}function Vu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Is(g(a.ba,a),u)}function Ua(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Cn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(p_(this.i,this.A),this.L!=2&&(ws(),pt(17)),hr(this),this.s=2,As(this)):Vu(this,this.S-a)};function As(a){a.j.G==0||a.J||ih(a.j,a)}function hr(a){Ua(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Es(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function $a(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Ba(d.h,a))){if(!a.K&&Ba(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Qi(d),Ki(d);else break e;za(d),pt(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=Is(g(d.Za,d),6e3));if(1>=Mu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else fr(d,11)}else if((a.K||d.g==a)&&Qi(d),!J(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let Ie=S[u];if(d.T=Ie[0],Ie=Ie[1],d.G==2)if(Ie[0]=="c"){d.K=Ie[1],d.ia=Ie[2];const st=Ie[3];st!=null&&(d.la=st,d.j.info("VER="+d.la));const it=Ie[4];it!=null&&(d.Aa=it,d.j.info("SVER="+d.Aa));const Or=Ie[5];Or!=null&&typeof Or=="number"&&0<Or&&(m=1.5*Or,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const $t=a.g;if($t){const Ji=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ji){var C=m.h;C.g||Ji.indexOf("spdy")==-1&&Ji.indexOf("quic")==-1&&Ji.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ja(C,C.h),C.h=null))}if(m.D){const Ka=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;Ka&&(m.ya=Ka,Ve(m.I,m.D,Ka))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var j=a;if(m.qa=lh(m,m.J?m.ia:null,m.W),j.K){Lu(m.h,j);var Ce=j,Je=m.L;Je&&(Ce.I=Je),Ce.B&&(Ua(Ce),$i(Ce)),m.g=j}else rh(m);0<d.i.length&&Gi(d)}else Ie[0]!="stop"&&Ie[0]!="close"||fr(d,7);else d.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?fr(d,7):Ha(d):Ie[0]!="noop"&&d.l&&d.l.ta(Ie),d.v=0)}}ws(4)}catch{}}var __=class{constructor(a,u){this.g=a,this.map=u}};function Nu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ou(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Mu(a){return a.h?1:a.g?a.g.size:0}function Ba(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function ja(a,u){a.g?a.g.add(u):a.h=u}function Lu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Nu.prototype.cancel=function(){if(this.i=Fu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Fu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return N(a.i)}function y_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function v_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function Uu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=v_(a),m=y_(a),S=m.length,C=0;C<S;C++)u.call(void 0,m[C],d&&d[C],a)}var $u=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function E_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),S=null;if(0<=m){var C=a[d].substring(0,m);S=a[d].substring(m+1)}else C=a[d];u(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function dr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof dr){this.h=a.h,Bi(this,a.j),this.o=a.o,this.g=a.g,ji(this,a.s),this.l=a.l;var u=a.i,d=new Ps;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Bu(this,d),this.m=a.m}else a&&(u=String(a).match($u))?(this.h=!1,Bi(this,u[1]||"",!0),this.o=Rs(u[2]||""),this.g=Rs(u[3]||"",!0),ji(this,u[4]),this.l=Rs(u[5]||"",!0),Bu(this,u[6]||"",!0),this.m=Rs(u[7]||"")):(this.h=!1,this.i=new Ps(null,this.h))}dr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ss(u,ju,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ss(u,ju,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ss(d,d.charAt(0)=="/"?I_:w_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ss(d,A_)),a.join("")};function cn(a){return new dr(a)}function Bi(a,u,d){a.j=d?Rs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function ji(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Bu(a,u,d){u instanceof Ps?(a.i=u,R_(a.i,a.h)):(d||(u=Ss(u,b_)),a.i=new Ps(u,a.h))}function Ve(a,u,d){a.i.set(u,d)}function qi(a){return Ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Rs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ss(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,T_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function T_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ju=/[#\/\?@]/g,w_=/[#\?:]/g,I_=/[#\?]/g,b_=/[#\?@]/g,A_=/#/g;function Ps(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function xn(a){a.g||(a.g=new Map,a.h=0,a.i&&E_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Ps.prototype,n.add=function(a,u){xn(this),this.i=null,a=Vr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function qu(a,u){xn(a),u=Vr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Hu(a,u){return xn(a),u=Vr(a,u),a.g.has(u)}n.forEach=function(a,u){xn(this),this.g.forEach(function(d,m){d.forEach(function(S){a.call(u,S,m,this)},this)},this)},n.na=function(){xn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const S=a[m];for(let C=0;C<S.length;C++)d.push(u[m])}return d},n.V=function(a){xn(this);let u=[];if(typeof a=="string")Hu(this,a)&&(u=u.concat(this.g.get(Vr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},n.set=function(a,u){return xn(this),this.i=null,a=Vr(this,a),Hu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function zu(a,u,d){qu(a,u),0<d.length&&(a.i=null,a.g.set(Vr(a,u),N(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const C=encodeURIComponent(String(m)),j=this.V(m);for(m=0;m<j.length;m++){var S=C;j[m]!==""&&(S+="="+encodeURIComponent(String(j[m]))),a.push(S)}}return this.i=a.join("&")};function Vr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function R_(a,u){u&&!a.j&&(xn(a),a.i=null,a.g.forEach(function(d,m){var S=m.toLowerCase();m!=S&&(qu(this,m),zu(this,S,d))},a)),a.j=u}function S_(a,u){const d=new bs;if(l.Image){const m=new Image;m.onload=R(kn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=R(kn,d,"TestLoadImage: error",!1,u,m),m.onabort=R(kn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=R(kn,d,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function P_(a,u){const d=new bs,m=new AbortController,S=setTimeout(()=>{m.abort(),kn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(C=>{clearTimeout(S),C.ok?kn(d,"TestPingServer: ok",!0,u):kn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),kn(d,"TestPingServer: error",!1,u)})}function kn(a,u,d,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(d)}catch{}}function C_(){this.g=new Mi}function x_(a,u,d){const m=d||"";try{Uu(a,function(S,C){let j=S;h(S)&&(j=Ye(S)),u.push(m+C+"="+encodeURIComponent(j))})}catch(S){throw u.push(m+"type="+encodeURIComponent("_badmap")),S}}function Hi(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Hi,Va),Hi.prototype.g=function(){return new zi(this.l,this.j)},Hi.prototype.i=function(a){return function(){return a}}({});function zi(a,u){re.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(zi,re),n=zi.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,xs(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,xs(this)),this.g&&(this.readyState=3,xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Cs(this):xs(this),this.readyState==3&&Wu(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Cs(this))},n.Qa=function(a){this.g&&(this.response=a,Cs(this))},n.ga=function(){this.g&&Cs(this)};function Cs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,xs(a)}n.setRequestHeader=function(a,u){this.u.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ku(a){let u="";return we(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function qa(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Ku(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ve(a,u,d))}function Fe(a){re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Fe,re);var k_=/^https?$/i,D_=["POST","PUT"];n=Fe.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ma.g(),this.v=this.o?wu(this.o):wu(Ma),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(C){Gu(this,C);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)d.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const C of m.keys())d.set(C,m.get(C));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),S=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(D_,u,void 0))||m||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,j]of d)this.g.setRequestHeader(C,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ju(this),this.u=!0,this.g.send(a),this.u=!1}catch(C){Gu(this,C)}};function Gu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Qu(a),Wi(a)}function Qu(a){a.A||(a.A=!0,ue(a,"complete"),ue(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ue(this,"complete"),ue(this,"abort"),Wi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wi(this,!0)),Fe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Yu(this):this.bb())},n.bb=function(){Yu(this)};function Yu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||un(a)!=4||a.Z()!=2)){if(a.u&&un(a)==4)Ge(a.Ea,0,a);else if(ue(a,"readystatechange"),un(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=j===0){var S=String(a.D).match($u)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),m=!k_.test(S?S.toLowerCase():"")}d=m}if(d)ue(a,"complete"),ue(a,"success");else{a.m=6;try{var C=2<un(a)?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.Z()+"]",Qu(a)}}finally{Wi(a)}}}}function Wi(a,u){if(a.g){Ju(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ue(a,"ready");try{d.onreadystatechange=m}catch{}}}function Ju(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function un(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Vt(u)}};function Xu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function V_(a){const u={};a=(a.g&&2<=un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(J(a[m]))continue;var d=A(a[m]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[S]||[];u[S]=C,C.push(d)}b(u,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ks(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Zu(a){this.Aa=0,this.i=[],this.j=new bs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ks("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ks("baseRetryDelayMs",5e3,a),this.cb=ks("retryDelaySeedMs",1e4,a),this.Wa=ks("forwardChannelMaxRetries",2,a),this.wa=ks("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Nu(a&&a.concurrentRequestLimit),this.Da=new C_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Zu.prototype,n.la=8,n.G=1,n.connect=function(a,u,d,m){pt(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=lh(this,null,this.W),Gi(this)};function Ha(a){if(eh(a),a.G==3){var u=a.U++,d=cn(a.I);if(Ve(d,"SID",a.K),Ve(d,"RID",u),Ve(d,"TYPE","terminate"),Ds(a,d),u=new Cn(a,a.j,u),u.L=2,u.v=qi(cn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=ch(u.j,null),u.g.ea(u.v)),u.F=Date.now(),$i(u)}ah(a)}function Ki(a){a.g&&(Wa(a),a.g.cancel(),a.g=null)}function eh(a){Ki(a),a.u&&(l.clearTimeout(a.u),a.u=null),Qi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Gi(a){if(!Ou(a.h)&&!a.s){a.s=!0;var u=a.Ga;q||Ke(),Z||(q(),Z=!0),ve.add(u,a),a.B=0}}function N_(a,u){return Mu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Is(g(a.Ga,a,u),oh(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new Cn(this,this.j,a);let C=this.o;if(this.S&&(C?(C=_(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=nh(this,S,u),d=cn(this.I),Ve(d,"RID",a),Ve(d,"CVER",22),this.D&&Ve(d,"X-HTTP-Session-Id",this.D),Ds(this,d),C&&(this.O?u="headers="+encodeURIComponent(String(Ku(C)))+"&"+u:this.m&&qa(d,this.m,C)),ja(this.h,S),this.Ua&&Ve(d,"TYPE","init"),this.P?(Ve(d,"$req",u),Ve(d,"SID","null"),S.T=!0,Fa(S,d,null)):Fa(S,d,u),this.G=2}}else this.G==3&&(a?th(this,a):this.i.length==0||Ou(this.h)||th(this))};function th(a,u){var d;u?d=u.l:d=a.U++;const m=cn(a.I);Ve(m,"SID",a.K),Ve(m,"RID",d),Ve(m,"AID",a.T),Ds(a,m),a.m&&a.o&&qa(m,a.m,a.o),d=new Cn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=nh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ja(a.h,d),Fa(d,m,u)}function Ds(a,u){a.H&&we(a.H,function(d,m){Ve(u,m,d)}),a.l&&Uu({},function(d,m){Ve(u,m,d)})}function nh(a,u,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var S=a.i;let C=-1;for(;;){const j=["count="+d];C==-1?0<d?(C=S[0].g,j.push("ofs="+C)):C=0:j.push("ofs="+C);let Ce=!0;for(let Je=0;Je<d;Je++){let Ie=S[Je].g;const st=S[Je].map;if(Ie-=C,0>Ie)C=Math.max(0,S[Je].g-100),Ce=!1;else try{x_(st,j,"req"+Ie+"_")}catch{m&&m(st)}}if(Ce){m=j.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function rh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;q||Ke(),Z||(q(),Z=!0),ve.add(u,a),a.v=0}}function za(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Is(g(a.Fa,a),oh(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,sh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Is(g(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),Ki(this),sh(this))};function Wa(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function sh(a){a.g=new Cn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=cn(a.qa);Ve(u,"RID","rpc"),Ve(u,"SID",a.K),Ve(u,"AID",a.T),Ve(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ve(u,"TO",a.ja),Ve(u,"TYPE","xmlhttp"),Ds(a,u),a.m&&a.o&&qa(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=qi(cn(u)),d.m=null,d.P=!0,ku(d,a)}n.Za=function(){this.C!=null&&(this.C=null,Ki(this),za(this),pt(19))};function Qi(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ih(a,u){var d=null;if(a.g==u){Qi(a),Wa(a),a.g=null;var m=2}else if(Ba(a.h,u))d=u.D,Lu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;m=Li(),ue(m,new Su(m,d)),Gi(a)}else rh(a);else if(S=u.s,S==3||S==0&&0<u.X||!(m==1&&N_(a,u)||m==2&&za(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),S){case 1:fr(a,5);break;case 4:fr(a,10);break;case 3:fr(a,6);break;default:fr(a,2)}}}function oh(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function fr(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),m=a.Xa;const S=!m;m=new dr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Bi(m,"https"),qi(m),S?S_(m.toString(),d):P_(m.toString(),d)}else pt(2);a.G=0,a.l&&a.l.sa(u),ah(a),eh(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function ah(a){if(a.G=0,a.ka=[],a.l){const u=Fu(a.h);(u.length!=0||a.i.length!=0)&&(M(a.ka,u),M(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function lh(a,u,d){var m=d instanceof dr?cn(d):new dr(d);if(m.g!="")u&&(m.g=u+"."+m.g),ji(m,m.s);else{var S=l.location;m=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var C=new dr(null);m&&Bi(C,m),u&&(C.g=u),S&&ji(C,S),d&&(C.l=d),m=C}return d=a.D,u=a.ya,d&&u&&Ve(m,d,u),Ve(m,"VER",a.la),Ds(a,m),m}function ch(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Fe(new Hi({eb:d})):new Fe(a.pa),u.Ha(a.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function uh(){}n=uh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Yi(){}Yi.prototype.g=function(a,u){return new Rt(a,u)};function Rt(a,u){re.call(this),this.g=new Zu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!J(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!J(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Nr(this)}k(Rt,re),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Ha(this.g)},Rt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Ye(a),a=d);u.i.push(new __(u.Ya++,a)),u.G==3&&Gi(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Ha(this.g),delete this.g,Rt.aa.N.call(this)};function hh(a){Na.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}k(hh,Na);function dh(){Oa.call(this),this.status=1}k(dh,Oa);function Nr(a){this.g=a}k(Nr,uh),Nr.prototype.ua=function(){ue(this.g,"a")},Nr.prototype.ta=function(a){ue(this.g,new hh(a))},Nr.prototype.sa=function(a){ue(this.g,new dh)},Nr.prototype.ra=function(){ue(this.g,"b")},Yi.prototype.createWebChannel=Yi.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,Sm=function(){return new Yi},Rm=function(){return Li()},Am=ur,$l={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fi.NO_ERROR=0,Fi.TIMEOUT=8,Fi.HTTP_ERROR=6,yo=Fi,Pu.COMPLETE="complete",bm=Pu,Iu.EventType=Ts,Ts.OPEN="a",Ts.CLOSE="b",Ts.ERROR="c",Ts.MESSAGE="d",re.prototype.listen=re.prototype.K,Fs=Iu,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,Im=Fe}).apply(typeof ro<"u"?ro:typeof self<"u"?self:typeof window<"u"?window:{});const wd="@firebase/firestore",Id="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Rc("@firebase/firestore");function Fr(){return Rr.logLevel}function K(n,...e){if(Rr.logLevel<=me.DEBUG){const t=e.map(Fc);Rr.debug(`Firestore (${ds}): ${n}`,...t)}}function In(n,...e){if(Rr.logLevel<=me.ERROR){const t=e.map(Fc);Rr.error(`Firestore (${ds}): ${n}`,...t)}}function ns(n,...e){if(Rr.logLevel<=me.WARN){const t=e.map(Fc);Rr.warn(`Firestore (${ds}): ${n}`,...t)}}function Fc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Pm(n,r,t)}function Pm(n,e,t){let r=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw In(r),new Error(r)}function Pe(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Pm(e,s,r)}function ce(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Sn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(at.UNAUTHENTICATED))}shutdown(){}}class aI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class lI{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Pe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string",31837,{l:r}),new Cm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string",2055,{h:e}),new at(e)}}class cI{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class uI{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new cI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Nt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Pe(this.o===void 0,3512);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new bd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Pe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new bd(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=dI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function fe(n,e){return n<e?-1:n>e?1:0}function Bl(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return fe(r,s);{const i=xm(),o=fI(i.encode(Ad(n,t)),i.encode(Ad(e,t)));return o!==0?o:fe(r,s)}}t+=r>65535?2:1}return fe(n.length,e.length)}function Ad(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function fI(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return fe(n[t],e[t]);return fe(n.length,e.length)}function rs(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=-62135596800,Sd=1e6;class He{static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Sd);return new He(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Rd)throw new G(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sd}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Rd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new He(0,0))}static max(){return new le(new He(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="__name__";class Jt{constructor(e,t,r){t===void 0?t=0:t>e.length&&oe(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&oe(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Jt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Jt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return fe(e.length,t.length)}static compareSegments(e,t){const r=Jt.isNumericId(e),s=Jt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Jt.extractNumericId(e).compare(Jt.extractNumericId(t)):Bl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hn.fromString(e.substring(4,e.length-2))}}class Ne extends Jt{construct(e,t,r){return new Ne(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ne(t)}static emptyPath(){return new Ne([])}}const pI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Jt{construct(e,t,r){return new tt(e,t,r)}static isValidIdentifier(e){return pI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pd}static keyField(){return new tt([Pd])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new G(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new G(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(t)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Ne.fromString(e))}static fromName(e){return new ne(Ne.fromString(e).popFirst(5))}static empty(){return new ne(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Ne(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=-1;function mI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new He(t+1,0):new He(t,r));return new Jn(s,ne.empty(),e)}function gI(n){return new Jn(n.readTime,n.key,di)}class Jn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Jn(le.min(),ne.empty(),di)}static max(){return new Jn(le.max(),ne.empty(),di)}}function _I(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ne.comparator(n.documentKey,e.documentKey),t!==0?t:fe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==yI)throw n;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function EI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ps(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}da.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=-1;function fa(n){return n==null}function $o(n){return n===0&&1/n==-1/0}function TI(n){return typeof n=="number"&&Number.isInteger(n)&&!$o(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="";function wI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Cd(e)),e=II(n.get(t),e);return Cd(e)}function II(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Dm:t+="";break;default:t+=i}}return t}function Cd(n){return n+Dm+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function or(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Vm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t){this.comparator=e,this.root=t||Ze.EMPTY}insert(e,t){return new Me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new so(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new so(this.root,e,this.comparator,!1)}getReverseIterator(){return new so(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new so(this.root,e,this.comparator,!0)}}class so{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ze(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw oe(27949);return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw oe(57766)}get value(){throw oe(16141)}get color(){throw oe(16727)}get left(){throw oe(29726)}get right(){throw oe(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new kd(this.data.getIterator())}getIteratorFrom(e){return new kd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ze(this.comparator);return t.data=e,t}}class kd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Ct([])}unionWith(e){let t=new ze(tt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ct(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Nm("Invalid base64 string: "+i):i}}(e);return new nt(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const bI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(n){if(Pe(!!n,39018),typeof n=="string"){let e=0;const t=bI.exec(n);if(Pe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(n.seconds),nanos:Ue(n.nanos)}}function Ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zn(n){return typeof n=="string"?nt.fromBase64String(n):nt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="server_timestamp",Mm="__type__",Lm="__previous_value__",Fm="__local_write_time__";function $c(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Mm])===null||t===void 0?void 0:t.stringValue)===Om}function pa(n){const e=n.mapValue.fields[Lm];return $c(e)?pa(e):e}function fi(n){const e=Xn(n.mapValue.fields[Fm].timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,t,r,s,i,o,l,c,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const Bo="(default)";class pi{constructor(e,t){this.projectId=e,this.database=t||Bo}static empty(){return new pi("","")}get isDefaultDatabase(){return this.database===Bo}isEqual(e){return e instanceof pi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="__type__",RI="__max__",io={mapValue:{}},$m="__vector__",jo="value";function er(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?$c(n)?4:PI(n)?9007199254740991:SI(n)?10:11:oe(28295,{value:n})}function an(n,e){if(n===e)return!0;const t=er(n);if(t!==er(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return fi(n).isEqual(fi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Xn(s.timestampValue),l=Xn(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Zn(s.bytesValue).isEqual(Zn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ue(s.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ue(s.integerValue)===Ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ue(s.doubleValue),l=Ue(i.doubleValue);return o===l?$o(o)===$o(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return rs(n.arrayValue.values||[],e.arrayValue.values||[],an);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(xd(o)!==xd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!an(o[c],l[c])))return!1;return!0}(n,e);default:return oe(52216,{left:n})}}function mi(n,e){return(n.values||[]).find(t=>an(t,e))!==void 0}function ss(n,e){if(n===e)return 0;const t=er(n),r=er(e);if(t!==r)return fe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return fe(n.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ue(i.integerValue||i.doubleValue),c=Ue(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Dd(n.timestampValue,e.timestampValue);case 4:return Dd(fi(n),fi(e));case 5:return Bl(n.stringValue,e.stringValue);case 6:return function(i,o){const l=Zn(i),c=Zn(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=fe(l[h],c[h]);if(f!==0)return f}return fe(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const l=fe(Ue(i.latitude),Ue(o.latitude));return l!==0?l:fe(Ue(i.longitude),Ue(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Vd(n.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,f;const p=i.fields||{},g=o.fields||{},R=(l=p[jo])===null||l===void 0?void 0:l.arrayValue,k=(c=g[jo])===null||c===void 0?void 0:c.arrayValue,N=fe(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Vd(R,k)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===io.mapValue&&o===io.mapValue)return 0;if(i===io.mapValue)return 1;if(o===io.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=Bl(c[p],f[p]);if(g!==0)return g;const R=ss(l[c[p]],h[f[p]]);if(R!==0)return R}return fe(c.length,f.length)}(n.mapValue,e.mapValue);default:throw oe(23264,{Pe:t})}}function Dd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return fe(n,e);const t=Xn(n),r=Xn(e),s=fe(t.seconds,r.seconds);return s!==0?s:fe(t.nanos,r.nanos)}function Vd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ss(t[s],r[s]);if(i)return i}return fe(t.length,r.length)}function is(n){return jl(n)}function jl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Zn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ne.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=jl(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${jl(t.fields[o])}`;return s+"}"}(n.mapValue):oe(61005,{value:n})}function vo(n){switch(er(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pa(n);return e?16+vo(e):16;case 5:return 2*n.stringValue.length;case 6:return Zn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+vo(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return or(r.fields,(i,o)=>{s+=i.length+vo(o)}),s}(n.mapValue);default:throw oe(13486,{value:n})}}function Nd(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ql(n){return!!n&&"integerValue"in n}function Bc(n){return!!n&&"arrayValue"in n}function Od(n){return!!n&&"nullValue"in n}function Md(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Eo(n){return!!n&&"mapValue"in n}function SI(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Um])===null||t===void 0?void 0:t.stringValue)===$m}function Xs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return or(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Xs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function PI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===RI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Eo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xs(t)}setAll(e){let t=tt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}o?r[l.lastSegment()]=Xs(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Eo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Eo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){or(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(Xs(this.value))}}function Bm(n){const e=[];return or(n.fields,(t,r)=>{const s=new tt([t]);if(Eo(r)){const i=Bm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t,r,s,i,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ct(e,0,le.min(),le.min(),le.min(),It.empty(),0)}static newFoundDocument(e,t,r,s){return new ct(e,1,t,le.min(),r,s,0)}static newNoDocument(e,t){return new ct(e,2,t,le.min(),le.min(),It.empty(),0)}static newUnknownDocument(e,t){return new ct(e,3,t,le.min(),le.min(),It.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t){this.position=e,this.inclusive=t}}function Ld(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),t.key):r=ss(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!an(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t="asc"){this.field=e,this.dir=t}}function CI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{}class je extends jm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new kI(e,t,r):t==="array-contains"?new NI(e,r):t==="in"?new OI(e,r):t==="not-in"?new MI(e,r):t==="array-contains-any"?new LI(e,r):new je(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new DI(e,r):new VI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ss(t,this.value)):t!==null&&er(this.value)===er(t)&&this.matchesComparison(ss(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends jm{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new zt(e,t)}matches(e){return qm(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function qm(n){return n.op==="and"}function Hm(n){return xI(n)&&qm(n)}function xI(n){for(const e of n.filters)if(e instanceof zt)return!1;return!0}function Hl(n){if(n instanceof je)return n.field.canonicalString()+n.op.toString()+is(n.value);if(Hm(n))return n.filters.map(e=>Hl(e)).join(",");{const e=n.filters.map(t=>Hl(t)).join(",");return`${n.op}(${e})`}}function zm(n,e){return n instanceof je?function(r,s){return s instanceof je&&r.op===s.op&&r.field.isEqual(s.field)&&an(r.value,s.value)}(n,e):n instanceof zt?function(r,s){return s instanceof zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&zm(o,s.filters[l]),!0):!1}(n,e):void oe(19439)}function Wm(n){return n instanceof je?function(t){return`${t.field.canonicalString()} ${t.op} ${is(t.value)}`}(n):n instanceof zt?function(t){return t.op.toString()+" {"+t.getFilters().map(Wm).join(" ,")+"}"}(n):"Filter"}class kI extends je{constructor(e,t,r){super(e,t,r),this.key=ne.fromName(r.referenceValue)}matches(e){const t=ne.comparator(e.key,this.key);return this.matchesComparison(t)}}class DI extends je{constructor(e,t){super(e,"in",t),this.keys=Km("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class VI extends je{constructor(e,t){super(e,"not-in",t),this.keys=Km("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Km(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ne.fromName(r.referenceValue))}class NI extends je{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bc(t)&&mi(t.arrayValue,this.value)}}class OI extends je{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&mi(this.value.arrayValue,t)}}class MI extends je{constructor(e,t){super(e,"not-in",t)}matches(e){if(mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!mi(this.value.arrayValue,t)}}class LI extends je{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>mi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,t=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function Ud(n,e=null,t=[],r=[],s=null,i=null,o=null){return new FI(n,e,t,r,s,i,o)}function jc(n){const e=ce(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Hl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),fa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>is(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>is(r)).join(",")),e.Ie=t}return e.Ie}function qc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!CI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!zm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Fd(n.startAt,e.startAt)&&Fd(n.endAt,e.endAt)}function zl(n){return ne.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function UI(n,e,t,r,s,i,o,l){return new ms(n,e,t,r,s,i,o,l)}function Hc(n){return new ms(n)}function $d(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gm(n){return n.collectionGroup!==null}function Zs(n){const e=ce(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ze(tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new gi(i,r))}),t.has(tt.keyField().canonicalString())||e.Ee.push(new gi(tt.keyField(),r))}return e.Ee}function nn(n){const e=ce(n);return e.de||(e.de=$I(e,Zs(n))),e.de}function $I(n,e){if(n.limitType==="F")return Ud(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new gi(s.field,i)});const t=n.endAt?new qo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new qo(n.startAt.position,n.startAt.inclusive):null;return Ud(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Wl(n,e){const t=n.filters.concat([e]);return new ms(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Kl(n,e,t){return new ms(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ma(n,e){return qc(nn(n),nn(e))&&n.limitType===e.limitType}function Qm(n){return`${jc(nn(n))}|lt:${n.limitType}`}function Ur(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Wm(s)).join(", ")}]`),fa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>is(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>is(s)).join(",")),`Target(${r})`}(nn(n))}; limitType=${n.limitType})`}function ga(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Zs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=Ld(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,Zs(r),s)||r.endAt&&!function(o,l,c){const h=Ld(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,Zs(r),s))}(n,e)}function BI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ym(n){return(e,t)=>{let r=!1;for(const s of Zs(n)){const i=jI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function jI(n,e,t){const r=n.field.isKeyField()?ne.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?ss(c,h):oe(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return oe(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){or(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Vm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=new Me(ne.comparator);function bn(){return qI}const Jm=new Me(ne.comparator);function Us(...n){let e=Jm;for(const t of n)e=e.insert(t.key,t);return e}function Xm(n){let e=Jm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function yr(){return ei()}function Zm(){return ei()}function ei(){return new xr(n=>n.toString(),(n,e)=>n.isEqual(e))}const HI=new Me(ne.comparator),zI=new ze(ne.comparator);function _e(...n){let e=zI;for(const t of n)e=e.add(t);return e}const WI=new ze(fe);function KI(){return WI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$o(e)?"-0":e}}function eg(n){return{integerValue:""+n}}function GI(n,e){return TI(e)?eg(e):zc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this._=void 0}}function QI(n,e,t){return n instanceof Ho?function(s,i){const o={fields:{[Mm]:{stringValue:Om},[Fm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$c(i)&&(i=pa(i)),i&&(o.fields[Lm]=i),{mapValue:o}}(t,e):n instanceof _i?ng(n,e):n instanceof yi?rg(n,e):function(s,i){const o=tg(s,i),l=Bd(o)+Bd(s.Re);return ql(o)&&ql(s.Re)?eg(l):zc(s.serializer,l)}(n,e)}function YI(n,e,t){return n instanceof _i?ng(n,e):n instanceof yi?rg(n,e):t}function tg(n,e){return n instanceof zo?function(r){return ql(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ho extends _a{}class _i extends _a{constructor(e){super(),this.elements=e}}function ng(n,e){const t=sg(e);for(const r of n.elements)t.some(s=>an(s,r))||t.push(r);return{arrayValue:{values:t}}}class yi extends _a{constructor(e){super(),this.elements=e}}function rg(n,e){let t=sg(e);for(const r of n.elements)t=t.filter(s=>!an(s,r));return{arrayValue:{values:t}}}class zo extends _a{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Bd(n){return Ue(n.integerValue||n.doubleValue)}function sg(n){return Bc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function JI(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof _i&&s instanceof _i||r instanceof yi&&s instanceof yi?rs(r.elements,s.elements,an):r instanceof zo&&s instanceof zo?an(r.Re,s.Re):r instanceof Ho&&s instanceof Ho}(n.transform,e.transform)}class XI{constructor(e,t){this.version=e,this.transformResults=t}}class bt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function To(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ya{}function ig(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new va(n.key,bt.none()):new Ci(n.key,n.data,bt.none());{const t=n.data,r=It.empty();let s=new ze(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ar(n.key,r,new Ct(s.toArray()),bt.none())}}function ZI(n,e,t){n instanceof Ci?function(s,i,o){const l=s.value.clone(),c=qd(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof ar?function(s,i,o){if(!To(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=qd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(og(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ti(n,e,t,r){return n instanceof Ci?function(i,o,l,c){if(!To(i.precondition,o))return l;const h=i.value.clone(),f=Hd(i.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof ar?function(i,o,l,c){if(!To(i.precondition,o))return l;const h=Hd(i.fieldTransforms,c,o),f=o.data;return f.setAll(og(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,l){return To(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function eb(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=tg(r.transform,s||null);i!=null&&(t===null&&(t=It.empty()),t.set(r.field,i))}return t||null}function jd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&rs(r,s,(i,o)=>JI(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ci extends ya{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ar extends ya{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function og(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function qd(n,e,t){const r=new Map;Pe(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,YI(o,l,t[s]))}return r}function Hd(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,QI(i,o,e))}return r}class va extends ya{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tb extends ya{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ZI(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ti(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ti(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Zm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const c=ig(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),_e())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,(t,r)=>jd(t,r))&&rs(this.baseMutations,e.baseMutations,(t,r)=>jd(t,r))}}class Wc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Pe(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return HI}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Wc(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,Te;function ib(n){switch(n){case D.OK:return oe(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return oe(15467,{code:n})}}function ag(n){if(n===void 0)return In("GRPC error has no .code"),D.UNKNOWN;switch(n){case Be.OK:return D.OK;case Be.CANCELLED:return D.CANCELLED;case Be.UNKNOWN:return D.UNKNOWN;case Be.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Be.INTERNAL:return D.INTERNAL;case Be.UNAVAILABLE:return D.UNAVAILABLE;case Be.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Be.NOT_FOUND:return D.NOT_FOUND;case Be.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Be.ABORTED:return D.ABORTED;case Be.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Be.DATA_LOSS:return D.DATA_LOSS;default:return oe(39323,{code:n})}}(Te=Be||(Be={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=new Hn([4294967295,4294967295],0);function zd(n){const e=xm().encode(n),t=new wm;return t.update(e),new Uint8Array(t.digest())}function Wd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hn([t,r],0),new Hn([s,i],0)]}class Kc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new $s(`Invalid padding: ${t}`);if(r<0)throw new $s(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $s(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new $s(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Hn.fromNumber(this.pe)}we(e,t,r){let s=e.add(t.multiply(Hn.fromNumber(r)));return s.compare(ob)===1&&(s=new Hn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=zd(e),[r,s]=Wd(t);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.Se(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Kc(i,s,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const t=zd(e),[r,s]=Wd(t);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.be(o)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class $s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,xi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ea(le.min(),s,new Me(fe),bn(),_e())}}class xi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new xi(r,t,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t,r,s){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=s}}class lg{constructor(e,t){this.targetId=e,this.Ce=t}}class cg{constructor(e,t,r=nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Kd{constructor(){this.Fe=0,this.Me=Gd(),this.xe=nt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=_e(),t=_e(),r=_e();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:oe(38017,{changeType:i})}}),new xi(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=Gd()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Pe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class ab{constructor(e){this.ze=e,this.je=new Map,this.He=bn(),this.Je=oo(),this.Ye=oo(),this.Ze=new Me(fe)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:oe(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,r=e.Ce.count,s=this._t(t);if(s){const i=s.target;if(zl(i))if(r===0){const o=new ne(i.path);this.tt(t,o,ct.newNoDocument(o,le.min()))}else Pe(r===1,20013,{expectedCount:r});else{const o=this.ut(t);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=Zn(r).toUint8Array()}catch(c){if(c instanceof Nm)return ns("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Kc(o,s,i)}catch(c){return ns(c instanceof $s?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(t,i,null),s++)}),s}It(e){const t=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&zl(l.target)){const c=new ne(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,ct.newNoDocument(c,e))}i.Le&&(t.set(o,i.qe()),i.Qe())}});let r=_e();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this._t(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new Ea(e,t,this.Ze,this.He,r);return this.He=bn(),this.Je=oo(),this.Ye=oo(),this.Ze=new Me(fe),s}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Kd,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new ze(fe),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ze(fe),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||K("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Kd),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function oo(){return new Me(ne.comparator)}function Gd(){return new Me(ne.comparator)}const lb={asc:"ASCENDING",desc:"DESCENDING"},cb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ub={and:"AND",or:"OR"};class hb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Gl(n,e){return n.useProto3Json||fa(e)?e:{value:e}}function Wo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ug(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function db(n,e){return Wo(n,e.toTimestamp())}function rn(n){return Pe(!!n,49232),le.fromTimestamp(function(t){const r=Xn(t);return new He(r.seconds,r.nanos)}(n))}function Gc(n,e){return Ql(n,e).canonicalString()}function Ql(n,e){const t=function(s){return new Ne(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function hg(n){const e=Ne.fromString(n);return Pe(gg(e),10190,{key:e.toString()}),e}function Yl(n,e){return Gc(n.databaseId,e.path)}function dl(n,e){const t=hg(e);if(t.get(1)!==n.databaseId.projectId)throw new G(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ne(fg(t))}function dg(n,e){return Gc(n.databaseId,e)}function fb(n){const e=hg(n);return e.length===4?Ne.emptyPath():fg(e)}function Jl(n){return new Ne(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fg(n){return Pe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Qd(n,e,t){return{name:Yl(n,e),fields:t.value.mapValue.fields}}function pb(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:oe(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Pe(f===void 0||typeof f=="string",58123),nt.fromBase64String(f||"")):(Pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),nt.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?D.UNKNOWN:ag(h.code);return new G(f,h.message||"")}(o);t=new cg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=dl(n,r.document.name),i=rn(r.document.updateTime),o=r.document.createTime?rn(r.document.createTime):le.min(),l=new It({mapValue:{fields:r.document.fields}}),c=ct.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new wo(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=dl(n,r.document),i=r.readTime?rn(r.readTime):le.min(),o=ct.newNoDocument(s,i),l=r.removedTargetIds||[];t=new wo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=dl(n,r.document),i=r.removedTargetIds||[];t=new wo([],i,s,null)}else{if(!("filter"in e))return oe(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new sb(s,i),l=r.targetId;t=new lg(l,o)}}return t}function mb(n,e){let t;if(e instanceof Ci)t={update:Qd(n,e.key,e.value)};else if(e instanceof va)t={delete:Yl(n,e.key)};else if(e instanceof ar)t={update:Qd(n,e.key,e.data),updateMask:bb(e.fieldMask)};else{if(!(e instanceof tb))return oe(16599,{ft:e.type});t={verify:Yl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ho)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof _i)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof yi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof zo)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw oe(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:db(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe(27497)}(n,e.precondition)),t}function gb(n,e){return n&&n.length>0?(Pe(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?rn(s.updateTime):rn(i);return o.isEqual(le.min())&&(o=rn(i)),new XI(o,s.transformResults||[])}(t,e))):[]}function _b(n,e){return{documents:[dg(n,e.path)]}}function yb(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=dg(n,s);const i=function(h){if(h.length!==0)return mg(zt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:$r(g.field),direction:Tb(g.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Gl(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:t,parent:s}}function vb(n){let e=fb(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Pe(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const g=pg(p);return g instanceof zt&&Hm(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(g=>function(k){return new gi(Br(k.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,fa(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(p){const g=!!p.before,R=p.values||[];return new qo(R,g)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const g=!p.before,R=p.values||[];return new qo(R,g)}(t.endAt)),UI(e,s,o,i,l,"F",c,h)}function Eb(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function pg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Br(t.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Br(t.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Br(t.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Br(t.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return oe(61313);default:return oe(60726)}}(n):n.fieldFilter!==void 0?function(t){return je.create(Br(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return oe(58110);default:return oe(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return zt.create(t.compositeFilter.filters.map(r=>pg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe(1026)}}(t.compositeFilter.op))}(n):oe(30097,{filter:n})}function Tb(n){return lb[n]}function wb(n){return cb[n]}function Ib(n){return ub[n]}function $r(n){return{fieldPath:n.canonicalString()}}function Br(n){return tt.fromServerFormat(n.fieldPath)}function mg(n){return n instanceof je?function(t){if(t.op==="=="){if(Md(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NAN"}};if(Od(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Md(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NOT_NAN"}};if(Od(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$r(t.field),op:wb(t.op),value:t.value}}}(n):n instanceof zt?function(t){const r=t.getFilters().map(s=>mg(s));return r.length===1?r[0]:{compositeFilter:{op:Ib(t.op),filters:r}}}(n):oe(54877,{filter:n})}function bb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function gg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t,r,s,i=le.min(),o=le.min(),l=nt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.wt=e}}function Rb(n){const e=vb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Kl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.Cn=new Pb}addToCollectionParentIndex(e,t){return this.Cn.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Jn.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class Pb{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ze(Ne.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_g=41943040;class wt{static withCacheSize(e){return new wt(e,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(_g,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new os(0)}static lr(){return new os(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="LruGarbageCollector",Cb=1048576;function Xd([n,e],[t,r]){const s=fe(n,t);return s===0?fe(e,r):s}class xb{constructor(e){this.Er=e,this.buffer=new ze(Xd),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Xd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class kb{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){K(Jd,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ps(t)?K(Jd,"Ignoring IndexedDB error during garbage collection: ",t):await fs(t)}await this.mr(3e5)})}}class Db{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(da.le);const r=new xb(t);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Yd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yd):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,s,i,o,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Fr()<=me.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Vb(n,e){return new Db(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(){this.changes=new xr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ti(r.mutation,s,Ct.empty(),He.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,t,r=_e()){const s=yr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Us();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=yr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,_e()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,s){let i=bn();const o=ei(),l=function(){return ei()}();return t.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ar)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ti(f.mutation,h,f.mutation.getFieldMask(),He.now())):o.set(h.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return l.set(h,new Ob(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const r=ei();let s=new Me((o,l)=>o-l),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||Ct.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||_e()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=Zm();f.forEach(g=>{if(!i.has(g)){const R=ig(t.get(g),r.get(g));R!==null&&p.set(g,R),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(yr());let l=di,c=i;return o.next(h=>V.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,_e())).next(f=>({batchId:l,changes:Xm(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ne(t)).next(r=>{let s=Us();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Us();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,c=>{const h=function(p,g){return new ms(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ct.newInvalidDocument(f)))});let l=Us();return o.forEach((c,h)=>{const f=i.get(c);f!==void 0&&ti(f.mutation,h,Ct.empty(),He.now()),ga(t,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return V.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:rn(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(s){return{name:s.name,query:Rb(s.bundledQuery),readTime:rn(s.readTime)}}(t)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(){this.overlays=new Me(ne.comparator),this.Qr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=yr();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.bt(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=yr(),i=t.length+1,o=new ne(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Me((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=yr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=yr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return V.resolve(l)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rb(t,r));let i=this.Qr.get(t);i===void 0&&(i=_e(),this.Qr.set(t,i)),this.Qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(){this.$r=new ze(We.Ur),this.Kr=new ze(We.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new We(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new We(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new ne(new Ne([])),r=new We(t,e),s=new We(t,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new ne(new Ne([])),r=new We(t,e),s=new We(t,e+1);let i=_e();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new We(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return ne.comparator(e.key,t.key)||fe(e.Zr,t.Zr)}static Wr(e,t){return fe(e.Zr,t.Zr)||ne.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new ze(We.Ur)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nb(i,t,r,s);this.mutationQueue.push(o);for(const l of s)this.Xr=this.Xr.add(new We(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,t){return V.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ti(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Uc:this.nr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new We(t,0),s=new We(t,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const l=this.ei(o.Zr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ze(fe);return t.forEach(s=>{const i=new We(s,0),o=new We(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],l=>{r=r.add(l.Zr)})}),V.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const o=new We(new ne(i),0);let l=new ze(fe);return this.Xr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Zr)),!0)},o),V.resolve(this.ni(l))}ni(e){const t=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Pe(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return V.forEach(t.mutations,s=>{const i=new We(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new We(t,0),s=this.Xr.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e){this.ii=e,this.docs=function(){return new Me(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(t))}getEntries(e,t){let r=bn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=bn();const o=t.path,l=new ne(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||_I(gI(f),r)<=0||(s.has(f.key)||ga(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,r,s){oe(9500)}si(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new jb(this)}getSize(e){return V.resolve(this.size)}}class jb extends Nb{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this.persistence=e,this.oi=new xr(t=>jc(t),qc),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this._i=0,this.ai=new Qc,this.targetCount=0,this.ui=os.cr()}forEachTarget(e,t){return this.oi.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),V.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new os(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Tr(t),V.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t){this.ci={},this.overlays={},this.li=new da(0),this.hi=!1,this.hi=!0,this.Pi=new Ub,this.referenceDelegate=e(this),this.Ti=new qb(this),this.indexManager=new Sb,this.remoteDocumentCache=function(s){return new Bb(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new Ab(t),this.Ei=new Lb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Fb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new $b(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){K("MemoryPersistence","Starting transaction:",e);const s=new Hb(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,t){return V.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class Hb extends vI{constructor(e){super(),this.currentSequenceNumber=e}}class Yc{constructor(e){this.persistence=e,this.Vi=new Qc,this.mi=null}static fi(e){return new Yc(e)}get gi(){if(this.mi)return this.mi;throw oe(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),V.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.gi,r=>{const s=ne.fromPath(r);return this.pi(e,s).next(i=>{i||t.removeEntry(s,le.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return V.or([()=>V.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Ko{constructor(e,t){this.persistence=e,this.yi=new xr(r=>wI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Vb(this,t)}static fi(e,t){return new Ko(e,t)}di(){}Ai(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return V.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?V.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,t).next(l=>{l||(r++,i.removeEntry(o,le.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),V.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=vo(e.data.value)),t}Dr(e,t,r){return V.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.yi.get(t);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.ds=r,this.As=s}static Rs(e,t){let r=_e(),s=_e();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Jc(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return AE()?8:EI(ht())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ws(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ss(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new zb;return this.bs(e,t,o).next(l=>{if(i.result=l,this.fs)return this.Ds(e,t,o,l.size)})}).next(()=>i.result)}Ds(e,t,r,s){return r.documentReadCount<this.gs?(Fr()<=me.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Ur(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),V.resolve()):(Fr()<=me.DEBUG&&K("QueryEngine","Query:",Ur(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Fr()<=me.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Ur(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(t))):V.resolve())}ws(e,t){if($d(t))return V.resolve(null);let r=nn(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Kl(t,null,"F"),r=nn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.vs(t,l);return this.Cs(t,h,o,c.readTime)?this.ws(e,Kl(t,null,"F")):this.Fs(e,h,t,c)}))})))}Ss(e,t,r,s){return $d(t)||s.isEqual(le.min())?V.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(t,i);return this.Cs(t,o,r,s)?V.resolve(null):(Fr()<=me.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ur(t)),this.Fs(e,o,t,mI(s,di)).next(l=>l))})}vs(e,t){let r=new ze(Ym(e));return t.forEach((s,i)=>{ga(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,t,r){return Fr()<=me.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Ur(t)),this.ys.getDocumentsMatchingQuery(e,t,Jn.min(),r)}Fs(e,t,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="LocalStore",Kb=3e8;class Gb{constructor(e,t,r,s){this.persistence=e,this.Ms=t,this.serializer=s,this.xs=new Me(fe),this.Os=new xr(i=>jc(i),qc),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mb(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function Qb(n,e,t,r){return new Gb(n,e,t,r)}async function vg(n,e){const t=ce(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=_e();for(const h of s){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({ks:h,removedBatchIds:o,addedBatchIds:l}))})})}function Yb(n,e){const t=ce(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,g=p.keys();let R=V.resolve();return g.forEach(k=>{R=R.next(()=>f.getEntry(c,k)).next(N=>{const M=h.docVersions.get(k);Pe(M!==null,48541),N.version.compareTo(M)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=_e();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Eg(n){const e=ce(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function Jb(n,e){const t=ce(n),r=e.snapshotVersion;let s=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Bs.newChangeBuffer({trackRemovals:!0});s=t.xs;const l=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;l.push(t.Ti.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Ti.addMatchingKeys(i,f.addedDocuments,p)));let R=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?R=R.withResumeToken(nt.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),s=s.insert(p,R),function(N,M,Q){return N.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Kb?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0}(g,R,f)&&l.push(t.Ti.updateTargetData(i,R))});let c=bn(),h=_e();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(Xb(i,o,e.documentUpdates).next(f=>{c=f.qs,h=f.Qs})),!r.isEqual(le.min())){const f=t.Ti.getLastRemoteSnapshotVersion(i).next(p=>t.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.xs=s,i))}function Xb(n,e,t){let r=_e(),s=_e();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=bn();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(le.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):K(Xc,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{qs:o,Qs:s}})}function Zb(n,e){const t=ce(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Uc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function eA(n,e){const t=ce(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ti.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.Ti.allocateTargetId(r).next(o=>(s=new Un(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function Xl(n,e,t){const r=ce(n),s=r.xs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ps(o))throw o;K(Xc,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function Zd(n,e,t){const r=ce(n);let s=le.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,f){const p=ce(c),g=p.Os.get(f);return g!==void 0?V.resolve(p.xs.get(g)):p.Ti.getTargetData(h,f)}(r,o,nn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,t?s:le.min(),t?i:_e())).next(l=>(tA(r,BI(e),l),{documents:l,$s:i})))}function tA(n,e,t){let r=n.Ns.get(e)||le.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ns.set(e,r)}class ef{constructor(){this.activeTargetIds=KI()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nA{constructor(){this.xo=new ef,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new ef,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="ConnectivityMonitor";class nf{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){K(tf,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){K(tf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao=null;function Zl(){return ao===null?ao=function(){return 268435456+Math.round(2147483648*Math.random())}():ao++,"0x"+ao.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="RestConnection",sA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class iA{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===Bo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,t,r,s,i){const o=Zl(),l=this.jo(e,t.toUriEncodedString());K(fl,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:h}=new URL(l),f=wi(h);return this.Jo(e,l,c,r,f).then(p=>(K(fl,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ns(fl,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,t,r,s,i,o){return this.zo(e,t,r,s,i)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ds}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,t){const r=sA[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class aA extends iA{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const o=Zl();return new Promise((l,c)=>{const h=new Im;h.setWithCredentials(!0),h.listenOnce(bm.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case yo.NO_ERROR:const p=h.getResponseJson();K(ot,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case yo.TIMEOUT:K(ot,`RPC '${e}' ${o} timed out`),c(new G(D.DEADLINE_EXCEEDED,"Request time out"));break;case yo.HTTP_ERROR:const g=h.getStatus();if(K(ot,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const k=R==null?void 0:R.error;if(k&&k.status&&k.message){const N=function(Q){const J=Q.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(J)>=0?J:D.UNKNOWN}(k.status);c(new G(N,k.message))}else c(new G(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new G(D.UNAVAILABLE,"Connection failed."));break;default:oe(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{K(ot,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);K(ot,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,r,15)})}T_(e,t,r){const s=Zl(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Sm(),l=Rm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=i.join("");K(ot,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);let g=!1,R=!1;const k=new oA({Zo:M=>{R?K(ot,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(g||(K(ot,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),K(ot,`RPC '${e}' stream ${s} sending:`,M),p.send(M))},Xo:()=>p.close()}),N=(M,Q,J)=>{M.listen(Q,X=>{try{J(X)}catch(W){setTimeout(()=>{throw W},0)}})};return N(p,Fs.EventType.OPEN,()=>{R||(K(ot,`RPC '${e}' stream ${s} transport opened.`),k.__())}),N(p,Fs.EventType.CLOSE,()=>{R||(R=!0,K(ot,`RPC '${e}' stream ${s} transport closed`),k.u_())}),N(p,Fs.EventType.ERROR,M=>{R||(R=!0,ns(ot,`RPC '${e}' stream ${s} transport errored. Name:`,M.name,"Message:",M.message),k.u_(new G(D.UNAVAILABLE,"The operation could not be completed")))}),N(p,Fs.EventType.MESSAGE,M=>{var Q;if(!R){const J=M.data[0];Pe(!!J,16349);const X=J,W=(X==null?void 0:X.error)||((Q=X[0])===null||Q===void 0?void 0:Q.error);if(W){K(ot,`RPC '${e}' stream ${s} received error:`,W);const ye=W.status;let we=function(E){const T=Be[E];if(T!==void 0)return ag(T)}(ye),b=W.message;we===void 0&&(we=D.INTERNAL,b="Unknown error status: "+ye+" with message "+W.message),R=!0,k.u_(new G(we,b)),p.close()}else K(ot,`RPC '${e}' stream ${s} received:`,J),k.c_(J)}}),N(l,Am.STAT_EVENT,M=>{M.stat===$l.PROXY?K(ot,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===$l.NOPROXY&&K(ot,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.a_()},0),k}}function pl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(n){return new hb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=t,this.I_=r,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),s=Math.max(0,t-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="PersistentStream";class wg{constructor(e,t,r,s,i,o,l,c){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new Tg(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(In(t.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===t&&this.K_(r,s)},r=>{e(()=>{const s=new G(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,t){const r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return K(rf,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(K(rf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lA extends wg{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=pb(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?rn(o.readTime):le.min()}(e);return this.listener.j_(t,r)}H_(e){const t={};t.database=Jl(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=zl(c)?{documents:_b(i,c)}:{query:yb(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ug(i,o.resumeToken);const h=Gl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(le.min())>0){l.readTime=Wo(i,o.snapshotVersion.toTimestamp());const h=Gl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Eb(this.serializer,e);r&&(t.labels=r),this.L_(t)}J_(e){const t={};t.database=Jl(this.serializer),t.removeTarget=e,this.L_(t)}}class cA extends wg{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return Pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=gb(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.ea(r,t)}ta(){const e={};e.database=Jl(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>mb(this.serializer,r))};this.L_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{}class hA extends uA{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new G(D.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,Ql(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(D.UNKNOWN,i.toString())})}Yo(e,t,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,Ql(t,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(D.UNKNOWN,o.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class dA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(In(t),this.oa=!1):K("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="RemoteStore";class fA{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(o=>{r.enqueueAndForget(async()=>{kr(this)&&(K(Sr,"Restarting streams for network reachability change."),await async function(c){const h=ce(c);h.Ta.add(4),await ki(h),h.da.set("Unknown"),h.Ta.delete(4),await wa(h)}(this))})}),this.da=new dA(r,s)}}async function wa(n){if(kr(n))for(const e of n.Ia)await e(!0)}async function ki(n){for(const e of n.Ia)await e(!1)}function Ig(n,e){const t=ce(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),nu(t)?tu(t):gs(t).M_()&&eu(t,e))}function Zc(n,e){const t=ce(n),r=gs(t);t.Pa.delete(e),r.M_()&&bg(t,e),t.Pa.size===0&&(r.M_()?r.N_():kr(t)&&t.da.set("Unknown"))}function eu(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}gs(n).H_(e)}function bg(n,e){n.Aa.Ke(e),gs(n).J_(e)}function tu(n){n.Aa=new ab({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),gs(n).start(),n.da._a()}function nu(n){return kr(n)&&!gs(n).F_()&&n.Pa.size>0}function kr(n){return ce(n).Ta.size===0}function Ag(n){n.Aa=void 0}async function pA(n){n.da.set("Online")}async function mA(n){n.Pa.forEach((e,t)=>{eu(n,e)})}async function gA(n,e){Ag(n),nu(n)?(n.da.ca(e),tu(n)):n.da.set("Unknown")}async function _A(n,e,t){if(n.da.set("Online"),e instanceof cg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Pa.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Pa.delete(l),s.Aa.removeTarget(l))}(n,e)}catch(r){K(Sr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Go(n,r)}else if(e instanceof wo?n.Aa.Xe(e):e instanceof lg?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(le.min()))try{const r=await Eg(n.localStore);t.compareTo(r)>=0&&await function(i,o){const l=i.Aa.It(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Pa.get(h);f&&i.Pa.set(h,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const f=i.Pa.get(c);if(!f)return;i.Pa.set(c,f.withResumeToken(nt.EMPTY_BYTE_STRING,f.snapshotVersion)),bg(i,c);const p=new Un(f.target,c,h,f.sequenceNumber);eu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){K(Sr,"Failed to raise snapshot:",r),await Go(n,r)}}async function Go(n,e,t){if(!ps(e))throw e;n.Ta.add(1),await ki(n),n.da.set("Offline"),t||(t=()=>Eg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{K(Sr,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await wa(n)})}function Rg(n,e){return e().catch(t=>Go(n,t,e))}async function Ia(n){const e=ce(n),t=tr(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:Uc;for(;yA(e);)try{const s=await Zb(e.localStore,r);if(s===null){e.ha.length===0&&t.N_();break}r=s.batchId,vA(e,s)}catch(s){await Go(e,s)}Sg(e)&&Pg(e)}function yA(n){return kr(n)&&n.ha.length<10}function vA(n,e){n.ha.push(e);const t=tr(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function Sg(n){return kr(n)&&!tr(n).F_()&&n.ha.length>0}function Pg(n){tr(n).start()}async function EA(n){tr(n).ta()}async function TA(n){const e=tr(n);for(const t of n.ha)e.Z_(t.mutations)}async function wA(n,e,t){const r=n.ha.shift(),s=Wc.from(r,e,t);await Rg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ia(n)}async function IA(n,e){e&&tr(n).Y_&&await async function(r,s){if(function(o){return ib(o)&&o!==D.ABORTED}(s.code)){const i=r.ha.shift();tr(r).O_(),await Rg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ia(r)}}(n,e),Sg(n)&&Pg(n)}async function sf(n,e){const t=ce(n);t.asyncQueue.verifyOperationInProgress(),K(Sr,"RemoteStore received new credentials");const r=kr(t);t.Ta.add(3),await ki(t),r&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await wa(t)}async function bA(n,e){const t=ce(n);e?(t.Ta.delete(2),await wa(t)):e||(t.Ta.add(2),await ki(t),t.da.set("Unknown"))}function gs(n){return n.Ra||(n.Ra=function(t,r,s){const i=ce(t);return i.ra(),new lA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:pA.bind(null,n),n_:mA.bind(null,n),i_:gA.bind(null,n),j_:_A.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),nu(n)?tu(n):n.da.set("Unknown")):(await n.Ra.stop(),Ag(n))})),n.Ra}function tr(n){return n.Va||(n.Va=function(t,r,s){const i=ce(t);return i.ra(),new cA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:EA.bind(null,n),i_:IA.bind(null,n),X_:TA.bind(null,n),ea:wA.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await Ia(n)):(await n.Va.stop(),n.ha.length>0&&(K(Sr,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,l=new ru(e,t,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function su(n,e){if(In("AsyncQueue",`${e}: ${n}`),ps(n))return new G(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{static emptySet(e){return new Xr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ne.comparator(t.key,r.key):(t,r)=>ne.comparator(t.key,r.key),this.keyedMap=Us(),this.sortedSet=new Me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Xr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.ma=new Me(ne.comparator)}track(e){const t=e.doc.key,r=this.ma.get(t);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(t,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(t):e.type===1&&r.type===2?this.ma=this.ma.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):oe(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,r)=>{e.push(r)}),e}}class as{constructor(e,t,r,s,i,o,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new as(e,t,Xr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class RA{constructor(){this.queries=af(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,r){const s=ce(t),i=s.queries;s.queries=af(),i.forEach((o,l)=>{for(const c of l.ya)c.onError(r)})})(this,new G(D.ABORTED,"Firestore shutting down"))}}function af(){return new xr(n=>Qm(n),ma)}async function Cg(n,e){const t=ce(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.wa()&&e.Sa()&&(r=2):(i=new AA,r=e.Sa()?0:1);try{switch(r){case 0:i.pa=await t.onListen(s,!0);break;case 1:i.pa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=su(o,`Initialization of query '${Ur(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.ya.push(e),e.Da(t.onlineState),i.pa&&e.va(i.pa)&&iu(t)}async function xg(n,e){const t=ce(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.ya.indexOf(e);o>=0&&(i.ya.splice(o,1),i.ya.length===0?s=e.Sa()?0:1:!i.wa()&&e.Sa()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function SA(n,e){const t=ce(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.ya)l.va(s)&&(r=!0);o.pa=s}}r&&iu(t)}function PA(n,e,t){const r=ce(n),s=r.queries.get(e);if(s)for(const i of s.ya)i.onError(t);r.queries.delete(e)}function iu(n){n.ba.forEach(e=>{e.next()})}var ec,lf;(lf=ec||(ec={})).Ca="default",lf.Cache="cache";class kg{constructor(e,t,r){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new as(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const r=t!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=as.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==ec.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.key=e}}class Vg{constructor(e){this.key=e}}class CA{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=_e(),this.mutatedKeys=_e(),this.Ha=Ym(e),this.Ja=new Xr(this.Ha)}get Ya(){return this.Ga}Za(e,t){const r=t?t.Xa:new of,s=t?t.Ja:this.Ja;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),R=ga(this.query,p)?p:null,k=!!g&&this.mutatedKeys.has(g.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let M=!1;g&&R?g.data.isEqual(R.data)?k!==N&&(r.track({type:3,doc:R}),M=!0):this.eu(g,R)||(r.track({type:2,doc:R}),M=!0,(c&&this.Ha(R,c)>0||h&&this.Ha(R,h)<0)&&(l=!0)):!g&&R?(r.track({type:0,doc:R}),M=!0):g&&!R&&(r.track({type:1,doc:g}),M=!0,(c||h)&&(l=!0)),M&&(R?(o=o.add(R),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ja:o,Xa:r,Cs:l,mutatedKeys:i}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const o=e.Xa.ga();o.sort((f,p)=>function(R,k){const N=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe(20277,{Vt:M})}};return N(R)-N(k)}(f.type,p.type)||this.Ha(f.doc,p.doc)),this.tu(r),s=s!=null&&s;const l=t&&!s?this.nu():[],c=this.ja.size===0&&this.current&&!s?1:0,h=c!==this.za;return this.za=c,o.length!==0||h?{snapshot:new as(this.query,e.Ja,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:l}:{ru:l}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new of,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=_e(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const t=[];return e.forEach(r=>{this.ja.has(r)||t.push(new Vg(r))}),this.ja.forEach(r=>{e.has(r)||t.push(new Dg(r))}),t}su(e){this.Ga=e.$s,this.ja=_e();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return as.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const ou="SyncEngine";class xA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class kA{constructor(e){this.key=e,this._u=!1}}class DA{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.au={},this.uu=new xr(l=>Qm(l),ma),this.cu=new Map,this.lu=new Set,this.hu=new Me(ne.comparator),this.Pu=new Map,this.Tu=new Qc,this.Iu={},this.Eu=new Map,this.du=os.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function VA(n,e,t=!0){const r=Ug(n);let s;const i=r.uu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ou()):s=await Ng(r,e,t,!0),s}async function NA(n,e){const t=Ug(n);await Ng(t,e,!0,!1)}async function Ng(n,e,t,r){const s=await eA(n.localStore,nn(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await OA(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ig(n.remoteStore,s),l}async function OA(n,e,t,r,s){n.Ru=(p,g,R)=>async function(N,M,Q,J){let X=M.view.Za(Q);X.Cs&&(X=await Zd(N.localStore,M.query,!1).then(({documents:b})=>M.view.Za(b,X)));const W=J&&J.targetChanges.get(M.targetId),ye=J&&J.targetMismatches.get(M.targetId)!=null,we=M.view.applyChanges(X,N.isPrimaryClient,W,ye);return uf(N,M.targetId,we.ru),we.snapshot}(n,p,g,R);const i=await Zd(n.localStore,e,!0),o=new CA(e,i.$s),l=o.Za(i.documents),c=xi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(l,n.isPrimaryClient,c);uf(n,t,h.ru);const f=new xA(e,t,o);return n.uu.set(e,f),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),h.snapshot}async function MA(n,e,t){const r=ce(n),s=r.uu.get(e),i=r.cu.get(s.targetId);if(i.length>1)return r.cu.set(s.targetId,i.filter(o=>!ma(o,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Xl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Zc(r.remoteStore,s.targetId),tc(r,s.targetId)}).catch(fs)):(tc(r,s.targetId),await Xl(r.localStore,s.targetId,!0))}async function LA(n,e){const t=ce(n),r=t.uu.get(e),s=t.cu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Zc(t.remoteStore,r.targetId))}async function FA(n,e,t){const r=zA(n);try{const s=await function(o,l){const c=ce(o),h=He.now(),f=l.reduce((R,k)=>R.add(k.key),_e());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",R=>{let k=bn(),N=_e();return c.Bs.getEntries(R,f).next(M=>{k=M,k.forEach((Q,J)=>{J.isValidDocument()||(N=N.add(Q))})}).next(()=>c.localDocuments.getOverlayedDocuments(R,k)).next(M=>{p=M;const Q=[];for(const J of l){const X=eb(J,p.get(J.key).overlayedDocument);X!=null&&Q.push(new ar(J.key,X,Bm(X.value.mapValue),bt.exists(!0)))}return c.mutationQueue.addMutationBatch(R,h,Q,l)}).next(M=>{g=M;const Q=M.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(R,M.batchId,Q)})}).then(()=>({batchId:g.batchId,changes:Xm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Iu[o.currentUser.toKey()];h||(h=new Me(fe)),h=h.insert(l,c),o.Iu[o.currentUser.toKey()]=h}(r,s.batchId,t),await Di(r,s.changes),await Ia(r.remoteStore)}catch(s){const i=su(s,"Failed to persist write");t.reject(i)}}async function Og(n,e){const t=ce(n);try{const r=await Jb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Pu.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o._u=!0:s.modifiedDocuments.size>0?Pe(o._u,14607):s.removedDocuments.size>0&&(Pe(o._u,42227),o._u=!1))}),await Di(t,r,e)}catch(r){await fs(r)}}function cf(n,e,t){const r=ce(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.uu.forEach((i,o)=>{const l=o.view.Da(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ce(o);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const g of p.ya)g.Da(l)&&(h=!0)}),h&&iu(c)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UA(n,e,t){const r=ce(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Pu.get(e),i=s&&s.key;if(i){let o=new Me(ne.comparator);o=o.insert(i,ct.newNoDocument(i,le.min()));const l=_e().add(i),c=new Ea(le.min(),new Map,new Me(fe),o,l);await Og(r,c),r.hu=r.hu.remove(i),r.Pu.delete(e),au(r)}else await Xl(r.localStore,e,!1).then(()=>tc(r,e,t)).catch(fs)}async function $A(n,e){const t=ce(n),r=e.batch.batchId;try{const s=await Yb(t.localStore,e);Lg(t,r,null),Mg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Di(t,s)}catch(s){await fs(s)}}async function BA(n,e,t){const r=ce(n);try{const s=await function(o,l){const c=ce(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Pe(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Lg(r,e,t),Mg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Di(r,s)}catch(s){await fs(s)}}function Mg(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function Lg(n,e,t){const r=ce(n);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}function tc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.cu.get(e))n.uu.delete(r),t&&n.au.Vu(r,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(r=>{n.Tu.containsKey(r)||Fg(n,r)})}function Fg(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&(Zc(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),au(n))}function uf(n,e,t){for(const r of t)r instanceof Dg?(n.Tu.addReference(r.key,e),jA(n,r)):r instanceof Vg?(K(ou,"Document no longer in limbo: "+r.key),n.Tu.removeReference(r.key,e),n.Tu.containsKey(r.key)||Fg(n,r.key)):oe(19791,{mu:r})}function jA(n,e){const t=e.key,r=t.path.canonicalString();n.hu.get(t)||n.lu.has(r)||(K(ou,"New document in limbo: "+t),n.lu.add(r),au(n))}function au(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new ne(Ne.fromString(e)),r=n.du.next();n.Pu.set(r,new kA(t)),n.hu=n.hu.insert(t,r),Ig(n.remoteStore,new Un(nn(Hc(t.path)),r,"TargetPurposeLimboResolution",da.le))}}async function Di(n,e,t){const r=ce(n),s=[],i=[],o=[];r.uu.isEmpty()||(r.uu.forEach((l,c)=>{o.push(r.Ru(c,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Jc.Rs(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.au.j_(s),await async function(c,h){const f=ce(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(h,g=>V.forEach(g.ds,R=>f.persistence.referenceDelegate.addReference(p,g.targetId,R)).next(()=>V.forEach(g.As,R=>f.persistence.referenceDelegate.removeReference(p,g.targetId,R)))))}catch(p){if(!ps(p))throw p;K(Xc,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const R=f.xs.get(g),k=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(k);f.xs=f.xs.insert(g,N)}}}(r.localStore,i))}async function qA(n,e){const t=ce(n);if(!t.currentUser.isEqual(e)){K(ou,"User change. New user:",e.toKey());const r=await vg(t.localStore,e);t.currentUser=e,function(i,o){i.Eu.forEach(l=>{l.forEach(c=>{c.reject(new G(D.CANCELLED,o))})}),i.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Di(t,r.ks)}}function HA(n,e){const t=ce(n),r=t.Pu.get(e);if(r&&r._u)return _e().add(r.key);{let s=_e();const i=t.cu.get(e);if(!i)return s;for(const o of i){const l=t.uu.get(o);s=s.unionWith(l.view.Ya)}return s}}function Ug(n){const e=ce(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Og.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UA.bind(null,e),e.au.j_=SA.bind(null,e.eventManager),e.au.Vu=PA.bind(null,e.eventManager),e}function zA(n){const e=ce(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$A.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BA.bind(null,e),e}class Qo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ta(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return Qb(this.persistence,new Wb,e.initialUser,this.serializer)}yu(e){return new yg(Yc.fi,this.serializer)}pu(e){return new nA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qo.provider={build:()=>new Qo};class WA extends Qo{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){Pe(this.persistence.referenceDelegate instanceof Ko,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new kb(r,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new yg(r=>Ko.fi(r,t),this.serializer)}}class nc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qA.bind(null,this.syncEngine),await bA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new RA}()}createDatastore(e){const t=Ta(e.databaseInfo.databaseId),r=function(i){return new aA(i)}(e.databaseInfo);return function(i,o,l,c){return new hA(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,l){return new fA(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>cf(this.syncEngine,t,0),function(){return nf.C()?new nf:new rA}())}createSyncEngine(e,t){return function(s,i,o,l,c,h,f){const p=new DA(s,i,o,l,c,h);return f&&(p.Au=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ce(s);K(Sr,"RemoteStore shutting down."),i.Ta.add(5),await ki(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}nc.provider={build:()=>new nc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="FirestoreClient";class KA{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=km.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{K(nr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K(nr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=su(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ml(n,e){n.asyncQueue.verifyOperationInProgress(),K(nr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function hf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await GA(n);K(nr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>sf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>sf(e.remoteStore,s)),n._onlineComponents=e}async function GA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){K(nr,"Using user provided OfflineComponentProvider");try{await ml(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;ns("Error using user provided cache. Falling back to memory cache: "+t),await ml(n,new Qo)}}else K(nr,"Using default OfflineComponentProvider"),await ml(n,new WA(void 0));return n._offlineComponents}async function Bg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(K(nr,"Using user provided OnlineComponentProvider"),await hf(n,n._uninitializedComponentsProvider._online)):(K(nr,"Using default OnlineComponentProvider"),await hf(n,new nc))),n._onlineComponents}function QA(n){return Bg(n).then(e=>e.syncEngine)}async function rc(n){const e=await Bg(n),t=e.eventManager;return t.onListen=VA.bind(null,e.syncEngine),t.onUnlisten=MA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=NA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=LA.bind(null,e.syncEngine),t}function YA(n,e,t={}){const r=new zn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const f=new $g({next:g=>{f.Cu(),o.enqueueAndForget(()=>xg(i,p)),g.fromCache&&c.source==="server"?h.reject(new G(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new kg(l,f,{includeMetadataChanges:!0,La:!0});return Cg(i,p)}(await rc(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(n,e,t){if(!t)throw new G(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function JA(n,e,t,r){if(e===!0&&r===!0)throw new G(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ff(n){if(!ne.isDocumentKey(n))throw new G(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pf(n){if(ne.isDocumentKey(n))throw new G(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ba(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":oe(12329,{type:typeof n})}function qt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ba(n);throw new G(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="firestore.googleapis.com",mf=!0;class gf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hg,this.ssl=mf}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:mf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_g;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Cb)throw new G(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Aa{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oI;switch(r.type){case"firstParty":return new uI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=df.get(t);r&&(K("ComponentProvider","Removing Datastore"),df.delete(t),r.terminate())}(this),Promise.resolve()}}function XA(n,e,t,r={}){var s;n=qt(n,Aa);const i=wi(e),o=n._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;i&&(Np(`https://${c}`),Op("Firestore",!0)),o.host!==Hg&&o.host!==c&&ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!wr(h,l)&&(n._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=at.MOCK_USER;else{f=gE(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new G(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new at(g)}n._authCredentials=new aI(new Cm(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lr(this.firestore,e,this._query)}}class At{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class Wn extends lr{constructor(e,t,r){super(e,t,Hc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new ne(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function An(n,e,...t){if(n=$e(n),qg("collection","path",e),n instanceof Aa){const r=Ne.fromString(e,...t);return pf(r),new Wn(n,null,r)}{if(!(n instanceof At||n instanceof Wn))throw new G(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ne.fromString(e,...t));return pf(r),new Wn(n.firestore,null,r)}}function lu(n,e,...t){if(n=$e(n),arguments.length===1&&(e=km.newId()),qg("doc","path",e),n instanceof Aa){const r=Ne.fromString(e,...t);return ff(r),new At(n,null,new ne(r))}{if(!(n instanceof At||n instanceof Wn))throw new G(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ne.fromString(e,...t));return ff(r),new At(n.firestore,n instanceof Wn?n.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="AsyncQueue";class yf{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new Tg(this,"async_queue_retry"),this.ec=()=>{const r=pl();r&&K(_f,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const t=pl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=pl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new zn;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!ps(e))throw e;K(_f,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,In("INTERNAL UNHANDLED ERROR: ",vf(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const s=ru.createAndSchedule(this,e,t,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&oe(47125,{_c:vf(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function vf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class rr extends Aa{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new yf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yf(e),this._firestoreClient=void 0,await e}}}function ZA(n,e){const t=typeof n=="object"?n:Up(),r=typeof n=="string"?n:Bo,s=Pc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=pE("firestore");i&&XA(s,...i)}return s}function Ra(n){if(n._terminated)throw new G(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||eR(n),n._firestoreClient}function eR(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,h,f){return new AI(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,jg(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new KA(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ls(nt.fromBase64String(e))}catch(t){throw new G(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ls(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=/^__.*__$/;class nR{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ar(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ci(e,this.data,t,this.fieldTransforms)}}class zg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ar(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Wg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe(40011,{hc:n})}}class du{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new du(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Yo(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(Wg(this.hc)&&tR.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class rR{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ta(e)}gc(e,t,r,s=!1){return new du({hc:e,methodName:t,fc:r,path:tt.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sa(n){const e=n._freezeSettings(),t=Ta(n._databaseId);return new rR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Kg(n,e,t,r,s,i={}){const o=n.gc(i.merge||i.mergeFields?2:0,e,t,s);fu("Data must be an object, but it was:",o,r);const l=Yg(r,o);let c,h;if(i.merge)c=new Ct(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=sc(e,p,t);if(!o.contains(g))throw new G(D.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Xg(f,g)||f.push(g)}c=new Ct(f),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new nR(new It(l),c,h)}class Pa extends cu{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pa}}function Gg(n,e,t,r){const s=n.gc(1,e,t);fu("Data must be an object, but it was:",s,r);const i=[],o=It.empty();or(r,(c,h)=>{const f=pu(e,c,t);h=$e(h);const p=s.Ac(f);if(h instanceof Pa)i.push(f);else{const g=Ni(h,p);g!=null&&(i.push(f),o.set(f,g))}});const l=new Ct(i);return new zg(o,l,s.fieldTransforms)}function Qg(n,e,t,r,s,i){const o=n.gc(1,e,t),l=[sc(e,r,t)],c=[s];if(i.length%2!=0)throw new G(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(sc(e,i[g])),c.push(i[g+1]);const h=[],f=It.empty();for(let g=l.length-1;g>=0;--g)if(!Xg(h,l[g])){const R=l[g];let k=c[g];k=$e(k);const N=o.Ac(R);if(k instanceof Pa)h.push(R);else{const M=Ni(k,N);M!=null&&(h.push(R),f.set(R,M))}}const p=new Ct(h);return new zg(f,p,o.fieldTransforms)}function sR(n,e,t,r=!1){return Ni(t,n.gc(r?4:3,e))}function Ni(n,e){if(Jg(n=$e(n)))return fu("Unsupported field value:",e,n),Yg(n,e);if(n instanceof cu)return function(r,s){if(!Wg(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Ni(l,s.Rc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return GI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=He.fromDate(r);return{timestampValue:Wo(s.serializer,i)}}if(r instanceof He){const i=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wo(s.serializer,i)}}if(r instanceof uu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ls)return{bytesValue:ug(s.serializer,r._byteString)};if(r instanceof At){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof hu)return function(o,l){return{mapValue:{fields:{[Um]:{stringValue:$m},[jo]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Vc("VectorValues must only contain numeric values.");return zc(l.serializer,h)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${ba(r)}`)}(n,e)}function Yg(n,e){const t={};return Vm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):or(n,(r,s)=>{const i=Ni(s,e.Ic(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Jg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof He||n instanceof uu||n instanceof ls||n instanceof At||n instanceof cu||n instanceof hu)}function fu(n,e,t){if(!Jg(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=ba(t);throw r==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+r)}}function sc(n,e,t){if((e=$e(e))instanceof Vi)return e._internalPath;if(typeof e=="string")return pu(n,e);throw Yo("Field path arguments must be of type string or ",n,!1,void 0,t)}const iR=new RegExp("[~\\*/\\[\\]]");function pu(n,e,t){if(e.search(iR)>=0)throw Yo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vi(...e.split("."))._internalPath}catch{throw Yo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Yo(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new G(D.INVALID_ARGUMENT,l+n+c)}function Xg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ca("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class oR extends Zg{data(){return super.data()}}function Ca(n,e){return typeof e=="string"?pu(n,e):e instanceof Vi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mu{}class t_ extends mu{}function _s(n,e,...t){let r=[];e instanceof mu&&r.push(e),r=r.concat(t),function(i){const o=i.filter(c=>c instanceof gu).length,l=i.filter(c=>c instanceof xa).length;if(o>1||o>0&&l>0)throw new G(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class xa extends t_{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new xa(e,t,r)}_apply(e){const t=this._parse(e);return r_(e._query,t),new lr(e.firestore,e.converter,Wl(e._query,t))}_parse(e){const t=Sa(e.firestore);return function(i,o,l,c,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new G(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){wf(p,f);const k=[];for(const N of p)k.push(Tf(c,i,N));g={arrayValue:{values:k}}}else g=Tf(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||wf(p,f),g=sR(l,o,p,f==="in"||f==="not-in");return je.create(h,f,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function xt(n,e,t){const r=e,s=Ca("where",n);return xa._create(s,r,t)}class gu extends mu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new gu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:zt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)r_(o,c),o=Wl(o,c)}(e._query,t),new lr(e.firestore,e.converter,Wl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _u extends t_{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new _u(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new G(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new G(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new gi(i,o)}(e._query,this._field,this._direction);return new lr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ms(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function n_(n,e="asc"){const t=e,r=Ca("orderBy",n);return _u._create(r,t)}function Tf(n,e,t){if(typeof(t=$e(t))=="string"){if(t==="")throw new G(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gm(e)&&t.indexOf("/")!==-1)throw new G(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ne.fromString(t));if(!ne.isDocumentKey(r))throw new G(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nd(n,new ne(r))}if(t instanceof At)return Nd(n,t._key);throw new G(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ba(t)}.`)}function wf(n,e){if(!Array.isArray(n)||n.length===0)throw new G(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function r_(n,e){const t=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new G(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class aR{convertValue(e,t="none"){switch(er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw oe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return or(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[jo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ue(o.doubleValue));return new hu(i)}convertGeoPoint(e){return new uu(Ue(e.latitude),Ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=pa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(fi(e));default:return null}}convertTimestamp(e){const t=Xn(e);return new He(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ne.fromString(e);Pe(gg(r),9688,{name:e});const s=new pi(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(t)||In(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class i_ extends Zg{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Io(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ca("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Io extends i_{data(e={}){return super.data(e)}}class o_{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Bs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Io(this._firestore,this._userDataWriter,r.key,r,new Bs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Io(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Bs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Io(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Bs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:lR(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function lR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe(61501,{type:n})}}class yu extends aR{constructor(e){super(),this.firestore=e}convertBytes(e){return new ls(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,t)}}function ka(n){n=qt(n,lr);const e=qt(n.firestore,rr),t=Ra(e),r=new yu(e);return e_(n._query),YA(t,n._query).then(s=>new o_(e,r,n,s))}function vu(n,e,t,...r){n=qt(n,At);const s=qt(n.firestore,rr),i=Sa(s);let o;return o=typeof(e=$e(e))=="string"||e instanceof Vi?Qg(i,"updateDoc",n._key,e,t,r):Gg(i,"updateDoc",n._key,e),Da(s,[o.toMutation(n._key,bt.exists(!0))])}function cR(n){return Da(qt(n.firestore,rr),[new va(n._key,bt.none())])}function Eu(n,e){const t=qt(n.firestore,rr),r=lu(n),s=s_(n.converter,e);return Da(t,[Kg(Sa(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,bt.exists(!1))]).then(()=>r)}function a_(n,...e){var t,r,s;n=$e(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Ef(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Ef(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,f;if(n instanceof At)h=qt(n.firestore,rr),f=Hc(n._key.path),c={next:p=>{e[o]&&e[o](uR(h,n,p))},error:e[o+1],complete:e[o+2]};else{const p=qt(n,lr);h=qt(p.firestore,rr),f=p._query;const g=new yu(h);c={next:R=>{e[o]&&e[o](new o_(h,g,p,R))},error:e[o+1],complete:e[o+2]},e_(n._query)}return function(g,R,k,N){const M=new $g(N),Q=new kg(R,M,k);return g.asyncQueue.enqueueAndForget(async()=>Cg(await rc(g),Q)),()=>{M.Cu(),g.asyncQueue.enqueueAndForget(async()=>xg(await rc(g),Q))}}(Ra(h),f,l,c)}function Da(n,e){return function(r,s){const i=new zn;return r.asyncQueue.enqueueAndForget(async()=>FA(await QA(r),s,i)),i.promise}(Ra(n),e)}function uR(n,e,t){const r=t.docs.get(e._key),s=new yu(n);return new i_(n,s,e._key,r,new Bs(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Sa(e)}set(e,t,r){this._verifyNotCommitted();const s=gl(e,this._firestore),i=s_(s.converter,t,r),o=Kg(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,bt.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=gl(e,this._firestore);let o;return o=typeof(t=$e(t))=="string"||t instanceof Vi?Qg(this._dataReader,"WriteBatch.update",i._key,t,r,s):Gg(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,bt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=gl(e,this._firestore);return this._mutations=this._mutations.concat(new va(t._key,bt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new G(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function gl(n,e){if((n=$e(n)).firestore!==e)throw new G(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(n){return Ra(n=qt(n,rr)),new hR(n,e=>Da(n,e))}(function(e,t=!0){(function(s){ds=s})(us),ts(new Ir("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new rr(new lI(r.getProvider("auth-internal")),new hI(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new G(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pi(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),qn(wd,Id,e),qn(wd,Id,"esm2017")})();const fR={apiKey:"",authDomain:"referral-app-c8e00.firebaseapp.com",projectId:"referral-app-c8e00",storageBucket:"referral-app-c8e00.firebasestorage.app",messagingSenderId:"343436249776",appId:"1:343436249776:web:d5607bd9bc9bc2214b0975"},l_=Fp(fR),Ut=ZA(l_),Mt=nI(l_),_l=Xe(null),If=Xe(!0);function Tu(){const n=async(s,i)=>$T(Mt,s,i),e=async(s,i)=>BT(Mt,s,i),t=async()=>zT(Mt),r=()=>{HT(Mt,s=>{_l.value=s,If.value=!1})};return ra(()=>{_l.value||r()}),{currentUser:_l,loading:If,signup:n,login:e,logout:t,initAuth:r}}/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pR=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),mR=n=>{const e=pR(n);return e.charAt(0).toUpperCase()+e.slice(1)},gR=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=({size:n,strokeWidth:e=2,absoluteStrokeWidth:t,color:r,iconNode:s,name:i,class:o,...l},{slots:c})=>Pl("svg",{...lo,width:n||lo.width,height:n||lo.height,stroke:r||lo.stroke,"stroke-width":t?Number(e)*24/Number(n):e,class:gR("lucide",...i?[`lucide-${bf(mR(i))}-icon`,`lucide-${bf(i)}`]:["lucide-icon"]),...l},[...s.map(h=>Pl(...h)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=(n,e)=>(t,{slots:r})=>Pl(_R,{...t,iconNode:e,name:n},r);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yR=dt("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vR=dt("circle-plus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=dt("credit-card",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=dt("dollar-sign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TR=dt("eye-off",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=dt("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IR=dt("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=dt("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=dt("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AR=dt("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RR=dt("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SR=dt("square-pen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=dt("trash-2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PR=dt("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=dt("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CR=dt("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),xR={class:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6"},kR={class:"max-w-md w-full"},DR={class:"bg-white rounded-2xl shadow-xl p-8"},VR={class:"text-center mb-8"},NR={class:"bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"},OR={class:"text-3xl font-bold text-gray-900 mb-2"},MR={class:"text-gray-600"},LR={key:0,class:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6"},FR={class:"relative"},UR={class:"relative"},$R=["type"],BR=["disabled"],jR={class:"mt-6 text-center"},qR={__name:"Auth",setup(n){const{login:e,signup:t}=Tu(),r=Xe(!0),s=Xe(""),i=Xe(""),o=Xe(!1),l=Xe(""),c=Xe(!1),h=async()=>{if(!s.value||!i.value){l.value="Please fill in all fields";return}if(i.value.length<6){l.value="Password must be at least 6 characters";return}try{l.value="",c.value=!0,r.value?await e(s.value,i.value):await t(s.value,i.value)}catch(p){l.value=p.message}finally{c.value=!1}},f=()=>{r.value=!r.value,l.value="",s.value="",i.value=""};return(p,g)=>(ge(),Re("div",xR,[I("div",kR,[I("div",DR,[I("div",VR,[I("div",NR,[de(Oe(Af),{class:"text-white",size:32})]),I("h1",OR,Se(r.value?"Welcome Back":"Create Account"),1),I("p",MR,Se(r.value?"Sign in to access your referral dashboard":"Join us to start managing referrals"),1)]),l.value?(ge(),Re("div",LR,Se(l.value),1)):oa("",!0),I("form",{onSubmit:Ac(h,["prevent"]),class:"space-y-6"},[I("div",null,[g[3]||(g[3]=I("label",{class:"block text-sm font-medium text-gray-700 mb-2"}," Email Address ",-1)),I("div",FR,[de(Oe(AR),{class:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),yh(I("input",{"onUpdate:modelValue":g[0]||(g[0]=R=>s.value=R),type:"email",class:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Enter your email",required:""},null,512),[[xl,s.value]])])]),I("div",null,[g[4]||(g[4]=I("label",{class:"block text-sm font-medium text-gray-700 mb-2"}," Password ",-1)),I("div",UR,[de(Oe(Af),{class:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),yh(I("input",{"onUpdate:modelValue":g[1]||(g[1]=R=>i.value=R),type:o.value?"text":"password",class:"w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Enter your password",required:""},null,8,$R),[[Jv,i.value]]),I("button",{type:"button",onClick:g[2]||(g[2]=R=>o.value=!o.value),class:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"},[o.value?(ge(),Gr(Oe(TR),{key:0,size:20})):(ge(),Gr(Oe(wR),{key:1,size:20}))])])]),I("button",{type:"submit",disabled:c.value,class:"w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"},Se(c.value?"Please wait...":r.value?"Sign In":"Create Account"),9,BR)],32),I("div",jR,[I("button",{onClick:f,class:"text-blue-600 hover:text-blue-800 font-medium"},Se(r.value?"Don't have an account? Sign up":"Already have an account? Sign in"),1)])])])]))}},HR=async n=>{try{const e=Mt.currentUser;if(!e)throw new Error("User not authenticated");const t=await Eu(An(Ut,"referrals"),{customerName:n.customerName,monthlyValue:n.monthlyValue,status:n.status,startDate:n.startDate,userId:e.uid,createdAt:new Date,updatedAt:new Date});return console.log("Referral added with ID:",t.id),{id:t.id,...n}}catch(e){throw console.error("Error adding referral:",e),new Error("Failed to add referral: "+e.message)}},zR=async(n,e)=>{try{const t=lu(Ut,"referrals",n);return await vu(t,{customerName:e.customerName,monthlyValue:e.monthlyValue,status:e.status,startDate:e.startDate,updatedAt:new Date}),console.log("Referral updated:",n),{id:n,...e}}catch(t){throw console.error("Error updating referral:",t),new Error("Failed to update referral: "+t.message)}},WR=async n=>{try{const e=Mt.currentUser;if(!e)throw new Error("User not authenticated");const t=dR(Ut),r=lu(Ut,"referrals",n);t.delete(r);const s=_s(An(Ut,"payments"),xt("referralId","==",n),xt("userId","==",e.uid));return(await ka(s)).docs.forEach(o=>{t.delete(o.ref)}),await t.commit(),console.log("Referral and related payments deleted:",n),n}catch(e){throw console.error("Error deleting referral:",e),new Error("Failed to delete referral: "+e.message)}},KR=n=>{try{const e=Mt.currentUser;if(!e)return n([]),()=>{};const t=_s(An(Ut,"referrals"),xt("userId","==",e.uid),n_("createdAt","desc"));return a_(t,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));console.log("Real-time referrals update:",i.length),n(i)},s=>{console.error("Error in referrals subscription:",s),n([])})}catch(e){return console.error("Error setting up referrals subscription:",e),()=>{}}},GR=async n=>{try{const e=Mt.currentUser;if(!e)throw new Error("User not authenticated");const t=await Eu(An(Ut,"payments"),{referralId:n.customerId,month:n.month,status:n.paymentStatus,amount:parseFloat(n.amount),isInvoiced:n.invoiceStatus||!1,userId:e.uid,createdAt:new Date,updatedAt:new Date});return console.log("Payment added with ID:",t.id),{id:t.id,...n}}catch(e){throw console.error("Error adding payment:",e),new Error("Failed to add payment: "+e.message)}},QR=async(n,e,t)=>{try{const r=Mt.currentUser;if(!r)throw new Error("User not authenticated");const s=_s(An(Ut,"payments"),xt("referralId","==",n),xt("month","==",e),xt("userId","==",r.uid)),i=await ka(s);if(i.empty)await Eu(An(Ut,"payments"),{referralId:n,month:e,status:t,amount:0,isInvoiced:!1,userId:r.uid,createdAt:new Date,updatedAt:new Date}),console.log("New payment record created:",n,e,t);else{const o=i.docs[0];await vu(o.ref,{status:t,updatedAt:new Date}),console.log("Payment status updated:",n,e,t)}}catch(r){throw console.error("Error updating payment status:",r),new Error("Failed to update payment status: "+r.message)}},YR=async(n,e,t)=>{try{const r=Mt.currentUser;if(!r)throw new Error("User not authenticated");const s=_s(An(Ut,"payments"),xt("referralId","==",n),xt("month","==",e),xt("userId","==",r.uid)),i=await ka(s);if(i.empty)console.warn("No payment found to update invoice status:",n,e);else{const o=i.docs[0];await vu(o.ref,{isInvoiced:t,invoicedAt:t?new Date:null,updatedAt:new Date}),console.log("Invoice status updated:",n,e,t)}}catch(r){throw console.error("Error updating invoice status:",r),new Error("Failed to update invoice status: "+r.message)}},JR=async(n,e)=>{try{const t=Mt.currentUser;if(!t)throw new Error("User not authenticated");const r=_s(An(Ut,"payments"),xt("referralId","==",n),xt("month","==",e),xt("userId","==",t.uid)),i=(await ka(r)).docs.map(o=>cR(o.ref));await Promise.all(i),console.log("Payment(s) deleted:",n,e)}catch(t){throw console.error("Error deleting payment:",t),new Error("Failed to delete payment: "+t.message)}},XR=n=>{try{const e=Mt.currentUser;if(!e)return n({}),()=>{};const t=_s(An(Ut,"payments"),xt("userId","==",e.uid),n_("createdAt","desc"));return a_(t,s=>{const i={};s.docs.forEach(o=>{const l=o.data(),c=l.referralId;i[c]||(i[c]=[]),i[c].push({id:o.id,month:l.month,status:l.status,amount:l.amount,isInvoiced:l.isInvoiced,createdAt:l.createdAt,updatedAt:l.updatedAt,invoicedAt:l.invoicedAt})}),console.log("Real-time payments update for referrals:",Object.keys(i).length),n(i)},s=>{console.error("Error in payments subscription:",s),n({})})}catch(e){return console.error("Error setting up payments subscription:",e),()=>{}}},ZR={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"},eS={class:"bg-white p-6 rounded-xl shadow-lg"},tS={class:"flex items-center"},nS={class:"p-2 bg-blue-100 rounded-lg"},rS={class:"ml-4"},sS={class:"text-2xl font-bold text-gray-900"},iS={class:"bg-white p-6 rounded-xl shadow-lg"},oS={class:"flex items-center"},aS={class:"p-2 bg-green-100 rounded-lg"},lS={class:"ml-4"},cS={class:"text-2xl font-bold text-gray-900"},uS={class:"bg-white p-6 rounded-xl shadow-lg"},hS={class:"flex items-center"},dS={class:"p-2 bg-yellow-100 rounded-lg"},fS={class:"ml-4"},pS={class:"text-2xl font-bold text-gray-900"},mS={class:"bg-white p-6 rounded-xl shadow-lg"},gS={class:"flex items-center"},_S={class:"p-2 bg-purple-100 rounded-lg"},yS={class:"ml-4"},vS={class:"text-2xl font-bold text-gray-900"},ES={class:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"},TS={class:"bg-white p-6 rounded-xl shadow-lg"},wS={class:"flex items-center justify-between mb-4"},IS={class:"space-y-3"},bS={class:"flex justify-between"},AS={class:"font-semibold text-green-600"},RS={class:"flex justify-between"},SS={class:"font-semibold text-orange-600"},PS={class:"bg-white p-6 rounded-xl shadow-lg"},CS={class:"flex items-center justify-between mb-4"},xS={class:"space-y-3"},kS={class:"flex justify-between"},DS={class:"font-semibold text-red-600"},VS={class:"flex justify-between"},NS={class:"font-semibold text-green-600"},OS={__name:"StatsCards",props:{totalMonthlyValue:{type:Number,required:!0},activeReferrals:{type:Number,required:!0},paymentStats:{type:Object,required:!0}},setup(n){return(e,t)=>(ge(),Re(_t,null,[I("div",ZR,[I("div",eS,[I("div",tS,[I("div",nS,[de(Oe(ER),{class:"text-blue-600",size:24})]),I("div",rS,[t[0]||(t[0]=I("p",{class:"text-sm font-medium text-gray-600"},"Total Monthly Value",-1)),I("p",sS,"$"+Se(n.totalMonthlyValue.toFixed(2)),1)])])]),I("div",iS,[I("div",oS,[I("div",aS,[de(Oe(h_),{class:"text-green-600",size:24})]),I("div",lS,[t[1]||(t[1]=I("p",{class:"text-sm font-medium text-gray-600"},"Active Referrals",-1)),I("p",cS,Se(n.activeReferrals),1)])])]),I("div",uS,[I("div",hS,[I("div",dS,[de(Oe(PR),{class:"text-yellow-600",size:24})]),I("div",fS,[t[2]||(t[2]=I("p",{class:"text-sm font-medium text-gray-600"},"This Month Expected",-1)),I("p",pS,"$"+Se(n.paymentStats.totalExpected.toFixed(2)),1)])])]),I("div",mS,[I("div",gS,[I("div",_S,[de(Oe(yR),{class:"text-purple-600",size:24})]),I("div",yS,[t[3]||(t[3]=I("p",{class:"text-sm font-medium text-gray-600"},"This Month Received",-1)),I("p",vS,"$"+Se(n.paymentStats.totalReceived.toFixed(2)),1)])])])]),I("div",ES,[I("div",TS,[I("div",wS,[t[4]||(t[4]=I("h3",{class:"text-lg font-semibold text-gray-900"},"Invoicing Status",-1)),de(Oe(IR),{class:"text-gray-400",size:20})]),I("div",IS,[I("div",bS,[t[5]||(t[5]=I("span",{class:"text-sm text-gray-600"},"Total Invoiced",-1)),I("span",AS,"$"+Se(n.paymentStats.totalInvoiced.toFixed(2)),1)]),I("div",RS,[t[6]||(t[6]=I("span",{class:"text-sm text-gray-600"},"To Be Invoiced",-1)),I("span",SS,"$"+Se(n.paymentStats.totalToBeInvoiced.toFixed(2)),1)])])]),I("div",PS,[I("div",CS,[t[7]||(t[7]=I("h3",{class:"text-lg font-semibold text-gray-900"},"Payment Status",-1)),de(Oe(c_),{class:"text-gray-400",size:20})]),I("div",xS,[I("div",kS,[t[8]||(t[8]=I("span",{class:"text-sm text-gray-600"},"Pending",-1)),I("span",DS,"$"+Se(n.paymentStats.totalPending.toFixed(2)),1)]),I("div",VS,[t[9]||(t[9]=I("span",{class:"text-sm text-gray-600"},"Received",-1)),I("span",NS,"$"+Se(n.paymentStats.totalReceived.toFixed(2)),1)])])])])],64))}},MS={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"},LS={class:"bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"},FS={class:"text-2xl font-bold text-gray-900 mb-6"},US=["value"],$S=["value"],BS=["value"],jS=["value"],qS={class:"flex gap-4 pt-4"},HS=["disabled"],zS={__name:"AddReferralForm",props:{showAddForm:Boolean,editingReferral:Object,formData:{type:Object,required:!0},loading:Boolean},emits:["submit","resetForm","update:formData"],setup(n,{emit:e}){const t=n,r=e,s=(i,o)=>{r("update:formData",{...t.formData,[i]:o})};return(i,o)=>n.showAddForm?(ge(),Re("div",MS,[I("div",LS,[I("h2",FS,Se(n.editingReferral?"Edit Referral":"Add New Referral"),1),I("form",{onSubmit:o[5]||(o[5]=Ac(l=>i.$emit("submit"),["prevent"])),class:"space-y-4"},[I("div",null,[o[6]||(o[6]=I("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"Customer Name",-1)),I("input",{value:n.formData.customerName,onInput:o[0]||(o[0]=l=>s("customerName",l.target.value)),type:"text",class:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Enter customer name",required:""},null,40,US)]),I("div",null,[o[7]||(o[7]=I("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"Monthly Value ($)",-1)),I("input",{value:n.formData.monthlyValue,onInput:o[1]||(o[1]=l=>s("monthlyValue",l.target.value)),type:"number",step:"0.01",class:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Enter monthly value",required:""},null,40,$S)]),I("div",null,[o[9]||(o[9]=I("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"Status",-1)),I("select",{value:n.formData.status,onChange:o[2]||(o[2]=l=>s("status",l.target.value)),class:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"},o[8]||(o[8]=[I("option",{value:"Active"},"Active",-1),I("option",{value:"Inactive"},"Inactive",-1),I("option",{value:"Cancelled"},"Cancelled",-1)]),40,BS)]),I("div",null,[o[10]||(o[10]=I("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"Start Date",-1)),I("input",{value:n.formData.startDate,onInput:o[3]||(o[3]=l=>s("startDate",l.target.value)),type:"date",class:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",required:""},null,40,jS)]),I("div",qS,[I("button",{type:"button",onClick:o[4]||(o[4]=l=>i.$emit("resetForm")),class:"flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"}," Cancel "),I("button",{type:"submit",disabled:n.loading,class:"flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50"},Se(n.loading?"Saving...":n.editingReferral?"Update":"Add")+" Referral ",9,HS)])],32)])])):oa("",!0)}},WS={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"},KS={class:"bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"},GS=["value"],QS=["value"],YS=["value"],JS=["value"],XS=["value"],ZS=["value"],e1={class:"flex items-center"},t1=["checked"],n1={class:"flex gap-4 pt-4"},r1=["disabled"],s1={__name:"AddPaymentForm",props:{showAddPaymentForm:Boolean,paymentFormData:{type:Object,required:!0},referrals:{type:Array,required:!0},monthsArray:{type:Array,required:!0},loading:Boolean},emits:["addPayment","resetForm","update:paymentFormData"],setup(n,{emit:e}){const t=n,r=e,s=(i,o)=>{r("update:paymentFormData",{...t.paymentFormData,[i]:o})};return(i,o)=>n.showAddPaymentForm?(ge(),Re("div",WS,[I("div",KS,[o[15]||(o[15]=I("h2",{class:"text-2xl font-bold text-gray-900 mb-6"},"Add Payment",-1)),I("form",{onSubmit:o[6]||(o[6]=Ac(l=>i.$emit("addPayment"),["prevent"])),class:"space-y-4"},[I("div",null,[o[8]||(o[8]=I("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"Customer",-1)),I("select",{value:n.paymentFormData.customerId,onChange:o[0]||(o[0]=l=>s("customerId",l.target.value)),class:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",required:""},[o[7]||(o[7]=I("option",{value:""},"Select a customer",-1)),(ge(!0),Re(_t,null,oi(n.referrals,l=>(ge(),Re("option",{key:l.id,value:l.id},Se(l.customerName),9,QS))),128))],40,GS)]),I("div",null,[o[10]||(o[10]=I("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"Month",-1)),I("select",{value:n.paymentFormData.month,onChange:o[1]||(o[1]=l=>s("month",l.target.value)),class:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",required:""},[o[9]||(o[9]=I("option",{value:""},"Select a month",-1)),(ge(!0),Re(_t,null,oi(n.monthsArray,l=>(ge(),Re("option",{key:l.key,value:l.key},Se(l.name),9,JS))),128))],40,YS)]),I("div",null,[o[11]||(o[11]=I("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"Amount ($)",-1)),I("input",{value:n.paymentFormData.amount,onInput:o[2]||(o[2]=l=>s("amount",l.target.value)),type:"number",step:"0.01",class:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Enter payment amount",required:""},null,40,XS)]),I("div",null,[o[13]||(o[13]=I("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"Payment Status",-1)),I("select",{value:n.paymentFormData.paymentStatus,onChange:o[3]||(o[3]=l=>s("paymentStatus",l.target.value)),class:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"},o[12]||(o[12]=[I("option",{value:"paid"},"Paid",-1),I("option",{value:"pending"},"Pending",-1),I("option",{value:"overdue"},"Overdue",-1)]),40,ZS)]),I("div",e1,[I("input",{checked:n.paymentFormData.invoiceStatus,onChange:o[4]||(o[4]=l=>s("invoiceStatus",l.target.checked)),type:"checkbox",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"},null,40,t1),o[14]||(o[14]=I("label",{class:"ml-2 text-sm font-medium text-gray-700"},"Already invoiced",-1))]),I("div",n1,[I("button",{type:"button",onClick:o[5]||(o[5]=l=>i.$emit("resetForm")),class:"flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"}," Cancel "),I("button",{type:"submit",disabled:n.loading,class:"flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50"},Se(n.loading?"Adding...":"Add Payment"),9,r1)])],32)])])):oa("",!0)}},i1={class:"bg-white rounded-2xl shadow-xl p-8 mb-8"},o1={class:"flex justify-between items-center mb-6"},a1=["disabled"],l1={key:0,class:"text-center py-8"},c1={key:1,class:"text-center py-8"},u1={key:2,class:"overflow-x-auto"},h1={class:"w-full"},d1={class:"py-4 px-4"},f1={class:"font-medium text-gray-900"},p1={class:"py-4 px-4"},m1={class:"text-green-600 font-semibold"},g1={class:"py-4 px-4"},_1={class:"py-4 px-4"},y1={class:"text-gray-600"},v1={class:"py-4 px-4"},E1={class:"flex gap-2"},T1=["onClick"],w1=["onClick"],I1={__name:"ReferralsList",props:{referrals:{type:Array,required:!0},loading:Boolean},emits:["edit","delete","showAddPaymentForm"],setup(n,{emit:e}){const t=e,r=i=>new Date(i).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),s=i=>{confirm(`Are you sure you want to delete the referral for ${i.customerName}? This will also delete all related payments.`)&&t("delete",i.id)};return(i,o)=>(ge(),Re("div",i1,[I("div",o1,[o[2]||(o[2]=I("h2",{class:"text-2xl font-bold text-gray-900"},"Referrals",-1)),I("button",{onClick:o[0]||(o[0]=l=>i.$emit("showAddPaymentForm")),class:"bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:from-green-600 hover:to-emerald-700 transition-all duration-300",disabled:n.loading},[de(Oe(RR),{size:18}),o[1]||(o[1]=Ic(" Add Payment "))],8,a1)]),n.loading&&n.referrals.length===0?(ge(),Re("div",l1,o[3]||(o[3]=[I("div",{class:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"},null,-1),I("p",{class:"text-gray-600 mt-2"},"Loading referrals...",-1)]))):n.referrals.length===0?(ge(),Re("div",c1,[de(Oe(h_),{class:"mx-auto text-gray-400 mb-4",size:48}),o[4]||(o[4]=I("p",{class:"text-gray-600"},"No referrals found. Add your first referral to get started!",-1))])):(ge(),Re("div",u1,[I("table",h1,[o[5]||(o[5]=I("thead",null,[I("tr",{class:"border-b border-gray-200"},[I("th",{class:"text-left py-3 px-4 font-semibold text-gray-700"},"Customer"),I("th",{class:"text-left py-3 px-4 font-semibold text-gray-700"},"Monthly Value"),I("th",{class:"text-left py-3 px-4 font-semibold text-gray-700"},"Status"),I("th",{class:"text-left py-3 px-4 font-semibold text-gray-700"},"Start Date"),I("th",{class:"text-left py-3 px-4 font-semibold text-gray-700"},"Actions")])],-1)),I("tbody",null,[(ge(!0),Re(_t,null,oi(n.referrals,l=>(ge(),Re("tr",{key:l.id,class:"border-b border-gray-100 hover:bg-gray-50"},[I("td",d1,[I("div",f1,Se(l.customerName),1)]),I("td",p1,[I("div",m1,"$"+Se(l.monthlyValue.toFixed(2)),1)]),I("td",g1,[I("span",{class:Er(["px-2 py-1 rounded-full text-xs font-medium",l.status==="Active"?"bg-green-100 text-green-800":l.status==="Inactive"?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"])},Se(l.status),3)]),I("td",_1,[I("div",y1,Se(r(l.startDate)),1)]),I("td",v1,[I("div",E1,[I("button",{onClick:c=>i.$emit("edit",l),class:"p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",title:"Edit referral"},[de(Oe(SR),{size:16})],8,T1),I("button",{onClick:c=>s(l),class:"p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",title:"Delete referral"},[de(Oe(u_),{size:16})],8,w1)])])]))),128))])])]))]))}},b1={class:"bg-white rounded-2xl shadow-xl p-8"},A1={class:"flex justify-between items-center mb-6"},R1=["value"],S1=["value"],P1={key:0,class:"text-center py-8"},C1={key:1,class:"text-center py-8"},x1={key:2,class:"overflow-x-auto"},k1={class:"w-full"},D1={class:"py-4 px-4"},V1={class:"font-medium text-gray-900"},N1={class:"py-4 px-4"},O1={class:"text-green-600 font-semibold"},M1={class:"py-4 px-4"},L1={class:"text-gray-900 font-medium"},F1={class:"py-4 px-4"},U1=["value","onChange","disabled"],$1={class:"py-4 px-4"},B1=["onClick","disabled"],j1={class:"py-4 px-4"},q1=["onClick"],H1={key:1,class:"text-gray-400 text-sm"},z1={__name:"PaymentTracking",props:{referrals:{type:Array,required:!0},payments:{type:Object,required:!0},selectedMonth:{type:String,required:!0},monthsArray:{type:Array,required:!0},getPaymentStatus:{type:Function,required:!0},getInvoiceStatus:{type:Function,required:!0},getPaymentAmount:{type:Function,required:!0},isPaymentValidForMonth:{type:Function,required:!0},loading:Boolean},emits:["update:selectedMonth","updatePaymentStatus","updateInvoiceStatus","deletePayment"],setup(n,{emit:e}){const t=n,r=e,s=Qs(()=>t.referrals.filter(h=>h.status==="Active")),i=(h,f,p)=>{r("updatePaymentStatus",h,f,p)},o=(h,f)=>{const p=t.getInvoiceStatus(h,f);r("updateInvoiceStatus",h,f,!p)},l=(h,f)=>(t.payments[h]||[]).some(g=>g.month===f),c=(h,f)=>{confirm("Are you sure you want to delete this payment record?")&&r("deletePayment",h,f)};return(h,f)=>(ge(),Re("div",b1,[I("div",A1,[f[1]||(f[1]=I("h2",{class:"text-2xl font-bold text-gray-900"},"Payment Tracking",-1)),I("select",{value:n.selectedMonth,onChange:f[0]||(f[0]=p=>h.$emit("update:selectedMonth",p.target.value)),class:"px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"},[(ge(!0),Re(_t,null,oi(n.monthsArray,p=>(ge(),Re("option",{key:p.key,value:p.key},Se(p.name),9,S1))),128))],40,R1)]),n.loading&&n.referrals.length===0?(ge(),Re("div",P1,f[2]||(f[2]=[I("div",{class:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"},null,-1),I("p",{class:"text-gray-600 mt-2"},"Loading payments...",-1)]))):s.value.length===0?(ge(),Re("div",C1,[de(Oe(c_),{class:"mx-auto text-gray-400 mb-4",size:48}),f[3]||(f[3]=I("p",{class:"text-gray-600"},"No active referrals found for payment tracking.",-1))])):(ge(),Re("div",x1,[I("table",k1,[f[5]||(f[5]=I("thead",null,[I("tr",{class:"border-b border-gray-200"},[I("th",{class:"text-left py-3 px-4 font-semibold text-gray-700"},"Customer"),I("th",{class:"text-left py-3 px-4 font-semibold text-gray-700"},"Expected"),I("th",{class:"text-left py-3 px-4 font-semibold text-gray-700"},"Actual Amount"),I("th",{class:"text-left py-3 px-4 font-semibold text-gray-700"},"Status"),I("th",{class:"text-left py-3 px-4 font-semibold text-gray-700"},"Invoiced"),I("th",{class:"text-left py-3 px-4 font-semibold text-gray-700"},"Actions")])],-1)),I("tbody",null,[(ge(!0),Re(_t,null,oi(s.value,p=>(ge(),Re("tr",{key:p.id,class:"border-b border-gray-100 hover:bg-gray-50"},[I("td",D1,[I("div",V1,Se(p.customerName),1)]),I("td",N1,[I("div",O1,"$"+Se(p.monthlyValue.toFixed(2)),1)]),I("td",M1,[I("div",L1,Se(n.getPaymentAmount(p.id,n.selectedMonth)?`$${n.getPaymentAmount(p.id,n.selectedMonth).toFixed(2)}`:"-"),1)]),I("td",F1,[I("select",{value:n.getPaymentStatus(p.id,n.selectedMonth),onChange:g=>i(p.id,n.selectedMonth,g.target.value),class:Er(["px-3 py-1 rounded-lg text-sm font-medium border-0",n.getPaymentStatus(p.id,n.selectedMonth)==="paid"?"bg-green-100 text-green-800":n.getPaymentStatus(p.id,n.selectedMonth)==="pending"?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"]),disabled:!n.isPaymentValidForMonth(p,n.selectedMonth)},f[4]||(f[4]=[I("option",{value:"pending"},"Pending",-1),I("option",{value:"paid"},"Paid",-1),I("option",{value:"overdue"},"Overdue",-1)]),42,U1)]),I("td",$1,[I("button",{onClick:g=>o(p.id,n.selectedMonth),class:Er(["px-3 py-1 rounded-lg text-sm font-medium transition-colors",n.getInvoiceStatus(p.id,n.selectedMonth)?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-600 hover:bg-gray-200"]),disabled:n.getPaymentStatus(p.id,n.selectedMonth)!=="paid"||!n.isPaymentValidForMonth(p,n.selectedMonth)},Se(n.getInvoiceStatus(p.id,n.selectedMonth)?"Invoiced":"Not Invoiced"),11,B1)]),I("td",j1,[l(p.id,n.selectedMonth)?(ge(),Re("button",{key:0,onClick:g=>c(p.id,n.selectedMonth),class:"p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",title:"Delete payment"},[de(Oe(u_),{size:16})],8,q1)):(ge(),Re("span",H1,"No payment"))])]))),128))])])])),f[6]||(f[6]=I("div",{class:"mt-6 text-sm text-gray-600"},[I("p",null,"* Only months after the referral start date are available for payment tracking")],-1))]))}},Rf={__name:"MessageBanner",props:{message:String,type:{type:String,default:"success"}},emits:["close"],setup(n){return(e,t)=>n.message?(ge(),Re("div",{key:0,class:Er(["px-4 py-3 rounded-lg mb-6 flex items-center justify-between",n.type==="success"?"bg-green-50 border border-green-200 text-green-600":"bg-red-50 border border-red-200 text-red-600"])},[I("span",null,Se(n.message),1),I("button",{onClick:t[0]||(t[0]=r=>e.$emit("close")),class:"ml-4 text-current hover:opacity-70"},[de(Oe(CR),{size:16})])],2)):oa("",!0)}},W1={class:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6"},K1={class:"max-w-7xl mx-auto"},G1={class:"bg-white rounded-2xl shadow-xl p-8 mb-8"},Q1={class:"flex justify-between items-center"},Y1=["disabled"],J1={__name:"ReferralManagementApp",setup(n){const e=Xe([]),t=Xe({}),r=Xe(!1),s=Xe(!1),i=Xe(null),o=Xe(()=>{const Y=new Date;return`${Y.getFullYear()}-${String(Y.getMonth()+1).padStart(2,"0")}`}),l=si({customerName:"",monthlyValue:"",status:"Active",startDate:""}),c=si({customerId:"",month:"",amount:"",paymentStatus:"paid",invoiceStatus:!1}),h=Xe(""),f=Xe(""),p=Xe(!0);let g=null,R=null;ra(()=>{g=KR(Y=>{e.value=Y,p.value=!1}),R=XR(Y=>{t.value=Y})}),Ec(()=>{g&&g(),R&&R()});const k=()=>{Object.assign(l,{customerName:"",monthlyValue:"",status:"Active",startDate:""}),r.value=!1,i.value=null,h.value="",f.value=""},N=()=>{Object.assign(c,{customerId:"",month:"",amount:"",paymentStatus:"paid",invoiceStatus:!1}),s.value=!1,h.value="",f.value=""},M=async()=>{if(!l.customerName||!l.monthlyValue||!l.startDate){f.value="Please fill in all required fields";return}try{p.value=!0;const Y={customerName:l.customerName,monthlyValue:parseFloat(l.monthlyValue),status:l.status,startDate:l.startDate};i.value?(await zR(i.value.id,Y),h.value="Referral updated successfully!"):(await HR(Y),h.value="Referral added successfully!"),k()}catch(Y){console.error("Error saving referral:",Y),f.value="Failed to save referral: "+Y.message}finally{p.value=!1}},Q=async()=>{if(h.value="",f.value="",!c.customerId||!c.month||!c.amount){f.value="Please fill in all required fields";return}const Y=e.value.find(q=>q.id===c.customerId);if(!Y){f.value="Customer not found";return}try{p.value=!0,await GR(c),h.value=`Payment added successfully for ${Y.customerName}!`,setTimeout(()=>{N()},2e3)}catch(q){console.error("Error adding payment:",q),f.value="Failed to add payment: "+q.message}finally{p.value=!1}},J=Y=>{i.value=Y,Object.assign(l,{customerName:Y.customerName,monthlyValue:Y.monthlyValue.toString(),status:Y.status,startDate:Y.startDate}),r.value=!0},X=async Y=>{try{p.value=!0,await WR(Y),h.value="Referral deleted successfully"}catch(q){console.error("Error deleting referral:",q),f.value="Failed to delete referral: "+q.message}finally{p.value=!1}},W=async(Y,q)=>{try{p.value=!0,await JR(Y,q),h.value="Payment deleted successfully"}catch(Z){console.error("Error deleting payment:",Z),f.value="Failed to delete payment: "+Z.message}finally{p.value=!1}},ye=async(Y,q,Z)=>{try{await QR(Y,q,Z)}catch(ve){console.error("Error updating payment status:",ve),f.value="Failed to update payment status"}},we=async(Y,q,Z)=>{try{await YR(Y,q,Z)}catch(ve){console.error("Error updating invoice status:",ve),f.value="Failed to update invoice status"}},b=(Y,q)=>{const ve=(t.value[Y]||[]).find(Ke=>Ke.month===q);return(ve==null?void 0:ve.status)||"pending"},_=(Y,q)=>{const ve=(t.value[Y]||[]).find(Ke=>Ke.month===q);return(ve==null?void 0:ve.isInvoiced)||!1},E=(Y,q)=>{const ve=(t.value[Y]||[]).find(Ke=>Ke.month===q);return(ve==null?void 0:ve.amount)||null},T=(Y,q)=>{const Z=new Date(Y.startDate);return new Date(q+"-01")>=Z},A=()=>{const Y=[],q=new Date;for(let Z=5;Z>=0;Z--){const ve=new Date(q.getFullYear(),q.getMonth()-Z,1),Ke=`${ve.getFullYear()}-${String(ve.getMonth()+1).padStart(2,"0")}`,Et=ve.toLocaleDateString("en-US",{month:"short",year:"numeric"});Y.push({key:Ke,name:Et})}return Y},P=()=>{const q=e.value.filter(pe=>pe.status==="Active").map(pe=>({customer:pe.customerName,value:pe.monthlyValue,status:b(pe.id,o.value),invoiced:_(pe.id,o.value)})),Z=q.reduce((pe,Kt)=>pe+Kt.value,0),ve=q.filter(pe=>pe.status==="paid").reduce((pe,Kt)=>pe+Kt.value,0),Ke=q.filter(pe=>pe.status==="pending").reduce((pe,Kt)=>pe+Kt.value,0);let Et=0,Le=0;return e.value.forEach(pe=>{(t.value[pe.id]||[]).forEach(kt=>{kt.status==="paid"&&(kt.isInvoiced?Et+=kt.amount:Le+=kt.amount)})}),{totalExpected:Z,totalReceived:ve,totalPending:Ke,currentMonthPayments:q,totalInvoiced:Et,totalToBeInvoiced:Le}},v=Qs(()=>e.value.filter(Y=>Y.status==="Active").reduce((Y,q)=>Y+q.monthlyValue,0)),ft=Qs(()=>e.value.filter(Y=>Y.status==="Active").length),Wt=Qs(()=>P());return(Y,q)=>(ge(),Re("div",W1,[I("div",K1,[I("div",G1,[I("div",Q1,[q[8]||(q[8]=I("div",null,[I("h1",{class:"text-4xl font-bold text-gray-900 mb-2"},"Referral Management"),I("p",{class:"text-gray-600"},"Firebase-powered referral management with real-time sync")],-1)),I("button",{onClick:q[0]||(q[0]=Z=>r.value=!0),class:"bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl",disabled:p.value},[de(Oe(vR),{size:20}),q[7]||(q[7]=Ic(" Add Referral "))],8,Y1)])]),de(OS,{totalMonthlyValue:v.value,activeReferrals:ft.value,paymentStats:Wt.value},null,8,["totalMonthlyValue","activeReferrals","paymentStats"]),de(Rf,{message:h.value,type:"success",onClose:q[1]||(q[1]=Z=>h.value="")},null,8,["message"]),de(Rf,{message:f.value,type:"error",onClose:q[2]||(q[2]=Z=>f.value="")},null,8,["message"]),de(s1,{showAddPaymentForm:s.value,paymentFormData:c,"onUpdate:paymentFormData":q[3]||(q[3]=Z=>c=Z),onAddPayment:Q,onResetForm:N,referrals:e.value,monthsArray:A(),loading:p.value},null,8,["showAddPaymentForm","paymentFormData","referrals","monthsArray","loading"]),de(zS,{showAddForm:r.value,editingReferral:i.value,formData:l,"onUpdate:formData":q[4]||(q[4]=Z=>l=Z),onSubmit:M,onResetForm:k,loading:p.value},null,8,["showAddForm","editingReferral","formData","loading"]),de(I1,{referrals:e.value,onEdit:J,onDelete:X,onShowAddPaymentForm:q[5]||(q[5]=Z=>s.value=!0),loading:p.value},null,8,["referrals","loading"]),de(z1,{referrals:e.value,payments:t.value,selectedMonth:o.value,"onUpdate:selectedMonth":q[6]||(q[6]=Z=>o.value=Z),monthsArray:A(),getPaymentStatus:b,getInvoiceStatus:_,getPaymentAmount:E,isPaymentValidForMonth:T,onUpdatePaymentStatus:ye,onUpdateInvoiceStatus:we,onDeletePayment:W,loading:p.value},null,8,["referrals","payments","selectedMonth","monthsArray","loading"])])]))}},X1={class:"bg-white shadow-sm border-b"},Z1={class:"max-w-7xl mx-auto px-6 py-4"},eP={class:"flex justify-between items-center"},tP={class:"flex items-center space-x-3"},nP={class:"font-medium text-gray-900"},rP={class:"p-8"},sP={__name:"Dashboard",setup(n){const{currentUser:e,logout:t}=Tu(),r=async()=>{try{await t()}catch(s){console.error("Failed to log out:",s)}};return(s,i)=>{var o;return ge(),Re("div",null,[I("div",X1,[I("div",Z1,[I("div",eP,[I("div",tP,[i[0]||(i[0]=I("span",{class:"text-gray-600"},"Welcome,",-1)),I("span",nP,Se((o=Oe(e))==null?void 0:o.email),1)]),I("button",{onClick:r,class:"flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"},[de(Oe(bR),{size:18}),i[1]||(i[1]=I("span",null,"Sign Out",-1))])])])]),I("div",rP,[de(J1)])])}}},iP={class:"flex items-center justify-center min-h-screen"},oP={__name:"LoadingSpinner",setup(n){return(e,t)=>(ge(),Re("div",iP,t[0]||(t[0]=[I("div",{class:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"},null,-1)])))}},aP={class:"App"},lP={__name:"App",setup(n){const{currentUser:e,loading:t,initAuth:r}=Tu();return ra(()=>{r()}),(s,i)=>(ge(),Re("div",aP,[Oe(t)?(ge(),Gr(oP,{key:0})):Oe(e)?(ge(),Gr(sP,{key:2})):(ge(),Gr(qR,{key:1}))]))}},cP=rE(lP);cP.mount("#app");
