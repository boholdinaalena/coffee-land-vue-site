(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Gl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ve={},$r=[],Wt=()=>{},_v=()=>!1,ma=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ql=t=>t.startsWith("onUpdate:"),We=Object.assign,Jl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yv=Object.prototype.hasOwnProperty,ie=(t,e)=>yv.call(t,e),G=Array.isArray,jr=t=>ga(t)==="[object Map]",gp=t=>ga(t)==="[object Set]",X=t=>typeof t=="function",xe=t=>typeof t=="string",ds=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",_p=t=>(Ie(t)||X(t))&&X(t.then)&&X(t.catch),yp=Object.prototype.toString,ga=t=>yp.call(t),vv=t=>ga(t).slice(8,-1),vp=t=>ga(t)==="[object Object]",Yl=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,To=Gl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_a=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ev=/-(\w)/g,Xt=_a(t=>t.replace(Ev,(e,n)=>n?n.toUpperCase():"")),Tv=/\B([A-Z])/g,ps=_a(t=>t.replace(Tv,"-$1").toLowerCase()),ya=_a(t=>t.charAt(0).toUpperCase()+t.slice(1)),hc=_a(t=>t?`on${ya(t)}`:""),fr=(t,e)=>!Object.is(t,e),wo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Fo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},zc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Lh;const Wc=()=>Lh||(Lh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xl(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=xe(r)?Rv(r):Xl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(xe(t)||Ie(t))return t}const wv=/;(?![^(]*\))/g,Iv=/:([^]+)/,Av=/\/\*[^]*?\*\//g;function Rv(t){const e={};return t.replace(Av,"").split(wv).forEach(n=>{if(n){const r=n.split(Iv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Zl(t){let e="";if(xe(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const r=Zl(t[n]);r&&(e+=r+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sv=Gl(bv);function Ep(t){return!!t||t===""}const De=t=>xe(t)?t:t==null?"":G(t)||Ie(t)&&(t.toString===yp||!X(t.toString))?JSON.stringify(t,Tp,2):String(t),Tp=(t,e)=>e&&e.__v_isRef?Tp(t,e.value):jr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[fc(r,i)+" =>"]=s,n),{})}:gp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>fc(n))}:ds(e)?fc(e):Ie(e)&&!G(e)&&!vp(e)?String(e):e,fc=(t,e="")=>{var n;return ds(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let bt;class wp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Pv(t){return new wp(t)}function Cv(t,e=bt){e&&e.active&&e.effects.push(t)}function Ov(){return bt}const eu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ip=t=>(t.w&$n)>0,Ap=t=>(t.n&$n)>0,kv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=$n},Nv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ip(s)&&!Ap(s)?s.delete(t):e[n++]=s,s.w&=~$n,s.n&=~$n}e.length=n}},Kc=new WeakMap;let Us=0,$n=1;const Gc=30;let St;const cr=Symbol(""),Qc=Symbol("");class tu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Cv(this,r)}run(){if(!this.active)return this.fn();let e=St,n=xn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=St,St=this,xn=!0,$n=1<<++Us,Us<=Gc?kv(this):Fh(this),this.fn()}finally{Us<=Gc&&Nv(this),$n=1<<--Us,St=this.parent,xn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){St===this?this.deferStop=!0:this.active&&(Fh(this),this.onStop&&this.onStop(),this.active=!1)}}function Fh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let xn=!0;const Rp=[];function ms(){Rp.push(xn),xn=!1}function gs(){const t=Rp.pop();xn=t===void 0?!0:t}function lt(t,e,n){if(xn&&St){let r=Kc.get(t);r||Kc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=eu()),bp(s)}}function bp(t,e){let n=!1;Us<=Gc?Ap(t)||(t.n|=$n,n=!Ip(t)):n=!t.has(St),n&&(t.add(St),St.deps.push(t))}function un(t,e,n,r,s,i){const o=Kc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!ds(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Yl(n)&&a.push(o.get("length")):(a.push(o.get(cr)),jr(t)&&a.push(o.get(Qc)));break;case"delete":G(t)||(a.push(o.get(cr)),jr(t)&&a.push(o.get(Qc)));break;case"set":jr(t)&&a.push(o.get(cr));break}if(a.length===1)a[0]&&Jc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Jc(eu(c))}}function Jc(t,e){const n=G(t)?t:[...t];for(const r of n)r.computed&&Uh(r);for(const r of n)r.computed||Uh(r)}function Uh(t,e){(t!==St||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Dv=Gl("__proto__,__v_isRef,__isVue"),Sp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ds)),Bh=Vv();function Vv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ce(this);for(let i=0,o=this.length;i<o;i++)lt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ce)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ms();const r=ce(this)[e].apply(this,n);return gs(),r}}),t}function xv(t){const e=ce(this);return lt(e,"has",t),e.hasOwnProperty(t)}class Pp{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Gv:Np:i?kp:Op).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=G(e);if(!s){if(o&&ie(Bh,n))return Reflect.get(Bh,n,r);if(n==="hasOwnProperty")return xv}const a=Reflect.get(e,n,r);return(ds(n)?Sp.has(n):Dv(n))||(s||lt(e,"get",n),i)?a:ut(a)?o&&Yl(n)?a:a.value:Ie(a)?s?Vp(a):Ni(a):a}}class Cp extends Pp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const c=Xr(i);if(!Uo(r)&&!Xr(r)&&(i=ce(i),r=ce(r)),!G(e)&&ut(i)&&!ut(r))return c?!1:(i.value=r,!0)}const o=G(e)&&Yl(n)?Number(n)<e.length:ie(e,n),a=Reflect.set(e,n,r,s);return e===ce(s)&&(o?fr(r,i)&&un(e,"set",n,r):un(e,"add",n,r)),a}deleteProperty(e,n){const r=ie(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&un(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ds(n)||!Sp.has(n))&&lt(e,"has",n),r}ownKeys(e){return lt(e,"iterate",G(e)?"length":cr),Reflect.ownKeys(e)}}class Mv extends Pp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Lv=new Cp,Fv=new Mv,Uv=new Cp(!0),nu=t=>t,va=t=>Reflect.getPrototypeOf(t);function no(t,e,n=!1,r=!1){t=t.__v_raw;const s=ce(t),i=ce(e);n||(fr(e,i)&&lt(s,"get",e),lt(s,"get",i));const{has:o}=va(s),a=r?nu:n?iu:ai;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ro(t,e=!1){const n=this.__v_raw,r=ce(n),s=ce(t);return e||(fr(t,s)&&lt(r,"has",t),lt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function so(t,e=!1){return t=t.__v_raw,!e&&lt(ce(t),"iterate",cr),Reflect.get(t,"size",t)}function $h(t){t=ce(t);const e=ce(this);return va(e).has.call(e,t)||(e.add(t),un(e,"add",t,t)),this}function jh(t,e){e=ce(e);const n=ce(this),{has:r,get:s}=va(n);let i=r.call(n,t);i||(t=ce(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?fr(e,o)&&un(n,"set",t,e):un(n,"add",t,e),this}function qh(t){const e=ce(this),{has:n,get:r}=va(e);let s=n.call(e,t);s||(t=ce(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&un(e,"delete",t,void 0),i}function Hh(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&un(t,"clear",void 0,void 0),n}function io(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ce(o),c=e?nu:t?iu:ai;return!t&&lt(a,"iterate",cr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function oo(t,e,n){return function(...r){const s=this.__v_raw,i=ce(s),o=jr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?nu:e?iu:ai;return!e&&lt(i,"iterate",c?Qc:cr),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function An(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Bv(){const t={get(i){return no(this,i)},get size(){return so(this)},has:ro,add:$h,set:jh,delete:qh,clear:Hh,forEach:io(!1,!1)},e={get(i){return no(this,i,!1,!0)},get size(){return so(this)},has:ro,add:$h,set:jh,delete:qh,clear:Hh,forEach:io(!1,!0)},n={get(i){return no(this,i,!0)},get size(){return so(this,!0)},has(i){return ro.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:io(!0,!1)},r={get(i){return no(this,i,!0,!0)},get size(){return so(this,!0)},has(i){return ro.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:io(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=oo(i,!1,!1),n[i]=oo(i,!0,!1),e[i]=oo(i,!1,!0),r[i]=oo(i,!0,!0)}),[t,n,e,r]}const[$v,jv,qv,Hv]=Bv();function ru(t,e){const n=e?t?Hv:qv:t?jv:$v;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ie(n,s)&&s in r?n:r,s,i)}const zv={get:ru(!1,!1)},Wv={get:ru(!1,!0)},Kv={get:ru(!0,!1)},Op=new WeakMap,kp=new WeakMap,Np=new WeakMap,Gv=new WeakMap;function Qv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jv(t){return t.__v_skip||!Object.isExtensible(t)?0:Qv(vv(t))}function Ni(t){return Xr(t)?t:su(t,!1,Lv,zv,Op)}function Dp(t){return su(t,!1,Uv,Wv,kp)}function Vp(t){return su(t,!0,Fv,Kv,Np)}function su(t,e,n,r,s){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Jv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function qr(t){return Xr(t)?qr(t.__v_raw):!!(t&&t.__v_isReactive)}function Xr(t){return!!(t&&t.__v_isReadonly)}function Uo(t){return!!(t&&t.__v_isShallow)}function xp(t){return qr(t)||Xr(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function Mp(t){return Fo(t,"__v_skip",!0),t}const ai=t=>Ie(t)?Ni(t):t,iu=t=>Ie(t)?Vp(t):t;function Lp(t){xn&&St&&(t=ce(t),bp(t.dep||(t.dep=eu())))}function Fp(t,e){t=ce(t);const n=t.dep;n&&Jc(n)}function ut(t){return!!(t&&t.__v_isRef===!0)}function Yc(t){return Up(t,!1)}function Yv(t){return Up(t,!0)}function Up(t,e){return ut(t)?t:new Xv(t,e)}class Xv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:ai(e)}get value(){return Lp(this),this._value}set value(e){const n=this.__v_isShallow||Uo(e)||Xr(e);e=n?e:ce(e),fr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ai(e),Fp(this))}}function Hr(t){return ut(t)?t.value:t}const Zv={get:(t,e,n)=>Hr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ut(s)&&!ut(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Bp(t){return qr(t)?t:new Proxy(t,Zv)}class eE{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new tu(e,()=>{this._dirty||(this._dirty=!0,Fp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ce(this);return Lp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function tE(t,e,n=!1){let r,s;const i=X(t);return i?(r=t,s=Wt):(r=t.get,s=t.set),new eE(r,s,i||!s,n)}function Mn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ea(i,e,n)}return s}function Ot(t,e,n,r){if(X(t)){const i=Mn(t,e,n,r);return i&&_p(i)&&i.catch(o=>{Ea(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ot(t[i],e,n,r));return s}function Ea(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Mn(c,null,10,[t,o,a]);return}}nE(t,n,s,r)}function nE(t,e,n,r=!0){console.error(t)}let ci=!1,Xc=!1;const Ye=[];let $t=0;const zr=[];let sn=null,er=0;const $p=Promise.resolve();let ou=null;function jp(t){const e=ou||$p;return t?e.then(this?t.bind(this):t):e}function rE(t){let e=$t+1,n=Ye.length;for(;e<n;){const r=e+n>>>1,s=Ye[r],i=li(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function au(t){(!Ye.length||!Ye.includes(t,ci&&t.allowRecurse?$t+1:$t))&&(t.id==null?Ye.push(t):Ye.splice(rE(t.id),0,t),qp())}function qp(){!ci&&!Xc&&(Xc=!0,ou=$p.then(zp))}function sE(t){const e=Ye.indexOf(t);e>$t&&Ye.splice(e,1)}function iE(t){G(t)?zr.push(...t):(!sn||!sn.includes(t,t.allowRecurse?er+1:er))&&zr.push(t),qp()}function zh(t,e,n=ci?$t+1:0){for(;n<Ye.length;n++){const r=Ye[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Ye.splice(n,1),n--,r()}}}function Hp(t){if(zr.length){const e=[...new Set(zr)];if(zr.length=0,sn){sn.push(...e);return}for(sn=e,sn.sort((n,r)=>li(n)-li(r)),er=0;er<sn.length;er++)sn[er]();sn=null,er=0}}const li=t=>t.id==null?1/0:t.id,oE=(t,e)=>{const n=li(t)-li(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function zp(t){Xc=!1,ci=!0,Ye.sort(oE);try{for($t=0;$t<Ye.length;$t++){const e=Ye[$t];e&&e.active!==!1&&Mn(e,null,14)}}finally{$t=0,Ye.length=0,Hp(),ci=!1,ou=null,(Ye.length||zr.length)&&zp()}}function aE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ve;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||ve;f&&(s=n.map(p=>xe(p)?p.trim():p)),h&&(s=n.map(zc))}let a,c=r[a=hc(e)]||r[a=hc(Xt(e))];!c&&i&&(c=r[a=hc(ps(e))]),c&&Ot(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ot(l,t,6,s)}}function Wp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=Wp(l,e,!0);u&&(a=!0,We(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ie(t)&&r.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):We(o,i),Ie(t)&&r.set(t,o),o)}function Ta(t,e){return!t||!ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,ps(e))||ie(t,e))}let wt=null,Kp=null;function Bo(t){const e=wt;return wt=t,Kp=t&&t.type.__scopeId||null,e}function On(t,e=wt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&nf(-1);const i=Bo(e);let o;try{o=t(...s)}finally{Bo(i),r._d&&nf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function dc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:_,inheritAttrs:y}=t;let w,P;const k=Bo(t);try{if(n.shapeFlag&4){const L=s||r,ge=L;w=Bt(u.call(ge,L,h,i,p,f,_)),P=c}else{const L=e;w=Bt(L.length>1?L(i,{attrs:c,slots:a,emit:l}):L(i,null)),P=e.props?c:cE(c)}}catch(L){Qs.length=0,Ea(L,t,1),w=be(dr)}let $=w;if(P&&y!==!1){const L=Object.keys(P),{shapeFlag:ge}=$;L.length&&ge&7&&(o&&L.some(Ql)&&(P=lE(P,o)),$=Zr($,P))}return n.dirs&&($=Zr($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),w=$,Bo(k),w}const cE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ma(n))&&((e||(e={}))[n]=t[n]);return e},lE=(t,e)=>{const n={};for(const r in t)(!Ql(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function uE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Wh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Ta(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Wh(r,o,l):!0:!!o;return!1}function Wh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ta(n,i))return!0}return!1}function hE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Gp="components";function pn(t,e){return dE(Gp,t,!0,e)||t}const fE=Symbol.for("v-ndc");function dE(t,e,n=!0,r=!1){const s=wt||je;if(s){const i=s.type;if(t===Gp){const a=iT(i,!1);if(a&&(a===e||a===Xt(e)||a===ya(Xt(e))))return i}const o=Kh(s[t]||i[t],e)||Kh(s.appContext[t],e);return!o&&r?i:o}}function Kh(t,e){return t&&(t[e]||t[Xt(e)]||t[ya(Xt(e))])}const pE=t=>t.__isSuspense;function mE(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):iE(t)}const ao={};function Wr(t,e,n){return Qp(t,e,n)}function Qp(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ve){var a;const c=Ov()===((a=je)==null?void 0:a.scope)?je:null;let l,u=!1,h=!1;if(ut(t)?(l=()=>t.value,u=Uo(t)):qr(t)?(l=()=>t,r=!0):G(t)?(h=!0,u=t.some(L=>qr(L)||Uo(L)),l=()=>t.map(L=>{if(ut(L))return L.value;if(qr(L))return nr(L);if(X(L))return Mn(L,c,2)})):X(t)?e?l=()=>Mn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),Ot(t,c,3,[p])}:l=Wt,e&&r){const L=l;l=()=>nr(L())}let f,p=L=>{f=k.onStop=()=>{Mn(L,c,4),f=k.onStop=void 0}},_;if(hi)if(p=Wt,e?n&&Ot(e,c,3,[l(),h?[]:void 0,p]):l(),s==="sync"){const L=cT();_=L.__watcherHandles||(L.__watcherHandles=[])}else return Wt;let y=h?new Array(t.length).fill(ao):ao;const w=()=>{if(k.active)if(e){const L=k.run();(r||u||(h?L.some((ge,pe)=>fr(ge,y[pe])):fr(L,y)))&&(f&&f(),Ot(e,c,3,[L,y===ao?void 0:h&&y[0]===ao?[]:y,p]),y=L)}else k.run()};w.allowRecurse=!!e;let P;s==="sync"?P=w:s==="post"?P=()=>ot(w,c&&c.suspense):(w.pre=!0,c&&(w.id=c.uid),P=()=>au(w));const k=new tu(l,P);e?n?w():y=k.run():s==="post"?ot(k.run.bind(k),c&&c.suspense):k.run();const $=()=>{k.stop(),c&&c.scope&&Jl(c.scope.effects,k)};return _&&_.push($),$}function gE(t,e,n){const r=this.proxy,s=xe(t)?t.includes(".")?Jp(r,t):()=>r[t]:t.bind(r,r);let i;X(e)?i=e:(i=e.handler,n=e);const o=je;es(this);const a=Qp(s,i.bind(r),n);return o?es(o):lr(),a}function Jp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function nr(t,e){if(!Ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ut(t))nr(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)nr(t[n],e);else if(gp(t)||jr(t))t.forEach(n=>{nr(n,e)});else if(vp(t))for(const n in t)nr(t[n],e);return t}function co(t,e){const n=wt;if(n===null)return t;const r=Ra(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ve]=e[i];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&nr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Yn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ms(),Ot(c,n,8,[t.el,a,t,e]),gs())}}/*! #__NO_SIDE_EFFECTS__ */function Yp(t,e){return X(t)?We({name:t.name},e,{setup:t}):t}const Io=t=>!!t.type.__asyncLoader,Xp=t=>t.type.__isKeepAlive;function _E(t,e){Zp(t,"a",e)}function yE(t,e){Zp(t,"da",e)}function Zp(t,e,n=je){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(wa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Xp(s.parent.vnode)&&vE(r,e,n,s),s=s.parent}}function vE(t,e,n,r){const s=wa(e,t,r,!0);em(()=>{Jl(r[e],s)},n)}function wa(t,e,n=je,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ms(),es(n);const a=Ot(e,n,t,o);return lr(),gs(),a});return r?s.unshift(i):s.push(i),i}}const En=t=>(e,n=je)=>(!hi||t==="sp")&&wa(t,(...r)=>e(...r),n),EE=En("bm"),TE=En("m"),wE=En("bu"),IE=En("u"),AE=En("bum"),em=En("um"),RE=En("sp"),bE=En("rtg"),SE=En("rtc");function PE(t,e=je){wa("ec",t,e)}function $o(t,e,n,r){let s;const i=n&&n[r];if(G(t)||xe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ie(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Zc=t=>t?hm(t)?Ra(t)||t.proxy:Zc(t.parent):null,Gs=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Zc(t.parent),$root:t=>Zc(t.root),$emit:t=>t.emit,$options:t=>cu(t),$forceUpdate:t=>t.f||(t.f=()=>au(t.update)),$nextTick:t=>t.n||(t.n=jp.bind(t.proxy)),$watch:t=>gE.bind(t)}),pc=(t,e)=>t!==ve&&!t.__isScriptSetup&&ie(t,e),CE={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(pc(r,e))return o[e]=1,r[e];if(s!==ve&&ie(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ie(l,e))return o[e]=3,i[e];if(n!==ve&&ie(n,e))return o[e]=4,n[e];el&&(o[e]=0)}}const u=Gs[e];let h,f;if(u)return e==="$attrs"&&lt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&ie(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ie(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return pc(s,e)?(s[e]=n,!0):r!==ve&&ie(r,e)?(r[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ve&&ie(t,o)||pc(e,o)||(a=i[0])&&ie(a,o)||ie(r,o)||ie(Gs,o)||ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Gh(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let el=!0;function OE(t){const e=cu(t),n=t.proxy,r=t.ctx;el=!1,e.beforeCreate&&Qh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:_,activated:y,deactivated:w,beforeDestroy:P,beforeUnmount:k,destroyed:$,unmounted:L,render:ge,renderTracked:pe,renderTriggered:Ne,errorCaptured:dt,serverPrefetch:yt,expose:nt,inheritAttrs:wn,components:Jn,directives:Mt,filters:Os}=e;if(l&&kE(l,r,null),o)for(const me in o){const le=o[me];X(le)&&(r[me]=le.bind(n))}if(s){const me=s.call(n,n);Ie(me)&&(t.data=Ni(me))}if(el=!0,i)for(const me in i){const le=i[me],tn=X(le)?le.bind(n,n):X(le.get)?le.get.bind(n,n):Wt,In=!X(le)&&X(le.set)?le.set.bind(n):Wt,Lt=vt({get:tn,set:In});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:it=>Lt.value=it})}if(a)for(const me in a)tm(a[me],r,n,me);if(c){const me=X(c)?c.call(n):c;Reflect.ownKeys(me).forEach(le=>{Ao(le,me[le])})}u&&Qh(u,t,"c");function Me(me,le){G(le)?le.forEach(tn=>me(tn.bind(n))):le&&me(le.bind(n))}if(Me(EE,h),Me(TE,f),Me(wE,p),Me(IE,_),Me(_E,y),Me(yE,w),Me(PE,dt),Me(SE,pe),Me(bE,Ne),Me(AE,k),Me(em,L),Me(RE,yt),G(nt))if(nt.length){const me=t.exposed||(t.exposed={});nt.forEach(le=>{Object.defineProperty(me,le,{get:()=>n[le],set:tn=>n[le]=tn})})}else t.exposed||(t.exposed={});ge&&t.render===Wt&&(t.render=ge),wn!=null&&(t.inheritAttrs=wn),Jn&&(t.components=Jn),Mt&&(t.directives=Mt)}function kE(t,e,n=Wt){G(t)&&(t=tl(t));for(const r in t){const s=t[r];let i;Ie(s)?"default"in s?i=Kt(s.from||r,s.default,!0):i=Kt(s.from||r):i=Kt(s),ut(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Qh(t,e,n){Ot(G(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function tm(t,e,n,r){const s=r.includes(".")?Jp(n,r):()=>n[r];if(xe(t)){const i=e[t];X(i)&&Wr(s,i)}else if(X(t))Wr(s,t.bind(n));else if(Ie(t))if(G(t))t.forEach(i=>tm(i,e,n,r));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&Wr(s,i,t)}}function cu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>jo(c,l,o,!0)),jo(c,e,o)),Ie(e)&&i.set(e,c),c}function jo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&jo(t,i,n,!0),s&&s.forEach(o=>jo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=NE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const NE={data:Jh,props:Yh,emits:Yh,methods:Bs,computed:Bs,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:Bs,directives:Bs,watch:VE,provide:Jh,inject:DE};function Jh(t,e){return e?t?function(){return We(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function DE(t,e){return Bs(tl(t),tl(e))}function tl(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Bs(t,e){return t?We(Object.create(null),t,e):e}function Yh(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:We(Object.create(null),Gh(t),Gh(e??{})):e}function VE(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const r in e)n[r]=rt(t[r],e[r]);return n}function nm(){return{app:null,config:{isNativeTag:_v,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xE=0;function ME(t,e){return function(r,s=null){X(r)||(r=We({},r)),s!=null&&!Ie(s)&&(s=null);const i=nm(),o=new WeakSet;let a=!1;const c=i.app={_uid:xE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:lT,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=be(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ra(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){qo=c;try{return l()}finally{qo=null}}};return c}}let qo=null;function Ao(t,e){if(je){let n=je.provides;const r=je.parent&&je.parent.provides;r===n&&(n=je.provides=Object.create(r)),n[t]=e}}function Kt(t,e,n=!1){const r=je||wt;if(r||qo){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:qo._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&X(e)?e.call(r&&r.proxy):e}}function LE(t,e,n,r=!1){const s={},i={};Fo(i,Aa,1),t.propsDefaults=Object.create(null),rm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Dp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function FE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ce(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ta(t.emitsOptions,f))continue;const p=e[f];if(c)if(ie(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const _=Xt(f);s[_]=nl(c,a,_,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{rm(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=ps(h))===h||!ie(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=nl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],l=!0)}l&&un(t,"set","$attrs")}function rm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(To(c))continue;const l=e[c];let u;s&&ie(s,u=Xt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ta(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ce(n),l=a||ve;for(let u=0;u<i.length;u++){const h=i[u];n[h]=nl(s,c,h,l[h],t,!ie(l,h))}}return o}function nl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&X(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(es(s),r=l[n]=c.call(null,e),lr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ps(n))&&(r=!0))}return r}function sm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[f,p]=sm(h,e,!0);We(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ie(t)&&r.set(t,$r),$r;if(G(i))for(let u=0;u<i.length;u++){const h=Xt(i[u]);Xh(h)&&(o[h]=ve)}else if(i)for(const u in i){const h=Xt(u);if(Xh(h)){const f=i[u],p=o[h]=G(f)||X(f)?{type:f}:We({},f);if(p){const _=tf(Boolean,p.type),y=tf(String,p.type);p[0]=_>-1,p[1]=y<0||_<y,(_>-1||ie(p,"default"))&&a.push(h)}}}const l=[o,a];return Ie(t)&&r.set(t,l),l}function Xh(t){return t[0]!=="$"}function Zh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ef(t,e){return Zh(t)===Zh(e)}function tf(t,e){return G(e)?e.findIndex(n=>ef(n,t)):X(e)&&ef(e,t)?0:-1}const im=t=>t[0]==="_"||t==="$stable",lu=t=>G(t)?t.map(Bt):[Bt(t)],UE=(t,e,n)=>{if(e._n)return e;const r=On((...s)=>lu(e(...s)),n);return r._c=!1,r},om=(t,e,n)=>{const r=t._ctx;for(const s in t){if(im(s))continue;const i=t[s];if(X(i))e[s]=UE(s,i,r);else if(i!=null){const o=lu(i);e[s]=()=>o}}},am=(t,e)=>{const n=lu(e);t.slots.default=()=>n},BE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),Fo(e,"_",n)):om(e,t.slots={})}else t.slots={},e&&am(t,e);Fo(t.slots,Aa,1)},$E=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ve;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(We(s,e),!n&&a===1&&delete s._):(i=!e.$stable,om(e,s)),o=e}else e&&(am(t,e),o={default:1});if(i)for(const a in s)!im(a)&&o[a]==null&&delete s[a]};function rl(t,e,n,r,s=!1){if(G(t)){t.forEach((f,p)=>rl(f,e&&(G(e)?e[p]:e),n,r,s));return}if(Io(r)&&!s)return;const i=r.shapeFlag&4?Ra(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(xe(l)?(u[l]=null,ie(h,l)&&(h[l]=null)):ut(l)&&(l.value=null)),X(c))Mn(c,a,12,[o,u]);else{const f=xe(c),p=ut(c);if(f||p){const _=()=>{if(t.f){const y=f?ie(h,c)?h[c]:u[c]:c.value;s?G(y)&&Jl(y,i):G(y)?y.includes(i)||y.push(i):f?(u[c]=[i],ie(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ie(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,ot(_,n)):_()}}}const ot=mE;function jE(t){return qE(t)}function qE(t,e){const n=Wc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Wt,insertStaticContent:_}=t,y=(d,m,g,v=null,A=null,R=null,x=!1,O=null,N=!!m.dynamicChildren)=>{if(d===m)return;d&&!Ns(d,m)&&(v=T(d),it(d,A,R,!0),d=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:S,ref:H,shapeFlag:B}=m;switch(S){case Ia:w(d,m,g,v);break;case dr:P(d,m,g,v);break;case Ro:d==null&&k(m,g,v,x);break;case mt:Jn(d,m,g,v,A,R,x,O,N);break;default:B&1?ge(d,m,g,v,A,R,x,O,N):B&6?Mt(d,m,g,v,A,R,x,O,N):(B&64||B&128)&&S.process(d,m,g,v,A,R,x,O,N,D)}H!=null&&A&&rl(H,d&&d.ref,R,m||d,!m)},w=(d,m,g,v)=>{if(d==null)r(m.el=a(m.children),g,v);else{const A=m.el=d.el;m.children!==d.children&&l(A,m.children)}},P=(d,m,g,v)=>{d==null?r(m.el=c(m.children||""),g,v):m.el=d.el},k=(d,m,g,v)=>{[d.el,d.anchor]=_(d.children,m,g,v,d.el,d.anchor)},$=({el:d,anchor:m},g,v)=>{let A;for(;d&&d!==m;)A=f(d),r(d,g,v),d=A;r(m,g,v)},L=({el:d,anchor:m})=>{let g;for(;d&&d!==m;)g=f(d),s(d),d=g;s(m)},ge=(d,m,g,v,A,R,x,O,N)=>{x=x||m.type==="svg",d==null?pe(m,g,v,A,R,x,O,N):yt(d,m,A,R,x,O,N)},pe=(d,m,g,v,A,R,x,O)=>{let N,S;const{type:H,props:B,shapeFlag:z,transition:Y,dirs:ee}=d;if(N=d.el=o(d.type,R,B&&B.is,B),z&8?u(N,d.children):z&16&&dt(d.children,N,null,v,A,R&&H!=="foreignObject",x,O),ee&&Yn(d,null,v,"created"),Ne(N,d,d.scopeId,x,v),B){for(const de in B)de!=="value"&&!To(de)&&i(N,de,null,B[de],R,d.children,v,A,Ke);"value"in B&&i(N,"value",null,B.value),(S=B.onVnodeBeforeMount)&&Ut(S,v,d)}ee&&Yn(d,null,v,"beforeMount");const _e=HE(A,Y);_e&&Y.beforeEnter(N),r(N,m,g),((S=B&&B.onVnodeMounted)||_e||ee)&&ot(()=>{S&&Ut(S,v,d),_e&&Y.enter(N),ee&&Yn(d,null,v,"mounted")},A)},Ne=(d,m,g,v,A)=>{if(g&&p(d,g),v)for(let R=0;R<v.length;R++)p(d,v[R]);if(A){let R=A.subTree;if(m===R){const x=A.vnode;Ne(d,x,x.scopeId,x.slotScopeIds,A.parent)}}},dt=(d,m,g,v,A,R,x,O,N=0)=>{for(let S=N;S<d.length;S++){const H=d[S]=O?Pn(d[S]):Bt(d[S]);y(null,H,m,g,v,A,R,x,O)}},yt=(d,m,g,v,A,R,x)=>{const O=m.el=d.el;let{patchFlag:N,dynamicChildren:S,dirs:H}=m;N|=d.patchFlag&16;const B=d.props||ve,z=m.props||ve;let Y;g&&Xn(g,!1),(Y=z.onVnodeBeforeUpdate)&&Ut(Y,g,m,d),H&&Yn(m,d,g,"beforeUpdate"),g&&Xn(g,!0);const ee=A&&m.type!=="foreignObject";if(S?nt(d.dynamicChildren,S,O,g,v,ee,R):x||le(d,m,O,null,g,v,ee,R,!1),N>0){if(N&16)wn(O,m,B,z,g,v,A);else if(N&2&&B.class!==z.class&&i(O,"class",null,z.class,A),N&4&&i(O,"style",B.style,z.style,A),N&8){const _e=m.dynamicProps;for(let de=0;de<_e.length;de++){const Se=_e[de],Rt=B[Se],Cr=z[Se];(Cr!==Rt||Se==="value")&&i(O,Se,Rt,Cr,A,d.children,g,v,Ke)}}N&1&&d.children!==m.children&&u(O,m.children)}else!x&&S==null&&wn(O,m,B,z,g,v,A);((Y=z.onVnodeUpdated)||H)&&ot(()=>{Y&&Ut(Y,g,m,d),H&&Yn(m,d,g,"updated")},v)},nt=(d,m,g,v,A,R,x)=>{for(let O=0;O<m.length;O++){const N=d[O],S=m[O],H=N.el&&(N.type===mt||!Ns(N,S)||N.shapeFlag&70)?h(N.el):g;y(N,S,H,null,v,A,R,x,!0)}},wn=(d,m,g,v,A,R,x)=>{if(g!==v){if(g!==ve)for(const O in g)!To(O)&&!(O in v)&&i(d,O,g[O],null,x,m.children,A,R,Ke);for(const O in v){if(To(O))continue;const N=v[O],S=g[O];N!==S&&O!=="value"&&i(d,O,S,N,x,m.children,A,R,Ke)}"value"in v&&i(d,"value",g.value,v.value)}},Jn=(d,m,g,v,A,R,x,O,N)=>{const S=m.el=d?d.el:a(""),H=m.anchor=d?d.anchor:a("");let{patchFlag:B,dynamicChildren:z,slotScopeIds:Y}=m;Y&&(O=O?O.concat(Y):Y),d==null?(r(S,g,v),r(H,g,v),dt(m.children,g,H,A,R,x,O,N)):B>0&&B&64&&z&&d.dynamicChildren?(nt(d.dynamicChildren,z,g,A,R,x,O),(m.key!=null||A&&m===A.subTree)&&cm(d,m,!0)):le(d,m,g,H,A,R,x,O,N)},Mt=(d,m,g,v,A,R,x,O,N)=>{m.slotScopeIds=O,d==null?m.shapeFlag&512?A.ctx.activate(m,g,v,x,N):Os(m,g,v,A,R,x,N):br(d,m,N)},Os=(d,m,g,v,A,R,x)=>{const O=d.component=eT(d,v,A);if(Xp(d)&&(O.ctx.renderer=D),tT(O),O.asyncDep){if(A&&A.registerDep(O,Me),!d.el){const N=O.subTree=be(dr);P(null,N,m,g)}return}Me(O,d,m,g,A,R,x)},br=(d,m,g)=>{const v=m.component=d.component;if(uE(d,m,g))if(v.asyncDep&&!v.asyncResolved){me(v,m,g);return}else v.next=m,sE(v.update),v.update();else m.el=d.el,v.vnode=m},Me=(d,m,g,v,A,R,x)=>{const O=()=>{if(d.isMounted){let{next:H,bu:B,u:z,parent:Y,vnode:ee}=d,_e=H,de;Xn(d,!1),H?(H.el=ee.el,me(d,H,x)):H=ee,B&&wo(B),(de=H.props&&H.props.onVnodeBeforeUpdate)&&Ut(de,Y,H,ee),Xn(d,!0);const Se=dc(d),Rt=d.subTree;d.subTree=Se,y(Rt,Se,h(Rt.el),T(Rt),d,A,R),H.el=Se.el,_e===null&&hE(d,Se.el),z&&ot(z,A),(de=H.props&&H.props.onVnodeUpdated)&&ot(()=>Ut(de,Y,H,ee),A)}else{let H;const{el:B,props:z}=m,{bm:Y,m:ee,parent:_e}=d,de=Io(m);if(Xn(d,!1),Y&&wo(Y),!de&&(H=z&&z.onVnodeBeforeMount)&&Ut(H,_e,m),Xn(d,!0),B&&ue){const Se=()=>{d.subTree=dc(d),ue(B,d.subTree,d,A,null)};de?m.type.__asyncLoader().then(()=>!d.isUnmounted&&Se()):Se()}else{const Se=d.subTree=dc(d);y(null,Se,g,v,d,A,R),m.el=Se.el}if(ee&&ot(ee,A),!de&&(H=z&&z.onVnodeMounted)){const Se=m;ot(()=>Ut(H,_e,Se),A)}(m.shapeFlag&256||_e&&Io(_e.vnode)&&_e.vnode.shapeFlag&256)&&d.a&&ot(d.a,A),d.isMounted=!0,m=g=v=null}},N=d.effect=new tu(O,()=>au(S),d.scope),S=d.update=()=>N.run();S.id=d.uid,Xn(d,!0),S()},me=(d,m,g)=>{m.component=d;const v=d.vnode.props;d.vnode=m,d.next=null,FE(d,m.props,v,g),$E(d,m.children,g),ms(),zh(d),gs()},le=(d,m,g,v,A,R,x,O,N=!1)=>{const S=d&&d.children,H=d?d.shapeFlag:0,B=m.children,{patchFlag:z,shapeFlag:Y}=m;if(z>0){if(z&128){In(S,B,g,v,A,R,x,O,N);return}else if(z&256){tn(S,B,g,v,A,R,x,O,N);return}}Y&8?(H&16&&Ke(S,A,R),B!==S&&u(g,B)):H&16?Y&16?In(S,B,g,v,A,R,x,O,N):Ke(S,A,R,!0):(H&8&&u(g,""),Y&16&&dt(B,g,v,A,R,x,O,N))},tn=(d,m,g,v,A,R,x,O,N)=>{d=d||$r,m=m||$r;const S=d.length,H=m.length,B=Math.min(S,H);let z;for(z=0;z<B;z++){const Y=m[z]=N?Pn(m[z]):Bt(m[z]);y(d[z],Y,g,null,A,R,x,O,N)}S>H?Ke(d,A,R,!0,!1,B):dt(m,g,v,A,R,x,O,N,B)},In=(d,m,g,v,A,R,x,O,N)=>{let S=0;const H=m.length;let B=d.length-1,z=H-1;for(;S<=B&&S<=z;){const Y=d[S],ee=m[S]=N?Pn(m[S]):Bt(m[S]);if(Ns(Y,ee))y(Y,ee,g,null,A,R,x,O,N);else break;S++}for(;S<=B&&S<=z;){const Y=d[B],ee=m[z]=N?Pn(m[z]):Bt(m[z]);if(Ns(Y,ee))y(Y,ee,g,null,A,R,x,O,N);else break;B--,z--}if(S>B){if(S<=z){const Y=z+1,ee=Y<H?m[Y].el:v;for(;S<=z;)y(null,m[S]=N?Pn(m[S]):Bt(m[S]),g,ee,A,R,x,O,N),S++}}else if(S>z)for(;S<=B;)it(d[S],A,R,!0),S++;else{const Y=S,ee=S,_e=new Map;for(S=ee;S<=z;S++){const pt=m[S]=N?Pn(m[S]):Bt(m[S]);pt.key!=null&&_e.set(pt.key,S)}let de,Se=0;const Rt=z-ee+1;let Cr=!1,Vh=0;const ks=new Array(Rt);for(S=0;S<Rt;S++)ks[S]=0;for(S=Y;S<=B;S++){const pt=d[S];if(Se>=Rt){it(pt,A,R,!0);continue}let Ft;if(pt.key!=null)Ft=_e.get(pt.key);else for(de=ee;de<=z;de++)if(ks[de-ee]===0&&Ns(pt,m[de])){Ft=de;break}Ft===void 0?it(pt,A,R,!0):(ks[Ft-ee]=S+1,Ft>=Vh?Vh=Ft:Cr=!0,y(pt,m[Ft],g,null,A,R,x,O,N),Se++)}const xh=Cr?zE(ks):$r;for(de=xh.length-1,S=Rt-1;S>=0;S--){const pt=ee+S,Ft=m[pt],Mh=pt+1<H?m[pt+1].el:v;ks[S]===0?y(null,Ft,g,Mh,A,R,x,O,N):Cr&&(de<0||S!==xh[de]?Lt(Ft,g,Mh,2):de--)}}},Lt=(d,m,g,v,A=null)=>{const{el:R,type:x,transition:O,children:N,shapeFlag:S}=d;if(S&6){Lt(d.component.subTree,m,g,v);return}if(S&128){d.suspense.move(m,g,v);return}if(S&64){x.move(d,m,g,D);return}if(x===mt){r(R,m,g);for(let B=0;B<N.length;B++)Lt(N[B],m,g,v);r(d.anchor,m,g);return}if(x===Ro){$(d,m,g);return}if(v!==2&&S&1&&O)if(v===0)O.beforeEnter(R),r(R,m,g),ot(()=>O.enter(R),A);else{const{leave:B,delayLeave:z,afterLeave:Y}=O,ee=()=>r(R,m,g),_e=()=>{B(R,()=>{ee(),Y&&Y()})};z?z(R,ee,_e):_e()}else r(R,m,g)},it=(d,m,g,v=!1,A=!1)=>{const{type:R,props:x,ref:O,children:N,dynamicChildren:S,shapeFlag:H,patchFlag:B,dirs:z}=d;if(O!=null&&rl(O,null,g,d,!0),H&256){m.ctx.deactivate(d);return}const Y=H&1&&z,ee=!Io(d);let _e;if(ee&&(_e=x&&x.onVnodeBeforeUnmount)&&Ut(_e,m,d),H&6)to(d.component,g,v);else{if(H&128){d.suspense.unmount(g,v);return}Y&&Yn(d,null,m,"beforeUnmount"),H&64?d.type.remove(d,m,g,A,D,v):S&&(R!==mt||B>0&&B&64)?Ke(S,m,g,!1,!0):(R===mt&&B&384||!A&&H&16)&&Ke(N,m,g),v&&Sr(d)}(ee&&(_e=x&&x.onVnodeUnmounted)||Y)&&ot(()=>{_e&&Ut(_e,m,d),Y&&Yn(d,null,m,"unmounted")},g)},Sr=d=>{const{type:m,el:g,anchor:v,transition:A}=d;if(m===mt){Pr(g,v);return}if(m===Ro){L(d);return}const R=()=>{s(g),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(d.shapeFlag&1&&A&&!A.persisted){const{leave:x,delayLeave:O}=A,N=()=>x(g,R);O?O(d.el,R,N):N()}else R()},Pr=(d,m)=>{let g;for(;d!==m;)g=f(d),s(d),d=g;s(m)},to=(d,m,g)=>{const{bum:v,scope:A,update:R,subTree:x,um:O}=d;v&&wo(v),A.stop(),R&&(R.active=!1,it(x,d,m,g)),O&&ot(O,m),ot(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Ke=(d,m,g,v=!1,A=!1,R=0)=>{for(let x=R;x<d.length;x++)it(d[x],m,g,v,A)},T=d=>d.shapeFlag&6?T(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),M=(d,m,g)=>{d==null?m._vnode&&it(m._vnode,null,null,!0):y(m._vnode||null,d,m,null,null,null,g),zh(),Hp(),m._vnode=d},D={p:y,um:it,m:Lt,r:Sr,mt:Os,mc:dt,pc:le,pbc:nt,n:T,o:t};let j,ue;return e&&([j,ue]=e(D)),{render:M,hydrate:j,createApp:ME(M,j)}}function Xn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function HE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function cm(t,e,n=!1){const r=t.children,s=e.children;if(G(r)&&G(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Pn(s[i]),a.el=o.el),n||cm(o,a)),a.type===Ia&&(a.el=o.el)}}function zE(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const WE=t=>t.__isTeleport,mt=Symbol.for("v-fgt"),Ia=Symbol.for("v-txt"),dr=Symbol.for("v-cmt"),Ro=Symbol.for("v-stc"),Qs=[];let Pt=null;function ae(t=!1){Qs.push(Pt=t?null:[])}function KE(){Qs.pop(),Pt=Qs[Qs.length-1]||null}let ui=1;function nf(t){ui+=t}function lm(t){return t.dynamicChildren=ui>0?Pt||$r:null,KE(),ui>0&&Pt&&Pt.push(t),t}function we(t,e,n,r,s,i){return lm(C(t,e,n,r,s,i,!0))}function pr(t,e,n,r,s){return lm(be(t,e,n,r,s,!0))}function sl(t){return t?t.__v_isVNode===!0:!1}function Ns(t,e){return t.type===e.type&&t.key===e.key}const Aa="__vInternal",um=({key:t})=>t??null,bo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||ut(t)||X(t)?{i:wt,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,r=0,s=null,i=t===mt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&um(e),ref:e&&bo(e),scopeId:Kp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:wt};return a?(uu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=xe(n)?8:16),ui>0&&!o&&Pt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pt.push(c),c}const be=GE;function GE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===fE)&&(t=dr),sl(t)){const a=Zr(t,e,!0);return n&&uu(a,n),ui>0&&!i&&Pt&&(a.shapeFlag&6?Pt[Pt.indexOf(t)]=a:Pt.push(a)),a.patchFlag|=-2,a}if(oT(t)&&(t=t.__vccOpts),e){e=QE(e);let{class:a,style:c}=e;a&&!xe(a)&&(e.class=Zl(a)),Ie(c)&&(xp(c)&&!G(c)&&(c=We({},c)),e.style=Xl(c))}const o=xe(t)?1:pE(t)?128:WE(t)?64:Ie(t)?4:X(t)?2:0;return C(t,e,n,r,s,o,i,!0)}function QE(t){return t?xp(t)||Aa in t?We({},t):t:null}function Zr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?YE(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&um(a),ref:e&&e.ref?n&&s?G(s)?s.concat(bo(e)):[s,bo(e)]:bo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zr(t.ssContent),ssFallback:t.ssFallback&&Zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function gt(t=" ",e=0){return be(Ia,null,t,e)}function JE(t,e){const n=be(Ro,null,t);return n.staticCount=e,n}function at(t="",e=!1){return e?(ae(),pr(dr,null,t)):be(dr,null,t)}function Bt(t){return t==null||typeof t=="boolean"?be(dr):G(t)?be(mt,null,t.slice()):typeof t=="object"?Pn(t):be(Ia,null,String(t))}function Pn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zr(t)}function uu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),uu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Aa in e)?e._ctx=wt:s===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),r&64?(n=16,e=[gt(e)]):n=8);t.children=e,t.shapeFlag|=n}function YE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Zl([e.class,r.class]));else if(s==="style")e.style=Xl([e.style,r.style]);else if(ma(s)){const i=e[s],o=r[s];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ut(t,e,n,r=null){Ot(t,e,7,[n,r])}const XE=nm();let ZE=0;function eT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||XE,i={uid:ZE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new wp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sm(r,s),emitsOptions:Wp(r,s),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:r.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=aE.bind(null,i),t.ce&&t.ce(i),i}let je=null,hu,Or,rf="__VUE_INSTANCE_SETTERS__";(Or=Wc()[rf])||(Or=Wc()[rf]=[]),Or.push(t=>je=t),hu=t=>{Or.length>1?Or.forEach(e=>e(t)):Or[0](t)};const es=t=>{hu(t),t.scope.on()},lr=()=>{je&&je.scope.off(),hu(null)};function hm(t){return t.vnode.shapeFlag&4}let hi=!1;function tT(t,e=!1){hi=e;const{props:n,children:r}=t.vnode,s=hm(t);LE(t,n,s,e),BE(t,r);const i=s?nT(t,e):void 0;return hi=!1,i}function nT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Mp(new Proxy(t.ctx,CE));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?sT(t):null;es(t),ms();const i=Mn(r,t,0,[t.props,s]);if(gs(),lr(),_p(i)){if(i.then(lr,lr),e)return i.then(o=>{sf(t,o,e)}).catch(o=>{Ea(o,t,0)});t.asyncDep=i}else sf(t,i,e)}else fm(t,e)}function sf(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=Bp(e)),fm(t,n)}let of;function fm(t,e,n){const r=t.type;if(!t.render){if(!e&&of&&!r.render){const s=r.template||cu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=We(We({isCustomElement:i,delimiters:a},o),c);r.render=of(s,l)}}t.render=r.render||Wt}{es(t),ms();try{OE(t)}finally{gs(),lr()}}}function rT(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return lt(t,"get","$attrs"),e[n]}}))}function sT(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return rT(t)},slots:t.slots,emit:t.emit,expose:e}}function Ra(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Bp(Mp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gs)return Gs[n](t)},has(e,n){return n in e||n in Gs}}))}function iT(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function oT(t){return X(t)&&"__vccOpts"in t}const vt=(t,e)=>tE(t,e,hi);function dm(t,e,n){const r=arguments.length;return r===2?Ie(e)&&!G(e)?sl(e)?be(t,null,[e]):be(t,e):be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&sl(n)&&(n=[n]),be(t,e,n))}const aT=Symbol.for("v-scx"),cT=()=>Kt(aT),lT="3.3.12",uT="http://www.w3.org/2000/svg",tr=typeof document<"u"?document:null,af=tr&&tr.createElement("template"),hT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?tr.createElementNS(uT,t):tr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>tr.createTextNode(t),createComment:t=>tr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>tr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{af.innerHTML=r?`<svg>${t}</svg>`:t;const a=af.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fT=Symbol("_vtc");function dT(t,e,n){const r=t[fT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const pT=Symbol("_vod"),mT=Symbol("");function gT(t,e,n){const r=t.style,s=xe(n);if(n&&!s){if(e&&!xe(e))for(const i in e)n[i]==null&&il(r,i,"");for(const i in n)il(r,i,n[i])}else{const i=r.display;if(s){if(e!==n){const o=r[mT];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");pT in t&&(r.display=i)}}const cf=/\s*!important$/;function il(t,e,n){if(G(n))n.forEach(r=>il(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=_T(t,e);cf.test(n)?t.setProperty(ps(r),n.replace(cf,""),"important"):t[r]=n}}const lf=["Webkit","Moz","ms"],mc={};function _T(t,e){const n=mc[e];if(n)return n;let r=Xt(e);if(r!=="filter"&&r in t)return mc[e]=r;r=ya(r);for(let s=0;s<lf.length;s++){const i=lf[s]+r;if(i in t)return mc[e]=i}return e}const uf="http://www.w3.org/1999/xlink";function yT(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(uf,e.slice(6,e.length)):t.setAttributeNS(uf,e,n);else{const i=Sv(e);n==null||i&&!Ep(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function vT(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ep(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function xr(t,e,n,r){t.addEventListener(e,n,r)}function ET(t,e,n,r){t.removeEventListener(e,n,r)}const hf=Symbol("_vei");function TT(t,e,n,r,s=null){const i=t[hf]||(t[hf]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=wT(e);if(r){const l=i[e]=RT(r,s);xr(t,a,l,c)}else o&&(ET(t,a,o,c),i[e]=void 0)}}const ff=/(?:Once|Passive|Capture)$/;function wT(t){let e;if(ff.test(t)){e={};let r;for(;r=t.match(ff);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ps(t.slice(2)),e]}let gc=0;const IT=Promise.resolve(),AT=()=>gc||(IT.then(()=>gc=0),gc=Date.now());function RT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ot(bT(r,n.value),e,5,[r])};return n.value=t,n.attached=AT(),n}function bT(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const df=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ST=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?dT(t,r,s):e==="style"?gT(t,n,r):ma(e)?Ql(e)||TT(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):PT(t,e,r,s))?vT(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),yT(t,e,r,s))};function PT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&df(e)&&X(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return df(e)&&xe(n)?!1:e in t}const pf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>wo(e,n):e};function CT(t){t.target.composing=!0}function mf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _c=Symbol("_assign"),lo={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[_c]=pf(s);const i=r||s.props&&s.props.type==="number";xr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=zc(a)),t[_c](a)}),n&&xr(t,"change",()=>{t.value=t.value.trim()}),e||(xr(t,"compositionstart",CT),xr(t,"compositionend",mf),xr(t,"change",mf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[_c]=pf(i),t.composing)return;const o=s||t.type==="number"?zc(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},OT=["ctrl","shift","alt","meta"],kT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>OT.some(n=>t[`${n}Key`]&&!e.includes(n))},Js=(t,e)=>t._withMods||(t._withMods=(n,...r)=>{for(let s=0;s<e.length;s++){const i=kT[e[s]];if(i&&i(n,e))return}return t(n,...r)}),NT=We({patchProp:ST},hT);let gf;function DT(){return gf||(gf=jE(NT))}const VT=(...t)=>{const e=DT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=xT(r);if(!s)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function xT(t){return xe(t)?document.querySelector(t):t}function MT(){return pm().__VUE_DEVTOOLS_GLOBAL_HOOK__}function pm(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const LT=typeof Proxy=="function",FT="devtools-plugin:setup",UT="plugin:settings:set";let kr,ol;function BT(){var t;return kr!==void 0||(typeof window<"u"&&window.performance?(kr=!0,ol=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(kr=!0,ol=global.perf_hooks.performance):kr=!1),kr}function $T(){return BT()?ol.now():Date.now()}class jT{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return $T()}},n&&n.on(UT,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function qT(t,e){const n=t,r=pm(),s=MT(),i=LT&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(FT,t,e);else{const o=i?new jT(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var mm="store";function HT(t){return t===void 0&&(t=null),Kt(t!==null?t:mm)}function _s(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function gm(t){return t!==null&&typeof t=="object"}function zT(t){return t&&typeof t.then=="function"}function WT(t,e){return function(){return t(e)}}function _m(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function ym(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;ba(t,n,[],t._modules.root,!0),fu(t,n,e)}function fu(t,e,n){var r=t._state,s=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},c=Pv(!0);c.run(function(){_s(i,function(l,u){o[u]=WT(l,t),a[u]=vt(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=Ni({data:e}),t._scope=c,t.strict&&YT(t),r&&n&&t._withCommit(function(){r.data=null}),s&&s.stop()}function ba(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=du(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=KT(t,o,n);r.forEachMutation(function(u,h){var f=o+h;GT(t,f,u,l)}),r.forEachAction(function(u,h){var f=u.root?h:o+h,p=u.handler||u;QT(t,f,p,l)}),r.forEachGetter(function(u,h){var f=o+h;JT(t,f,u,l)}),r.forEachChild(function(u,h){ba(t,e,n.concat(h),u,s)})}function KT(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=Ho(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:r?t.commit:function(i,o,a){var c=Ho(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return vm(t,e)}},state:{get:function(){return du(t.state,n)}}}),s}function vm(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function GT(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function QT(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return zT(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function JT(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function YT(t){Wr(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function du(t,e){return e.reduce(function(n,r){return n[r]},t)}function Ho(t,e,n){return gm(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var XT="vuex bindings",_f="vuex:mutations",yc="vuex:actions",Nr="vuex",ZT=0;function ew(t,e){qT({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[XT]},function(n){n.addTimelineLayer({id:_f,label:"Vuex Mutations",color:yf}),n.addTimelineLayer({id:yc,label:"Vuex Actions",color:yf}),n.addInspector({id:Nr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Nr)if(r.filter){var s=[];Im(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[wm(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Nr){var s=r.nodeId;vm(e,s),r.state=rw(iw(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Nr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(Nr),n.sendInspectorState(Nr),n.addTimelineEvent({layerId:_f,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=ZT++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:yc,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:yc,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var yf=8702998,tw=6710886,nw=16777215,Em={label:"namespaced",textColor:nw,backgroundColor:tw};function Tm(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function wm(t,e){return{id:e||"root",label:Tm(e),tags:t.namespaced?[Em]:[],children:Object.keys(t._children).map(function(n){return wm(t._children[n],e+n+"/")})}}function Im(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Em]:[]}),Object.keys(e._children).forEach(function(s){Im(t,e._children[s],n,r+s+"/")})}function rw(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=sw(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Tm(o):o,editable:!1,value:al(function(){return i[o]})}})}return s}function sw(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=al(function(){return t[n]})}else e[n]=al(function(){return t[n]})}),e}function iw(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function al(t){try{return t()}catch(e){return e}}var Vt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},Am={namespaced:{configurable:!0}};Am.namespaced.get=function(){return!!this._rawModule.namespaced};Vt.prototype.addChild=function(e,n){this._children[e]=n};Vt.prototype.removeChild=function(e){delete this._children[e]};Vt.prototype.getChild=function(e){return this._children[e]};Vt.prototype.hasChild=function(e){return e in this._children};Vt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Vt.prototype.forEachChild=function(e){_s(this._children,e)};Vt.prototype.forEachGetter=function(e){this._rawModule.getters&&_s(this._rawModule.getters,e)};Vt.prototype.forEachAction=function(e){this._rawModule.actions&&_s(this._rawModule.actions,e)};Vt.prototype.forEachMutation=function(e){this._rawModule.mutations&&_s(this._rawModule.mutations,e)};Object.defineProperties(Vt.prototype,Am);var wr=function(e){this.register([],e,!1)};wr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};wr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};wr.prototype.update=function(e){Rm([],this.root,e)};wr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Vt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&_s(n.modules,function(a,c){s.register(e.concat(c),a,r)})};wr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};wr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function Rm(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;Rm(t.concat(r),e.getChild(r),n.modules[r])}}function ow(t){return new ft(t)}var ft=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new wr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(f,p){return c.call(o,f,p)},this.commit=function(f,p,_){return l.call(o,f,p,_)},this.strict=s;var u=this._modules.root.state;ba(this,u,[],this._modules.root),fu(this,u),r.forEach(function(h){return h(n)})},pu={state:{configurable:!0}};ft.prototype.install=function(e,n){e.provide(n||mm,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&ew(e,this)};pu.state.get=function(){return this._state.data};pu.state.set=function(t){};ft.prototype.commit=function(e,n,r){var s=this,i=Ho(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};ft.prototype.dispatch=function(e,n){var r=this,s=Ho(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(f){try{r._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,r.state)})}catch{}u(f)},function(f){try{r._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,r.state,f)})}catch{}h(f)})})}};ft.prototype.subscribe=function(e,n){return _m(e,this._subscribers,n)};ft.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return _m(r,this._actionSubscribers,n)};ft.prototype.watch=function(e,n,r){var s=this;return Wr(function(){return e(s.state,s.getters)},n,Object.assign({},r))};ft.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};ft.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),ba(this,this.state,e,this._modules.get(e),r.preserveState),fu(this,this.state)};ft.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=du(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),ym(this)};ft.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ft.prototype.hotUpdate=function(e){this._modules.update(e),ym(this,!0)};ft.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(ft.prototype,pu);var ys=lw(function(t,e){var n={};return aw(e).forEach(function(r){var s=r.key,i=r.val;n[s]=function(){var a=this.$store.state,c=this.$store.getters;if(t){var l=uw(this.$store,"mapState",t);if(!l)return;a=l.context.state,c=l.context.getters}return typeof i=="function"?i.call(this,a,c):a[i]},n[s].vuex=!0}),n});function aw(t){return cw(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function cw(t){return Array.isArray(t)||gm(t)}function lw(t){return function(e,n){return typeof e!="string"?(n=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,n)}}function uw(t,e,n){var r=t._modulesNamespaceMap[n];return r}var vf={};/**
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
 */const bm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},hw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),r.push(n[u],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new fw;const f=i<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dw=function(t){const e=bm(t);return Sm.encodeByteArray(e,!0)},zo=function(t){return dw(t).replace(/\./g,"")},Pm=function(t){try{return Sm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mw=()=>pw().__FIREBASE_DEFAULTS__,gw=()=>{if(typeof process>"u"||typeof vf>"u")return;const t=vf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_w=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pm(t[1]);return e&&JSON.parse(e)},mu=()=>{try{return mw()||gw()||_w()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cm=t=>{var e,n;return(n=(e=mu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yw=t=>{const e=Cm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Om=()=>{var t;return(t=mu())===null||t===void 0?void 0:t.config},km=t=>{var e;return(e=mu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class vw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ew(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[zo(JSON.stringify(n)),zo(JSON.stringify(o)),a].join(".")}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function ww(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Iw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Aw(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rw(){try{return typeof indexedDB=="object"}catch{return!1}}function bw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Sw="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Sw,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Pw(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Tn(s,a,r)}}function Pw(t,e){return t.replace(Cw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Cw=/\{\$([^}]+)}/g;function Ow(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ef(i)&&Ef(o)){if(!Wo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ef(t){return t!==null&&typeof t=="object"}/**
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
 */function Vi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $s(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kw(t,e){const n=new Nw(t,e);return n.subscribe.bind(n)}class Nw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Dw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=vc),s.error===void 0&&(s.error=vc),s.complete===void 0&&(s.complete=vc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vc(){}/**
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
 */function ht(t){return t&&t._delegate?t._delegate:t}class mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zn="[DEFAULT]";/**
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
 */class Vw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mw(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xw(t){return t===Zn?void 0:t}function Mw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Lw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Vw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Fw={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Uw=ne.INFO,Bw={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},$w=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Bw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gu{constructor(e){this.name=e,this._logLevel=Uw,this._logHandler=$w,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const jw=(t,e)=>e.some(n=>t instanceof n);let Tf,wf;function qw(){return Tf||(Tf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hw(){return wf||(wf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nm=new WeakMap,cl=new WeakMap,Dm=new WeakMap,Ec=new WeakMap,_u=new WeakMap;function zw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ln(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Nm.set(n,t)}).catch(()=>{}),_u.set(e,t),e}function Ww(t){if(cl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});cl.set(t,e)}let ll={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kw(t){ll=t(ll)}function Gw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tc(this),e,...n);return Dm.set(r,e.sort?e.sort():[e]),Ln(r)}:Hw().includes(t)?function(...e){return t.apply(Tc(this),e),Ln(Nm.get(this))}:function(...e){return Ln(t.apply(Tc(this),e))}}function Qw(t){return typeof t=="function"?Gw(t):(t instanceof IDBTransaction&&Ww(t),jw(t,qw())?new Proxy(t,ll):t)}function Ln(t){if(t instanceof IDBRequest)return zw(t);if(Ec.has(t))return Ec.get(t);const e=Qw(t);return e!==t&&(Ec.set(t,e),_u.set(e,t)),e}const Tc=t=>_u.get(t);function Jw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ln(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ln(o.result),c.oldVersion,c.newVersion,Ln(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Yw=["get","getKey","getAll","getAllKeys","count"],Xw=["put","add","delete","clear"],wc=new Map;function If(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wc.get(e))return wc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Xw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Yw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return wc.set(e,i),i}Kw(t=>({...t,get:(e,n,r)=>If(e,n)||t.get(e,n,r),has:(e,n)=>!!If(e,n)||t.has(e,n)}));/**
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
 */class Zw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ul="@firebase/app",Af="0.9.25";/**
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
 */const gr=new gu("@firebase/app"),tI="@firebase/app-compat",nI="@firebase/analytics-compat",rI="@firebase/analytics",sI="@firebase/app-check-compat",iI="@firebase/app-check",oI="@firebase/auth",aI="@firebase/auth-compat",cI="@firebase/database",lI="@firebase/database-compat",uI="@firebase/functions",hI="@firebase/functions-compat",fI="@firebase/installations",dI="@firebase/installations-compat",pI="@firebase/messaging",mI="@firebase/messaging-compat",gI="@firebase/performance",_I="@firebase/performance-compat",yI="@firebase/remote-config",vI="@firebase/remote-config-compat",EI="@firebase/storage",TI="@firebase/storage-compat",wI="@firebase/firestore",II="@firebase/firestore-compat",AI="firebase",RI="10.7.1";/**
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
 */const hl="[DEFAULT]",bI={[ul]:"fire-core",[tI]:"fire-core-compat",[rI]:"fire-analytics",[nI]:"fire-analytics-compat",[iI]:"fire-app-check",[sI]:"fire-app-check-compat",[oI]:"fire-auth",[aI]:"fire-auth-compat",[cI]:"fire-rtdb",[lI]:"fire-rtdb-compat",[uI]:"fire-fn",[hI]:"fire-fn-compat",[fI]:"fire-iid",[dI]:"fire-iid-compat",[pI]:"fire-fcm",[mI]:"fire-fcm-compat",[gI]:"fire-perf",[_I]:"fire-perf-compat",[yI]:"fire-rc",[vI]:"fire-rc-compat",[EI]:"fire-gcs",[TI]:"fire-gcs-compat",[wI]:"fire-fst",[II]:"fire-fst-compat","fire-js":"fire-js",[AI]:"fire-js-all"};/**
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
 */const Ko=new Map,fl=new Map;function SI(t,e){try{t.container.addComponent(e)}catch(n){gr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(fl.has(e))return gr.debug(`There were multiple attempts to register component ${e}.`),!1;fl.set(e,t);for(const n of Ko.values())SI(n,t);return!0}function yu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const PI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Fn=new Di("app","Firebase",PI);/**
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
 */class CI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
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
 */const vs=RI;function Vm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Fn.create("bad-app-name",{appName:String(s)});if(n||(n=Om()),!n)throw Fn.create("no-options");const i=Ko.get(s);if(i){if(Wo(n,i.options)&&Wo(r,i.config))return i;throw Fn.create("duplicate-app",{appName:s})}const o=new Lw(s);for(const c of fl.values())o.addComponent(c);const a=new CI(n,r,o);return Ko.set(s,a),a}function xm(t=hl){const e=Ko.get(t);if(!e&&t===hl&&Om())return Vm();if(!e)throw Fn.create("no-app",{appName:t});return e}function Un(t,e,n){var r;let s=(r=bI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gr.warn(a.join(" "));return}ts(new mr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const OI="firebase-heartbeat-database",kI=1,fi="firebase-heartbeat-store";let Ic=null;function Mm(){return Ic||(Ic=Jw(OI,kI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fi)}}}).catch(t=>{throw Fn.create("idb-open",{originalErrorMessage:t.message})})),Ic}async function NI(t){try{return await(await Mm()).transaction(fi).objectStore(fi).get(Lm(t))}catch(e){if(e instanceof Tn)gr.warn(e.message);else{const n=Fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gr.warn(n.message)}}}async function Rf(t,e){try{const r=(await Mm()).transaction(fi,"readwrite");await r.objectStore(fi).put(e,Lm(t)),await r.done}catch(n){if(n instanceof Tn)gr.warn(n.message);else{const r=Fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gr.warn(r.message)}}}function Lm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const DI=1024,VI=30*24*60*60*1e3;class xI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=VI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bf(),{heartbeatsToSend:r,unsentEntries:s}=MI(this._heartbeatsCache.heartbeats),i=zo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function bf(){return new Date().toISOString().substring(0,10)}function MI(t,e=DI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Sf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Sf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rw()?bw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await NI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sf(t){return zo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function FI(t){ts(new mr("platform-logger",e=>new Zw(e),"PRIVATE")),ts(new mr("heartbeat",e=>new xI(e),"PRIVATE")),Un(ul,Af,t),Un(ul,Af,"esm2017"),Un("fire-js","")}FI("");var UI="firebase",BI="10.7.1";/**
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
 */Un(UI,BI,"app");function vu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Fm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $I=Fm,Um=new Di("auth","Firebase",Fm());/**
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
 */const Go=new gu("@firebase/auth");function jI(t,...e){Go.logLevel<=ne.WARN&&Go.warn(`Auth (${vs}): ${t}`,...e)}function So(t,...e){Go.logLevel<=ne.ERROR&&Go.error(`Auth (${vs}): ${t}`,...e)}/**
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
 */function At(t,...e){throw Eu(t,...e)}function Gt(t,...e){return Eu(t,...e)}function Bm(t,e,n){const r=Object.assign(Object.assign({},$I()),{[e]:n});return new Di("auth","Firebase",r).create(e,{appName:t.name})}function qI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&At(t,"argument-error"),Bm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Eu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Um.create(t,...e)}function W(t,e,...n){if(!t)throw Eu(e,...n)}function an(t){const e="INTERNAL ASSERTION FAILED: "+t;throw So(e),new Error(e)}function mn(t,e){t||an(e)}/**
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
 */function dl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function HI(){return Pf()==="http:"||Pf()==="https:"}function Pf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function zI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HI()||ww()||"connection"in navigator)?navigator.onLine:!0}function WI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,mn(n>e,"Short delay should be less than long delay!"),this.isMobile=Tw()||Iw()}get(){return zI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tu(t,e){mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $m{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const KI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const GI=new xi(3e4,6e4);function zn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wn(t,e,n,r,s={}){return jm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Vi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),$m.fetch()(qm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function jm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},KI),e);try{const s=new JI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw uo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw uo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw uo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw uo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Bm(t,u,l);At(t,u)}}catch(s){if(s instanceof Tn)throw s;At(t,"network-request-failed",{message:String(s)})}}async function Mi(t,e,n,r,s={}){const i=await Wn(t,e,n,r,s);return"mfaPendingCredential"in i&&At(t,"multi-factor-auth-required",{_serverResponse:i}),i}function qm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Tu(t.config,s):`${t.config.apiScheme}://${s}`}function QI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),GI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function uo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Gt(t,e,r);return s.customData._tokenResponse=n,s}function Cf(t){return t!==void 0&&t.enterprise!==void 0}class YI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return QI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function XI(t,e){return Wn(t,"GET","/v2/recaptchaConfig",zn(t,e))}/**
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
 */async function ZI(t,e){return Wn(t,"POST","/v1/accounts:delete",e)}async function eA(t,e){return Wn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ys(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tA(t,e=!1){const n=ht(t),r=await n.getIdToken(e),s=wu(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ys(Ac(s.auth_time)),issuedAtTime:Ys(Ac(s.iat)),expirationTime:Ys(Ac(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ac(t){return Number(t)*1e3}function wu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return So("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pm(n);return s?JSON.parse(s):(So("Failed to decode base64 JWT payload"),null)}catch(s){return So("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function nA(t){const e=wu(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&rA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class sA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await di(t,eA(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?aA(i.providerUserInfo):[],a=oA(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Hm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function iA(t){const e=ht(t);await Qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function aA(t){return t.map(e=>{var{providerId:n}=e,r=vu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function cA(t,e){const n=await jm(t,{},async()=>{const r=Vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=qm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$m.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lA(t,e){return Wn(t,"POST","/v2/accounts:revokeToken",zn(t,e))}/**
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
 */class pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await cA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new pi;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pi,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
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
 */function Rn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ur{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=vu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tA(this,e)}reload(){return iA(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await di(this,ZI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:$,emailVerified:L,isAnonymous:ge,providerData:pe,stsTokenManager:Ne}=n;W($&&Ne,e,"internal-error");const dt=pi.fromJSON(this.name,Ne);W(typeof $=="string",e,"internal-error"),Rn(h,e.name),Rn(f,e.name),W(typeof L=="boolean",e,"internal-error"),W(typeof ge=="boolean",e,"internal-error"),Rn(p,e.name),Rn(_,e.name),Rn(y,e.name),Rn(w,e.name),Rn(P,e.name),Rn(k,e.name);const yt=new ur({uid:$,auth:e,email:f,emailVerified:L,displayName:h,isAnonymous:ge,photoURL:_,phoneNumber:p,tenantId:y,stsTokenManager:dt,createdAt:P,lastLoginAt:k});return pe&&Array.isArray(pe)&&(yt.providerData=pe.map(nt=>Object.assign({},nt))),w&&(yt._redirectEventId=w),yt}static async _fromIdTokenResponse(e,n,r=!1){const s=new pi;s.updateFromServerResponse(n);const i=new ur({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Qo(i),i}}/**
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
 */const Of=new Map;function cn(t){mn(t instanceof Function,"Expected a class definition");let e=Of.get(t);return e?(mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Of.set(t,e),e)}/**
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
 */class zm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zm.type="NONE";const kf=zm;/**
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
 */function Po(t,e,n){return`firebase:${t}:${e}:${n}`}class Kr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Po(this.userKey,s.apiKey,i),this.fullPersistenceKey=Po("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ur._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Kr(cn(kf),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||cn(kf);const o=Po(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ur._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Kr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Kr(i,e,r))}}/**
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
 */function Nf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jm(e))return"Blackberry";if(Ym(e))return"Webos";if(Iu(e))return"Safari";if((e.includes("chrome/")||Km(e))&&!e.includes("edge/"))return"Chrome";if(Qm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wm(t=et()){return/firefox\//i.test(t)}function Iu(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Km(t=et()){return/crios\//i.test(t)}function Gm(t=et()){return/iemobile/i.test(t)}function Qm(t=et()){return/android/i.test(t)}function Jm(t=et()){return/blackberry/i.test(t)}function Ym(t=et()){return/webos/i.test(t)}function Sa(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uA(t=et()){var e;return Sa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hA(){return Aw()&&document.documentMode===10}function Xm(t=et()){return Sa(t)||Qm(t)||Ym(t)||Jm(t)||/windows phone/i.test(t)||Gm(t)}function fA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Zm(t,e=[]){let n;switch(t){case"Browser":n=Nf(et());break;case"Worker":n=`${Nf(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vs}/${r}`}/**
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
 */class dA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function pA(t,e={}){return Wn(t,"GET","/v2/passwordPolicy",zn(t,e))}/**
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
 */const mA=6;class gA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:mA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class _A{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Df(this),this.idTokenSubscription=new Df(this),this.beforeStateQueue=new dA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Um,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Kr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ht(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pA(this),n=new gA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Di("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Kr.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Kn(t){return ht(t)}class Df{constructor(e){this.auth=e,this.observer=null,this.addObserver=kw(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function yA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function eg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Gt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",yA().appendChild(r)})}function vA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const EA="https://www.google.com/recaptcha/enterprise.js?render=",TA="recaptcha-enterprise",wA="NO_RECAPTCHA";class IA{constructor(e){this.type=TA,this.auth=Kn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{XI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new YI(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Cf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(wA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Cf(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}eg(EA+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Vf(t,e,n,r=!1){const s=new IA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function pl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Vf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Vf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function AA(t,e){const n=yu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Wo(i,e??{}))return s;At(s,"already-initialized")}return n.initialize({options:e})}function RA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bA(t,e,n){const r=Kn(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=tg(e),{host:o,port:a}=SA(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||PA()}function tg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SA(t){const e=tg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:xf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:xf(o)}}}function xf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Au{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}async function CA(t,e){return Wn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function OA(t,e){return Mi(t,"POST","/v1/accounts:signInWithPassword",zn(t,e))}/**
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
 */async function kA(t,e){return Mi(t,"POST","/v1/accounts:signInWithEmailLink",zn(t,e))}async function NA(t,e){return Mi(t,"POST","/v1/accounts:signInWithEmailLink",zn(t,e))}/**
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
 */class mi extends Au{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new mi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new mi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pl(e,n,"signInWithPassword",OA);case"emailLink":return kA(e,{email:this._email,oobCode:this._password});default:At(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pl(e,r,"signUpPassword",CA);case"emailLink":return NA(e,{idToken:n,email:this._email,oobCode:this._password});default:At(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gr(t,e){return Mi(t,"POST","/v1/accounts:signInWithIdp",zn(t,e))}/**
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
 */const DA="http://localhost";class gn extends Au{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):At("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=vu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new gn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gr(e,n)}buildRequest(){const e={requestUri:DA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vi(n)}return e}}/**
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
 */function VA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xA(t){const e=$s(js(t)).link,n=e?$s(js(e)).deep_link_id:null,r=$s(js(t)).deep_link_id;return(r?$s(js(r)).link:null)||r||n||e||t}class Ru{constructor(e){var n,r,s,i,o,a;const c=$s(js(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=VA((s=c.mode)!==null&&s!==void 0?s:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=xA(e);try{return new Ru(n)}catch{return null}}}/**
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
 */class Es{constructor(){this.providerId=Es.PROVIDER_ID}static credential(e,n){return mi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ru.parseLink(n);return W(r,"argument-error"),mi._fromEmailAndCode(e,r.code,r.tenantId)}}Es.PROVIDER_ID="password";Es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class bu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ts extends bu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Xs extends Ts{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return W("providerId"in n&&"signInMethod"in n,"argument-error"),gn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return W(e.idToken||e.accessToken,"argument-error"),gn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Xs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Xs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:a}=e;if(!r&&!s&&!n&&!i||!a)return null;try{return new Xs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
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
 */class kn extends Ts{constructor(){super("facebook.com")}static credential(e){return gn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
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
 */class on extends Ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return on.credential(n,r)}catch{return null}}}on.GOOGLE_SIGN_IN_METHOD="google.com";on.PROVIDER_ID="google.com";/**
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
 */class Nn extends Ts{constructor(){super("github.com")}static credential(e){return gn._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
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
 */class Dn extends Ts{constructor(){super("twitter.com")}static credential(e,n){return gn._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
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
 */async function MA(t,e){return Mi(t,"POST","/v1/accounts:signUp",zn(t,e))}/**
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
 */class _r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ur._fromIdTokenResponse(e,r,s),o=Mf(r);return new _r({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Mf(r);return new _r({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Mf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Jo extends Tn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Jo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Jo(e,n,r,s)}}function ng(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Jo._fromErrorAndOperation(t,i,e,r):i})}async function LA(t,e,n=!1){const r=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _r._forOperation(t,"link",r)}/**
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
 */async function FA(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await di(t,ng(r,s,e,t),n);W(i.idToken,r,"internal-error");const o=wu(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),_r._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&At(r,"user-mismatch"),i}}/**
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
 */async function rg(t,e,n=!1){const r="signIn",s=await ng(t,r,e),i=await _r._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function UA(t,e){return rg(Kn(t),e)}/**
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
 */async function sg(t){const e=Kn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function BA(t,e,n){const r=Kn(t),o=await pl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",MA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&sg(t),c}),a=await _r._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function $A(t,e,n){return UA(ht(t),Es.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sg(t),r})}function jA(t,e,n,r){return ht(t).onIdTokenChanged(e,n,r)}function qA(t,e,n){return ht(t).beforeAuthStateChanged(e,n)}function HA(t){return ht(t).signOut()}const Yo="__sak";/**
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
 */class ig{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yo,"1"),this.storage.removeItem(Yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function zA(){const t=et();return Iu(t)||Sa(t)}const WA=1e3,KA=10;class og extends ig{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zA()&&fA(),this.fallbackToPolling=Xm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);hA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,KA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},WA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}og.type="LOCAL";const GA=og;/**
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
 */class ag extends ig{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ag.type="SESSION";const cg=ag;/**
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
 */function QA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await QA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pa.receivers=[];/**
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
 */function Su(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class JA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Su("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qt(){return window}function YA(t){Qt().location.href=t}/**
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
 */function lg(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function XA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eR(){return lg()?self:null}/**
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
 */const ug="firebaseLocalStorageDb",tR=1,Xo="firebaseLocalStorage",hg="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ca(t,e){return t.transaction([Xo],e?"readwrite":"readonly").objectStore(Xo)}function nR(){const t=indexedDB.deleteDatabase(ug);return new Li(t).toPromise()}function ml(){const t=indexedDB.open(ug,tR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xo,{keyPath:hg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xo)?e(r):(r.close(),await nR(),e(await ml()))})})}async function Lf(t,e,n){const r=Ca(t,!0).put({[hg]:e,value:n});return new Li(r).toPromise()}async function rR(t,e){const n=Ca(t,!1).get(e),r=await new Li(n).toPromise();return r===void 0?null:r.value}function Ff(t,e){const n=Ca(t,!0).delete(e);return new Li(n).toPromise()}const sR=800,iR=3;class fg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ml(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pa._getInstance(eR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XA(),!this.activeServiceWorker)return;this.sender=new JA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ml();return await Lf(e,Yo,"1"),await Ff(e,Yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ff(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ca(s,!1).getAll();return new Li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fg.type="LOCAL";const oR=fg;new xi(3e4,6e4);/**
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
 */function dg(t,e){return e?cn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Pu extends Au{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aR(t){return rg(t.auth,new Pu(t),t.bypassAuthState)}function cR(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),FA(n,new Pu(t),t.bypassAuthState)}async function lR(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),LA(n,new Pu(t),t.bypassAuthState)}/**
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
 */class pg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aR;case"linkViaPopup":case"linkViaRedirect":return lR;case"reauthViaPopup":case"reauthViaRedirect":return cR;default:At(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uR=new xi(2e3,1e4);async function Uf(t,e,n){const r=Kn(t);qI(t,e,bu);const s=dg(r,n);return new rr(r,"signInViaPopup",e,s).executeNotNull()}class rr extends pg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rr.currentPopupAction&&rr.currentPopupAction.cancel(),rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=Su();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uR.get())};e()}}rr.currentPopupAction=null;/**
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
 */const hR="pendingRedirect",Co=new Map;class fR extends pg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const r=await dR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dR(t,e){const n=gR(e),r=mR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function pR(t,e){Co.set(t._key(),e)}function mR(t){return cn(t._redirectPersistence)}function gR(t){return Po(hR,t.config.apiKey,t.name)}async function _R(t,e,n=!1){const r=Kn(t),s=dg(r,e),o=await new fR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const yR=10*60*1e3;class vR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ER(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bf(e))}saveEventToCache(e){this.cachedEventUids.add(Bf(e)),this.lastProcessedEventTime=Date.now()}}function Bf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ER(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mg(t);default:return!1}}/**
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
 */async function TR(t,e={}){return Wn(t,"GET","/v1/projects",e)}/**
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
 */const wR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IR=/^https?/;async function AR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TR(t);for(const n of e)try{if(RR(n))return}catch{}At(t,"unauthorized-domain")}function RR(t){const e=dl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IR.test(n))return!1;if(wR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const bR=new xi(3e4,6e4);function $f(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SR(t){return new Promise((e,n)=>{var r,s,i;function o(){$f(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$f(),n(Gt(t,"network-request-failed"))},timeout:bR.get()})}if(!((s=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qt().gapi)===null||i===void 0)&&i.load)o();else{const a=vA("iframefcb");return Qt()[a]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},eg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Oo=null,e})}let Oo=null;function PR(t){return Oo=Oo||SR(t),Oo}/**
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
 */const CR=new xi(5e3,15e3),OR="__/auth/iframe",kR="emulator/auth/iframe",NR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VR(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tu(e,kR):`https://${t.config.authDomain}/${OR}`,r={apiKey:e.apiKey,appName:t.name,v:vs},s=DR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vi(r).slice(1)}`}async function xR(t){const e=await PR(t),n=Qt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:VR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),a=Qt().setTimeout(()=>{i(o)},CR.get());function c(){Qt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const MR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LR=500,FR=600,UR="_blank",BR="http://localhost";class jf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $R(t,e,n,r=LR,s=FR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},MR),{width:r.toString(),height:s.toString(),top:i,left:o}),l=et().toLowerCase();n&&(a=Km(l)?UR:n),Wm(l)&&(e=e||BR,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,_])=>`${f}${p}=${_},`,"");if(uA(l)&&a!=="_self")return jR(e||"",a),new jf(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new jf(h)}function jR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qR="__/auth/handler",HR="emulator/auth/handler",zR=encodeURIComponent("fac");async function qf(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vs,eventId:s};if(e instanceof bu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ow(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Ts){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${zR}=${encodeURIComponent(c)}`:"";return`${WR(t)}?${Vi(a).slice(1)}${l}`}function WR({config:t}){return t.emulator?Tu(t,HR):`https://${t.authDomain}/${qR}`}/**
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
 */const Rc="webStorageSupport";class KR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cg,this._completeRedirectFn=_R,this._overrideRedirectResult=pR}async _openPopup(e,n,r,s){var i;mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await qf(e,n,r,dl(),s);return $R(e,o,Su())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await qf(e,n,r,dl(),s);return YA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xR(e),r=new vR(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rc,{type:Rc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Rc];o!==void 0&&n(!!o),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xm()||Iu()||Sa()}}const GR=KR;var Hf="@firebase/auth",zf="1.5.1";/**
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
 */class QR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function JR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function YR(t){ts(new mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zm(t)},l=new _A(r,s,i,c);return RA(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ts(new mr("auth-internal",e=>{const n=Kn(e.getProvider("auth").getImmediate());return(r=>new QR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(Hf,zf,JR(t)),Un(Hf,zf,"esm2017")}/**
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
 */const XR=5*60,ZR=km("authIdTokenMaxAge")||XR;let Wf=null;const e0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZR)return;const s=n==null?void 0:n.token;Wf!==s&&(Wf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function t0(t=xm()){const e=yu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AA(t,{popupRedirectResolver:GR,persistence:[oR,GA,cg]}),r=km("authTokenSyncURL");if(r){const i=e0(r);qA(n,i,()=>i(n.currentUser)),jA(n,o=>i(o))}const s=Cm("auth");return s&&bA(n,`http://${s}`),n}YR("Browser");var n0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Cu=Cu||{},Q=n0||self;function Oa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function r0(t){return Object.prototype.hasOwnProperty.call(t,bc)&&t[bc]||(t[bc]=++s0)}var bc="closure_uid_"+(1e9*Math.random()>>>0),s0=0;function i0(t,e,n){return t.call.apply(t.bind,arguments)}function o0(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Xe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Xe=i0:Xe=o0,Xe.apply(null,arguments)}function ho(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ue(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Gn(){this.s=this.s,this.o=this.o}var a0=0;Gn.prototype.s=!1;Gn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),a0!=0)&&r0(this)};Gn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const gg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ou(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Kf(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Oa(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var c0=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};Q.addEventListener("test",n,e),Q.removeEventListener("test",n,e)}catch{}return t}();function gi(t){return/^[\s\xa0]*$/.test(t)}function ka(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function jt(t){return ka().indexOf(t)!=-1}function ku(t){return ku[" "](t),t}ku[" "]=function(){};function l0(t,e){var n=tb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var u0=jt("Opera"),ns=jt("Trident")||jt("MSIE"),_g=jt("Edge"),gl=_g||ns,yg=jt("Gecko")&&!(ka().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge"))&&!(jt("Trident")||jt("MSIE"))&&!jt("Edge"),h0=ka().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge");function vg(){var t=Q.document;return t?t.documentMode:void 0}var _l;e:{var Sc="",Pc=function(){var t=ka();if(yg)return/rv:([^\);]+)(\)|;)/.exec(t);if(_g)return/Edge\/([\d\.]+)/.exec(t);if(ns)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(h0)return/WebKit\/(\S+)/.exec(t);if(u0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Pc&&(Sc=Pc?Pc[1]:""),ns){var Cc=vg();if(Cc!=null&&Cc>parseFloat(Sc)){_l=String(Cc);break e}}_l=Sc}var yl;if(Q.document&&ns){var Gf=vg();yl=Gf||parseInt(_l,10)||void 0}else yl=void 0;var f0=yl;function _i(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(yg){e:{try{ku(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:d0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_i.$.h.call(this)}}Ue(_i,Ze);var d0={2:"touch",3:"pen",4:"mouse"};_i.prototype.h=function(){_i.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ui="closure_listenable_"+(1e6*Math.random()|0),p0=0;function m0(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++p0,this.fa=this.ia=!1}function Na(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Nu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function g0(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Eg(t){const e={};for(const n in t)e[n]=t[n];return e}const Qf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Qf.length;i++)n=Qf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Da(t){this.src=t,this.g={},this.h=0}Da.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=El(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new m0(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function vl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=gg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Na(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function El(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Du="closure_lm_"+(1e6*Math.random()|0),Oc={};function wg(t,e,n,r,s){if(r&&r.once)return Ag(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)wg(t,e[i],n,r,s);return null}return n=Mu(n),t&&t[Ui]?t.O(e,n,Fi(r)?!!r.capture:!!r,s):Ig(t,e,n,!1,r,s)}function Ig(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Fi(s)?!!s.capture:!!s,a=xu(t);if(a||(t[Du]=a=new Da(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=_0(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)c0||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(bg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _0(){function t(n){return e.call(t.src,t.listener,n)}const e=y0;return t}function Ag(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ag(t,e[i],n,r,s);return null}return n=Mu(n),t&&t[Ui]?t.P(e,n,Fi(r)?!!r.capture:!!r,s):Ig(t,e,n,!0,r,s)}function Rg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Rg(t,e[i],n,r,s);else r=Fi(r)?!!r.capture:!!r,n=Mu(n),t&&t[Ui]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=El(i,n,r,s),-1<n&&(Na(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=xu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=El(e,n,r,s)),(n=-1<t?e[t]:null)&&Vu(n))}function Vu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ui])vl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(bg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=xu(e))?(vl(n,t),n.h==0&&(n.src=null,e[Du]=null)):Na(t)}}}function bg(t){return t in Oc?Oc[t]:Oc[t]="on"+t}function y0(t,e){if(t.fa)t=!0;else{e=new _i(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Vu(t),t=n.call(r,e)}return t}function xu(t){return t=t[Du],t instanceof Da?t:null}var kc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mu(t){return typeof t=="function"?t:(t[kc]||(t[kc]=function(e){return t.handleEvent(e)}),t[kc])}function Fe(){Gn.call(this),this.i=new Da(this),this.S=this,this.J=null}Ue(Fe,Gn);Fe.prototype[Ui]=!0;Fe.prototype.removeEventListener=function(t,e,n,r){Rg(this,t,e,n,r)};function He(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var s=e;e=new Ze(r,t),Tg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=fo(o,r,!0,e)&&s}if(o=e.g=t,s=fo(o,r,!0,e)&&s,s=fo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=fo(o,r,!1,e)&&s}Fe.prototype.N=function(){if(Fe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Na(n[r]);delete t.g[e],t.h--}}this.J=null};Fe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Fe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function fo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&vl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Lu=Q.JSON.stringify;class v0{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function E0(){var t=Fu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class T0{constructor(){this.h=this.g=null}add(e,n){const r=Sg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Sg=new v0(()=>new w0,t=>t.reset());class w0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function I0(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function A0(t){Q.setTimeout(()=>{throw t},0)}let yi,vi=!1,Fu=new T0,Pg=()=>{const t=Q.Promise.resolve(void 0);yi=()=>{t.then(R0)}};var R0=()=>{for(var t;t=E0();){try{t.h.call(t.g)}catch(n){A0(n)}var e=Sg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}vi=!1};function Va(t,e){Fe.call(this),this.h=t||1,this.g=e||Q,this.j=Xe(this.qb,this),this.l=Date.now()}Ue(Va,Fe);V=Va.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),He(this,"tick"),this.ga&&(Uu(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Uu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){Va.$.N.call(this),Uu(this),delete this.g};function Bu(t,e,n){if(typeof t=="function")n&&(t=Xe(t,n));else if(t&&typeof t.handleEvent=="function")t=Xe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function Cg(t){t.g=Bu(()=>{t.g=null,t.i&&(t.i=!1,Cg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class b0 extends Gn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Cg(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ei(t){Gn.call(this),this.h=t,this.g={}}Ue(Ei,Gn);var Jf=[];function Og(t,e,n,r){Array.isArray(n)||(n&&(Jf[0]=n.toString()),n=Jf);for(var s=0;s<n.length;s++){var i=wg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function kg(t){Nu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Vu(e)},t),t.g={}}Ei.prototype.N=function(){Ei.$.N.call(this),kg(this)};Ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xa(){this.g=!0}xa.prototype.Ea=function(){this.g=!1};function S0(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function P0(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Br(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+O0(t,n)+(r?" "+r:"")})}function C0(t,e){t.info(function(){return"TIMEOUT: "+e})}xa.prototype.info=function(){};function O0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Lu(n)}catch{return e}}var Ir={},Yf=null;function Ma(){return Yf=Yf||new Fe}Ir.Ta="serverreachability";function Ng(t){Ze.call(this,Ir.Ta,t)}Ue(Ng,Ze);function Ti(t){const e=Ma();He(e,new Ng(e))}Ir.STAT_EVENT="statevent";function Dg(t,e){Ze.call(this,Ir.STAT_EVENT,t),this.stat=e}Ue(Dg,Ze);function st(t){const e=Ma();He(e,new Dg(e,t))}Ir.Ua="timingevent";function Vg(t,e){Ze.call(this,Ir.Ua,t),this.size=e}Ue(Vg,Ze);function Bi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var La={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},xg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function $u(){}$u.prototype.h=null;function Xf(t){return t.h||(t.h=t.i())}function Mg(){}var $i={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ju(){Ze.call(this,"d")}Ue(ju,Ze);function qu(){Ze.call(this,"c")}Ue(qu,Ze);var Tl;function Fa(){}Ue(Fa,$u);Fa.prototype.g=function(){return new XMLHttpRequest};Fa.prototype.i=function(){return{}};Tl=new Fa;function ji(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ei(this),this.P=k0,t=gl?125:void 0,this.V=new Va(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Lg}function Lg(){this.i=null,this.g="",this.h=!1}var k0=45e3,Fg={},wl={};V=ji.prototype;V.setTimeout=function(t){this.P=t};function Il(t,e,n){t.L=1,t.A=Ba(_n(e)),t.u=n,t.S=!0,Ug(t,null)}function Ug(t,e){t.G=Date.now(),qi(t),t.B=_n(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Kg(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Lg,t.g=p_(t.l,n?e:null,!t.u),0<t.O&&(t.M=new b0(Xe(t.Pa,t,t.g),t.O)),Og(t.U,t.g,"readystatechange",t.nb),e=t.I?Eg(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ti(),S0(t.j,t.v,t.B,t.m,t.W,t.u)}V.nb=function(t){t=t.target;const e=this.M;e&&qt(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const u=qt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||gl||this.g&&(this.h.h||this.g.ja()||nd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ti(3):Ti(2)),Ua(this);var n=this.g.da();this.ca=n;t:if(Bg(this)){var r=nd(this.g);t="";var s=r.length,i=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sr(this),Zs(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,P0(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!gi(a)){var l=a;break t}}l=null}if(n=l)Br(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Al(this,n);else{this.i=!1,this.s=3,st(12),sr(this),Zs(this);break e}}this.S?($g(this,u,o),gl&&this.i&&u==3&&(Og(this.U,this.V,"tick",this.mb),this.V.start())):(Br(this.j,this.m,o,null),Al(this,o)),u==4&&sr(this),this.i&&!this.J&&(u==4?u_(this.l,this):(this.i=!1,qi(this)))}else X0(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),sr(this),Zs(this)}}}catch{}finally{}};function Bg(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function $g(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=N0(t,n),s==wl){e==4&&(t.s=4,st(14),r=!1),Br(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Fg){t.s=4,st(15),Br(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Br(t.j,t.m,s,null),Al(t,s);Bg(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,st(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qu(e),e.M=!0,st(11))):(Br(t.j,t.m,n,"[Invalid Chunked Response]"),sr(t),Zs(t))}V.mb=function(){if(this.g){var t=qt(this.g),e=this.g.ja();this.o<e.length&&(Ua(this),$g(this,t,e),this.i&&t!=4&&qi(this))}};function N0(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?wl:(n=Number(e.substring(n,r)),isNaN(n)?Fg:(r+=1,r+n>e.length?wl:(e=e.slice(r,r+n),t.o=r+n,e)))}V.cancel=function(){this.J=!0,sr(this)};function qi(t){t.Y=Date.now()+t.P,jg(t,t.P)}function jg(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Bi(Xe(t.lb,t),e)}function Ua(t){t.C&&(Q.clearTimeout(t.C),t.C=null)}V.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(C0(this.j,this.B),this.L!=2&&(Ti(),st(17)),sr(this),this.s=2,Zs(this)):jg(this,this.Y-t)};function Zs(t){t.l.H==0||t.J||u_(t.l,t)}function sr(t){Ua(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Uu(t.V),kg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Al(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Rl(n.i,t))){if(!t.K&&Rl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ta(n),Ha(n);else break e;Gu(n),st(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Bi(Xe(n.ib,n),6e3));if(1>=Jg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ir(n,11)}else if((t.K||n.g==t)&&ta(n),!gi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Hu(i,i.h),i.h=null))}if(r.F){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Ee(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=d_(r,r.J?r.pa:null,r.Y),o.K){Yg(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Ua(a),qi(a)),r.g=o}else c_(r);0<n.j.length&&za(n)}else l[0]!="stop"&&l[0]!="close"||ir(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ir(n,7):Ku(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ti(4)}catch{}}function D0(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Oa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function V0(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Oa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function qg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Oa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=V0(t),r=D0(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Hg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function x0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function hr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof hr){this.h=t.h,Zo(this,t.j),this.s=t.s,this.g=t.g,ea(this,t.m),this.l=t.l;var e=t.i,n=new wi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Zf(this,n),this.o=t.o}else t&&(e=String(t).match(Hg))?(this.h=!1,Zo(this,e[1]||"",!0),this.s=qs(e[2]||""),this.g=qs(e[3]||"",!0),ea(this,e[4]),this.l=qs(e[5]||"",!0),Zf(this,e[6]||"",!0),this.o=qs(e[7]||"")):(this.h=!1,this.i=new wi(null,this.h))}hr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Hs(e,ed,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Hs(e,ed,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Hs(n,n.charAt(0)=="/"?F0:L0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Hs(n,B0)),t.join("")};function _n(t){return new hr(t)}function Zo(t,e,n){t.j=n?qs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ea(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Zf(t,e,n){e instanceof wi?(t.i=e,$0(t.i,t.h)):(n||(e=Hs(e,U0)),t.i=new wi(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function Ba(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Hs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,M0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function M0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ed=/[#\/\?@]/g,L0=/[#\?:]/g,F0=/[#\?]/g,U0=/[#\?@]/g,B0=/#/g;function wi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qn(t){t.g||(t.g=new Map,t.h=0,t.i&&x0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=wi.prototype;V.add=function(t,e){Qn(this),this.i=null,t=ws(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function zg(t,e){Qn(t),e=ws(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Wg(t,e){return Qn(t),e=ws(t,e),t.g.has(e)}V.forEach=function(t,e){Qn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};V.ta=function(){Qn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};V.Z=function(t){Qn(this);let e=[];if(typeof t=="string")Wg(this,t)&&(e=e.concat(this.g.get(ws(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return Qn(this),this.i=null,t=ws(this,t),Wg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Kg(t,e,n){zg(t,e),0<n.length&&(t.i=null,t.g.set(ws(t,e),Ou(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ws(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function $0(t,e){e&&!t.j&&(Qn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(zg(this,r),Kg(this,s,n))},t)),t.j=e}var j0=class{constructor(t,e){this.g=t,this.map=e}};function Gg(t){this.l=t||q0,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var q0=10;function Qg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Jg(t){return t.h?1:t.g?t.g.size:0}function Rl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Hu(t,e){t.g?t.g.add(e):t.h=e}function Yg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Gg.prototype.cancel=function(){if(this.i=Xg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Xg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ou(t.i)}var H0=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function z0(){this.g=new H0}function W0(t,e,n){const r=n||"";try{qg(t,function(s,i){let o=s;Fi(s)&&(o=Lu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function K0(t,e){const n=new xa;if(Q.Image){const r=new Image;r.onload=ho(po,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ho(po,n,r,"TestLoadImage: error",!1,e),r.onabort=ho(po,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ho(po,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function po(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function $a(t){this.l=t.ec||null,this.j=t.ob||!1}Ue($a,$u);$a.prototype.g=function(){return new ja(this.l,this.j)};$a.prototype.i=function(t){return function(){return t}}({});function ja(t,e){Fe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=zu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ue(ja,Fe);var zu=0;V=ja.prototype;V.open=function(t,e){if(this.readyState!=zu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ii(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hi(this)),this.readyState=zu};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ii(this)),this.g&&(this.readyState=3,Ii(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Zg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Zg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Hi(this):Ii(this),this.readyState==3&&Zg(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,Hi(this))};V.Ya=function(t){this.g&&(this.response=t,Hi(this))};V.ka=function(){this.g&&Hi(this)};function Hi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ii(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ii(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var G0=Q.JSON.parse;function Re(t){Fe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=e_,this.L=this.M=!1}Ue(Re,Fe);var e_="",Q0=/^https?$/i,J0=["POST","PUT"];V=Re.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Tl.g(),this.C=this.u?Xf(this.u):Xf(Tl),this.g.onreadystatechange=Xe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){td(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Q.FormData&&t instanceof Q.FormData,!(0<=gg(J0,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{r_(this),0<this.B&&((this.L=Y0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Xe(this.ua,this)):this.A=Bu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){td(this,i)}};function Y0(t){return ns&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof Cu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,He(this,"timeout"),this.abort(8))};function td(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,t_(t),qa(t)}function t_(t){t.F||(t.F=!0,He(t,"complete"),He(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,He(this,"complete"),He(this,"abort"),qa(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qa(this,!0)),Re.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?n_(this):this.kb())};V.kb=function(){n_(this)};function n_(t){if(t.h&&typeof Cu<"u"&&(!t.C[1]||qt(t)!=4||t.da()!=2)){if(t.v&&qt(t)==4)Bu(t.La,0,t);else if(He(t,"readystatechange"),qt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Hg)[1]||null;!s&&Q.self&&Q.self.location&&(s=Q.self.location.protocol.slice(0,-1)),r=!Q0.test(s?s.toLowerCase():"")}n=r}if(n)He(t,"complete"),He(t,"success");else{t.m=6;try{var i=2<qt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",t_(t)}}finally{qa(t)}}}}function qa(t,e){if(t.g){r_(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||He(t,"ready");try{n.onreadystatechange=r}catch{}}}function r_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function qt(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),G0(e)}};function nd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case e_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function X0(t){const e={};t=(t.g&&2<=qt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(gi(t[r]))continue;var n=I0(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}g0(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function s_(t){let e="";return Nu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Wu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=s_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Ds(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function i_(t){this.Ga=0,this.j=[],this.l=new xa,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ds("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ds("baseRetryDelayMs",5e3,t),this.hb=Ds("retryDelaySeedMs",1e4,t),this.eb=Ds("forwardChannelMaxRetries",2,t),this.xa=Ds("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Gg(t&&t.concurrentRequestLimit),this.Ja=new z0,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=i_.prototype;V.ra=8;V.H=1;function Ku(t){if(o_(t),t.H==3){var e=t.W++,n=_n(t.I);if(Ee(n,"SID",t.K),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),zi(t,n),e=new ji(t,t.l,e),e.L=2,e.A=Ba(_n(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.A,n=!0),n||(e.g=p_(e.l,null),e.g.ha(e.A)),e.G=Date.now(),qi(e)}f_(t)}function Ha(t){t.g&&(Qu(t),t.g.cancel(),t.g=null)}function o_(t){Ha(t),t.u&&(Q.clearTimeout(t.u),t.u=null),ta(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function za(t){if(!Qg(t.i)&&!t.m){t.m=!0;var e=t.Na;yi||Pg(),vi||(yi(),vi=!0),Fu.add(e,t),t.C=0}}function Z0(t,e){return Jg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Bi(Xe(t.Na,t,e),h_(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ji(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Eg(i),Tg(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=a_(this,s,e),n=_n(this.I),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),zi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(s_(i)))+"&"+e:this.o&&Wu(n,this.o,i)),Hu(this.i,s),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),s.aa=!0,Il(s,n,null)):Il(s,n,e),this.H=2}}else this.H==3&&(t?rd(this,t):this.j.length==0||Qg(this.i)||rd(this))};function rd(t,e){var n;e?n=e.m:n=t.W++;const r=_n(t.I);Ee(r,"SID",t.K),Ee(r,"RID",n),Ee(r,"AID",t.V),zi(t,r),t.o&&t.s&&Wu(r,t.o,t.s),n=new ji(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=a_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Hu(t.i,n),Il(n,r,e)}function zi(t,e){t.na&&Nu(t.na,function(n,r){Ee(e,r,n)}),t.h&&qg({},function(n,r){Ee(e,r,n)})}function a_(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Xe(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{W0(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function c_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;yi||Pg(),vi||(yi(),vi=!0),Fu.add(e,t),t.A=0}}function Gu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Bi(Xe(t.Ma,t),h_(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,l_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Bi(Xe(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,st(10),Ha(this),l_(this))};function Qu(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function l_(t){t.g=new ji(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=_n(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.K),Ee(e,"AID",t.V),Ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ee(e,"TO",t.qa),Ee(e,"TYPE","xmlhttp"),zi(t,e),t.o&&t.s&&Wu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ba(_n(e)),n.u=null,n.S=!0,Ug(n,t)}V.ib=function(){this.v!=null&&(this.v=null,Ha(this),Gu(this),st(19))};function ta(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function u_(t,e){var n=null;if(t.g==e){ta(t),Qu(t),t.g=null;var r=2}else if(Rl(t.i,e))n=e.F,Yg(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Ma(),He(r,new Vg(r,n)),za(t)}else c_(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&Z0(t,e)||r==2&&Gu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ir(t,5);break;case 4:ir(t,10);break;case 3:ir(t,6);break;default:ir(t,2)}}}function h_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ir(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Xe(t.pb,t);n||(n=new hr("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Zo(n,"https"),Ba(n)),K0(n.toString(),r)}else st(2);t.H=0,t.h&&t.h.za(e),f_(t),o_(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),st(2)):(this.l.info("Failed to ping google.com"),st(1))};function f_(t){if(t.H=0,t.ma=[],t.h){const e=Xg(t.i);(e.length!=0||t.j.length!=0)&&(Kf(t.ma,e),Kf(t.ma,t.j),t.i.i.length=0,Ou(t.j),t.j.length=0),t.h.ya()}}function d_(t,e,n){var r=n instanceof hr?_n(n):new hr(n);if(r.g!="")e&&(r.g=e+"."+r.g),ea(r,r.m);else{var s=Q.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new hr(null);r&&Zo(i,r),e&&(i.g=e),s&&ea(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ee(r,n,e),Ee(r,"VER",t.ra),zi(t,r),r}function p_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Re(new $a({ob:n})):new Re(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function m_(){}V=m_.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function na(){if(ns&&!(10<=Number(f0)))throw Error("Environmental error: no available transport.")}na.prototype.g=function(t,e){return new _t(t,e)};function _t(t,e){Fe.call(this),this.g=new i_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!gi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!gi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Is(this)}Ue(_t,Fe);_t.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;st(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=d_(t,null,t.Y),za(t)};_t.prototype.close=function(){Ku(this.g)};_t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Lu(t),t=n);e.j.push(new j0(e.fb++,t)),e.H==3&&za(e)};_t.prototype.N=function(){this.g.h=null,delete this.j,Ku(this.g),delete this.g,_t.$.N.call(this)};function g_(t){ju.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ue(g_,ju);function __(){qu.call(this),this.status=1}Ue(__,qu);function Is(t){this.g=t}Ue(Is,m_);Is.prototype.Ba=function(){He(this.g,"a")};Is.prototype.Aa=function(t){He(this.g,new g_(t))};Is.prototype.za=function(t){He(this.g,new __)};Is.prototype.ya=function(){He(this.g,"b")};function eb(){this.blockSize=-1}function kt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ue(kt,eb);kt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Nc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}kt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Nc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Nc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Nc(this,r),s=0;break}}this.h=s,this.i+=e};kt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function fe(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var tb={};function Ju(t){return-128<=t&&128>t?l0(t,function(e){return new fe([e|0],0>e?-1:0)}):new fe([t|0],0>t?-1:0)}function Ht(t){if(isNaN(t)||!isFinite(t))return Qr;if(0>t)return $e(Ht(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=bl;return new fe(e,0)}function y_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return $e(y_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ht(Math.pow(e,8)),r=Qr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Ht(Math.pow(e,i)),r=r.R(i).add(Ht(o))):(r=r.R(n),r=r.add(Ht(o)))}return r}var bl=4294967296,Qr=Ju(0),Sl=Ju(1),sd=Ju(16777216);V=fe.prototype;V.ea=function(){if(Et(this))return-$e(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:bl+r)*e,e*=bl}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ln(this))return"0";if(Et(this))return"-"+$e(this).toString(t);for(var e=Ht(Math.pow(t,6)),n=this,r="";;){var s=sa(n,e).g;n=ra(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,ln(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ln(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Et(t){return t.h==-1}V.X=function(t){return t=ra(this,t),Et(t)?-1:ln(t)?0:1};function $e(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new fe(n,~t.h).add(Sl)}V.abs=function(){return Et(this)?$e(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new fe(n,n[n.length-1]&-2147483648?-1:0)};function ra(t,e){return t.add($e(e))}V.R=function(t){if(ln(this)||ln(t))return Qr;if(Et(this))return Et(t)?$e(this).R($e(t)):$e($e(this).R(t));if(Et(t))return $e(this.R($e(t)));if(0>this.X(sd)&&0>t.X(sd))return Ht(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,mo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,mo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,mo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,mo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new fe(n,0)};function mo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Vs(t,e){this.g=t,this.h=e}function sa(t,e){if(ln(e))throw Error("division by zero");if(ln(t))return new Vs(Qr,Qr);if(Et(t))return e=sa($e(t),e),new Vs($e(e.g),$e(e.h));if(Et(e))return e=sa(t,$e(e)),new Vs($e(e.g),e.h);if(30<t.g.length){if(Et(t)||Et(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Sl,r=e;0>=r.X(t);)n=id(n),r=id(r);var s=Dr(n,1),i=Dr(r,1);for(r=Dr(r,2),n=Dr(n,2);!ln(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Dr(r,1),n=Dr(n,1)}return e=ra(t,s.R(e)),new Vs(s,e)}for(s=Qr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Ht(n),o=i.R(e);Et(o)||0<o.X(t);)n-=r,i=Ht(n),o=i.R(e);ln(i)&&(i=Sl),s=s.add(i),t=ra(t,o)}return new Vs(s,t)}V.gb=function(t){return sa(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new fe(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new fe(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new fe(n,this.h^t.h)};function id(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new fe(n,t.h)}function Dr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new fe(s,t.h)}na.prototype.createWebChannel=na.prototype.g;_t.prototype.send=_t.prototype.u;_t.prototype.open=_t.prototype.m;_t.prototype.close=_t.prototype.close;La.NO_ERROR=0;La.TIMEOUT=8;La.HTTP_ERROR=6;xg.COMPLETE="complete";Mg.EventType=$i;$i.OPEN="a";$i.CLOSE="b";$i.ERROR="c";$i.MESSAGE="d";Fe.prototype.listen=Fe.prototype.O;Re.prototype.listenOnce=Re.prototype.P;Re.prototype.getLastError=Re.prototype.Sa;Re.prototype.getLastErrorCode=Re.prototype.Ia;Re.prototype.getStatus=Re.prototype.da;Re.prototype.getResponseJson=Re.prototype.Wa;Re.prototype.getResponseText=Re.prototype.ja;Re.prototype.send=Re.prototype.ha;Re.prototype.setWithCredentials=Re.prototype.Oa;kt.prototype.digest=kt.prototype.l;kt.prototype.reset=kt.prototype.reset;kt.prototype.update=kt.prototype.j;fe.prototype.add=fe.prototype.add;fe.prototype.multiply=fe.prototype.R;fe.prototype.modulo=fe.prototype.gb;fe.prototype.compare=fe.prototype.X;fe.prototype.toNumber=fe.prototype.ea;fe.prototype.toString=fe.prototype.toString;fe.prototype.getBits=fe.prototype.D;fe.fromNumber=Ht;fe.fromString=y_;var nb=function(){return new na},rb=function(){return Ma()},Dc=La,sb=xg,ib=Ir,od={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},go=Mg,ob=Re,ab=kt,Jr=fe;const ad="@firebase/firestore";/**
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
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
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
 */let As="10.7.0";/**
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
 */const yr=new gu("@firebase/firestore");function xs(){return yr.logLevel}function U(t,...e){if(yr.logLevel<=ne.DEBUG){const n=e.map(Yu);yr.debug(`Firestore (${As}): ${t}`,...n)}}function yn(t,...e){if(yr.logLevel<=ne.ERROR){const n=e.map(Yu);yr.error(`Firestore (${As}): ${t}`,...n)}}function rs(t,...e){if(yr.logLevel<=ne.WARN){const n=e.map(Yu);yr.warn(`Firestore (${As}): ${t}`,...n)}}function Yu(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${As}) INTERNAL ASSERTION FAILED: `+t;throw yn(e),new Error(e)}function ye(t,e){t||K()}function Z(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class hn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class v_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class lb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ub{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new hn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new v_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new Qe(e)}}class hb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new hb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class db{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.R=n.token,new db(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function mb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class E_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=mb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ve(0,0))}static max(){return new J(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ai{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ai.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ai?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Ai{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const gb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends Ai{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return gb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new F(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new F(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Te.fromString(e))}static fromName(e){return new q(Te.fromString(e).popFirst(5))}static empty(){return new q(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Te(e.slice()))}}function _b(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new jn(s,q.empty(),e)}function yb(t){return new jn(t.readTime,t.key,-1)}class jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new jn(J.min(),q.empty(),-1)}static max(){return new jn(J.max(),q.empty(),-1)}}function vb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const Eb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Wi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==Eb)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(s=>s?b.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new b((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new b((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ki(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Xu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Xu._e=-1;function Wa(t){return t==null}function ia(t){return t===0&&1/t==-1/0}function wb(t){return typeof t=="number"&&Number.isInteger(t)&&!ia(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function cd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function T_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _o(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _o(this.root,e,this.comparator,!1)}getReverseIterator(){return new _o(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _o(this.root,e,this.comparator,!0)}}class _o{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Be.RED,this.left=s??Be.EMPTY,this.right=i??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Be(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ze{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ld(this.data.getIterator())}getIteratorFrom(e){return new ld(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class ld{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ct{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new ze(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class w_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new w_("Invalid base64 string: "+i):i}}(e);return new tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const Ib=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qn(t){if(ye(!!t),typeof t=="string"){let e=0;const n=Ib.exec(t);if(ye(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vr(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
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
 */function Zu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function eh(t){const e=t.mapValue.fields.__previous_value__;return Zu(e)?eh(e):e}function Ri(t){const e=qn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
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
 */class Ab{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class bi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const yo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zu(t)?4:Rb(t)?9007199254740991:10:K()}function Zt(t,e){if(t===e)return!0;const n=Er(t);if(n!==Er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ri(t).isEqual(Ri(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=qn(s.timestampValue),a=qn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vr(s.bytesValue).isEqual(vr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ce(s.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(s.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ce(s.integerValue)===Ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ce(s.doubleValue),a=Ce(i.doubleValue);return o===a?ia(o)===ia(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(cd(o)!==cd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Zt(o[c],a[c])))return!1;return!0}(t,e);default:return K()}}function Si(t,e){return(t.values||[]).find(n=>Zt(n,e))!==void 0}function is(t,e){if(t===e)return 0;const n=Er(t),r=Er(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ce(i.integerValue||i.doubleValue),c=Ce(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return ud(t.timestampValue,e.timestampValue);case 4:return ud(Ri(t),Ri(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(i,o){const a=vr(i),c=vr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=oe(a[l],c[l]);if(u!==0)return u}return oe(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=oe(Ce(i.latitude),Ce(o.latitude));return a!==0?a:oe(Ce(i.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=is(a[l],c[l]);if(u)return u}return oe(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===yo.mapValue&&o===yo.mapValue)return 0;if(i===yo.mapValue)return 1;if(o===yo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=oe(c[h],u[h]);if(f!==0)return f;const p=is(a[c[h]],l[u[h]]);if(p!==0)return p}return oe(c.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function ud(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=qn(t),r=qn(e),s=oe(n.seconds,r.seconds);return s!==0?s:oe(n.nanos,r.nanos)}function os(t){return Pl(t)}function Pl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=qn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Pl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Pl(n.fields[o])}`;return s+"}"}(t.mapValue):K()}function hd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cl(t){return!!t&&"integerValue"in t}function th(t){return!!t&&"arrayValue"in t}function fd(t){return!!t&&"nullValue"in t}function dd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ko(t){return!!t&&"mapValue"in t}function ei(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ei(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ei(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Rb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ko(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ei(n)}setAll(e){let n=qe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ei(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ko(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ko(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Rs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Tt(ei(this.value))}}function I_(t){const e=[];return Rs(t.fields,(n,r)=>{const s=new qe([n]);if(ko(r)){const i=I_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ct(e)}/**
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
 */class Je{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Je(e,0,J.min(),J.min(),J.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,s){return new Je(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new Je(e,2,n,J.min(),J.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,J.min(),J.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class oa{constructor(e,n){this.position=e,this.inclusive=n}}function pd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=is(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function md(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class aa{constructor(e,n="asc"){this.field=e,this.dir=n}}function bb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class A_{}class Oe extends A_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Pb(e,n,r):n==="array-contains"?new kb(e,r):n==="in"?new Nb(e,r):n==="not-in"?new Db(e,r):n==="array-contains-any"?new Vb(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Cb(e,r):new Ob(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(is(n,this.value)):n!==null&&Er(this.value)===Er(n)&&this.matchesComparison(is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nt extends A_{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Nt(e,n)}matches(e){return R_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function R_(t){return t.op==="and"}function b_(t){return Sb(t)&&R_(t)}function Sb(t){for(const e of t.filters)if(e instanceof Nt)return!1;return!0}function Ol(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+os(t.value);if(b_(t))return t.filters.map(e=>Ol(e)).join(",");{const e=t.filters.map(n=>Ol(n)).join(",");return`${t.op}(${e})`}}function S_(t,e){return t instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&Zt(r.value,s.value)}(t,e):t instanceof Nt?function(r,s){return s instanceof Nt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&S_(o,s.filters[a]),!0):!1}(t,e):void K()}function P_(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`}(t):t instanceof Nt?function(n){return n.op.toString()+" {"+n.getFilters().map(P_).join(" ,")+"}"}(t):"Filter"}class Pb extends Oe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class Cb extends Oe{constructor(e,n){super(e,"in",n),this.keys=C_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ob extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=C_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function C_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class kb extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return th(n)&&Si(n.arrayValue,this.value)}}class Nb extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Si(this.value.arrayValue,n)}}class Db extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Si(this.value.arrayValue,n)}}class Vb extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!th(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Si(this.value.arrayValue,r))}}/**
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
 */class xb{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function gd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new xb(t,e,n,r,s,i,o)}function nh(t){const e=Z(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ol(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Wa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>os(r)).join(",")),e.ce=n}return e.ce}function rh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!S_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!md(t.startAt,e.startAt)&&md(t.endAt,e.endAt)}function kl(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Gi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Mb(t,e,n,r,s,i,o,a){return new Gi(t,e,n,r,s,i,o,a)}function sh(t){return new Gi(t)}function _d(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function O_(t){return t.collectionGroup!==null}function ti(t){const e=Z(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ze(qe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new aa(i,r))}),n.has(qe.keyField().canonicalString())||e.le.push(new aa(qe.keyField(),r))}return e.le}function Jt(t){const e=Z(t);return e.he||(e.he=Lb(e,ti(t))),e.he}function Lb(t,e){if(t.limitType==="F")return gd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new aa(s.field,i)});const n=t.endAt?new oa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new oa(t.startAt.position,t.startAt.inclusive):null;return gd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nl(t,e){const n=t.filters.concat([e]);return new Gi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Dl(t,e,n){return new Gi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ka(t,e){return rh(Jt(t),Jt(e))&&t.limitType===e.limitType}function k_(t){return`${nh(Jt(t))}|lt:${t.limitType}`}function Mr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>P_(s)).join(", ")}]`),Wa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>os(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>os(s)).join(",")),`Target(${r})`}(Jt(t))}; limitType=${t.limitType})`}function Ga(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ti(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=pd(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ti(r),s)||r.endAt&&!function(o,a,c){const l=pd(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ti(r),s))}(t,e)}function Fb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function N_(t){return(e,n)=>{let r=!1;for(const s of ti(t)){const i=Ub(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ub(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?is(c,l):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class bs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return T_(this.inner)}size(){return this.innerSize}}/**
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
 */const Bb=new Ae(q.comparator);function vn(){return Bb}const D_=new Ae(q.comparator);function zs(...t){let e=D_;for(const n of t)e=e.insert(n.key,n);return e}function V_(t){let e=D_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function or(){return ni()}function x_(){return ni()}function ni(){return new bs(t=>t.toString(),(t,e)=>t.isEqual(e))}const $b=new Ae(q.comparator),jb=new ze(q.comparator);function te(...t){let e=jb;for(const n of t)e=e.add(n);return e}const qb=new ze(oe);function Hb(){return qb}/**
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
 */function M_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ia(e)?"-0":e}}function L_(t){return{integerValue:""+t}}function zb(t,e){return wb(e)?L_(e):M_(t,e)}/**
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
 */class Qa{constructor(){this._=void 0}}function Wb(t,e,n){return t instanceof ca?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Zu(i)&&(i=eh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Pi?U_(t,e):t instanceof Ci?B_(t,e):function(s,i){const o=F_(s,i),a=yd(o)+yd(s.Ie);return Cl(o)&&Cl(s.Ie)?L_(a):M_(s.serializer,a)}(t,e)}function Kb(t,e,n){return t instanceof Pi?U_(t,e):t instanceof Ci?B_(t,e):n}function F_(t,e){return t instanceof la?function(r){return Cl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ca extends Qa{}class Pi extends Qa{constructor(e){super(),this.elements=e}}function U_(t,e){const n=$_(e);for(const r of t.elements)n.some(s=>Zt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ci extends Qa{constructor(e){super(),this.elements=e}}function B_(t,e){let n=$_(e);for(const r of t.elements)n=n.filter(s=>!Zt(s,r));return{arrayValue:{values:n}}}class la extends Qa{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function yd(t){return Ce(t.integerValue||t.doubleValue)}function $_(t){return th(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Gb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Pi&&s instanceof Pi||r instanceof Ci&&s instanceof Ci?ss(r.elements,s.elements,Zt):r instanceof la&&s instanceof la?Zt(r.Ie,s.Ie):r instanceof ca&&s instanceof ca}(t.transform,e.transform)}class Qb{constructor(e,n){this.version=e,this.transformResults=n}}class fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function No(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ja{}function j_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new H_(t.key,fn.none()):new Qi(t.key,t.data,fn.none());{const n=t.data,r=Tt.empty();let s=new ze(qe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ar(t.key,r,new Ct(s.toArray()),fn.none())}}function Jb(t,e,n){t instanceof Qi?function(s,i,o){const a=s.value.clone(),c=Ed(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ar?function(s,i,o){if(!No(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Ed(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(q_(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ri(t,e,n,r){return t instanceof Qi?function(i,o,a,c){if(!No(i.precondition,o))return a;const l=i.value.clone(),u=Td(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ar?function(i,o,a,c){if(!No(i.precondition,o))return a;const l=Td(i.fieldTransforms,c,o),u=o.data;return u.setAll(q_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return No(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Yb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=F_(r.transform,s||null);i!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,i))}return n||null}function vd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ss(r,s,(i,o)=>Gb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qi extends Ja{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ar extends Ja{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function q_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ed(t,e,n){const r=new Map;ye(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Kb(o,a,n[s]))}return r}function Td(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Wb(i,o,e))}return r}class H_ extends Ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xb extends Ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Zb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Jb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=x_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=j_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,r)=>vd(n,r))&&ss(this.baseMutations,e.baseMutations,(n,r)=>vd(n,r))}}class ih{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ye(e.mutations.length===r.length);let s=function(){return $b}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ih(e,n,r,s)}}/**
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
 */class eS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class tS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Pe,re;function nS(t){switch(t){default:return K();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function z_(t){if(t===void 0)return yn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Pe.OK:return I.OK;case Pe.CANCELLED:return I.CANCELLED;case Pe.UNKNOWN:return I.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return I.INTERNAL;case Pe.UNAVAILABLE:return I.UNAVAILABLE;case Pe.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Pe.NOT_FOUND:return I.NOT_FOUND;case Pe.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Pe.ABORTED:return I.ABORTED;case Pe.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Pe.DATA_LOSS:return I.DATA_LOSS;default:return K()}}(re=Pe||(Pe={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rS(){return new TextEncoder}/**
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
 */const sS=new Jr([4294967295,4294967295],0);function wd(t){const e=rS().encode(t),n=new ab;return n.update(e),new Uint8Array(n.digest())}function Id(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Jr([n,r],0),new Jr([s,i],0)]}class oh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ws(`Invalid padding: ${n}`);if(r<0)throw new Ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ws(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ws(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Jr.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Jr.fromNumber(r)));return s.compare(sS)===1&&(s=new Jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=wd(e),[r,s]=Id(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new oh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=wd(e),[r,s]=Id(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ya{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ji.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ya(J.min(),s,new Ae(oe),vn(),te())}}class Ji{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ji(r,n,te(),te(),te())}}/**
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
 */class Do{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class W_{constructor(e,n){this.targetId=e,this.fe=n}}class K_{constructor(e,n,r=tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ad{constructor(){this.ge=0,this.pe=bd(),this.ye=tt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=te(),n=te(),r=te();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K()}}),new Ji(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=bd()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ye(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class iS{constructor(e){this.Le=e,this.ke=new Map,this.qe=vn(),this.Qe=Rd(),this.Ke=new Ae(oe)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(kl(i))if(r===0){const o=new q(i.path);this.We(n,o,Je.newNoDocument(o,J.min()))}else ye(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=vr(r).toUint8Array()}catch(c){if(c instanceof w_)return rs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new oh(o,s,i)}catch(c){return rs(c instanceof Ws?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&kl(a.target)){const c=new q(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,Je.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=te();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new Ya(e,n,this.Ke,this.qe,r);return this.qe=vn(),this.Qe=Rd(),this.Ke=new Ae(oe),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Ad,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new ze(oe),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Ad),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Rd(){return new Ae(q.comparator)}function bd(){return new Ae(q.comparator)}const oS={asc:"ASCENDING",desc:"DESCENDING"},aS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cS={and:"AND",or:"OR"};class lS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vl(t,e){return t.useProto3Json||Wa(e)?e:{value:e}}function ua(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function G_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function uS(t,e){return ua(t,e.toTimestamp())}function Yt(t){return ye(!!t),J.fromTimestamp(function(n){const r=qn(n);return new Ve(r.seconds,r.nanos)}(t))}function ah(t,e){return function(r){return new Te(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Q_(t){const e=Te.fromString(t);return ye(Z_(e)),e}function xl(t,e){return ah(t.databaseId,e.path)}function Vc(t,e){const n=Q_(e);if(n.get(1)!==t.databaseId.projectId)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(J_(n))}function Ml(t,e){return ah(t.databaseId,e)}function hS(t){const e=Q_(t);return e.length===4?Te.emptyPath():J_(e)}function Ll(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function J_(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sd(t,e,n){return{name:xl(t,e),fields:n.value.mapValue.fields}}function fS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(ye(u===void 0||typeof u=="string"),tt.fromBase64String(u||"")):(ye(u===void 0||u instanceof Uint8Array),tt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:z_(l.code);return new F(u,l.message||"")}(o);n=new K_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Vc(t,r.document.name),i=Yt(r.document.updateTime),o=r.document.createTime?Yt(r.document.createTime):J.min(),a=new Tt({mapValue:{fields:r.document.fields}}),c=Je.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Do(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Vc(t,r.document),i=r.readTime?Yt(r.readTime):J.min(),o=Je.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Do([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Vc(t,r.document),i=r.removedTargetIds||[];n=new Do([],i,s,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new tS(s,i),a=r.targetId;n=new W_(a,o)}}return n}function dS(t,e){let n;if(e instanceof Qi)n={update:Sd(t,e.key,e.value)};else if(e instanceof H_)n={delete:xl(t,e.key)};else if(e instanceof Ar)n={update:Sd(t,e.key,e.data),updateMask:wS(e.fieldMask)};else{if(!(e instanceof Xb))return K();n={verify:xl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Pi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ci)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof la)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:uS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(t,e.precondition)),n}function pS(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Yt(s.updateTime):Yt(i);return o.isEqual(J.min())&&(o=Yt(i)),new Qb(o,s.transformResults||[])}(n,e))):[]}function mS(t,e){return{documents:[Ml(t,e.path)]}}function gS(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ml(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ml(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return X_(Nt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Lr(h.field),direction:vS(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Vl(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function _S(t){let e=hS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ye(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=Y_(h);return f instanceof Nt&&b_(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(_){return new aa(Fr(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Wa(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,p=h.values||[];return new oa(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,p=h.values||[];return new oa(p,f)}(n.endAt)),Mb(e,s,o,i,a,"F",c,l)}function yS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Y_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fr(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fr(n.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fr(n.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fr(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(Fr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nt.create(n.compositeFilter.filters.map(r=>Y_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function vS(t){return oS[t]}function ES(t){return aS[t]}function TS(t){return cS[t]}function Lr(t){return{fieldPath:t.canonicalString()}}function Fr(t){return qe.fromServerFormat(t.fieldPath)}function X_(t){return t instanceof Oe?function(n){if(n.op==="=="){if(dd(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NAN"}};if(fd(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dd(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NOT_NAN"}};if(fd(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lr(n.field),op:ES(n.op),value:n.value}}}(t):t instanceof Nt?function(n){const r=n.getFilters().map(s=>X_(s));return r.length===1?r[0]:{compositeFilter:{op:TS(n.op),filters:r}}}(t):K()}function wS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Z_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Vn{constructor(e,n,r,s,i=J.min(),o=J.min(),a=tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class IS{constructor(e){this.ut=e}}function AS(t){const e=_S({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Dl(e,e.limit,"L"):e}/**
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
 */class RS{constructor(){this.on=new bS}addToCollectionParentIndex(e,n){return this.on.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(jn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(jn.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class bS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ze(Te.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(Te.comparator)).toArray()}}/**
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
 */class as{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new as(0)}static Nn(){return new as(-1)}}/**
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
 */class SS{constructor(){this.changes=new bs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class PS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class CS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ri(r.mutation,s,Ct.empty(),Ve.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const s=or();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=zs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=vn();const o=ni(),a=function(){return ni()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Ar)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ri(u.mutation,l,u.mutation.getFieldMask(),Ve.now())):o.set(l.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new PS(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ni();let s=new Ae((o,a)=>o-a),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Ct.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||te()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=x_();u.forEach(f=>{if(!i.has(f)){const p=j_(n.get(f),r.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):O_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):b.resolve(or());let a=-1,c=i;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,te())).next(u=>({batchId:a,changes:V_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let s=zs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=zs();return this.indexManager.getCollectionParents(e,i).next(a=>b.forEach(a,c=>{const l=function(h,f){return new Gi(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Je.newInvalidDocument(u)))});let a=zs();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&ri(u.mutation,l,Ct.empty(),Ve.now()),Ga(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class OS{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return b.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Yt(s.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:AS(s.bundledQuery),readTime:Yt(s.readTime)}}(n)),b.resolve()}}/**
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
 */class kS{constructor(){this.overlays=new Ae(q.comparator),this.lr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=or();return b.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const s=or(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return b.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ae((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=or(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=or(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return b.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new eS(n,r));let i=this.lr.get(n);i===void 0&&(i=te(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
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
 */class ch{constructor(){this.hr=new ze(Le.Pr),this.Ir=new ze(Le.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Le(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new q(new Te([])),r=new Le(n,e),s=new Le(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new q(new Te([])),r=new Le(n,e),s=new Le(n,e+1);let i=te();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Le(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return q.comparator(e.key,n.key)||oe(e.gr,n.gr)}static Tr(e,n){return oe(e.gr,n.gr)||q.comparator(e.key,n.key)}}/**
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
 */class NS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ze(Le.Pr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Zb(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Le(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),s=new Le(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(oe);return n.forEach(s=>{const i=new Le(s,0),o=new Le(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),b.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new Le(new q(i),0);let a=new ze(oe);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),b.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ye(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return b.forEach(n.mutations,s=>{const i=new Le(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Le(n,0),s=this.yr.firstAfterOrEqual(r);return b.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class DS{constructor(e){this.Cr=e,this.docs=function(){return new Ae(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let r=vn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Je.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=vn();const o=n.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||vb(yb(u),r)<=0||(s.has(u.key)||Ga(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K()}vr(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new VS(this)}getSize(e){return b.resolve(this.size)}}class VS extends SS{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class xS{constructor(e){this.persistence=e,this.Fr=new bs(n=>nh(n),rh),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Mr=0,this.Or=new ch,this.targetCount=0,this.Nr=as.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),b.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new as(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.kn(n),b.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Or.containsKey(n))}}/**
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
 */class MS{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Xu(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new xS(this),this.indexManager=new RS,this.remoteDocumentCache=function(s){return new DS(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new IS(n),this.Kr=new OS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new NS(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const s=new LS(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return b.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class LS extends Tb{constructor(e){super(),this.currentSequenceNumber=e}}class lh{constructor(e){this.persistence=e,this.Gr=new ch,this.zr=null}static jr(e){return new lh(e)}get Hr(){if(this.zr)return this.zr;throw K()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),b.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Hr,r=>{const s=q.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return b.or([()=>b.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class uh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=te(),s=te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new uh(e,n.fromCache,r,s)}}/**
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
 */class FS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class US{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new FS;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(xs()<=ne.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Mr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),b.resolve()):(xs()<=ne.DEBUG&&U("QueryEngine","Query:",Mr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(xs()<=ne.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Mr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jt(n))):b.resolve())}zi(e,n){if(_d(n))return b.resolve(null);let r=Jt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Dl(n,null,"F"),r=Jt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=te(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,Dl(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,s){return _d(n)||s.isEqual(J.min())?b.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?b.resolve(null):(xs()<=ne.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mr(n)),this.Xi(e,o,n,_b(s,-1)).next(a=>a))})}Yi(e,n){let r=new ze(N_(e));return n.forEach((s,i)=>{Ga(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return xs()<=ne.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Mr(n)),this.Gi.getDocumentsMatchingQuery(e,n,jn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class BS{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Ae(oe),this.ns=new bs(i=>nh(i),rh),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new CS(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function $S(t,e,n,r){return new BS(t,e,n,r)}async function ey(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=te();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function jS(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let p=b.resolve();return f.forEach(_=>{p=p.next(()=>u.getEntry(c,_)).next(y=>{const w=l.docVersions.get(_);ye(w!==null),y.version.compareTo(w)<0&&(h.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=te();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ty(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function qS(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(tt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(y,w,P){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(f,p,u)&&a.push(n.qr.updateTargetData(i,p))});let c=vn(),l=te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(HS(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(J.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=s,i))}function HS(t,e,n){let r=te(),s=te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=vn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function zS(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function WS(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,b.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Vn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Fl(t,e,n){const r=Z(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ki(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function Pd(t,e,n){const r=Z(t);let s=J.min(),i=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=Z(c),f=h.ns.get(u);return f!==void 0?b.resolve(h.ts.get(f)):h.qr.getTargetData(l,u)}(r,o,Jt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:te())).next(a=>(KS(r,Fb(e),a),{documents:a,ls:i})))}function KS(t,e,n){let r=t.rs.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class Cd{constructor(){this.activeTargetIds=Hb()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GS{constructor(){this.eo=new Cd,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Cd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class QS{ro(e){}shutdown(){}}/**
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
 */class Od{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vo=null;function xc(){return vo===null?vo=function(){return 268435456+Math.round(2147483648*Math.random())}():vo++,"0x"+vo.toString(16)}/**
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
 */const JS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class YS{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const Ge="WebChannelConnection";class XS extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=xc(),c=this.So(n,r);U("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,i,o),this.Do(n,c,l,s).then(u=>(U("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw rs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+As}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=JS[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=xc();return new Promise((o,a)=>{const c=new ob;c.setWithCredentials(!0),c.listenOnce(sb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Dc.NO_ERROR:const u=c.getResponseJson();U(Ge,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Dc.TIMEOUT:U(Ge,`RPC '${e}' ${i} timed out`),a(new F(I.DEADLINE_EXCEEDED,"Request time out"));break;case Dc.HTTP_ERROR:const h=c.getStatus();if(U(Ge,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const _=function(w){const P=w.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(P)>=0?P:I.UNKNOWN}(p.status);a(new F(_,p.message))}else a(new F(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new F(I.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{U(Ge,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);U(Ge,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}vo(e,n,r){const s=xc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nb(),a=rb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");U(Ge,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,p=!1;const _=new YS({co:w=>{p?U(Ge,`Not sending because RPC '${e}' stream ${s} is closed:`,w):(f||(U(Ge,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),U(Ge,`RPC '${e}' stream ${s} sending:`,w),h.send(w))},lo:()=>h.close()}),y=(w,P,k)=>{w.listen(P,$=>{try{k($)}catch(L){setTimeout(()=>{throw L},0)}})};return y(h,go.EventType.OPEN,()=>{p||U(Ge,`RPC '${e}' stream ${s} transport opened.`)}),y(h,go.EventType.CLOSE,()=>{p||(p=!0,U(Ge,`RPC '${e}' stream ${s} transport closed`),_.Ro())}),y(h,go.EventType.ERROR,w=>{p||(p=!0,rs(Ge,`RPC '${e}' stream ${s} transport errored:`,w),_.Ro(new F(I.UNAVAILABLE,"The operation could not be completed")))}),y(h,go.EventType.MESSAGE,w=>{var P;if(!p){const k=w.data[0];ye(!!k);const $=k,L=$.error||((P=$[0])===null||P===void 0?void 0:P.error);if(L){U(Ge,`RPC '${e}' stream ${s} received error:`,L);const ge=L.status;let pe=function(yt){const nt=Pe[yt];if(nt!==void 0)return z_(nt)}(ge),Ne=L.message;pe===void 0&&(pe=I.INTERNAL,Ne="Unknown error status: "+ge+" with message "+L.message),p=!0,_.Ro(new F(pe,Ne)),h.close()}else U(Ge,`RPC '${e}' stream ${s} received:`,k),_.Vo(k)}}),y(a,ib.STAT_EVENT,w=>{w.stat===od.PROXY?U(Ge,`RPC '${e}' stream ${s} detected buffering proxy`):w.stat===od.NOPROXY&&U(Ge,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Ao()},0),_}}function Mc(){return typeof document<"u"?document:null}/**
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
 */function Xa(t){return new lS(t,!0)}/**
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
 */class ny{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class ry{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new ny(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(yn(n.toString()),yn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new F(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZS extends ry{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=fS(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Yt(o.readTime):J.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Ll(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=kl(c)?{documents:mS(i,c)}:{query:gS(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=G_(i,o.resumeToken);const l=Vl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=ua(i,o.snapshotVersion.toTimestamp());const l=Vl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=yS(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Ll(this.serializer),n.removeTarget=e,this.e_(n)}}class eP extends ry{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=pS(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.I_(r,n)}return ye(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Ll(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dS(this.serializer,r))};this.e_(n)}}/**
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
 */class tP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(I.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(I.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class nP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(yn(n),this.f_=!1):U("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class rP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Rr(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=Z(c);l.C_.add(4),await Yi(l),l.M_.set("Unknown"),l.C_.delete(4),await Za(l)}(this))})}),this.M_=new nP(r,s)}}async function Za(t){if(Rr(t))for(const e of t.v_)await e(!0)}async function Yi(t){for(const e of t.v_)await e(!1)}function sy(t,e){const n=Z(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),dh(n)?fh(n):Ss(n).Ho()&&hh(n,e))}function iy(t,e){const n=Z(t),r=Ss(n);n.D_.delete(e),r.Ho()&&oy(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Rr(n)&&n.M_.set("Unknown"))}function hh(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ss(t).u_(e)}function oy(t,e){t.x_.Oe(e),Ss(t).c_(e)}function fh(t){t.x_=new iS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ss(t).start(),t.M_.g_()}function dh(t){return Rr(t)&&!Ss(t).jo()&&t.D_.size>0}function Rr(t){return Z(t).C_.size===0}function ay(t){t.x_=void 0}async function sP(t){t.D_.forEach((e,n)=>{hh(t,e)})}async function iP(t,e){ay(t),dh(t)?(t.M_.w_(e),fh(t)):t.M_.set("Unknown")}async function oP(t,e,n){if(t.M_.set("Online"),e instanceof K_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ha(t,r)}else if(e instanceof Do?t.x_.$e(e):e instanceof W_?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(J.min()))try{const r=await ty(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.D_.get(l);u&&i.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.D_.get(c);if(!u)return;i.D_.set(c,u.withResumeToken(tt.EMPTY_BYTE_STRING,u.snapshotVersion)),oy(i,c);const h=new Vn(u.target,c,l,u.sequenceNumber);hh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await ha(t,r)}}async function ha(t,e,n){if(!Ki(e))throw e;t.C_.add(1),await Yi(t),t.M_.set("Offline"),n||(n=()=>ty(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Za(t)})}function cy(t,e){return e().catch(n=>ha(t,n,e))}async function ec(t){const e=Z(t),n=Hn(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;aP(e);)try{const s=await zS(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,cP(e,s)}catch(s){await ha(e,s)}ly(e)&&uy(e)}function aP(t){return Rr(t)&&t.b_.length<10}function cP(t,e){t.b_.push(e);const n=Hn(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function ly(t){return Rr(t)&&!Hn(t).jo()&&t.b_.length>0}function uy(t){Hn(t).start()}async function lP(t){Hn(t).E_()}async function uP(t){const e=Hn(t);for(const n of t.b_)e.P_(n.mutations)}async function hP(t,e,n){const r=t.b_.shift(),s=ih.from(r,e,n);await cy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ec(t)}async function fP(t,e){e&&Hn(t).h_&&await async function(r,s){if(function(o){return nS(o)&&o!==I.ABORTED}(s.code)){const i=r.b_.shift();Hn(r).Yo(),await cy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ec(r)}}(t,e),ly(t)&&uy(t)}async function kd(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Rr(n);n.C_.add(3),await Yi(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Za(n)}async function dP(t,e){const n=Z(t);e?(n.C_.delete(2),await Za(n)):e||(n.C_.add(2),await Yi(n),n.M_.set("Unknown"))}function Ss(t){return t.O_||(t.O_=function(n,r,s){const i=Z(n);return i.A_(),new ZS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:sP.bind(null,t),Io:iP.bind(null,t),a_:oP.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),dh(t)?fh(t):t.M_.set("Unknown")):(await t.O_.stop(),ay(t))})),t.O_}function Hn(t){return t.N_||(t.N_=function(n,r,s){const i=Z(n);return i.A_(),new eP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:lP.bind(null,t),Io:fP.bind(null,t),T_:uP.bind(null,t),I_:hP.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await ec(t)):(await t.N_.stop(),t.b_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class ph{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new ph(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mh(t,e){if(yn("AsyncQueue",`${e}: ${t}`),Ki(t))return new F(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Yr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=zs(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new Yr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Yr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Yr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Nd{constructor(){this.B_=new Ae(q.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):K():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class cs{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new cs(e,n,Yr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ka(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class pP{constructor(){this.k_=void 0,this.listeners=[]}}class mP{constructor(){this.queries=new bs(e=>k_(e),Ka),this.onlineState="Unknown",this.q_=new Set}}async function hy(t,e){const n=Z(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new pP),s)try{i.k_=await n.onListen(r)}catch(o){const a=mh(o,`Initialization of query '${Mr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&gh(n)}async function fy(t,e){const n=Z(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function gP(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&gh(n)}function _P(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function gh(t){t.q_.forEach(e=>{e.next()})}class dy{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class py{constructor(e){this.key=e}}class my{constructor(e){this.key=e}}class yP{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=te(),this.mutatedKeys=te(),this._a=N_(e),this.aa=new Yr(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Nd,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),p=Ga(this.query,h)?h:null,_=!!f&&this.mutatedKeys.has(f.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;f&&p?f.data.isEqual(p.data)?_!==y&&(r.track({type:3,doc:p}),w=!0):this.ha(f,p)||(r.track({type:2,doc:p}),w=!0,(c&&this._a(p,c)>0||l&&this._a(p,l)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),w=!0):f&&!p&&(r.track({type:1,doc:f}),w=!0,(c||l)&&(a=!0)),w&&(p?(o=o.add(p),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(p,_){const y=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return y(p)-y(_)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],c=this.oa.size===0&&this.current&&!s?1:0,l=c!==this.sa;return this.sa=c,o.length!==0||l?{snapshot:new cs(this.query,e.aa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Nd,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=te(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new my(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new py(r))}),n}da(e){this.ia=e.ls,this.oa=te();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return cs.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class vP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class EP{constructor(e){this.key=e,this.Ra=!1}}class TP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new bs(a=>k_(a),Ka),this.fa=new Map,this.ga=new Set,this.pa=new Ae(q.comparator),this.ya=new Map,this.wa=new ch,this.Sa={},this.ba=new Map,this.Da=as.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function wP(t,e){const n=NP(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await WS(n.localStore,Jt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await IP(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&sy(n.remoteStore,o)}return s}async function IP(t,e,n,r,s){t.va=(h,f,p)=>async function(y,w,P,k){let $=w.view.ca(P);$.Zi&&($=await Pd(y.localStore,w.query,!1).then(({documents:Ne})=>w.view.ca(Ne,$)));const L=k&&k.targetChanges.get(w.targetId),ge=k&&k.targetMismatches.get(w.targetId)!=null,pe=w.view.applyChanges($,y.isPrimaryClient,L,ge);return Vd(y,w.targetId,pe.Ta),pe.snapshot}(t,h,f,p);const i=await Pd(t.localStore,e,!0),o=new yP(e,i.ls),a=o.ca(i.documents),c=Ji.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Vd(t,n,l.Ta);const u=new vP(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function AP(t,e){const n=Z(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!Ka(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Fl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),iy(n.remoteStore,r.targetId),Ul(n,r.targetId)}).catch(Wi)):(Ul(n,r.targetId),await Fl(n.localStore,r.targetId,!0))}async function RP(t,e,n){const r=DP(t);try{const s=await function(o,a){const c=Z(o),l=Ve.now(),u=a.reduce((p,_)=>p.add(_.key),te());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let _=vn(),y=te();return c.ss.getEntries(p,u).next(w=>{_=w,_.forEach((P,k)=>{k.isValidDocument()||(y=y.add(P))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,_)).next(w=>{h=w;const P=[];for(const k of a){const $=Yb(k,h.get(k.key).overlayedDocument);$!=null&&P.push(new Ar(k.key,$,I_($.value.mapValue),fn.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,P,a)}).next(w=>{f=w;const P=w.applyToLocalDocumentSet(h,y);return c.documentOverlayCache.saveOverlays(p,w.batchId,P)})}).then(()=>({batchId:f.batchId,changes:V_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new Ae(oe)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Xi(r,s.changes),await ec(r.remoteStore)}catch(s){const i=mh(s,"Failed to persist write");n.reject(i)}}async function gy(t,e){const n=Z(t);try{const r=await qS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?ye(o.Ra):s.removedDocuments.size>0&&(ye(o.Ra),o.Ra=!1))}),await Xi(n,r,e)}catch(r){await Wi(r)}}function Dd(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=Z(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.listeners)f.Q_(a)&&(l=!0)}),l&&gh(c)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bP(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new Ae(q.comparator);o=o.insert(i,Je.newNoDocument(i,J.min()));const a=te().add(i),c=new Ya(J.min(),new Map,new Ae(oe),o,a);await gy(r,c),r.pa=r.pa.remove(i),r.ya.delete(e),_h(r)}else await Fl(r.localStore,e,!1).then(()=>Ul(r,e,n)).catch(Wi)}async function SP(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await jS(n.localStore,e);yy(n,r,null),_y(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xi(n,s)}catch(s){await Wi(s)}}async function PP(t,e,n){const r=Z(t);try{const s=await function(o,a){const c=Z(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(ye(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);yy(r,e,n),_y(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xi(r,s)}catch(s){await Wi(s)}}function _y(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function yy(t,e,n){const r=Z(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function Ul(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||vy(t,r)})}function vy(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(iy(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),_h(t))}function Vd(t,e,n){for(const r of n)r instanceof py?(t.wa.addReference(r.key,e),CP(t,r)):r instanceof my?(U("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||vy(t,r.key)):K()}function CP(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(U("SyncEngine","New document in limbo: "+n),t.ga.add(r),_h(t))}function _h(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new q(Te.fromString(e)),r=t.Da.next();t.ya.set(r,new EP(n)),t.pa=t.pa.insert(n,r),sy(t.remoteStore,new Vn(Jt(sh(n.path)),r,"TargetPurposeLimboResolution",Xu._e))}}async function Xi(t,e,n){const r=Z(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=uh.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(c,l){const u=Z(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>b.forEach(l,f=>b.forEach(f.ki,p=>u.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>b.forEach(f.qi,p=>u.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!Ki(h))throw h;U("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const p=u.ts.get(f),_=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(_);u.ts=u.ts.insert(f,y)}}}(r.localStore,i))}async function OP(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await ey(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(c=>{c.reject(new F(I.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xi(n,r._s)}}function kP(t,e){const n=Z(t),r=n.ya.get(e);if(r&&r.Ra)return te().add(r.key);{let s=te();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function NP(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bP.bind(null,e),e.Va.a_=gP.bind(null,e.eventManager),e.Va.Fa=_P.bind(null,e.eventManager),e}function DP(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PP.bind(null,e),e}class xd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Xa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return $S(this.persistence,new US,e.initialUser,this.serializer)}createPersistence(e){return new MS(lh.jr,this.serializer)}createSharedClientState(e){return new GS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OP.bind(null,this.syncEngine),await dP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mP}()}createDatastore(e){const n=Xa(e.databaseInfo.databaseId),r=function(i){return new XS(i)}(e.databaseInfo);return function(i,o,a,c){return new tP(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new rP(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Dd(this.syncEngine,n,0),function(){return Od.D()?new Od:new QS}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new TP(s,i,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);U("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Yi(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Ey{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):yn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class xP{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Qe.UNAUTHENTICATED,this.clientId=E_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lc(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ey(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Md(t,e){t.asyncQueue.verifyOperationInProgress();const n=await LP(t);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>kd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>kd(e.remoteStore,i)),t._onlineComponents=e}function MP(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function LP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!MP(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await Lc(t,new xd)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Lc(t,new xd);return t._offlineComponents}async function Ty(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Md(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Md(t,new VP))),t._onlineComponents}function FP(t){return Ty(t).then(e=>e.syncEngine)}async function wy(t){const e=await Ty(t),n=e.eventManager;return n.onListen=wP.bind(null,e.syncEngine),n.onUnlisten=AP.bind(null,e.syncEngine),n}function UP(t,e,n={}){const r=new hn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Ey({next:f=>{o.enqueueAndForget(()=>fy(i,h));const p=f.docs.has(a);!p&&f.fromCache?l.reject(new F(I.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&f.fromCache&&c&&c.source==="server"?l.reject(new F(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new dy(sh(a.path),u,{includeMetadataChanges:!0,J_:!0});return hy(i,h)}(await wy(t),t.asyncQueue,e,n,r)),r.promise}function BP(t,e,n={}){const r=new hn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Ey({next:f=>{o.enqueueAndForget(()=>fy(i,h)),f.fromCache&&c.source==="server"?l.reject(new F(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new dy(a,u,{includeMetadataChanges:!0,J_:!0});return hy(i,h)}(await wy(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Iy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ld=new Map;/**
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
 */function Ay(t,e,n){if(!n)throw new F(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $P(t,e,n,r){if(e===!0&&r===!0)throw new F(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Fd(t){if(!q.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ud(t){if(q.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function tc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Tr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tc(t);throw new F(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Bd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$P("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Iy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cb;switch(r.type){case"firstParty":return new fb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ld.get(n);r&&(U("ComponentProvider","Removing Datastore"),Ld.delete(n),r.terminate())}(this),Promise.resolve()}}function jP(t,e,n,r={}){var s;const i=(t=Tr(t,nc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Qe.MOCK_USER;else{a=Ew(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new F(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Qe(l)}t._authCredentials=new lb(new v_(a,c))}}/**
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
 */class Ps{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ps(this.firestore,e,this._query)}}class ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class Bn extends Ps{constructor(e,n,r){super(e,n,sh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new q(e))}withConverter(e){return new Bn(this.firestore,e,this._path)}}function qP(t,e,...n){if(t=ht(t),Ay("collection","path",e),t instanceof nc){const r=Te.fromString(e,...n);return Ud(r),new Bn(t,null,r)}{if(!(t instanceof ct||t instanceof Bn))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Ud(r),new Bn(t.firestore,null,r)}}function Ms(t,e,...n){if(t=ht(t),arguments.length===1&&(e=E_.newId()),Ay("doc","path",e),t instanceof nc){const r=Te.fromString(e,...n);return Fd(r),new ct(t,null,new q(r))}{if(!(t instanceof ct||t instanceof Bn))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Fd(r),new ct(t.firestore,t instanceof Bn?t.converter:null,new q(r))}}/**
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
 */class HP{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new ny(this,"async_queue_retry"),this.iu=()=>{const n=Mc();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Mc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new hn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Ki(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw yn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=ph.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&K()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class rc extends nc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new HP}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ry(this),this._firestoreClient.terminate()}}function zP(t,e){const n=typeof t=="object"?t:xm(),r=typeof t=="string"?t:e||"(default)",s=yu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=yw("firestore");i&&jP(s,...i)}return s}function yh(t){return t._firestoreClient||Ry(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ry(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new Ab(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Iy(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new xP(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ls(tt.fromBase64String(e))}catch(n){throw new F(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ls(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class vh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class by{constructor(e){this._methodName=e}}/**
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
 */class Eh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const WP=/^__.*__$/;class KP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qi(e,this.data,n,this.fieldTransforms)}}function Sy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Th{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Th(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return fa(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(Sy(this.Iu)&&WP.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class GP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xa(e)}pu(e,n,r,s=!1){return new Th({Iu:e,methodName:n,gu:r,path:qe.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Py(t){const e=t._freezeSettings(),n=Xa(t._databaseId);return new GP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function QP(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);ky("Data must be an object, but it was:",o,r);const a=Cy(r,o);let c,l;if(i.merge)c=new Ct(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=YP(e,h,n);if(!o.contains(f))throw new F(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);ZP(u,f)||u.push(f)}c=new Ct(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new KP(new Tt(a),c,l)}function JP(t,e,n,r=!1){return wh(n,t.pu(r?4:3,e))}function wh(t,e){if(Oy(t=ht(t)))return ky("Unsupported field value:",e,t),Cy(t,e);if(t instanceof by)return function(r,s){if(!Sy(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=wh(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ve.fromDate(r);return{timestampValue:ua(s.serializer,i)}}if(r instanceof Ve){const i=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ua(s.serializer,i)}}if(r instanceof Eh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ls)return{bytesValue:G_(s.serializer,r._byteString)};if(r instanceof ct){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ah(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${tc(r)}`)}(t,e)}function Cy(t,e){const n={};return T_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rs(t,(r,s)=>{const i=wh(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Oy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Eh||t instanceof ls||t instanceof ct||t instanceof by)}function ky(t,e,n){if(!Oy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=tc(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function YP(t,e,n){if((e=ht(e))instanceof vh)return e._internalPath;if(typeof e=="string")return Ny(t,e);throw fa("Field path arguments must be of type string or ",t,!1,void 0,n)}const XP=new RegExp("[~\\*/\\[\\]]");function Ny(t,e,n){if(e.search(XP)>=0)throw fa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vh(...e.split("."))._internalPath}catch{throw fa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new F(I.INVALID_ARGUMENT,a+t+c)}function ZP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Dy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ih("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class eC extends Dy{data(){return super.data()}}function Ih(t,e){return typeof e=="string"?Ny(t,e):e instanceof vh?e._internalPath:e._delegate._internalPath}/**
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
 */function tC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ah{}class nC extends Ah{}function rC(t,e,...n){let r=[];e instanceof Ah&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Rh).length,a=i.filter(c=>c instanceof sc).length;if(o>1||o>0&&a>0)throw new F(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class sc extends nC{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new sc(e,n,r)}_apply(e){const n=this._parse(e);return Vy(e._query,n),new Ps(e.firestore,e.converter,Nl(e._query,n))}_parse(e){const n=Py(e.firestore);return function(i,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new F(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){jd(h,u);const p=[];for(const _ of h)p.push($d(c,i,_));f={arrayValue:{values:p}}}else f=$d(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||jd(h,u),f=JP(a,o,h,u==="in"||u==="not-in");return Oe.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function sC(t,e,n){const r=e,s=Ih("where",t);return sc._create(s,r,n)}class Rh extends Ah{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Rh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Nt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Vy(o,c),o=Nl(o,c)}(e._query,n),new Ps(e.firestore,e.converter,Nl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function $d(t,e,n){if(typeof(n=ht(n))=="string"){if(n==="")throw new F(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!O_(e)&&n.indexOf("/")!==-1)throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!q.isDocumentKey(r))throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hd(t,new q(r))}if(n instanceof ct)return hd(t,n._key);throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tc(n)}.`)}function jd(t,e){if(!Array.isArray(t)||t.length===0)throw new F(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Vy(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class iC{convertValue(e,n="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Eh(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=eh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ri(e));default:return null}}convertTimestamp(e){const n=qn(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);ye(Z_(r));const s=new bi(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(n)||yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function oC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ks{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xy extends Dy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ih("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Vo extends xy{data(e={}){return super.data(e)}}class aC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ks(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Vo(this._firestore,this._userDataWriter,r.key,r,new Ks(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Vo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ks(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Vo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ks(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:cC(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function lC(t){t=Tr(t,ct);const e=Tr(t.firestore,rc);return UP(yh(e),t._key).then(n=>fC(e,t,n))}class My extends iC{constructor(e){super(),this.firestore=e}convertBytes(e){return new ls(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function uC(t){t=Tr(t,Ps);const e=Tr(t.firestore,rc),n=yh(e),r=new My(e);return tC(t._query),BP(n,t._query).then(s=>new aC(e,r,t,s))}function Eo(t,e,n){t=Tr(t,ct);const r=Tr(t.firestore,rc),s=oC(t.converter,e,n);return hC(r,[QP(Py(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,fn.none())])}function hC(t,e){return function(r,s){const i=new hn;return r.asyncQueue.enqueueAndForget(async()=>RP(await FP(r),s,i)),i.promise}(yh(t),e)}function fC(t,e,n){const r=n.docs.get(e._key),s=new My(t);return new xy(t,s,e._key,r,new Ks(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){As=s})(vs),ts(new mr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new rc(new ub(r.getProvider("auth-internal")),new pb(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new F(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Un(ad,"4.4.0",e),Un(ad,"4.4.0","esm2017")})();const dC={apiKey:"AIzaSyBTzruuQgnPK8WbDK8yGTw3o0auq6DMzY4",authDomain:"mdk-project-6f0be.firebaseapp.com",projectId:"mdk-project-6f0be",storageBucket:"mdk-project-6f0be.appspot.com",messagingSenderId:"603751628890",appId:"1:603751628890:web:1de66c0d78c179a64c5863"},pC=Vm(dC),nn=t0(pC),Vr=zP(),mC="https://boholdinaalena.github.io/coffee-land-vue-site/assets/logo-YfChKsOu.svg",xt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},gC={name:"v-main-wrapper",data(){return{container:{}}},computed:ys(["user","saved_drinks"]),methods:{signOut(){this.sendChangesToDb(),this.$store.dispatch("logout")},async sendChangesToDb(){console.log("ID saved drinks sending to DB",this.user.email,Array(this.saved_drinks)),await Eo(Ms(Vr,"user-info",this.container.email),{saved_id:this.saved_drinks},{merge:!0}),console.log("ID saved drinks send to DB",this.saved_drinks)},async getUserInfo(){if(this.user)if(console.log(this.user),console.log(this.user.email),(await lC(Ms(Vr,"user-info",this.user.email))).exists())(await uC(rC(qP(Vr,"user-info"),sC("email","==",this.user.email)))).forEach(n=>{this.container=n.data()}),this.$store.dispatch("loadUserInfo",this.container),this.container.saved_id&&this.loadUserSaved(this.container.saved_id);else{if(await Eo(Ms(Vr,"user-info",this.user.email),{email:this.user.email}),this.user.displayName)await Eo(Ms(Vr,"user-info",this.user.email),{name:this.user.displayName},{merge:!0});else{let e="user-coffee-"+this.user.uid.slice(0,6);await Eo(Ms(Vr,"user-info",this.user.email),{name:e},{merge:!0})}this.getUserInfo()}else console.log("user not login")},loadUserSaved(t){for(let e=0;e<t.length;e++)this.$store.dispatch("addToProfile",t[e])}},updated(){this.getUserInfo(),setInterval(()=>{this.user&&(this.sendChangesToDb(),console.log("Send"))},4e3)}},_C={class:"v-main-wrapper"},yC={class:"header"},vC=C("img",{class:"logo",src:mC,alt:"logo"},null,-1),EC=C("p",null,"Главная страница",-1),TC=C("p",null,"Каталог",-1),wC=C("p",null,"Корзина",-1),IC=C("p",null,"Профиль",-1),AC=C("p",{id:"last"},"Профиль",-1),RC={key:2,class:"user-block"},bC=C("p",{class:"email"},null,-1),SC=C("div",{class:"block"},[C("div",{class:"block__blur-bg-wrap"},[C("div",{class:"block__blur-bg block__blur-bg_color-2"})])],-1);function PC(t,e,n,r,s,i){const o=pn("router-link"),a=pn("router-view");return ae(),we("div",_C,[C("div",yC,[vC,be(o,{to:"/"},{default:On(()=>[EC]),_:1}),be(o,{to:"/catalog"},{default:On(()=>[TC]),_:1}),be(o,{to:"/cart"},{default:On(()=>[wC]),_:1}),t.user==null?(ae(),pr(o,{key:0,to:"/login"},{default:On(()=>[IC]),_:1})):at("",!0),t.user!=null?(ae(),pr(o,{key:1,to:"/profile"},{default:On(()=>[AC]),_:1})):at("",!0),t.user?(ae(),we("div",RC,[bC,gt(" "+De(t.user.email)+" ",1),C("button",{class:"btn-signout",onClick:e[0]||(e[0]=(...c)=>i.signOut&&i.signOut(...c))},"Выйти")])):at("",!0)]),be(a),SC])}const CC=xt(gC,[["render",PC]]),OC={name:"app",components:{vMainWrapper:CC}},kC={id:"app"};function NC(t,e,n,r,s,i){const o=pn("v-main-wrapper");return ae(),we("div",kC,[be(o)])}const DC=xt(OC,[["render",NC]]);function Ly(t,e){return function(){return t.apply(e,arguments)}}const{toString:VC}=Object.prototype,{getPrototypeOf:bh}=Object,ic=(t=>e=>{const n=VC.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),en=t=>(t=t.toLowerCase(),e=>ic(e)===t),oc=t=>e=>typeof e===t,{isArray:Cs}=Array,Oi=oc("undefined");function xC(t){return t!==null&&!Oi(t)&&t.constructor!==null&&!Oi(t.constructor)&&It(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Fy=en("ArrayBuffer");function MC(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Fy(t.buffer),e}const LC=oc("string"),It=oc("function"),Uy=oc("number"),ac=t=>t!==null&&typeof t=="object",FC=t=>t===!0||t===!1,xo=t=>{if(ic(t)!=="object")return!1;const e=bh(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},UC=en("Date"),BC=en("File"),$C=en("Blob"),jC=en("FileList"),qC=t=>ac(t)&&It(t.pipe),HC=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||It(t.append)&&((e=ic(t))==="formdata"||e==="object"&&It(t.toString)&&t.toString()==="[object FormData]"))},zC=en("URLSearchParams"),WC=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Zi(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Cs(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function By(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const $y=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,jy=t=>!Oi(t)&&t!==$y;function Bl(){const{caseless:t}=jy(this)&&this||{},e={},n=(r,s)=>{const i=t&&By(e,s)||s;xo(e[i])&&xo(r)?e[i]=Bl(e[i],r):xo(r)?e[i]=Bl({},r):Cs(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Zi(arguments[r],n);return e}const KC=(t,e,n,{allOwnKeys:r}={})=>(Zi(e,(s,i)=>{n&&It(s)?t[i]=Ly(s,n):t[i]=s},{allOwnKeys:r}),t),GC=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),QC=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},JC=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&bh(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},YC=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},XC=t=>{if(!t)return null;if(Cs(t))return t;let e=t.length;if(!Uy(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},ZC=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&bh(Uint8Array)),eO=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},tO=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},nO=en("HTMLFormElement"),rO=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),qd=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),sO=en("RegExp"),qy=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Zi(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},iO=t=>{qy(t,(e,n)=>{if(It(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(It(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},oO=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Cs(t)?r(t):r(String(t).split(e)),n},aO=()=>{},cO=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Fc="abcdefghijklmnopqrstuvwxyz",Hd="0123456789",Hy={DIGIT:Hd,ALPHA:Fc,ALPHA_DIGIT:Fc+Fc.toUpperCase()+Hd},lO=(t=16,e=Hy.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function uO(t){return!!(t&&It(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const hO=t=>{const e=new Array(10),n=(r,s)=>{if(ac(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Cs(r)?[]:{};return Zi(r,(o,a)=>{const c=n(o,s+1);!Oi(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},fO=en("AsyncFunction"),dO=t=>t&&(ac(t)||It(t))&&It(t.then)&&It(t.catch),E={isArray:Cs,isArrayBuffer:Fy,isBuffer:xC,isFormData:HC,isArrayBufferView:MC,isString:LC,isNumber:Uy,isBoolean:FC,isObject:ac,isPlainObject:xo,isUndefined:Oi,isDate:UC,isFile:BC,isBlob:$C,isRegExp:sO,isFunction:It,isStream:qC,isURLSearchParams:zC,isTypedArray:ZC,isFileList:jC,forEach:Zi,merge:Bl,extend:KC,trim:WC,stripBOM:GC,inherits:QC,toFlatObject:JC,kindOf:ic,kindOfTest:en,endsWith:YC,toArray:XC,forEachEntry:eO,matchAll:tO,isHTMLForm:nO,hasOwnProperty:qd,hasOwnProp:qd,reduceDescriptors:qy,freezeMethods:iO,toObjectSet:oO,toCamelCase:rO,noop:aO,toFiniteNumber:cO,findKey:By,global:$y,isContextDefined:jy,ALPHABET:Hy,generateString:lO,isSpecCompliantForm:uO,toJSONObject:hO,isAsyncFn:fO,isThenable:dO};function se(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}E.inherits(se,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const zy=se.prototype,Wy={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Wy[t]={value:t}});Object.defineProperties(se,Wy);Object.defineProperty(zy,"isAxiosError",{value:!0});se.from=(t,e,n,r,s,i)=>{const o=Object.create(zy);return E.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),se.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const pO=null;function $l(t){return E.isPlainObject(t)||E.isArray(t)}function Ky(t){return E.endsWith(t,"[]")?t.slice(0,-2):t}function zd(t,e,n){return t?t.concat(e).map(function(s,i){return s=Ky(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function mO(t){return E.isArray(t)&&!t.some($l)}const gO=E.toFlatObject(E,{},null,function(e){return/^is[A-Z]/.test(e)});function cc(t,e,n){if(!E.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,w){return!E.isUndefined(w[y])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(e);if(!E.isFunction(s))throw new TypeError("visitor must be a function");function l(_){if(_===null)return"";if(E.isDate(_))return _.toISOString();if(!c&&E.isBlob(_))throw new se("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(_)||E.isTypedArray(_)?c&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,y,w){let P=_;if(_&&!w&&typeof _=="object"){if(E.endsWith(y,"{}"))y=r?y:y.slice(0,-2),_=JSON.stringify(_);else if(E.isArray(_)&&mO(_)||(E.isFileList(_)||E.endsWith(y,"[]"))&&(P=E.toArray(_)))return y=Ky(y),P.forEach(function($,L){!(E.isUndefined($)||$===null)&&e.append(o===!0?zd([y],L,i):o===null?y:y+"[]",l($))}),!1}return $l(_)?!0:(e.append(zd(w,y,i),l(_)),!1)}const h=[],f=Object.assign(gO,{defaultVisitor:u,convertValue:l,isVisitable:$l});function p(_,y){if(!E.isUndefined(_)){if(h.indexOf(_)!==-1)throw Error("Circular reference detected in "+y.join("."));h.push(_),E.forEach(_,function(P,k){(!(E.isUndefined(P)||P===null)&&s.call(e,P,E.isString(k)?k.trim():k,y,f))===!0&&p(P,y?y.concat(k):[k])}),h.pop()}}if(!E.isObject(t))throw new TypeError("data must be an object");return p(t),e}function Wd(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Sh(t,e){this._pairs=[],t&&cc(t,this,e)}const Gy=Sh.prototype;Gy.append=function(e,n){this._pairs.push([e,n])};Gy.toString=function(e){const n=e?function(r){return e.call(this,r,Wd)}:Wd;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function _O(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Qy(t,e,n){if(!e)return t;const r=n&&n.encode||_O,s=n&&n.serialize;let i;if(s?i=s(e,n):i=E.isURLSearchParams(e)?e.toString():new Sh(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class yO{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){E.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Kd=yO,Jy={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vO=typeof URLSearchParams<"u"?URLSearchParams:Sh,EO=typeof FormData<"u"?FormData:null,TO=typeof Blob<"u"?Blob:null,wO={isBrowser:!0,classes:{URLSearchParams:vO,FormData:EO,Blob:TO},protocols:["http","https","file","blob","url","data"]},Yy=typeof window<"u"&&typeof document<"u",IO=(t=>Yy&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),AO=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",RO=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Yy,hasStandardBrowserEnv:IO,hasStandardBrowserWebWorkerEnv:AO},Symbol.toStringTag,{value:"Module"})),zt={...RO,...wO};function bO(t,e){return cc(t,new zt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return zt.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function SO(t){return E.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function PO(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function Xy(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&E.isArray(s)?s.length:o,c?(E.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!E.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&E.isArray(s[o])&&(s[o]=PO(s[o])),!a)}if(E.isFormData(t)&&E.isFunction(t.entries)){const n={};return E.forEachEntry(t,(r,s)=>{e(SO(r),s,n,0)}),n}return null}function CO(t,e,n){if(E.isString(t))try{return(e||JSON.parse)(t),E.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Ph={transitional:Jy,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=E.isObject(e);if(i&&E.isHTMLForm(e)&&(e=new FormData(e)),E.isFormData(e))return s&&s?JSON.stringify(Xy(e)):e;if(E.isArrayBuffer(e)||E.isBuffer(e)||E.isStream(e)||E.isFile(e)||E.isBlob(e))return e;if(E.isArrayBufferView(e))return e.buffer;if(E.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return bO(e,this.formSerializer).toString();if((a=E.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return cc(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),CO(e)):e}],transformResponse:[function(e){const n=this.transitional||Ph.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&E.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?se.from(a,se.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:zt.classes.FormData,Blob:zt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(["delete","get","head","post","put","patch"],t=>{Ph.headers[t]={}});const Ch=Ph,OO=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),kO=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&OO[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Gd=Symbol("internals");function Ls(t){return t&&String(t).trim().toLowerCase()}function Mo(t){return t===!1||t==null?t:E.isArray(t)?t.map(Mo):String(t)}function NO(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const DO=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Uc(t,e,n,r,s){if(E.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!E.isString(e)){if(E.isString(r))return e.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(e)}}function VO(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function xO(t,e){const n=E.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class lc{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=Ls(c);if(!u)throw new Error("header name must be a non-empty string");const h=E.findKey(s,u);(!h||s[h]===void 0||l===!0||l===void 0&&s[h]!==!1)&&(s[h||c]=Mo(a))}const o=(a,c)=>E.forEach(a,(l,u)=>i(l,u,c));return E.isPlainObject(e)||e instanceof this.constructor?o(e,n):E.isString(e)&&(e=e.trim())&&!DO(e)?o(kO(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=Ls(e),e){const r=E.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return NO(s);if(E.isFunction(n))return n.call(this,s,r);if(E.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ls(e),e){const r=E.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Uc(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Ls(o),o){const a=E.findKey(r,o);a&&(!n||Uc(r,r[a],a,n))&&(delete r[a],s=!0)}}return E.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Uc(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return E.forEach(this,(s,i)=>{const o=E.findKey(r,i);if(o){n[o]=Mo(s),delete n[i];return}const a=e?VO(i):String(i).trim();a!==i&&delete n[i],n[a]=Mo(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return E.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Gd]=this[Gd]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Ls(o);r[a]||(xO(s,o),r[a]=!0)}return E.isArray(e)?e.forEach(i):i(e),this}}lc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(lc.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});E.freezeMethods(lc);const dn=lc;function Bc(t,e){const n=this||Ch,r=e||n,s=dn.from(r.headers);let i=r.data;return E.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Zy(t){return!!(t&&t.__CANCEL__)}function eo(t,e,n){se.call(this,t??"canceled",se.ERR_CANCELED,e,n),this.name="CanceledError"}E.inherits(eo,se,{__CANCEL__:!0});function MO(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new se("Request failed with status code "+n.status,[se.ERR_BAD_REQUEST,se.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const LO=zt.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];E.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),E.isString(r)&&o.push("path="+r),E.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function FO(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function UO(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function ev(t,e){return t&&!FO(e)?UO(t,e):e}const BO=zt.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=E.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function $O(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function jO(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let h=i,f=0;for(;h!==s;)f+=n[h++],h=h%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const p=u&&l-u;return p?Math.round(f*1e3/p):void 0}}function Qd(t,e){let n=0;const r=jO(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};u[e?"download":"upload"]=!0,t(u)}}const qO=typeof XMLHttpRequest<"u",HO=qO&&function(t){return new Promise(function(n,r){let s=t.data;const i=dn.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function l(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let u;if(E.isFormData(s)){if(zt.hasStandardBrowserEnv||zt.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((u=i.getContentType())!==!1){const[y,...w]=u?u.split(";").map(P=>P.trim()).filter(Boolean):[];i.setContentType([y||"multipart/form-data",...w].join("; "))}}let h=new XMLHttpRequest;if(t.auth){const y=t.auth.username||"",w=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+w))}const f=ev(t.baseURL,t.url);h.open(t.method.toUpperCase(),Qy(f,t.params,t.paramsSerializer),!0),h.timeout=t.timeout;function p(){if(!h)return;const y=dn.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),P={data:!o||o==="text"||o==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:y,config:t,request:h};MO(function($){n($),l()},function($){r($),l()},P),h=null}if("onloadend"in h?h.onloadend=p:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(p)},h.onabort=function(){h&&(r(new se("Request aborted",se.ECONNABORTED,t,h)),h=null)},h.onerror=function(){r(new se("Network Error",se.ERR_NETWORK,t,h)),h=null},h.ontimeout=function(){let w=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const P=t.transitional||Jy;t.timeoutErrorMessage&&(w=t.timeoutErrorMessage),r(new se(w,P.clarifyTimeoutError?se.ETIMEDOUT:se.ECONNABORTED,t,h)),h=null},zt.hasStandardBrowserEnv&&(a&&E.isFunction(a)&&(a=a(t)),a||a!==!1&&BO(f))){const y=t.xsrfHeaderName&&t.xsrfCookieName&&LO.read(t.xsrfCookieName);y&&i.set(t.xsrfHeaderName,y)}s===void 0&&i.setContentType(null),"setRequestHeader"in h&&E.forEach(i.toJSON(),function(w,P){h.setRequestHeader(P,w)}),E.isUndefined(t.withCredentials)||(h.withCredentials=!!t.withCredentials),o&&o!=="json"&&(h.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&h.addEventListener("progress",Qd(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",Qd(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=y=>{h&&(r(!y||y.type?new eo(null,t,h):y),h.abort(),h=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const _=$O(f);if(_&&zt.protocols.indexOf(_)===-1){r(new se("Unsupported protocol "+_+":",se.ERR_BAD_REQUEST,t));return}h.send(s||null)})},jl={http:pO,xhr:HO};E.forEach(jl,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Jd=t=>`- ${t}`,zO=t=>E.isFunction(t)||t===null||t===!1,tv={getAdapter:t=>{t=E.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!zO(n)&&(r=jl[(o=String(n)).toLowerCase()],r===void 0))throw new se(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Jd).join(`
`):" "+Jd(i[0]):"as no adapter specified";throw new se("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:jl};function $c(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new eo(null,t)}function Yd(t){return $c(t),t.headers=dn.from(t.headers),t.data=Bc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),tv.getAdapter(t.adapter||Ch.adapter)(t).then(function(r){return $c(t),r.data=Bc.call(t,t.transformResponse,r),r.headers=dn.from(r.headers),r},function(r){return Zy(r)||($c(t),r&&r.response&&(r.response.data=Bc.call(t,t.transformResponse,r.response),r.response.headers=dn.from(r.response.headers))),Promise.reject(r)})}const Xd=t=>t instanceof dn?t.toJSON():t;function us(t,e){e=e||{};const n={};function r(l,u,h){return E.isPlainObject(l)&&E.isPlainObject(u)?E.merge.call({caseless:h},l,u):E.isPlainObject(u)?E.merge({},u):E.isArray(u)?u.slice():u}function s(l,u,h){if(E.isUndefined(u)){if(!E.isUndefined(l))return r(void 0,l,h)}else return r(l,u,h)}function i(l,u){if(!E.isUndefined(u))return r(void 0,u)}function o(l,u){if(E.isUndefined(u)){if(!E.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,h){if(h in e)return r(l,u);if(h in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(Xd(l),Xd(u),!0)};return E.forEach(Object.keys(Object.assign({},t,e)),function(u){const h=c[u]||s,f=h(t[u],e[u],u);E.isUndefined(f)&&h!==a||(n[u]=f)}),n}const nv="1.6.2",Oh={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Oh[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Zd={};Oh.transitional=function(e,n,r){function s(i,o){return"[Axios v"+nv+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new se(s(o," has been removed"+(n?" in "+n:"")),se.ERR_DEPRECATED);return n&&!Zd[o]&&(Zd[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function WO(t,e,n){if(typeof t!="object")throw new se("options must be an object",se.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new se("option "+i+" must be "+c,se.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new se("Unknown option "+i,se.ERR_BAD_OPTION)}}const ql={assertOptions:WO,validators:Oh},bn=ql.validators;class da{constructor(e){this.defaults=e,this.interceptors={request:new Kd,response:new Kd}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=us(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ql.assertOptions(r,{silentJSONParsing:bn.transitional(bn.boolean),forcedJSONParsing:bn.transitional(bn.boolean),clarifyTimeoutError:bn.transitional(bn.boolean)},!1),s!=null&&(E.isFunction(s)?n.paramsSerializer={serialize:s}:ql.assertOptions(s,{encode:bn.function,serialize:bn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&E.merge(i.common,i[n.method]);i&&E.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=dn.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(c=c&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let u,h=0,f;if(!c){const _=[Yd.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,l),f=_.length,u=Promise.resolve(n);h<f;)u=u.then(_[h++],_[h++]);return u}f=a.length;let p=n;for(h=0;h<f;){const _=a[h++],y=a[h++];try{p=_(p)}catch(w){y.call(this,w);break}}try{u=Yd.call(this,p)}catch(_){return Promise.reject(_)}for(h=0,f=l.length;h<f;)u=u.then(l[h++],l[h++]);return u}getUri(e){e=us(this.defaults,e);const n=ev(e.baseURL,e.url);return Qy(n,e.params,e.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(e){da.prototype[e]=function(n,r){return this.request(us(r||{},{method:e,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(us(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}da.prototype[e]=n(),da.prototype[e+"Form"]=n(!0)});const Lo=da;class kh{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new eo(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new kh(function(s){e=s}),cancel:e}}}const KO=kh;function GO(t){return function(n){return t.apply(null,n)}}function QO(t){return E.isObject(t)&&t.isAxiosError===!0}const Hl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Hl).forEach(([t,e])=>{Hl[e]=t});const JO=Hl;function rv(t){const e=new Lo(t),n=Ly(Lo.prototype.request,e);return E.extend(n,Lo.prototype,e,{allOwnKeys:!0}),E.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return rv(us(t,s))},n}const ke=rv(Ch);ke.Axios=Lo;ke.CanceledError=eo;ke.CancelToken=KO;ke.isCancel=Zy;ke.VERSION=nv;ke.toFormData=cc;ke.AxiosError=se;ke.Cancel=ke.CanceledError;ke.all=function(e){return Promise.all(e)};ke.spread=GO;ke.isAxiosError=QO;ke.mergeConfig=us;ke.AxiosHeaders=dn;ke.formToJSON=t=>Xy(E.isHTMLForm(t)?new FormData(t):t);ke.getAdapter=tv.getAdapter;ke.HttpStatusCode=JO;ke.default=ke;const YO=ke;/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ur=typeof window<"u";function XO(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const he=Object.assign;function jc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Dt(s)?s.map(t):t(s)}return n}const si=()=>{},Dt=Array.isArray,ZO=/\/$/,ek=t=>t.replace(ZO,"");function qc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=sk(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function tk(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ep(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function nk(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&hs(e.matched[r],n.matched[s])&&sv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!rk(t[n],e[n]))return!1;return!0}function rk(t,e){return Dt(t)?tp(t,e):Dt(e)?tp(e,t):t===e}function tp(t,e){return Dt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function sk(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ki;(function(t){t.pop="pop",t.push="push"})(ki||(ki={}));var ii;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ii||(ii={}));function ik(t){if(!t)if(Ur){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ek(t)}const ok=/^[^#]+#/;function ak(t,e){return t.replace(ok,"#")+e}function ck(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const uc=()=>({left:window.pageXOffset,top:window.pageYOffset});function lk(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ck(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function np(t,e){return(history.state?history.state.position-e:-1)+t}const zl=new Map;function uk(t,e){zl.set(t,e)}function hk(t){const e=zl.get(t);return zl.delete(t),e}let fk=()=>location.protocol+"//"+location.host;function iv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),ep(c,"")}return ep(n,t)+r+s}function dk(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=iv(t,location),_=n.value,y=e.value;let w=0;if(f){if(n.value=p,e.value=f,o&&o===_){o=null;return}w=y?f.position-y.position:0}else r(p);s.forEach(P=>{P(n.value,_,{delta:w,type:ki.pop,direction:w?w>0?ii.forward:ii.back:ii.unknown})})};function c(){o=n.value}function l(f){s.push(f);const p=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(he({},f.state,{scroll:uc()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function rp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?uc():null}}function pk(t){const{history:e,location:n}=window,r={value:iv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:fk()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=he({},e.state,rp(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=he({},s.value,e.state,{forward:c,scroll:uc()});i(u.current,u,!0);const h=he({},rp(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function mk(t){t=ik(t);const e=pk(t),n=dk(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=he({location:"",base:t,go:r,createHref:ak.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function gk(t){return typeof t=="string"||t&&typeof t=="object"}function ov(t){return typeof t=="string"||typeof t=="symbol"}const Sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},av=Symbol("");var sp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(sp||(sp={}));function fs(t,e){return he(new Error,{type:t,[av]:!0},e)}function rn(t,e){return t instanceof Error&&av in t&&(e==null||!!(t.type&e))}const ip="[^/]+?",_k={sensitive:!1,strict:!1,start:!0,end:!0},yk=/[.+*?^${}()[\]/\\]/g;function vk(t,e){const n=he({},_k,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(yk,"\\$&"),p+=40;else if(f.type===1){const{value:_,repeatable:y,optional:w,regexp:P}=f;i.push({name:_,repeatable:y,optional:w});const k=P||ip;if(k!==ip){p+=10;try{new RegExp(`(${k})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${_}" (${k}): `+L.message)}}let $=y?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||($=w&&l.length<2?`(?:/${$})`:"/"+$),w&&($+="?"),s+=$,p+=20,w&&(p+=-8),y&&(p+=-20),k===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",_=i[f-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:y,optional:w}=p,P=_ in l?l[_]:"";if(Dt(P)&&!y)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const k=Dt(P)?P.join("/"):P;if(!k)if(w)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Ek(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Tk(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Ek(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(op(r))return 1;if(op(s))return-1}return s.length-r.length}function op(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const wk={type:0,value:""},Ik=/[a-zA-Z0-9_]/;function Ak(t){if(!t)return[[]];if(t==="/")return[[wk]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:Ik.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Rk(t,e,n){const r=vk(Ak(t.path),n),s=he(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function bk(t,e){const n=[],r=new Map;e=lp({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const p=!f,_=Sk(u);_.aliasOf=f&&f.record;const y=lp(e,u),w=[_];if("alias"in u){const $=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of $)w.push(he({},_,{components:f?f.record.components:_.components,path:L,aliasOf:f?f.record:_}))}let P,k;for(const $ of w){const{path:L}=$;if(h&&L[0]!=="/"){const ge=h.record.path,pe=ge[ge.length-1]==="/"?"":"/";$.path=h.record.path+(L&&pe+L)}if(P=Rk($,h,y),f?f.alias.push(P):(k=k||P,k!==P&&k.alias.push(P),p&&u.name&&!cp(P)&&o(u.name)),_.children){const ge=_.children;for(let pe=0;pe<ge.length;pe++)i(ge[pe],P,f&&f.children[pe])}f=f||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return k?()=>{o(k)}:si}function o(u){if(ov(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Tk(u,n[h])>=0&&(u.record.path!==n[h].record.path||!cv(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!cp(u)&&r.set(u.record.name,u)}function l(u,h){let f,p={},_,y;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw fs(1,{location:u});y=f.record.name,p=he(ap(h.params,f.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&ap(u.params,f.keys.map(k=>k.name))),_=f.stringify(p)}else if("path"in u)_=u.path,f=n.find(k=>k.re.test(_)),f&&(p=f.parse(_),y=f.record.name);else{if(f=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!f)throw fs(1,{location:u,currentLocation:h});y=f.record.name,p=he({},h.params,u.params),_=f.stringify(p)}const w=[];let P=f;for(;P;)w.unshift(P.record),P=P.parent;return{name:y,path:_,params:p,matched:w,meta:Ck(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ap(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Sk(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Pk(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Pk(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function cp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ck(t){return t.reduce((e,n)=>he(e,n.meta),{})}function lp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function cv(t,e){return e.children.some(n=>n===t||cv(t,n))}const lv=/#/g,Ok=/&/g,kk=/\//g,Nk=/=/g,Dk=/\?/g,uv=/\+/g,Vk=/%5B/g,xk=/%5D/g,hv=/%5E/g,Mk=/%60/g,fv=/%7B/g,Lk=/%7C/g,dv=/%7D/g,Fk=/%20/g;function Nh(t){return encodeURI(""+t).replace(Lk,"|").replace(Vk,"[").replace(xk,"]")}function Uk(t){return Nh(t).replace(fv,"{").replace(dv,"}").replace(hv,"^")}function Wl(t){return Nh(t).replace(uv,"%2B").replace(Fk,"+").replace(lv,"%23").replace(Ok,"%26").replace(Mk,"`").replace(fv,"{").replace(dv,"}").replace(hv,"^")}function Bk(t){return Wl(t).replace(Nk,"%3D")}function $k(t){return Nh(t).replace(lv,"%23").replace(Dk,"%3F")}function jk(t){return t==null?"":$k(t).replace(kk,"%2F")}function pa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function qk(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(uv," "),o=i.indexOf("="),a=pa(o<0?i:i.slice(0,o)),c=o<0?null:pa(i.slice(o+1));if(a in e){let l=e[a];Dt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function up(t){let e="";for(let n in t){const r=t[n];if(n=Bk(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Dt(r)?r.map(i=>i&&Wl(i)):[r&&Wl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Hk(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Dt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const zk=Symbol(""),hp=Symbol(""),Dh=Symbol(""),pv=Symbol(""),Kl=Symbol("");function Fs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Cn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(fs(4,{from:n,to:e})):h instanceof Error?a(h):gk(h)?a(fs(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Hc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Wk(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Cn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=XO(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Cn(f,n,r,i,o)()}))}}return s}function Wk(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function fp(t){const e=Kt(Dh),n=Kt(pv),r=vt(()=>e.resolve(Hr(t.to))),s=vt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(hs.bind(null,u));if(f>-1)return f;const p=dp(c[l-2]);return l>1&&dp(u)===p&&h[h.length-1].path!==p?h.findIndex(hs.bind(null,c[l-2])):f}),i=vt(()=>s.value>-1&&Jk(n.params,r.value.params)),o=vt(()=>s.value>-1&&s.value===n.matched.length-1&&sv(n.params,r.value.params));function a(c={}){return Qk(c)?e[Hr(t.replace)?"replace":"push"](Hr(t.to)).catch(si):Promise.resolve()}return{route:r,href:vt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Kk=Yp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fp,setup(t,{slots:e}){const n=Ni(fp(t)),{options:r}=Kt(Dh),s=vt(()=>({[pp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[pp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:dm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Gk=Kk;function Qk(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jk(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Dt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function dp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const pp=(t,e,n)=>t??e??n,Yk=Yp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Kt(Kl),s=vt(()=>t.route||r.value),i=Kt(hp,0),o=vt(()=>{let l=Hr(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=vt(()=>s.value.matched[o.value]);Ao(hp,vt(()=>o.value+1)),Ao(zk,a),Ao(Kl,s);const c=Yc();return Wr(()=>[c.value,a.value,t.name],([l,u,h],[f,p,_])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!hs(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return mp(n.default,{Component:f,route:l});const p=h.props[u],_=p?p===!0?l.params:typeof p=="function"?p(l):p:null,w=dm(f,he({},_,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return mp(n.default,{Component:w,route:l})||w}}});function mp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Xk=Yk;function Zk(t){const e=bk(t.routes,t),n=t.parseQuery||qk,r=t.stringifyQuery||up,s=t.history,i=Fs(),o=Fs(),a=Fs(),c=Yv(Sn);let l=Sn;Ur&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jc.bind(null,T=>""+T),h=jc.bind(null,jk),f=jc.bind(null,pa);function p(T,M){let D,j;return ov(T)?(D=e.getRecordMatcher(T),j=M):j=T,e.addRoute(j,D)}function _(T){const M=e.getRecordMatcher(T);M&&e.removeRoute(M)}function y(){return e.getRoutes().map(T=>T.record)}function w(T){return!!e.getRecordMatcher(T)}function P(T,M){if(M=he({},M||c.value),typeof T=="string"){const g=qc(n,T,M.path),v=e.resolve({path:g.path},M),A=s.createHref(g.fullPath);return he(g,v,{params:f(v.params),hash:pa(g.hash),redirectedFrom:void 0,href:A})}let D;if("path"in T)D=he({},T,{path:qc(n,T.path,M.path).path});else{const g=he({},T.params);for(const v in g)g[v]==null&&delete g[v];D=he({},T,{params:h(g)}),M.params=h(M.params)}const j=e.resolve(D,M),ue=T.hash||"";j.params=u(f(j.params));const d=tk(r,he({},T,{hash:Uk(ue),path:j.path})),m=s.createHref(d);return he({fullPath:d,hash:ue,query:r===up?Hk(T.query):T.query||{}},j,{redirectedFrom:void 0,href:m})}function k(T){return typeof T=="string"?qc(n,T,c.value.path):he({},T)}function $(T,M){if(l!==T)return fs(8,{from:M,to:T})}function L(T){return Ne(T)}function ge(T){return L(he(k(T),{replace:!0}))}function pe(T){const M=T.matched[T.matched.length-1];if(M&&M.redirect){const{redirect:D}=M;let j=typeof D=="function"?D(T):D;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=k(j):{path:j},j.params={}),he({query:T.query,hash:T.hash,params:"path"in j?{}:T.params},j)}}function Ne(T,M){const D=l=P(T),j=c.value,ue=T.state,d=T.force,m=T.replace===!0,g=pe(D);if(g)return Ne(he(k(g),{state:typeof g=="object"?he({},ue,g.state):ue,force:d,replace:m}),M||D);const v=D;v.redirectedFrom=M;let A;return!d&&nk(r,j,D)&&(A=fs(16,{to:v,from:j}),Lt(j,j,!0,!1)),(A?Promise.resolve(A):nt(v,j)).catch(R=>rn(R)?rn(R,2)?R:In(R):le(R,v,j)).then(R=>{if(R){if(rn(R,2))return Ne(he({replace:m},k(R.to),{state:typeof R.to=="object"?he({},ue,R.to.state):ue,force:d}),M||v)}else R=Jn(v,j,!0,m,ue);return wn(v,j,R),R})}function dt(T,M){const D=$(T,M);return D?Promise.reject(D):Promise.resolve()}function yt(T){const M=Pr.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(T):T()}function nt(T,M){let D;const[j,ue,d]=eN(T,M);D=Hc(j.reverse(),"beforeRouteLeave",T,M);for(const g of j)g.leaveGuards.forEach(v=>{D.push(Cn(v,T,M))});const m=dt.bind(null,T,M);return D.push(m),Ke(D).then(()=>{D=[];for(const g of i.list())D.push(Cn(g,T,M));return D.push(m),Ke(D)}).then(()=>{D=Hc(ue,"beforeRouteUpdate",T,M);for(const g of ue)g.updateGuards.forEach(v=>{D.push(Cn(v,T,M))});return D.push(m),Ke(D)}).then(()=>{D=[];for(const g of d)if(g.beforeEnter)if(Dt(g.beforeEnter))for(const v of g.beforeEnter)D.push(Cn(v,T,M));else D.push(Cn(g.beforeEnter,T,M));return D.push(m),Ke(D)}).then(()=>(T.matched.forEach(g=>g.enterCallbacks={}),D=Hc(d,"beforeRouteEnter",T,M),D.push(m),Ke(D))).then(()=>{D=[];for(const g of o.list())D.push(Cn(g,T,M));return D.push(m),Ke(D)}).catch(g=>rn(g,8)?g:Promise.reject(g))}function wn(T,M,D){a.list().forEach(j=>yt(()=>j(T,M,D)))}function Jn(T,M,D,j,ue){const d=$(T,M);if(d)return d;const m=M===Sn,g=Ur?history.state:{};D&&(j||m?s.replace(T.fullPath,he({scroll:m&&g&&g.scroll},ue)):s.push(T.fullPath,ue)),c.value=T,Lt(T,M,D,m),In()}let Mt;function Os(){Mt||(Mt=s.listen((T,M,D)=>{if(!to.listening)return;const j=P(T),ue=pe(j);if(ue){Ne(he(ue,{replace:!0}),j).catch(si);return}l=j;const d=c.value;Ur&&uk(np(d.fullPath,D.delta),uc()),nt(j,d).catch(m=>rn(m,12)?m:rn(m,2)?(Ne(m.to,j).then(g=>{rn(g,20)&&!D.delta&&D.type===ki.pop&&s.go(-1,!1)}).catch(si),Promise.reject()):(D.delta&&s.go(-D.delta,!1),le(m,j,d))).then(m=>{m=m||Jn(j,d,!1),m&&(D.delta&&!rn(m,8)?s.go(-D.delta,!1):D.type===ki.pop&&rn(m,20)&&s.go(-1,!1)),wn(j,d,m)}).catch(si)}))}let br=Fs(),Me=Fs(),me;function le(T,M,D){In(T);const j=Me.list();return j.length?j.forEach(ue=>ue(T,M,D)):console.error(T),Promise.reject(T)}function tn(){return me&&c.value!==Sn?Promise.resolve():new Promise((T,M)=>{br.add([T,M])})}function In(T){return me||(me=!T,Os(),br.list().forEach(([M,D])=>T?D(T):M()),br.reset()),T}function Lt(T,M,D,j){const{scrollBehavior:ue}=t;if(!Ur||!ue)return Promise.resolve();const d=!D&&hk(np(T.fullPath,0))||(j||!D)&&history.state&&history.state.scroll||null;return jp().then(()=>ue(T,M,d)).then(m=>m&&lk(m)).catch(m=>le(m,T,M))}const it=T=>s.go(T);let Sr;const Pr=new Set,to={currentRoute:c,listening:!0,addRoute:p,removeRoute:_,hasRoute:w,getRoutes:y,resolve:P,options:t,push:L,replace:ge,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Me.add,isReady:tn,install(T){const M=this;T.component("RouterLink",Gk),T.component("RouterView",Xk),T.config.globalProperties.$router=M,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Hr(c)}),Ur&&!Sr&&c.value===Sn&&(Sr=!0,L(s.location).catch(ue=>{}));const D={};for(const ue in Sn)Object.defineProperty(D,ue,{get:()=>c.value[ue],enumerable:!0});T.provide(Dh,M),T.provide(pv,Dp(D)),T.provide(Kl,c);const j=T.unmount;Pr.add(T),T.unmount=function(){Pr.delete(T),Pr.size<1&&(l=Sn,Mt&&Mt(),Mt=null,c.value=Sn,Sr=!1,me=!1),j()}}};function Ke(T){return T.reduce((M,D)=>M.then(()=>yt(D)),Promise.resolve())}return to}function eN(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>hs(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>hs(l,c))||s.push(c))}return[n,r,s]}const oi="https://boholdinaalena.github.io/coffee-land-vue-site/assets/coffee_beans-xC65LbrO.svg",mv="https://boholdinaalena.github.io/coffee-land-vue-site/assets/glass1-XS1Af-LI.webp",tN={name:"v-home"},nN={class:"v-home"},rN=JE('<img class="beans" id="b1" src="'+oi+'" alt="coffee beans"><img class="beans" id="b2" src="'+oi+'" alt="coffee beans"><img class="beans" id="b3" src="'+oi+'" alt="coffee beans"><div class="title"><p class="title coffee">Coffee</p><p class="title land">Land</p><img src="'+mv+'" alt="coffee" align="middle"></div><p class="title-description">Место - где рождается кофе</p>',5),sN=[rN];function iN(t,e,n,r,s,i){return ae(),we("div",nN,sN)}const oN=xt(tN,[["render",iN]]),aN={name:"v-popup-item",props:{product_data:{type:Object,default(){return{}}}},computed:ys(["saved_drinks"]),methods:{closePopup(){this.$emit("closePopup")},addToCart(t){this.$store.dispatch("addToCart",t),ar.push("/cart")}}},cN={class:"v-popup-item"},lN=["src"],uN={class:"full-information"},hN={class:"description"};function fN(t,e,n,r,s,i){return ae(),we("div",cN,[C("button",{onClick:e[0]||(e[0]=(...o)=>i.closePopup&&i.closePopup(...o)),class:"btn-close"},"x"),C("img",{class:"popup-img",src:`coffee-land-vue-site/src/assets/coffee_carts/${n.product_data.image}.jpg`},null,8,lN),C("div",uN,[C("h1",null,De(n.product_data.name),1),C("p",hN,De(n.product_data.description),1),C("p",null,[gt("Размер: "),C("b",null,De(n.product_data.size),1)]),C("p",null,[gt("Раздел: "),C("b",null,De(n.product_data.section),1)]),C("p",null,[gt("Цена: "),C("b",null,De(n.product_data.price)+" рублей",1)])]),C("button",{class:"btn-popup",onClick:e[1]||(e[1]=o=>i.addToCart(n.product_data))},"Добавить в корзину")])}const dN=xt(aN,[["render",fN]]),pN="https://boholdinaalena.github.io/coffee-land-vue-site/assets/unlike-j1RawZNx.png",mN="https://boholdinaalena.github.io/coffee-land-vue-site/assets/like-HxtNy82S.png",gN={name:"v-catalog-item",props:{product_data:{type:Object,default(){return{}}}},components:{vPopupItem:dN},data(){return{isAddProfile:"+",isOpen:!1,isClose:!0}},computed:ys(["saved_drinks"]),methods:{openPopup(){this.isOpen=!0},closePopup(){this.isClose=!1},addToCart(){this.$emit("addToCart",this.product_data)},addToProfile(){this.$emit("addToProfile",this.product_data.id),this.isAddProfile=="+"?this.isAddProfile="-":this.isAddProfile="+"},deleteFromProfile(){this.$emit("deleteFromProfile",this.product_data.id)}}},_N=["src"],yN={class:"item-name"},vN={key:2},EN={class:"item-price"},TN=C("span",null," рублей",-1);function wN(t,e,n,r,s,i){const o=pn("v-popup-item");return n.product_data.available&&n.product_data.filter?(ae(),we("div",{key:0,class:"v-catalog-item",onClick:e[3]||(e[3]=(...a)=>i.openPopup&&i.openPopup(...a))},[t.saved_drinks.includes(n.product_data.id)?at("",!0):(ae(),we("img",{key:0,onClick:e[0]||(e[0]=Js((...a)=>i.addToProfile&&i.addToProfile(...a),["stop"])),src:pN,class:"like"})),t.saved_drinks.includes(n.product_data.id)?(ae(),we("img",{key:1,onClick:e[1]||(e[1]=Js((...a)=>i.deleteFromProfile&&i.deleteFromProfile(...a),["stop"])),src:mN,class:"like"})):at("",!0),C("img",{class:"item-img",src:`coffee-land-vue-site/src/assets/coffee_carts/${n.product_data.image}.jpg`},null,8,_N),C("h3",yN,De(n.product_data.name),1),s.isClose?(ae(),we("div",vN,[s.isOpen?(ae(),pr(o,{key:0,product_data:n.product_data,onClosePopup:i.closePopup},null,8,["product_data","onClosePopup"])):at("",!0)])):at("",!0),C("h3",EN,[gt(De(n.product_data.price),1),TN]),C("button",{onClick:e[2]||(e[2]=Js((...a)=>i.addToCart&&i.addToCart(...a),["stop"]))},"Добавить в корзину")])):at("",!0)}const gv=xt(gN,[["render",wN]]),IN="https://boholdinaalena.github.io/coffee-land-vue-site/assets/cart-icon1-A_6JUOXN.webp",AN={name:"v-catalog",components:{vCatalogItem:gv},data(){return{filter_params:[{name:"Классические",section:"classic"},{name:"Фирменные",section:"branded"},{name:"Авторские",section:"authorial"}]}},methods:{addToCart(t){this.$store.dispatch("addToCart",t)},addToProfile(t){this.user==null?ar.push("/login"):this.$store.dispatch("addToProfile",t)},deleteFromProfile(t){this.$store.dispatch("deleteFromProfile",t)},deleteFromProfile(t){this.$store.dispatch("deleteFromProfile",t)},filterBySections(t){this.products.forEach(e=>{e.section==t?e.filter=!0:e.filter=!1})},displayAllSection(){this.products.forEach(t=>t.filter=!0)}},mounted(){this.$store.dispatch("loadProducts")},computed:ys(["products","cart","user"])},RN={class:"v-catalog"},bN=C("h1",{class:"caption"},"Выберите товары из каталога",-1),SN={class:"filter"},PN=["onClick"],CN=C("img",{src:IN},null,-1),ON={class:"cart-length"};function kN(t,e,n,r,s,i){const o=pn("router-link"),a=pn("v-catalog-item");return ae(),we("div",RN,[bN,C("div",null,[C("button",{onClick:e[0]||(e[0]=(...c)=>i.displayAllSection&&i.displayAllSection(...c))},"Меню")]),(ae(!0),we(mt,null,$o(s.filter_params,c=>(ae(),we("div",SN,[C("button",{onClick:l=>i.filterBySections(c.section)},De(c.name)+" напитки ",9,PN)]))),256)),be(o,{class:"icon-cart",to:"/cart"},{default:On(()=>[CN,C("p",ON,De(t.cart.length),1)]),_:1}),(ae(!0),we(mt,null,$o(t.products,c=>(ae(),pr(a,{key:c.id,product_data:c,onAddToCart:i.addToCart,onAddToProfile:i.addToProfile,onDeleteFromProfile:l=>i.deleteFromProfile(c.id)},null,8,["product_data","onAddToCart","onAddToProfile","onDeleteFromProfile"]))),128))])}const NN=xt(AN,[["render",kN]]),DN="https://boholdinaalena.github.io/coffee-land-vue-site/assets/garbage-HdbpShoG.png",VN={name:"v-cart-item",props:{cart_data:{type:Object,default(){return{}}}},methods:{deleteFromCart(){this.$emit("deleteFromCart")},minusProduct(){this.cart_data.count==1&&this.deleteFromCart(),this.cart_data.count=this.cart_data.count-1},plusProduct(){this.cart_data.count==10?this.cart_data.count=10:this.cart_data.count++}}},xN={class:"v-cart-item"},MN=["src"],LN={class:"cart-info-container"},FN={class:"cart-item-description"},UN={class:"cart-item-count"},BN={class:"count"},$N={class:"count-container"};function jN(t,e,n,r,s,i){return ae(),we("div",xN,[C("img",{class:"cart-item-img",src:`coffee-land-vue-site/src/assets/coffee_carts/${n.cart_data.image}.jpg`},null,8,MN),C("div",LN,[C("h3",null,De(n.cart_data.name),1),C("p",FN,De(n.cart_data.description),1),C("p",null,[gt("Цена: "),C("b",null,De(n.cart_data.price),1),gt(" Размер: "),C("b",null,De(n.cart_data.size),1)]),C("h3",null,"Стоимость: "+De(n.cart_data.price*n.cart_data.count)+" рублей",1)]),C("div",UN,[C("p",BN,[C("div",$N,[C("button",{onClick:e[0]||(e[0]=(...o)=>i.minusProduct&&i.minusProduct(...o))},"-"),gt(" "+De(n.cart_data.count)+" ",1),C("button",{onClick:e[1]||(e[1]=(...o)=>i.plusProduct&&i.plusProduct(...o))},"+"),C("img",{onClick:e[2]||(e[2]=(...o)=>i.deleteFromCart&&i.deleteFromCart(...o)),src:DN,alt:"delete"})])])])])}const qN=xt(VN,[["render",jN]]),HN="https://boholdinaalena.github.io/coffee-land-vue-site/assets/glass2-tjg5rzez.webp",zN="https://boholdinaalena.github.io/coffee-land-vue-site/assets/glass3-nkF1B7nh.webp",WN="https://boholdinaalena.github.io/coffee-land-vue-site/assets/croissant-M0eR3rlw.webp",KN={name:"v-cart",components:{vCartItem:qN},computed:{cart(){return this.$store.state.cart},calculate_cost(){let t=0;for(let e of Object.values(this.cart))t+=e.count*e.price;return t}},methods:{deleteFromCart(t){this.$store.dispatch("deleteFromCart",t)}}},GN={class:"v-cart"},QN={key:0,class:"cart-empty"},JN=C("img",{id:"cart1",src:mv},null,-1),YN=C("img",{id:"cart2",src:HN},null,-1),XN=C("img",{id:"cart3",src:zN},null,-1),ZN=C("img",{id:"cart4",src:WN},null,-1),e1=C("p",null,"В корзине пока нет товаров",-1),t1=C("p",null,"Вы можете добавить товары в каталоге ->",-1),n1=C("button",{class:"btn-empty"},"Каталог",-1),r1={class:"v-cart-total"},s1={key:0,class:"btn-total"};function i1(t,e,n,r,s,i){const o=pn("router-link"),a=pn("v-cart-item");return ae(),we("div",GN,[i.cart.length?at("",!0):(ae(),we("div",QN,[JN,YN,XN,ZN,e1,t1,be(o,{to:"/catalog"},{default:On(()=>[n1]),_:1})])),i.cart.length?(ae(!0),we(mt,{key:1},$o(i.cart,(c,l)=>(ae(),pr(a,{key:c.id,cart_data:c,onDeleteFromCart:u=>i.deleteFromCart(l)},null,8,["cart_data","onDeleteFromCart"]))),128)):at("",!0),C("div",r1,[C("p",null,"Сумма: "+De(i.calculate_cost),1),i.calculate_cost>0?(ae(),we("button",s1,"Заказать")):at("",!0)])])}const o1=xt(KN,[["render",i1]]),a1={name:"v-craft"},c1={class:"v-craft"},l1=C("h1",null,"Тут можно создать крафтовый кофе",-1),u1=[l1];function h1(t,e,n,r,s,i){return ae(),we("div",c1,u1)}const f1=xt(a1,[["render",h1]]),d1={name:"v-login",data(){return{isVisible:!0}},computed:ys(["user"]),setup(){const t=Yc({}),e=Yc({}),n=HT();return{login_form:t,register_form:e,store:n,register:()=>{n.dispatch("register",e.value)},login:()=>{n.dispatch("login",t.value)},loginWithGoogle:()=>{n.dispatch("signInWithGoogle")},loginWithApple:()=>{n.dispatch("signInWithGoogle")}}}},p1={class:"bg-login"},m1={class:"v-login"},g1=C("img",{class:"beans",id:"b4",src:oi,alt:"coffee beans"},null,-1),_1=C("img",{class:"beans",id:"b5",src:oi,alt:"coffee beans"},null,-1),y1={class:"form"},v1={key:0,class:"register-container"},E1=C("h2",null,"Регистрация",-1),T1={class:"change-form"},w1={key:1,class:"login-container"},I1=C("h2",null,"Вход",-1),A1={class:"change-form"};function R1(t,e,n,r,s,i){return ae(),we("div",p1,[C("div",m1,[g1,_1,C("section",y1,[s.isVisible?at("",!0):(ae(),we("div",v1,[C("form",{class:"register",onSubmit:e[3]||(e[3]=Js((...o)=>r.register&&r.register(...o),["prevent"]))},[E1,co(C("input",{type:"email",placeholder:"Email address","onUpdate:modelValue":e[0]||(e[0]=o=>r.register_form.email=o)},null,512),[[lo,r.register_form.email]]),co(C("input",{type:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=o=>r.register_form.password=o)},null,512),[[lo,r.register_form.password]]),C("button",{class:"submit",onClick:e[2]||(e[2]=(...o)=>r.register&&r.register(...o))},"Регистрация")],32),C("div",T1,[C("p",null,[gt(" У вас уже есть аккаунт "),C("button",{onClick:e[4]||(e[4]=o=>s.isVisible=!0)},"Войти")])])])),s.isVisible?(ae(),we("div",w1,[C("form",{class:"login",onSubmit:e[8]||(e[8]=Js((...o)=>r.login&&r.login(...o),["prevent"]))},[I1,co(C("input",{type:"email",placeholder:"Email address","onUpdate:modelValue":e[5]||(e[5]=o=>r.login_form.email=o)},null,512),[[lo,r.login_form.email]]),co(C("input",{type:"password",placeholder:"Password","onUpdate:modelValue":e[6]||(e[6]=o=>r.login_form.password=o)},null,512),[[lo,r.login_form.password]]),C("button",{onClick:e[7]||(e[7]=(...o)=>r.login&&r.login(...o)),class:"submit"},"Войти")],32),C("div",A1,[C("p",null,[gt(" У вас ещё нет аккаунта "),C("button",{onClick:e[9]||(e[9]=o=>s.isVisible=!1)},"Зарегистрируйтесь")])])])):at("",!0),C("button",{onClick:e[10]||(e[10]=(...o)=>r.loginWithGoogle&&r.loginWithGoogle(...o))},"Sign In With Google"),C("button",{onClick:e[11]||(e[11]=(...o)=>r.loginWithApple&&r.loginWithApple(...o))},"Sign In With Aple")])])])}const b1=xt(d1,[["render",R1]]),S1={name:"v-profile",components:{vCatalogItem:gv},data(){return{profile_products:{}}},computed:ys(["user","user_info","products","saved_drinks"]),methods:{addToCart(t){this.$store.dispatch("addToCart",t)},addToProfile(t){this.$store.dispatch("addToProfile",t)},deleteFromProfile(t){this.$store.dispatch("deleteFromProfile",t)},consistProfileCatalog(){this.products.forEach(t=>{this.saved_drinks.includes(t.id)?t.filter=!0:t.filter=!1}),this.profile_products=this.products}},created(){this.$store.dispatch("loadProducts")},mounted(){setInterval(()=>{this.user_info&&this.consistProfileCatalog()},2e3)}},P1={key:0,class:"v-profile"},C1={class:"user-info"};function O1(t,e,n,r,s,i){const o=pn("v-catalog-item");return t.user?(ae(),we("div",P1,[C("div",C1,[gt(" Здесь должна быть информация о пользователе: "),C("p",null,De(t.user_info),1),gt(" "+De(t.saved_drinks),1)]),(ae(!0),we(mt,null,$o(s.profile_products,a=>(ae(),pr(o,{class:"favorite-products",key:a.id,product_data:a,onAddToCart:i.addToCart,onAddToProfile:i.addToProfile,onDeleteFromProfile:c=>i.deleteFromProfile(a.id)},null,8,["product_data","onAddToCart","onAddToProfile","onDeleteFromProfile"]))),128))])):at("",!0)}const k1=xt(S1,[["render",O1]]),N1=[{path:"/",name:"Home",component:oN,meta:{requiresAuth:!0}},{path:"/catalog",name:"Catalog",component:NN,meta:{requiresAuth:!0}},{path:"/cart",name:"Cart",component:o1,props:!0,meta:{requiresAuth:!0}},{path:"/craft",name:"Craft",component:f1,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:b1,meta:{requiresAuth:!0}},{path:"/profile",name:"Profile",component:k1,meta:{requiresAuth:!0}}],D1=Zk({history:mk(),routes:N1,linkActiveClass:"active"}),ar=D1,V1=ow({state:{products:[],cart:[],user:null,user_info:{},saved_drinks:[],profile_products:{}},mutations:{SET_PRODUCTS:(t,e)=>{t.products=e},SET_CART:(t,e)=>{if(t.cart.length>0){let n=!1;t.cart.map(function(r){r.id===e.id&&(n=!0,r.count++)}),n||t.cart.push(e)}else t.cart.push(e)},REMOVE_FROM_CART:(t,e)=>{t.cart.splice(e,1)},SET_USER(t,e){t.user=e},CLEAR_USER(t){t.user=null},SET_USER_INFO(t,e){t.user_info=e},SET_SAVE_DRINKS(t,e){t.saved_drinks.includes(e)||t.saved_drinks.push(e)},REMOVE_FROM_PROFILE:(t,e)=>{let n=t.saved_drinks.indexOf(e);console.log("mutation index:",n),t.saved_drinks.splice(n,1),console.log("slice")},CLEAR_SAVED(t,e){t.saved_drinks.length=0}},actions:{loadProducts({commit:t}){YO.get("http://localhost:3000/products").then(e=>e.data).then(e=>{t("SET_PRODUCTS",e)})},addToCart({commit:t},e){e.count=1,e.add="add",t("SET_CART",e)},deleteFromCart({commit:t},e){t("REMOVE_FROM_CART",e)},async login({commit:t},e){const{email:n,password:r}=e;try{await $A(nn,n,r)}catch(s){switch(s.code){case"auth/user-not-found":console.log("User not found");break;case"auth/wrong-password":console.log("Wrong password");break}return}t("SET_USER",nn.currentUser),ar.push("/")},async register({commit:t},e){const{email:n,password:r}=e;try{await BA(nn,n,r)}catch(s){switch(s.code){case"auth/email-already-in-use":alert("Email already in use");break;case"auth/invalid-email":alert("Invalid email");break;case"auth/operation-not-allowed":alert("Operation not allowed");break;case"auth/week-password":alert("Week password");break}return}t("SET_USER",nn.currentUser)},async logout({commit:t}){await HA(nn),t("SET_USER",null),t("CLEAR_SAVED"),ar.push("/")},async signInWithGoogle({commit:t}){const e=new on;await Uf(nn,e).then(()=>{t("SET_USER",nn.currentUser),ar.push("/")}).catch(n=>{})},async signInWithApple({commit:t}){const e=new Xs;await Uf(nn,e).then(()=>{t("SET_USER",nn.currentUser),ar.push("/")}).catch(n=>{})},async loadUserInfo({commit:t},e){t("SET_USER_INFO",e)},addToProfile({commit:t},e){t("SET_SAVE_DRINKS",e)},deleteFromProfile({commit:t},e){console.log("action:",e),t("REMOVE_FROM_PROFILE",e)}}});VT(DC).use(V1).use(ar).mount("#app");
