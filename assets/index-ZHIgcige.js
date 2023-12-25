(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Kl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ve={},Br=[],Wt=()=>{},_v=()=>!1,da=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Gl=t=>t.startsWith("onUpdate:"),We=Object.assign,Ql=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yv=Object.prototype.hasOwnProperty,ie=(t,e)=>yv.call(t,e),G=Array.isArray,$r=t=>pa(t)==="[object Map]",gp=t=>pa(t)==="[object Set]",X=t=>typeof t=="function",xe=t=>typeof t=="string",fs=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",_p=t=>(Ie(t)||X(t))&&X(t.then)&&X(t.catch),yp=Object.prototype.toString,pa=t=>yp.call(t),vv=t=>pa(t).slice(8,-1),vp=t=>pa(t)==="[object Object]",Jl=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vo=Kl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ev=/-(\w)/g,Xt=ma(t=>t.replace(Ev,(e,n)=>n?n.toUpperCase():"")),Tv=/\B([A-Z])/g,ds=ma(t=>t.replace(Tv,"-$1").toLowerCase()),ga=ma(t=>t.charAt(0).toUpperCase()+t.slice(1)),lc=ma(t=>t?`on${ga(t)}`:""),fr=(t,e)=>!Object.is(t,e),Eo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Mo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Hc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mh;const zc=()=>Mh||(Mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yl(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=xe(r)?Rv(r):Yl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(xe(t)||Ie(t))return t}const wv=/;(?![^(]*\))/g,Iv=/:([^]+)/,Av=/\/\*[^]*?\*\//g;function Rv(t){const e={};return t.replace(Av,"").split(wv).forEach(n=>{if(n){const r=n.split(Iv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Xl(t){let e="";if(xe(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const r=Xl(t[n]);r&&(e+=r+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sv=Kl(bv);function Ep(t){return!!t||t===""}const De=t=>xe(t)?t:t==null?"":G(t)||Ie(t)&&(t.toString===yp||!X(t.toString))?JSON.stringify(t,Tp,2):String(t),Tp=(t,e)=>e&&e.__v_isRef?Tp(t,e.value):$r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[uc(r,i)+" =>"]=s,n),{})}:gp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>uc(n))}:fs(e)?uc(e):Ie(e)&&!G(e)&&!vp(e)?String(e):e,uc=(t,e="")=>{var n;return fs(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Rt;class wp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Rt,!e&&Rt&&(this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Rt;try{return Rt=this,e()}finally{Rt=n}}}on(){Rt=this}off(){Rt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Pv(t){return new wp(t)}function Cv(t,e=Rt){e&&e.active&&e.effects.push(t)}function Ov(){return Rt}const Zl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ip=t=>(t.w&jn)>0,Ap=t=>(t.n&jn)>0,kv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=jn},Nv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ip(s)&&!Ap(s)?s.delete(t):e[n++]=s,s.w&=~jn,s.n&=~jn}e.length=n}},Wc=new WeakMap;let Ls=0,jn=1;const Kc=30;let bt;const cr=Symbol(""),Gc=Symbol("");class eu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Cv(this,r)}run(){if(!this.active)return this.fn();let e=bt,n=Mn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=bt,bt=this,Mn=!0,jn=1<<++Ls,Ls<=Kc?kv(this):Lh(this),this.fn()}finally{Ls<=Kc&&Nv(this),jn=1<<--Ls,bt=this.parent,Mn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){bt===this?this.deferStop=!0:this.active&&(Lh(this),this.onStop&&this.onStop(),this.active=!1)}}function Lh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Mn=!0;const Rp=[];function ps(){Rp.push(Mn),Mn=!1}function ms(){const t=Rp.pop();Mn=t===void 0?!0:t}function ct(t,e,n){if(Mn&&bt){let r=Wc.get(t);r||Wc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Zl()),bp(s)}}function bp(t,e){let n=!1;Ls<=Kc?Ap(t)||(t.n|=jn,n=!Ip(t)):n=!t.has(bt),n&&(t.add(bt),bt.deps.push(t))}function un(t,e,n,r,s,i){const o=Wc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!fs(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Jl(n)&&a.push(o.get("length")):(a.push(o.get(cr)),$r(t)&&a.push(o.get(Gc)));break;case"delete":G(t)||(a.push(o.get(cr)),$r(t)&&a.push(o.get(Gc)));break;case"set":$r(t)&&a.push(o.get(cr));break}if(a.length===1)a[0]&&Qc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Qc(Zl(c))}}function Qc(t,e){const n=G(t)?t:[...t];for(const r of n)r.computed&&Fh(r);for(const r of n)r.computed||Fh(r)}function Fh(t,e){(t!==bt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Dv=Kl("__proto__,__v_isRef,__isVue"),Sp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fs)),Uh=Vv();function Vv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ce(this);for(let i=0,o=this.length;i<o;i++)ct(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ce)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ps();const r=ce(this)[e].apply(this,n);return ms(),r}}),t}function xv(t){const e=ce(this);return ct(e,"has",t),e.hasOwnProperty(t)}class Pp{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Gv:Np:i?kp:Op).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=G(e);if(!s){if(o&&ie(Uh,n))return Reflect.get(Uh,n,r);if(n==="hasOwnProperty")return xv}const a=Reflect.get(e,n,r);return(fs(n)?Sp.has(n):Dv(n))||(s||ct(e,"get",n),i)?a:lt(a)?o&&Jl(n)?a:a.value:Ie(a)?s?Vp(a):Oi(a):a}}class Cp extends Pp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const c=Yr(i);if(!Lo(r)&&!Yr(r)&&(i=ce(i),r=ce(r)),!G(e)&&lt(i)&&!lt(r))return c?!1:(i.value=r,!0)}const o=G(e)&&Jl(n)?Number(n)<e.length:ie(e,n),a=Reflect.set(e,n,r,s);return e===ce(s)&&(o?fr(r,i)&&un(e,"set",n,r):un(e,"add",n,r)),a}deleteProperty(e,n){const r=ie(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&un(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!fs(n)||!Sp.has(n))&&ct(e,"has",n),r}ownKeys(e){return ct(e,"iterate",G(e)?"length":cr),Reflect.ownKeys(e)}}class Mv extends Pp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Lv=new Cp,Fv=new Mv,Uv=new Cp(!0),tu=t=>t,_a=t=>Reflect.getPrototypeOf(t);function eo(t,e,n=!1,r=!1){t=t.__v_raw;const s=ce(t),i=ce(e);n||(fr(e,i)&&ct(s,"get",e),ct(s,"get",i));const{has:o}=_a(s),a=r?tu:n?su:ii;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function to(t,e=!1){const n=this.__v_raw,r=ce(n),s=ce(t);return e||(fr(t,s)&&ct(r,"has",t),ct(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function no(t,e=!1){return t=t.__v_raw,!e&&ct(ce(t),"iterate",cr),Reflect.get(t,"size",t)}function Bh(t){t=ce(t);const e=ce(this);return _a(e).has.call(e,t)||(e.add(t),un(e,"add",t,t)),this}function $h(t,e){e=ce(e);const n=ce(this),{has:r,get:s}=_a(n);let i=r.call(n,t);i||(t=ce(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?fr(e,o)&&un(n,"set",t,e):un(n,"add",t,e),this}function jh(t){const e=ce(this),{has:n,get:r}=_a(e);let s=n.call(e,t);s||(t=ce(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&un(e,"delete",t,void 0),i}function qh(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&un(t,"clear",void 0,void 0),n}function ro(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ce(o),c=e?tu:t?su:ii;return!t&&ct(a,"iterate",cr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function so(t,e,n){return function(...r){const s=this.__v_raw,i=ce(s),o=$r(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?tu:e?su:ii;return!e&&ct(i,"iterate",c?Gc:cr),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function An(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Bv(){const t={get(i){return eo(this,i)},get size(){return no(this)},has:to,add:Bh,set:$h,delete:jh,clear:qh,forEach:ro(!1,!1)},e={get(i){return eo(this,i,!1,!0)},get size(){return no(this)},has:to,add:Bh,set:$h,delete:jh,clear:qh,forEach:ro(!1,!0)},n={get(i){return eo(this,i,!0)},get size(){return no(this,!0)},has(i){return to.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:ro(!0,!1)},r={get(i){return eo(this,i,!0,!0)},get size(){return no(this,!0)},has(i){return to.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:ro(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=so(i,!1,!1),n[i]=so(i,!0,!1),e[i]=so(i,!1,!0),r[i]=so(i,!0,!0)}),[t,n,e,r]}const[$v,jv,qv,Hv]=Bv();function nu(t,e){const n=e?t?Hv:qv:t?jv:$v;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ie(n,s)&&s in r?n:r,s,i)}const zv={get:nu(!1,!1)},Wv={get:nu(!1,!0)},Kv={get:nu(!0,!1)},Op=new WeakMap,kp=new WeakMap,Np=new WeakMap,Gv=new WeakMap;function Qv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jv(t){return t.__v_skip||!Object.isExtensible(t)?0:Qv(vv(t))}function Oi(t){return Yr(t)?t:ru(t,!1,Lv,zv,Op)}function Dp(t){return ru(t,!1,Uv,Wv,kp)}function Vp(t){return ru(t,!0,Fv,Kv,Np)}function ru(t,e,n,r,s){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Jv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function jr(t){return Yr(t)?jr(t.__v_raw):!!(t&&t.__v_isReactive)}function Yr(t){return!!(t&&t.__v_isReadonly)}function Lo(t){return!!(t&&t.__v_isShallow)}function xp(t){return jr(t)||Yr(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function Mp(t){return Mo(t,"__v_skip",!0),t}const ii=t=>Ie(t)?Oi(t):t,su=t=>Ie(t)?Vp(t):t;function Lp(t){Mn&&bt&&(t=ce(t),bp(t.dep||(t.dep=Zl())))}function Fp(t,e){t=ce(t);const n=t.dep;n&&Qc(n)}function lt(t){return!!(t&&t.__v_isRef===!0)}function Jc(t){return Up(t,!1)}function Yv(t){return Up(t,!0)}function Up(t,e){return lt(t)?t:new Xv(t,e)}class Xv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:ii(e)}get value(){return Lp(this),this._value}set value(e){const n=this.__v_isShallow||Lo(e)||Yr(e);e=n?e:ce(e),fr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ii(e),Fp(this))}}function qr(t){return lt(t)?t.value:t}const Zv={get:(t,e,n)=>qr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return lt(s)&&!lt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Bp(t){return jr(t)?t:new Proxy(t,Zv)}class eE{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new eu(e,()=>{this._dirty||(this._dirty=!0,Fp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ce(this);return Lp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function tE(t,e,n=!1){let r,s;const i=X(t);return i?(r=t,s=Wt):(r=t.get,s=t.set),new eE(r,s,i||!s,n)}function Ln(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ya(i,e,n)}return s}function Ct(t,e,n,r){if(X(t)){const i=Ln(t,e,n,r);return i&&_p(i)&&i.catch(o=>{ya(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ct(t[i],e,n,r));return s}function ya(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ln(c,null,10,[t,o,a]);return}}nE(t,n,s,r)}function nE(t,e,n,r=!0){console.error(t)}let oi=!1,Yc=!1;const Ye=[];let $t=0;const Hr=[];let sn=null,tr=0;const $p=Promise.resolve();let iu=null;function jp(t){const e=iu||$p;return t?e.then(this?t.bind(this):t):e}function rE(t){let e=$t+1,n=Ye.length;for(;e<n;){const r=e+n>>>1,s=Ye[r],i=ai(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function ou(t){(!Ye.length||!Ye.includes(t,oi&&t.allowRecurse?$t+1:$t))&&(t.id==null?Ye.push(t):Ye.splice(rE(t.id),0,t),qp())}function qp(){!oi&&!Yc&&(Yc=!0,iu=$p.then(zp))}function sE(t){const e=Ye.indexOf(t);e>$t&&Ye.splice(e,1)}function iE(t){G(t)?Hr.push(...t):(!sn||!sn.includes(t,t.allowRecurse?tr+1:tr))&&Hr.push(t),qp()}function Hh(t,e,n=oi?$t+1:0){for(;n<Ye.length;n++){const r=Ye[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Ye.splice(n,1),n--,r()}}}function Hp(t){if(Hr.length){const e=[...new Set(Hr)];if(Hr.length=0,sn){sn.push(...e);return}for(sn=e,sn.sort((n,r)=>ai(n)-ai(r)),tr=0;tr<sn.length;tr++)sn[tr]();sn=null,tr=0}}const ai=t=>t.id==null?1/0:t.id,oE=(t,e)=>{const n=ai(t)-ai(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function zp(t){Yc=!1,oi=!0,Ye.sort(oE);try{for($t=0;$t<Ye.length;$t++){const e=Ye[$t];e&&e.active!==!1&&Ln(e,null,14)}}finally{$t=0,Ye.length=0,Hp(),oi=!1,iu=null,(Ye.length||Hr.length)&&zp()}}function aE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ve;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||ve;f&&(s=n.map(p=>xe(p)?p.trim():p)),h&&(s=n.map(Hc))}let a,c=r[a=lc(e)]||r[a=lc(Xt(e))];!c&&i&&(c=r[a=lc(ds(e))]),c&&Ct(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ct(l,t,6,s)}}function Wp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=Wp(l,e,!0);u&&(a=!0,We(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ie(t)&&r.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):We(o,i),Ie(t)&&r.set(t,o),o)}function va(t,e){return!t||!da(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,ds(e))||ie(t,e))}let Tt=null,Kp=null;function Fo(t){const e=Tt;return Tt=t,Kp=t&&t.type.__scopeId||null,e}function On(t,e=Tt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&tf(-1);const i=Fo(e);let o;try{o=t(...s)}finally{Fo(i),r._d&&tf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function hc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:_,inheritAttrs:y}=t;let w,P;const k=Fo(t);try{if(n.shapeFlag&4){const L=s||r,ge=L;w=Bt(u.call(ge,L,h,i,p,f,_)),P=c}else{const L=e;w=Bt(L.length>1?L(i,{attrs:c,slots:a,emit:l}):L(i,null)),P=e.props?c:cE(c)}}catch(L){Ks.length=0,ya(L,t,1),w=be(dr)}let $=w;if(P&&y!==!1){const L=Object.keys(P),{shapeFlag:ge}=$;L.length&&ge&7&&(o&&L.some(Gl)&&(P=lE(P,o)),$=Xr($,P))}return n.dirs&&($=Xr($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),w=$,Fo(k),w}const cE=t=>{let e;for(const n in t)(n==="class"||n==="style"||da(n))&&((e||(e={}))[n]=t[n]);return e},lE=(t,e)=>{const n={};for(const r in t)(!Gl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function uE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?zh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!va(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?zh(r,o,l):!0:!!o;return!1}function zh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!va(n,i))return!0}return!1}function hE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Gp="components";function pn(t,e){return dE(Gp,t,!0,e)||t}const fE=Symbol.for("v-ndc");function dE(t,e,n=!0,r=!1){const s=Tt||je;if(s){const i=s.type;if(t===Gp){const a=iT(i,!1);if(a&&(a===e||a===Xt(e)||a===ga(Xt(e))))return i}const o=Wh(s[t]||i[t],e)||Wh(s.appContext[t],e);return!o&&r?i:o}}function Wh(t,e){return t&&(t[e]||t[Xt(e)]||t[ga(Xt(e))])}const pE=t=>t.__isSuspense;function mE(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):iE(t)}const io={};function zr(t,e,n){return Qp(t,e,n)}function Qp(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ve){var a;const c=Ov()===((a=je)==null?void 0:a.scope)?je:null;let l,u=!1,h=!1;if(lt(t)?(l=()=>t.value,u=Lo(t)):jr(t)?(l=()=>t,r=!0):G(t)?(h=!0,u=t.some(L=>jr(L)||Lo(L)),l=()=>t.map(L=>{if(lt(L))return L.value;if(jr(L))return rr(L);if(X(L))return Ln(L,c,2)})):X(t)?e?l=()=>Ln(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),Ct(t,c,3,[p])}:l=Wt,e&&r){const L=l;l=()=>rr(L())}let f,p=L=>{f=k.onStop=()=>{Ln(L,c,4),f=k.onStop=void 0}},_;if(li)if(p=Wt,e?n&&Ct(e,c,3,[l(),h?[]:void 0,p]):l(),s==="sync"){const L=cT();_=L.__watcherHandles||(L.__watcherHandles=[])}else return Wt;let y=h?new Array(t.length).fill(io):io;const w=()=>{if(k.active)if(e){const L=k.run();(r||u||(h?L.some((ge,pe)=>fr(ge,y[pe])):fr(L,y)))&&(f&&f(),Ct(e,c,3,[L,y===io?void 0:h&&y[0]===io?[]:y,p]),y=L)}else k.run()};w.allowRecurse=!!e;let P;s==="sync"?P=w:s==="post"?P=()=>ot(w,c&&c.suspense):(w.pre=!0,c&&(w.id=c.uid),P=()=>ou(w));const k=new eu(l,P);e?n?w():y=k.run():s==="post"?ot(k.run.bind(k),c&&c.suspense):k.run();const $=()=>{k.stop(),c&&c.scope&&Ql(c.scope.effects,k)};return _&&_.push($),$}function gE(t,e,n){const r=this.proxy,s=xe(t)?t.includes(".")?Jp(r,t):()=>r[t]:t.bind(r,r);let i;X(e)?i=e:(i=e.handler,n=e);const o=je;Zr(this);const a=Qp(s,i.bind(r),n);return o?Zr(o):lr(),a}function Jp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function rr(t,e){if(!Ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),lt(t))rr(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)rr(t[n],e);else if(gp(t)||$r(t))t.forEach(n=>{rr(n,e)});else if(vp(t))for(const n in t)rr(t[n],e);return t}function oo(t,e){const n=Tt;if(n===null)return t;const r=Ia(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ve]=e[i];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&rr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Xn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ps(),Ct(c,n,8,[t.el,a,t,e]),ms())}}/*! #__NO_SIDE_EFFECTS__ */function Yp(t,e){return X(t)?We({name:t.name},e,{setup:t}):t}const To=t=>!!t.type.__asyncLoader,Xp=t=>t.type.__isKeepAlive;function _E(t,e){Zp(t,"a",e)}function yE(t,e){Zp(t,"da",e)}function Zp(t,e,n=je){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ea(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Xp(s.parent.vnode)&&vE(r,e,n,s),s=s.parent}}function vE(t,e,n,r){const s=Ea(e,t,r,!0);em(()=>{Ql(r[e],s)},n)}function Ea(t,e,n=je,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ps(),Zr(n);const a=Ct(e,n,t,o);return lr(),ms(),a});return r?s.unshift(i):s.push(i),i}}const En=t=>(e,n=je)=>(!li||t==="sp")&&Ea(t,(...r)=>e(...r),n),EE=En("bm"),TE=En("m"),wE=En("bu"),IE=En("u"),AE=En("bum"),em=En("um"),RE=En("sp"),bE=En("rtg"),SE=En("rtc");function PE(t,e=je){Ea("ec",t,e)}function Uo(t,e,n,r){let s;const i=n&&n[r];if(G(t)||xe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ie(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Xc=t=>t?hm(t)?Ia(t)||t.proxy:Xc(t.parent):null,Ws=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xc(t.parent),$root:t=>Xc(t.root),$emit:t=>t.emit,$options:t=>au(t),$forceUpdate:t=>t.f||(t.f=()=>ou(t.update)),$nextTick:t=>t.n||(t.n=jp.bind(t.proxy)),$watch:t=>gE.bind(t)}),fc=(t,e)=>t!==ve&&!t.__isScriptSetup&&ie(t,e),CE={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(fc(r,e))return o[e]=1,r[e];if(s!==ve&&ie(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ie(l,e))return o[e]=3,i[e];if(n!==ve&&ie(n,e))return o[e]=4,n[e];Zc&&(o[e]=0)}}const u=Ws[e];let h,f;if(u)return e==="$attrs"&&ct(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&ie(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ie(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return fc(s,e)?(s[e]=n,!0):r!==ve&&ie(r,e)?(r[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ve&&ie(t,o)||fc(e,o)||(a=i[0])&&ie(a,o)||ie(r,o)||ie(Ws,o)||ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Kh(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Zc=!0;function OE(t){const e=au(t),n=t.proxy,r=t.ctx;Zc=!1,e.beforeCreate&&Gh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:_,activated:y,deactivated:w,beforeDestroy:P,beforeUnmount:k,destroyed:$,unmounted:L,render:ge,renderTracked:pe,renderTriggered:Ne,errorCaptured:ft,serverPrefetch:_t,expose:nt,inheritAttrs:wn,components:Yn,directives:Mt,filters:Cs}=e;if(l&&kE(l,r,null),o)for(const me in o){const le=o[me];X(le)&&(r[me]=le.bind(n))}if(s){const me=s.call(n,n);Ie(me)&&(t.data=Oi(me))}if(Zc=!0,i)for(const me in i){const le=i[me],tn=X(le)?le.bind(n,n):X(le.get)?le.get.bind(n,n):Wt,In=!X(le)&&X(le.set)?le.set.bind(n):Wt,Lt=yt({get:tn,set:In});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:it=>Lt.value=it})}if(a)for(const me in a)tm(a[me],r,n,me);if(c){const me=X(c)?c.call(n):c;Reflect.ownKeys(me).forEach(le=>{wo(le,me[le])})}u&&Gh(u,t,"c");function Me(me,le){G(le)?le.forEach(tn=>me(tn.bind(n))):le&&me(le.bind(n))}if(Me(EE,h),Me(TE,f),Me(wE,p),Me(IE,_),Me(_E,y),Me(yE,w),Me(PE,ft),Me(SE,pe),Me(bE,Ne),Me(AE,k),Me(em,L),Me(RE,_t),G(nt))if(nt.length){const me=t.exposed||(t.exposed={});nt.forEach(le=>{Object.defineProperty(me,le,{get:()=>n[le],set:tn=>n[le]=tn})})}else t.exposed||(t.exposed={});ge&&t.render===Wt&&(t.render=ge),wn!=null&&(t.inheritAttrs=wn),Yn&&(t.components=Yn),Mt&&(t.directives=Mt)}function kE(t,e,n=Wt){G(t)&&(t=el(t));for(const r in t){const s=t[r];let i;Ie(s)?"default"in s?i=Kt(s.from||r,s.default,!0):i=Kt(s.from||r):i=Kt(s),lt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Gh(t,e,n){Ct(G(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function tm(t,e,n,r){const s=r.includes(".")?Jp(n,r):()=>n[r];if(xe(t)){const i=e[t];X(i)&&zr(s,i)}else if(X(t))zr(s,t.bind(n));else if(Ie(t))if(G(t))t.forEach(i=>tm(i,e,n,r));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&zr(s,i,t)}}function au(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Bo(c,l,o,!0)),Bo(c,e,o)),Ie(e)&&i.set(e,c),c}function Bo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Bo(t,i,n,!0),s&&s.forEach(o=>Bo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=NE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const NE={data:Qh,props:Jh,emits:Jh,methods:Fs,computed:Fs,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:Fs,directives:Fs,watch:VE,provide:Qh,inject:DE};function Qh(t,e){return e?t?function(){return We(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function DE(t,e){return Fs(el(t),el(e))}function el(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Fs(t,e){return t?We(Object.create(null),t,e):e}function Jh(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:We(Object.create(null),Kh(t),Kh(e??{})):e}function VE(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const r in e)n[r]=rt(t[r],e[r]);return n}function nm(){return{app:null,config:{isNativeTag:_v,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xE=0;function ME(t,e){return function(r,s=null){X(r)||(r=We({},r)),s!=null&&!Ie(s)&&(s=null);const i=nm(),o=new WeakSet;let a=!1;const c=i.app={_uid:xE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:lT,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=be(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ia(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){$o=c;try{return l()}finally{$o=null}}};return c}}let $o=null;function wo(t,e){if(je){let n=je.provides;const r=je.parent&&je.parent.provides;r===n&&(n=je.provides=Object.create(r)),n[t]=e}}function Kt(t,e,n=!1){const r=je||Tt;if(r||$o){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:$o._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&X(e)?e.call(r&&r.proxy):e}}function LE(t,e,n,r=!1){const s={},i={};Mo(i,wa,1),t.propsDefaults=Object.create(null),rm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Dp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function FE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ce(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(va(t.emitsOptions,f))continue;const p=e[f];if(c)if(ie(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const _=Xt(f);s[_]=tl(c,a,_,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{rm(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=ds(h))===h||!ie(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=tl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],l=!0)}l&&un(t,"set","$attrs")}function rm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(vo(c))continue;const l=e[c];let u;s&&ie(s,u=Xt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:va(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ce(n),l=a||ve;for(let u=0;u<i.length;u++){const h=i[u];n[h]=tl(s,c,h,l[h],t,!ie(l,h))}}return o}function tl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&X(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Zr(s),r=l[n]=c.call(null,e),lr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ds(n))&&(r=!0))}return r}function sm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[f,p]=sm(h,e,!0);We(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ie(t)&&r.set(t,Br),Br;if(G(i))for(let u=0;u<i.length;u++){const h=Xt(i[u]);Yh(h)&&(o[h]=ve)}else if(i)for(const u in i){const h=Xt(u);if(Yh(h)){const f=i[u],p=o[h]=G(f)||X(f)?{type:f}:We({},f);if(p){const _=ef(Boolean,p.type),y=ef(String,p.type);p[0]=_>-1,p[1]=y<0||_<y,(_>-1||ie(p,"default"))&&a.push(h)}}}const l=[o,a];return Ie(t)&&r.set(t,l),l}function Yh(t){return t[0]!=="$"}function Xh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Zh(t,e){return Xh(t)===Xh(e)}function ef(t,e){return G(e)?e.findIndex(n=>Zh(n,t)):X(e)&&Zh(e,t)?0:-1}const im=t=>t[0]==="_"||t==="$stable",cu=t=>G(t)?t.map(Bt):[Bt(t)],UE=(t,e,n)=>{if(e._n)return e;const r=On((...s)=>cu(e(...s)),n);return r._c=!1,r},om=(t,e,n)=>{const r=t._ctx;for(const s in t){if(im(s))continue;const i=t[s];if(X(i))e[s]=UE(s,i,r);else if(i!=null){const o=cu(i);e[s]=()=>o}}},am=(t,e)=>{const n=cu(e);t.slots.default=()=>n},BE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),Mo(e,"_",n)):om(e,t.slots={})}else t.slots={},e&&am(t,e);Mo(t.slots,wa,1)},$E=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ve;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(We(s,e),!n&&a===1&&delete s._):(i=!e.$stable,om(e,s)),o=e}else e&&(am(t,e),o={default:1});if(i)for(const a in s)!im(a)&&o[a]==null&&delete s[a]};function nl(t,e,n,r,s=!1){if(G(t)){t.forEach((f,p)=>nl(f,e&&(G(e)?e[p]:e),n,r,s));return}if(To(r)&&!s)return;const i=r.shapeFlag&4?Ia(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(xe(l)?(u[l]=null,ie(h,l)&&(h[l]=null)):lt(l)&&(l.value=null)),X(c))Ln(c,a,12,[o,u]);else{const f=xe(c),p=lt(c);if(f||p){const _=()=>{if(t.f){const y=f?ie(h,c)?h[c]:u[c]:c.value;s?G(y)&&Ql(y,i):G(y)?y.includes(i)||y.push(i):f?(u[c]=[i],ie(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ie(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,ot(_,n)):_()}}}const ot=mE;function jE(t){return qE(t)}function qE(t,e){const n=zc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Wt,insertStaticContent:_}=t,y=(d,m,g,v=null,A=null,R=null,x=!1,O=null,N=!!m.dynamicChildren)=>{if(d===m)return;d&&!ks(d,m)&&(v=T(d),it(d,A,R,!0),d=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:S,ref:H,shapeFlag:B}=m;switch(S){case Ta:w(d,m,g,v);break;case dr:P(d,m,g,v);break;case Io:d==null&&k(m,g,v,x);break;case pt:Yn(d,m,g,v,A,R,x,O,N);break;default:B&1?ge(d,m,g,v,A,R,x,O,N):B&6?Mt(d,m,g,v,A,R,x,O,N):(B&64||B&128)&&S.process(d,m,g,v,A,R,x,O,N,D)}H!=null&&A&&nl(H,d&&d.ref,R,m||d,!m)},w=(d,m,g,v)=>{if(d==null)r(m.el=a(m.children),g,v);else{const A=m.el=d.el;m.children!==d.children&&l(A,m.children)}},P=(d,m,g,v)=>{d==null?r(m.el=c(m.children||""),g,v):m.el=d.el},k=(d,m,g,v)=>{[d.el,d.anchor]=_(d.children,m,g,v,d.el,d.anchor)},$=({el:d,anchor:m},g,v)=>{let A;for(;d&&d!==m;)A=f(d),r(d,g,v),d=A;r(m,g,v)},L=({el:d,anchor:m})=>{let g;for(;d&&d!==m;)g=f(d),s(d),d=g;s(m)},ge=(d,m,g,v,A,R,x,O,N)=>{x=x||m.type==="svg",d==null?pe(m,g,v,A,R,x,O,N):_t(d,m,A,R,x,O,N)},pe=(d,m,g,v,A,R,x,O)=>{let N,S;const{type:H,props:B,shapeFlag:z,transition:Y,dirs:ee}=d;if(N=d.el=o(d.type,R,B&&B.is,B),z&8?u(N,d.children):z&16&&ft(d.children,N,null,v,A,R&&H!=="foreignObject",x,O),ee&&Xn(d,null,v,"created"),Ne(N,d,d.scopeId,x,v),B){for(const de in B)de!=="value"&&!vo(de)&&i(N,de,null,B[de],R,d.children,v,A,Ke);"value"in B&&i(N,"value",null,B.value),(S=B.onVnodeBeforeMount)&&Ut(S,v,d)}ee&&Xn(d,null,v,"beforeMount");const _e=HE(A,Y);_e&&Y.beforeEnter(N),r(N,m,g),((S=B&&B.onVnodeMounted)||_e||ee)&&ot(()=>{S&&Ut(S,v,d),_e&&Y.enter(N),ee&&Xn(d,null,v,"mounted")},A)},Ne=(d,m,g,v,A)=>{if(g&&p(d,g),v)for(let R=0;R<v.length;R++)p(d,v[R]);if(A){let R=A.subTree;if(m===R){const x=A.vnode;Ne(d,x,x.scopeId,x.slotScopeIds,A.parent)}}},ft=(d,m,g,v,A,R,x,O,N=0)=>{for(let S=N;S<d.length;S++){const H=d[S]=O?Pn(d[S]):Bt(d[S]);y(null,H,m,g,v,A,R,x,O)}},_t=(d,m,g,v,A,R,x)=>{const O=m.el=d.el;let{patchFlag:N,dynamicChildren:S,dirs:H}=m;N|=d.patchFlag&16;const B=d.props||ve,z=m.props||ve;let Y;g&&Zn(g,!1),(Y=z.onVnodeBeforeUpdate)&&Ut(Y,g,m,d),H&&Xn(m,d,g,"beforeUpdate"),g&&Zn(g,!0);const ee=A&&m.type!=="foreignObject";if(S?nt(d.dynamicChildren,S,O,g,v,ee,R):x||le(d,m,O,null,g,v,ee,R,!1),N>0){if(N&16)wn(O,m,B,z,g,v,A);else if(N&2&&B.class!==z.class&&i(O,"class",null,z.class,A),N&4&&i(O,"style",B.style,z.style,A),N&8){const _e=m.dynamicProps;for(let de=0;de<_e.length;de++){const Se=_e[de],At=B[Se],Cr=z[Se];(Cr!==At||Se==="value")&&i(O,Se,At,Cr,A,d.children,g,v,Ke)}}N&1&&d.children!==m.children&&u(O,m.children)}else!x&&S==null&&wn(O,m,B,z,g,v,A);((Y=z.onVnodeUpdated)||H)&&ot(()=>{Y&&Ut(Y,g,m,d),H&&Xn(m,d,g,"updated")},v)},nt=(d,m,g,v,A,R,x)=>{for(let O=0;O<m.length;O++){const N=d[O],S=m[O],H=N.el&&(N.type===pt||!ks(N,S)||N.shapeFlag&70)?h(N.el):g;y(N,S,H,null,v,A,R,x,!0)}},wn=(d,m,g,v,A,R,x)=>{if(g!==v){if(g!==ve)for(const O in g)!vo(O)&&!(O in v)&&i(d,O,g[O],null,x,m.children,A,R,Ke);for(const O in v){if(vo(O))continue;const N=v[O],S=g[O];N!==S&&O!=="value"&&i(d,O,S,N,x,m.children,A,R,Ke)}"value"in v&&i(d,"value",g.value,v.value)}},Yn=(d,m,g,v,A,R,x,O,N)=>{const S=m.el=d?d.el:a(""),H=m.anchor=d?d.anchor:a("");let{patchFlag:B,dynamicChildren:z,slotScopeIds:Y}=m;Y&&(O=O?O.concat(Y):Y),d==null?(r(S,g,v),r(H,g,v),ft(m.children,g,H,A,R,x,O,N)):B>0&&B&64&&z&&d.dynamicChildren?(nt(d.dynamicChildren,z,g,A,R,x,O),(m.key!=null||A&&m===A.subTree)&&cm(d,m,!0)):le(d,m,g,H,A,R,x,O,N)},Mt=(d,m,g,v,A,R,x,O,N)=>{m.slotScopeIds=O,d==null?m.shapeFlag&512?A.ctx.activate(m,g,v,x,N):Cs(m,g,v,A,R,x,N):br(d,m,N)},Cs=(d,m,g,v,A,R,x)=>{const O=d.component=eT(d,v,A);if(Xp(d)&&(O.ctx.renderer=D),tT(O),O.asyncDep){if(A&&A.registerDep(O,Me),!d.el){const N=O.subTree=be(dr);P(null,N,m,g)}return}Me(O,d,m,g,A,R,x)},br=(d,m,g)=>{const v=m.component=d.component;if(uE(d,m,g))if(v.asyncDep&&!v.asyncResolved){me(v,m,g);return}else v.next=m,sE(v.update),v.update();else m.el=d.el,v.vnode=m},Me=(d,m,g,v,A,R,x)=>{const O=()=>{if(d.isMounted){let{next:H,bu:B,u:z,parent:Y,vnode:ee}=d,_e=H,de;Zn(d,!1),H?(H.el=ee.el,me(d,H,x)):H=ee,B&&Eo(B),(de=H.props&&H.props.onVnodeBeforeUpdate)&&Ut(de,Y,H,ee),Zn(d,!0);const Se=hc(d),At=d.subTree;d.subTree=Se,y(At,Se,h(At.el),T(At),d,A,R),H.el=Se.el,_e===null&&hE(d,Se.el),z&&ot(z,A),(de=H.props&&H.props.onVnodeUpdated)&&ot(()=>Ut(de,Y,H,ee),A)}else{let H;const{el:B,props:z}=m,{bm:Y,m:ee,parent:_e}=d,de=To(m);if(Zn(d,!1),Y&&Eo(Y),!de&&(H=z&&z.onVnodeBeforeMount)&&Ut(H,_e,m),Zn(d,!0),B&&ue){const Se=()=>{d.subTree=hc(d),ue(B,d.subTree,d,A,null)};de?m.type.__asyncLoader().then(()=>!d.isUnmounted&&Se()):Se()}else{const Se=d.subTree=hc(d);y(null,Se,g,v,d,A,R),m.el=Se.el}if(ee&&ot(ee,A),!de&&(H=z&&z.onVnodeMounted)){const Se=m;ot(()=>Ut(H,_e,Se),A)}(m.shapeFlag&256||_e&&To(_e.vnode)&&_e.vnode.shapeFlag&256)&&d.a&&ot(d.a,A),d.isMounted=!0,m=g=v=null}},N=d.effect=new eu(O,()=>ou(S),d.scope),S=d.update=()=>N.run();S.id=d.uid,Zn(d,!0),S()},me=(d,m,g)=>{m.component=d;const v=d.vnode.props;d.vnode=m,d.next=null,FE(d,m.props,v,g),$E(d,m.children,g),ps(),Hh(d),ms()},le=(d,m,g,v,A,R,x,O,N=!1)=>{const S=d&&d.children,H=d?d.shapeFlag:0,B=m.children,{patchFlag:z,shapeFlag:Y}=m;if(z>0){if(z&128){In(S,B,g,v,A,R,x,O,N);return}else if(z&256){tn(S,B,g,v,A,R,x,O,N);return}}Y&8?(H&16&&Ke(S,A,R),B!==S&&u(g,B)):H&16?Y&16?In(S,B,g,v,A,R,x,O,N):Ke(S,A,R,!0):(H&8&&u(g,""),Y&16&&ft(B,g,v,A,R,x,O,N))},tn=(d,m,g,v,A,R,x,O,N)=>{d=d||Br,m=m||Br;const S=d.length,H=m.length,B=Math.min(S,H);let z;for(z=0;z<B;z++){const Y=m[z]=N?Pn(m[z]):Bt(m[z]);y(d[z],Y,g,null,A,R,x,O,N)}S>H?Ke(d,A,R,!0,!1,B):ft(m,g,v,A,R,x,O,N,B)},In=(d,m,g,v,A,R,x,O,N)=>{let S=0;const H=m.length;let B=d.length-1,z=H-1;for(;S<=B&&S<=z;){const Y=d[S],ee=m[S]=N?Pn(m[S]):Bt(m[S]);if(ks(Y,ee))y(Y,ee,g,null,A,R,x,O,N);else break;S++}for(;S<=B&&S<=z;){const Y=d[B],ee=m[z]=N?Pn(m[z]):Bt(m[z]);if(ks(Y,ee))y(Y,ee,g,null,A,R,x,O,N);else break;B--,z--}if(S>B){if(S<=z){const Y=z+1,ee=Y<H?m[Y].el:v;for(;S<=z;)y(null,m[S]=N?Pn(m[S]):Bt(m[S]),g,ee,A,R,x,O,N),S++}}else if(S>z)for(;S<=B;)it(d[S],A,R,!0),S++;else{const Y=S,ee=S,_e=new Map;for(S=ee;S<=z;S++){const dt=m[S]=N?Pn(m[S]):Bt(m[S]);dt.key!=null&&_e.set(dt.key,S)}let de,Se=0;const At=z-ee+1;let Cr=!1,Dh=0;const Os=new Array(At);for(S=0;S<At;S++)Os[S]=0;for(S=Y;S<=B;S++){const dt=d[S];if(Se>=At){it(dt,A,R,!0);continue}let Ft;if(dt.key!=null)Ft=_e.get(dt.key);else for(de=ee;de<=z;de++)if(Os[de-ee]===0&&ks(dt,m[de])){Ft=de;break}Ft===void 0?it(dt,A,R,!0):(Os[Ft-ee]=S+1,Ft>=Dh?Dh=Ft:Cr=!0,y(dt,m[Ft],g,null,A,R,x,O,N),Se++)}const Vh=Cr?zE(Os):Br;for(de=Vh.length-1,S=At-1;S>=0;S--){const dt=ee+S,Ft=m[dt],xh=dt+1<H?m[dt+1].el:v;Os[S]===0?y(null,Ft,g,xh,A,R,x,O,N):Cr&&(de<0||S!==Vh[de]?Lt(Ft,g,xh,2):de--)}}},Lt=(d,m,g,v,A=null)=>{const{el:R,type:x,transition:O,children:N,shapeFlag:S}=d;if(S&6){Lt(d.component.subTree,m,g,v);return}if(S&128){d.suspense.move(m,g,v);return}if(S&64){x.move(d,m,g,D);return}if(x===pt){r(R,m,g);for(let B=0;B<N.length;B++)Lt(N[B],m,g,v);r(d.anchor,m,g);return}if(x===Io){$(d,m,g);return}if(v!==2&&S&1&&O)if(v===0)O.beforeEnter(R),r(R,m,g),ot(()=>O.enter(R),A);else{const{leave:B,delayLeave:z,afterLeave:Y}=O,ee=()=>r(R,m,g),_e=()=>{B(R,()=>{ee(),Y&&Y()})};z?z(R,ee,_e):_e()}else r(R,m,g)},it=(d,m,g,v=!1,A=!1)=>{const{type:R,props:x,ref:O,children:N,dynamicChildren:S,shapeFlag:H,patchFlag:B,dirs:z}=d;if(O!=null&&nl(O,null,g,d,!0),H&256){m.ctx.deactivate(d);return}const Y=H&1&&z,ee=!To(d);let _e;if(ee&&(_e=x&&x.onVnodeBeforeUnmount)&&Ut(_e,m,d),H&6)Zi(d.component,g,v);else{if(H&128){d.suspense.unmount(g,v);return}Y&&Xn(d,null,m,"beforeUnmount"),H&64?d.type.remove(d,m,g,A,D,v):S&&(R!==pt||B>0&&B&64)?Ke(S,m,g,!1,!0):(R===pt&&B&384||!A&&H&16)&&Ke(N,m,g),v&&Sr(d)}(ee&&(_e=x&&x.onVnodeUnmounted)||Y)&&ot(()=>{_e&&Ut(_e,m,d),Y&&Xn(d,null,m,"unmounted")},g)},Sr=d=>{const{type:m,el:g,anchor:v,transition:A}=d;if(m===pt){Pr(g,v);return}if(m===Io){L(d);return}const R=()=>{s(g),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(d.shapeFlag&1&&A&&!A.persisted){const{leave:x,delayLeave:O}=A,N=()=>x(g,R);O?O(d.el,R,N):N()}else R()},Pr=(d,m)=>{let g;for(;d!==m;)g=f(d),s(d),d=g;s(m)},Zi=(d,m,g)=>{const{bum:v,scope:A,update:R,subTree:x,um:O}=d;v&&Eo(v),A.stop(),R&&(R.active=!1,it(x,d,m,g)),O&&ot(O,m),ot(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Ke=(d,m,g,v=!1,A=!1,R=0)=>{for(let x=R;x<d.length;x++)it(d[x],m,g,v,A)},T=d=>d.shapeFlag&6?T(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),M=(d,m,g)=>{d==null?m._vnode&&it(m._vnode,null,null,!0):y(m._vnode||null,d,m,null,null,null,g),Hh(),Hp(),m._vnode=d},D={p:y,um:it,m:Lt,r:Sr,mt:Cs,mc:ft,pc:le,pbc:nt,n:T,o:t};let j,ue;return e&&([j,ue]=e(D)),{render:M,hydrate:j,createApp:ME(M,j)}}function Zn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function HE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function cm(t,e,n=!1){const r=t.children,s=e.children;if(G(r)&&G(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Pn(s[i]),a.el=o.el),n||cm(o,a)),a.type===Ta&&(a.el=o.el)}}function zE(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const WE=t=>t.__isTeleport,pt=Symbol.for("v-fgt"),Ta=Symbol.for("v-txt"),dr=Symbol.for("v-cmt"),Io=Symbol.for("v-stc"),Ks=[];let St=null;function ae(t=!1){Ks.push(St=t?null:[])}function KE(){Ks.pop(),St=Ks[Ks.length-1]||null}let ci=1;function tf(t){ci+=t}function lm(t){return t.dynamicChildren=ci>0?St||Br:null,KE(),ci>0&&St&&St.push(t),t}function we(t,e,n,r,s,i){return lm(C(t,e,n,r,s,i,!0))}function pr(t,e,n,r,s){return lm(be(t,e,n,r,s,!0))}function rl(t){return t?t.__v_isVNode===!0:!1}function ks(t,e){return t.type===e.type&&t.key===e.key}const wa="__vInternal",um=({key:t})=>t??null,Ao=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||lt(t)||X(t)?{i:Tt,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,r=0,s=null,i=t===pt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&um(e),ref:e&&Ao(e),scopeId:Kp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tt};return a?(lu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=xe(n)?8:16),ci>0&&!o&&St&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&St.push(c),c}const be=GE;function GE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===fE)&&(t=dr),rl(t)){const a=Xr(t,e,!0);return n&&lu(a,n),ci>0&&!i&&St&&(a.shapeFlag&6?St[St.indexOf(t)]=a:St.push(a)),a.patchFlag|=-2,a}if(oT(t)&&(t=t.__vccOpts),e){e=QE(e);let{class:a,style:c}=e;a&&!xe(a)&&(e.class=Xl(a)),Ie(c)&&(xp(c)&&!G(c)&&(c=We({},c)),e.style=Yl(c))}const o=xe(t)?1:pE(t)?128:WE(t)?64:Ie(t)?4:X(t)?2:0;return C(t,e,n,r,s,o,i,!0)}function QE(t){return t?xp(t)||wa in t?We({},t):t:null}function Xr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?YE(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&um(a),ref:e&&e.ref?n&&s?G(s)?s.concat(Ao(e)):[s,Ao(e)]:Ao(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==pt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xr(t.ssContent),ssFallback:t.ssFallback&&Xr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ot(t=" ",e=0){return be(Ta,null,t,e)}function JE(t,e){const n=be(Io,null,t);return n.staticCount=e,n}function mt(t="",e=!1){return e?(ae(),pr(dr,null,t)):be(dr,null,t)}function Bt(t){return t==null||typeof t=="boolean"?be(dr):G(t)?be(pt,null,t.slice()):typeof t=="object"?Pn(t):be(Ta,null,String(t))}function Pn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xr(t)}function lu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),lu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(wa in e)?e._ctx=Tt:s===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:Tt},n=32):(e=String(e),r&64?(n=16,e=[Ot(e)]):n=8);t.children=e,t.shapeFlag|=n}function YE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Xl([e.class,r.class]));else if(s==="style")e.style=Yl([e.style,r.style]);else if(da(s)){const i=e[s],o=r[s];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ut(t,e,n,r=null){Ct(t,e,7,[n,r])}const XE=nm();let ZE=0;function eT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||XE,i={uid:ZE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new wp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sm(r,s),emitsOptions:Wp(r,s),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:r.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=aE.bind(null,i),t.ce&&t.ce(i),i}let je=null,uu,Or,nf="__VUE_INSTANCE_SETTERS__";(Or=zc()[nf])||(Or=zc()[nf]=[]),Or.push(t=>je=t),uu=t=>{Or.length>1?Or.forEach(e=>e(t)):Or[0](t)};const Zr=t=>{uu(t),t.scope.on()},lr=()=>{je&&je.scope.off(),uu(null)};function hm(t){return t.vnode.shapeFlag&4}let li=!1;function tT(t,e=!1){li=e;const{props:n,children:r}=t.vnode,s=hm(t);LE(t,n,s,e),BE(t,r);const i=s?nT(t,e):void 0;return li=!1,i}function nT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Mp(new Proxy(t.ctx,CE));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?sT(t):null;Zr(t),ps();const i=Ln(r,t,0,[t.props,s]);if(ms(),lr(),_p(i)){if(i.then(lr,lr),e)return i.then(o=>{rf(t,o,e)}).catch(o=>{ya(o,t,0)});t.asyncDep=i}else rf(t,i,e)}else fm(t,e)}function rf(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=Bp(e)),fm(t,n)}let sf;function fm(t,e,n){const r=t.type;if(!t.render){if(!e&&sf&&!r.render){const s=r.template||au(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=We(We({isCustomElement:i,delimiters:a},o),c);r.render=sf(s,l)}}t.render=r.render||Wt}{Zr(t),ps();try{OE(t)}finally{ms(),lr()}}}function rT(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ct(t,"get","$attrs"),e[n]}}))}function sT(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return rT(t)},slots:t.slots,emit:t.emit,expose:e}}function Ia(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Bp(Mp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ws)return Ws[n](t)},has(e,n){return n in e||n in Ws}}))}function iT(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function oT(t){return X(t)&&"__vccOpts"in t}const yt=(t,e)=>tE(t,e,li);function dm(t,e,n){const r=arguments.length;return r===2?Ie(e)&&!G(e)?rl(e)?be(t,null,[e]):be(t,e):be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&rl(n)&&(n=[n]),be(t,e,n))}const aT=Symbol.for("v-scx"),cT=()=>Kt(aT),lT="3.3.12",uT="http://www.w3.org/2000/svg",nr=typeof document<"u"?document:null,of=nr&&nr.createElement("template"),hT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?nr.createElementNS(uT,t):nr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>nr.createTextNode(t),createComment:t=>nr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>nr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{of.innerHTML=r?`<svg>${t}</svg>`:t;const a=of.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fT=Symbol("_vtc");function dT(t,e,n){const r=t[fT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const pT=Symbol("_vod"),mT=Symbol("");function gT(t,e,n){const r=t.style,s=xe(n);if(n&&!s){if(e&&!xe(e))for(const i in e)n[i]==null&&sl(r,i,"");for(const i in n)sl(r,i,n[i])}else{const i=r.display;if(s){if(e!==n){const o=r[mT];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");pT in t&&(r.display=i)}}const af=/\s*!important$/;function sl(t,e,n){if(G(n))n.forEach(r=>sl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=_T(t,e);af.test(n)?t.setProperty(ds(r),n.replace(af,""),"important"):t[r]=n}}const cf=["Webkit","Moz","ms"],dc={};function _T(t,e){const n=dc[e];if(n)return n;let r=Xt(e);if(r!=="filter"&&r in t)return dc[e]=r;r=ga(r);for(let s=0;s<cf.length;s++){const i=cf[s]+r;if(i in t)return dc[e]=i}return e}const lf="http://www.w3.org/1999/xlink";function yT(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(lf,e.slice(6,e.length)):t.setAttributeNS(lf,e,n);else{const i=Sv(e);n==null||i&&!Ep(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function vT(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ep(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Vr(t,e,n,r){t.addEventListener(e,n,r)}function ET(t,e,n,r){t.removeEventListener(e,n,r)}const uf=Symbol("_vei");function TT(t,e,n,r,s=null){const i=t[uf]||(t[uf]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=wT(e);if(r){const l=i[e]=RT(r,s);Vr(t,a,l,c)}else o&&(ET(t,a,o,c),i[e]=void 0)}}const hf=/(?:Once|Passive|Capture)$/;function wT(t){let e;if(hf.test(t)){e={};let r;for(;r=t.match(hf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ds(t.slice(2)),e]}let pc=0;const IT=Promise.resolve(),AT=()=>pc||(IT.then(()=>pc=0),pc=Date.now());function RT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ct(bT(r,n.value),e,5,[r])};return n.value=t,n.attached=AT(),n}function bT(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ff=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ST=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?dT(t,r,s):e==="style"?gT(t,n,r):da(e)?Gl(e)||TT(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):PT(t,e,r,s))?vT(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),yT(t,e,r,s))};function PT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ff(e)&&X(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ff(e)&&xe(n)?!1:e in t}const df=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>Eo(e,n):e};function CT(t){t.target.composing=!0}function pf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const mc=Symbol("_assign"),ao={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[mc]=df(s);const i=r||s.props&&s.props.type==="number";Vr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Hc(a)),t[mc](a)}),n&&Vr(t,"change",()=>{t.value=t.value.trim()}),e||(Vr(t,"compositionstart",CT),Vr(t,"compositionend",pf),Vr(t,"change",pf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[mc]=df(i),t.composing)return;const o=s||t.type==="number"?Hc(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},OT=["ctrl","shift","alt","meta"],kT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>OT.some(n=>t[`${n}Key`]&&!e.includes(n))},Gs=(t,e)=>t._withMods||(t._withMods=(n,...r)=>{for(let s=0;s<e.length;s++){const i=kT[e[s]];if(i&&i(n,e))return}return t(n,...r)}),NT=We({patchProp:ST},hT);let mf;function DT(){return mf||(mf=jE(NT))}const VT=(...t)=>{const e=DT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=xT(r);if(!s)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function xT(t){return xe(t)?document.querySelector(t):t}function MT(){return pm().__VUE_DEVTOOLS_GLOBAL_HOOK__}function pm(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const LT=typeof Proxy=="function",FT="devtools-plugin:setup",UT="plugin:settings:set";let kr,il;function BT(){var t;return kr!==void 0||(typeof window<"u"&&window.performance?(kr=!0,il=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(kr=!0,il=global.perf_hooks.performance):kr=!1),kr}function $T(){return BT()?il.now():Date.now()}class jT{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return $T()}},n&&n.on(UT,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function qT(t,e){const n=t,r=pm(),s=MT(),i=LT&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(FT,t,e);else{const o=i?new jT(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var mm="store";function HT(t){return t===void 0&&(t=null),Kt(t!==null?t:mm)}function gs(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function gm(t){return t!==null&&typeof t=="object"}function zT(t){return t&&typeof t.then=="function"}function WT(t,e){return function(){return t(e)}}function _m(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function ym(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Aa(t,n,[],t._modules.root,!0),hu(t,n,e)}function hu(t,e,n){var r=t._state,s=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},c=Pv(!0);c.run(function(){gs(i,function(l,u){o[u]=WT(l,t),a[u]=yt(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=Oi({data:e}),t._scope=c,t.strict&&YT(t),r&&n&&t._withCommit(function(){r.data=null}),s&&s.stop()}function Aa(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=fu(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=KT(t,o,n);r.forEachMutation(function(u,h){var f=o+h;GT(t,f,u,l)}),r.forEachAction(function(u,h){var f=u.root?h:o+h,p=u.handler||u;QT(t,f,p,l)}),r.forEachGetter(function(u,h){var f=o+h;JT(t,f,u,l)}),r.forEachChild(function(u,h){Aa(t,e,n.concat(h),u,s)})}function KT(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=jo(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:r?t.commit:function(i,o,a){var c=jo(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return vm(t,e)}},state:{get:function(){return fu(t.state,n)}}}),s}function vm(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function GT(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function QT(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return zT(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function JT(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function YT(t){zr(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function fu(t,e){return e.reduce(function(n,r){return n[r]},t)}function jo(t,e,n){return gm(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var XT="vuex bindings",gf="vuex:mutations",gc="vuex:actions",Nr="vuex",ZT=0;function ew(t,e){qT({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[XT]},function(n){n.addTimelineLayer({id:gf,label:"Vuex Mutations",color:_f}),n.addTimelineLayer({id:gc,label:"Vuex Actions",color:_f}),n.addInspector({id:Nr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Nr)if(r.filter){var s=[];Im(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[wm(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Nr){var s=r.nodeId;vm(e,s),r.state=rw(iw(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Nr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(Nr),n.sendInspectorState(Nr),n.addTimelineEvent({layerId:gf,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=ZT++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:gc,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:gc,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var _f=8702998,tw=6710886,nw=16777215,Em={label:"namespaced",textColor:nw,backgroundColor:tw};function Tm(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function wm(t,e){return{id:e||"root",label:Tm(e),tags:t.namespaced?[Em]:[],children:Object.keys(t._children).map(function(n){return wm(t._children[n],e+n+"/")})}}function Im(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Em]:[]}),Object.keys(e._children).forEach(function(s){Im(t,e._children[s],n,r+s+"/")})}function rw(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=sw(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Tm(o):o,editable:!1,value:ol(function(){return i[o]})}})}return s}function sw(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=ol(function(){return t[n]})}else e[n]=ol(function(){return t[n]})}),e}function iw(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function ol(t){try{return t()}catch(e){return e}}var Vt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},Am={namespaced:{configurable:!0}};Am.namespaced.get=function(){return!!this._rawModule.namespaced};Vt.prototype.addChild=function(e,n){this._children[e]=n};Vt.prototype.removeChild=function(e){delete this._children[e]};Vt.prototype.getChild=function(e){return this._children[e]};Vt.prototype.hasChild=function(e){return e in this._children};Vt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Vt.prototype.forEachChild=function(e){gs(this._children,e)};Vt.prototype.forEachGetter=function(e){this._rawModule.getters&&gs(this._rawModule.getters,e)};Vt.prototype.forEachAction=function(e){this._rawModule.actions&&gs(this._rawModule.actions,e)};Vt.prototype.forEachMutation=function(e){this._rawModule.mutations&&gs(this._rawModule.mutations,e)};Object.defineProperties(Vt.prototype,Am);var wr=function(e){this.register([],e,!1)};wr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};wr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};wr.prototype.update=function(e){Rm([],this.root,e)};wr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Vt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&gs(n.modules,function(a,c){s.register(e.concat(c),a,r)})};wr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};wr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function Rm(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;Rm(t.concat(r),e.getChild(r),n.modules[r])}}function ow(t){return new ht(t)}var ht=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new wr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(f,p){return c.call(o,f,p)},this.commit=function(f,p,_){return l.call(o,f,p,_)},this.strict=s;var u=this._modules.root.state;Aa(this,u,[],this._modules.root),hu(this,u),r.forEach(function(h){return h(n)})},du={state:{configurable:!0}};ht.prototype.install=function(e,n){e.provide(n||mm,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&ew(e,this)};du.state.get=function(){return this._state.data};du.state.set=function(t){};ht.prototype.commit=function(e,n,r){var s=this,i=jo(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};ht.prototype.dispatch=function(e,n){var r=this,s=jo(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(f){try{r._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,r.state)})}catch{}u(f)},function(f){try{r._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,r.state,f)})}catch{}h(f)})})}};ht.prototype.subscribe=function(e,n){return _m(e,this._subscribers,n)};ht.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return _m(r,this._actionSubscribers,n)};ht.prototype.watch=function(e,n,r){var s=this;return zr(function(){return e(s.state,s.getters)},n,Object.assign({},r))};ht.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};ht.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Aa(this,this.state,e,this._modules.get(e),r.preserveState),hu(this,this.state)};ht.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=fu(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),ym(this)};ht.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ht.prototype.hotUpdate=function(e){this._modules.update(e),ym(this,!0)};ht.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(ht.prototype,du);var _s=lw(function(t,e){var n={};return aw(e).forEach(function(r){var s=r.key,i=r.val;n[s]=function(){var a=this.$store.state,c=this.$store.getters;if(t){var l=uw(this.$store,"mapState",t);if(!l)return;a=l.context.state,c=l.context.getters}return typeof i=="function"?i.call(this,a,c):a[i]},n[s].vuex=!0}),n});function aw(t){return cw(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function cw(t){return Array.isArray(t)||gm(t)}function lw(t){return function(e,n){return typeof e!="string"?(n=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,n)}}function uw(t,e,n){var r=t._modulesNamespaceMap[n];return r}const hw="/coffee-land-vue-site/assets/logo-YfChKsOu.svg",xt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},fw={name:"v-main-wrapper",computed:_s(["user"]),methods:{signOut(){this.$store.dispatch("logout")}}},dw={class:"v-main-wrapper"},pw={class:"header"},mw=C("img",{class:"logo",src:hw,alt:"logo"},null,-1),gw=C("p",null,"Главная страница",-1),_w=C("p",null,"Каталог",-1),yw=C("p",null,"Корзина",-1),vw=C("p",null,"Профиль",-1),Ew=C("p",{id:"last"},"Профиль",-1),Tw={key:2,class:"user-block"},ww=C("p",{class:"email"},null,-1),Iw=C("div",{class:"block"},[C("div",{class:"block__blur-bg-wrap"},[C("div",{class:"block__blur-bg block__blur-bg_color-2"})])],-1);function Aw(t,e,n,r,s,i){const o=pn("router-link"),a=pn("router-view");return ae(),we("div",dw,[C("div",pw,[mw,be(o,{to:"/"},{default:On(()=>[gw]),_:1}),be(o,{to:"/catalog"},{default:On(()=>[_w]),_:1}),be(o,{to:"/cart"},{default:On(()=>[yw]),_:1}),t.user==null?(ae(),pr(o,{key:0,to:"/login"},{default:On(()=>[vw]),_:1})):mt("",!0),t.user!=null?(ae(),pr(o,{key:1,to:"/profile"},{default:On(()=>[Ew]),_:1})):mt("",!0),t.user?(ae(),we("div",Tw,[ww,Ot(" "+De(t.user.email)+" ",1),C("button",{class:"btn-signout",onClick:e[0]||(e[0]=(...c)=>i.signOut&&i.signOut(...c))},"Выйти")])):mt("",!0)]),be(a),Iw])}const Rw=xt(fw,[["render",Aw]]),bw={name:"app",components:{vMainWrapper:Rw}},Sw={id:"app"};function Pw(t,e,n,r,s,i){const o=pn("v-main-wrapper");return ae(),we("div",Sw,[be(o)])}const Cw=xt(bw,[["render",Pw]]);function bm(t,e){return function(){return t.apply(e,arguments)}}const{toString:Ow}=Object.prototype,{getPrototypeOf:pu}=Object,Ra=(t=>e=>{const n=Ow.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),en=t=>(t=t.toLowerCase(),e=>Ra(e)===t),ba=t=>e=>typeof e===t,{isArray:ys}=Array,ui=ba("undefined");function kw(t){return t!==null&&!ui(t)&&t.constructor!==null&&!ui(t.constructor)&&wt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Sm=en("ArrayBuffer");function Nw(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Sm(t.buffer),e}const Dw=ba("string"),wt=ba("function"),Pm=ba("number"),Sa=t=>t!==null&&typeof t=="object",Vw=t=>t===!0||t===!1,Ro=t=>{if(Ra(t)!=="object")return!1;const e=pu(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},xw=en("Date"),Mw=en("File"),Lw=en("Blob"),Fw=en("FileList"),Uw=t=>Sa(t)&&wt(t.pipe),Bw=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||wt(t.append)&&((e=Ra(t))==="formdata"||e==="object"&&wt(t.toString)&&t.toString()==="[object FormData]"))},$w=en("URLSearchParams"),jw=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ki(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),ys(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function Cm(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Om=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,km=t=>!ui(t)&&t!==Om;function al(){const{caseless:t}=km(this)&&this||{},e={},n=(r,s)=>{const i=t&&Cm(e,s)||s;Ro(e[i])&&Ro(r)?e[i]=al(e[i],r):Ro(r)?e[i]=al({},r):ys(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&ki(arguments[r],n);return e}const qw=(t,e,n,{allOwnKeys:r}={})=>(ki(e,(s,i)=>{n&&wt(s)?t[i]=bm(s,n):t[i]=s},{allOwnKeys:r}),t),Hw=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),zw=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Ww=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&pu(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Kw=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Gw=t=>{if(!t)return null;if(ys(t))return t;let e=t.length;if(!Pm(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Qw=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&pu(Uint8Array)),Jw=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},Yw=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Xw=en("HTMLFormElement"),Zw=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),yf=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),eI=en("RegExp"),Nm=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};ki(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},tI=t=>{Nm(t,(e,n)=>{if(wt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(wt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},nI=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return ys(t)?r(t):r(String(t).split(e)),n},rI=()=>{},sI=(t,e)=>(t=+t,Number.isFinite(t)?t:e),_c="abcdefghijklmnopqrstuvwxyz",vf="0123456789",Dm={DIGIT:vf,ALPHA:_c,ALPHA_DIGIT:_c+_c.toUpperCase()+vf},iI=(t=16,e=Dm.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function oI(t){return!!(t&&wt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const aI=t=>{const e=new Array(10),n=(r,s)=>{if(Sa(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=ys(r)?[]:{};return ki(r,(o,a)=>{const c=n(o,s+1);!ui(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},cI=en("AsyncFunction"),lI=t=>t&&(Sa(t)||wt(t))&&wt(t.then)&&wt(t.catch),E={isArray:ys,isArrayBuffer:Sm,isBuffer:kw,isFormData:Bw,isArrayBufferView:Nw,isString:Dw,isNumber:Pm,isBoolean:Vw,isObject:Sa,isPlainObject:Ro,isUndefined:ui,isDate:xw,isFile:Mw,isBlob:Lw,isRegExp:eI,isFunction:wt,isStream:Uw,isURLSearchParams:$w,isTypedArray:Qw,isFileList:Fw,forEach:ki,merge:al,extend:qw,trim:jw,stripBOM:Hw,inherits:zw,toFlatObject:Ww,kindOf:Ra,kindOfTest:en,endsWith:Kw,toArray:Gw,forEachEntry:Jw,matchAll:Yw,isHTMLForm:Xw,hasOwnProperty:yf,hasOwnProp:yf,reduceDescriptors:Nm,freezeMethods:tI,toObjectSet:nI,toCamelCase:Zw,noop:rI,toFiniteNumber:sI,findKey:Cm,global:Om,isContextDefined:km,ALPHABET:Dm,generateString:iI,isSpecCompliantForm:oI,toJSONObject:aI,isAsyncFn:cI,isThenable:lI};function se(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}E.inherits(se,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Vm=se.prototype,xm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{xm[t]={value:t}});Object.defineProperties(se,xm);Object.defineProperty(Vm,"isAxiosError",{value:!0});se.from=(t,e,n,r,s,i)=>{const o=Object.create(Vm);return E.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),se.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const uI=null;function cl(t){return E.isPlainObject(t)||E.isArray(t)}function Mm(t){return E.endsWith(t,"[]")?t.slice(0,-2):t}function Ef(t,e,n){return t?t.concat(e).map(function(s,i){return s=Mm(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function hI(t){return E.isArray(t)&&!t.some(cl)}const fI=E.toFlatObject(E,{},null,function(e){return/^is[A-Z]/.test(e)});function Pa(t,e,n){if(!E.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,w){return!E.isUndefined(w[y])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(e);if(!E.isFunction(s))throw new TypeError("visitor must be a function");function l(_){if(_===null)return"";if(E.isDate(_))return _.toISOString();if(!c&&E.isBlob(_))throw new se("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(_)||E.isTypedArray(_)?c&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,y,w){let P=_;if(_&&!w&&typeof _=="object"){if(E.endsWith(y,"{}"))y=r?y:y.slice(0,-2),_=JSON.stringify(_);else if(E.isArray(_)&&hI(_)||(E.isFileList(_)||E.endsWith(y,"[]"))&&(P=E.toArray(_)))return y=Mm(y),P.forEach(function($,L){!(E.isUndefined($)||$===null)&&e.append(o===!0?Ef([y],L,i):o===null?y:y+"[]",l($))}),!1}return cl(_)?!0:(e.append(Ef(w,y,i),l(_)),!1)}const h=[],f=Object.assign(fI,{defaultVisitor:u,convertValue:l,isVisitable:cl});function p(_,y){if(!E.isUndefined(_)){if(h.indexOf(_)!==-1)throw Error("Circular reference detected in "+y.join("."));h.push(_),E.forEach(_,function(P,k){(!(E.isUndefined(P)||P===null)&&s.call(e,P,E.isString(k)?k.trim():k,y,f))===!0&&p(P,y?y.concat(k):[k])}),h.pop()}}if(!E.isObject(t))throw new TypeError("data must be an object");return p(t),e}function Tf(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function mu(t,e){this._pairs=[],t&&Pa(t,this,e)}const Lm=mu.prototype;Lm.append=function(e,n){this._pairs.push([e,n])};Lm.toString=function(e){const n=e?function(r){return e.call(this,r,Tf)}:Tf;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function dI(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Fm(t,e,n){if(!e)return t;const r=n&&n.encode||dI,s=n&&n.serialize;let i;if(s?i=s(e,n):i=E.isURLSearchParams(e)?e.toString():new mu(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class pI{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){E.forEach(this.handlers,function(r){r!==null&&e(r)})}}const wf=pI,Um={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},mI=typeof URLSearchParams<"u"?URLSearchParams:mu,gI=typeof FormData<"u"?FormData:null,_I=typeof Blob<"u"?Blob:null,yI={isBrowser:!0,classes:{URLSearchParams:mI,FormData:gI,Blob:_I},protocols:["http","https","file","blob","url","data"]},Bm=typeof window<"u"&&typeof document<"u",vI=(t=>Bm&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),EI=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",TI=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Bm,hasStandardBrowserEnv:vI,hasStandardBrowserWebWorkerEnv:EI},Symbol.toStringTag,{value:"Module"})),qt={...TI,...yI};function wI(t,e){return Pa(t,new qt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return qt.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function II(t){return E.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function AI(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function $m(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&E.isArray(s)?s.length:o,c?(E.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!E.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&E.isArray(s[o])&&(s[o]=AI(s[o])),!a)}if(E.isFormData(t)&&E.isFunction(t.entries)){const n={};return E.forEachEntry(t,(r,s)=>{e(II(r),s,n,0)}),n}return null}function RI(t,e,n){if(E.isString(t))try{return(e||JSON.parse)(t),E.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const gu={transitional:Um,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=E.isObject(e);if(i&&E.isHTMLForm(e)&&(e=new FormData(e)),E.isFormData(e))return s&&s?JSON.stringify($m(e)):e;if(E.isArrayBuffer(e)||E.isBuffer(e)||E.isStream(e)||E.isFile(e)||E.isBlob(e))return e;if(E.isArrayBufferView(e))return e.buffer;if(E.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return wI(e,this.formSerializer).toString();if((a=E.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Pa(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),RI(e)):e}],transformResponse:[function(e){const n=this.transitional||gu.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&E.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?se.from(a,se.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qt.classes.FormData,Blob:qt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(["delete","get","head","post","put","patch"],t=>{gu.headers[t]={}});const _u=gu,bI=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),SI=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&bI[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},If=Symbol("internals");function Ns(t){return t&&String(t).trim().toLowerCase()}function bo(t){return t===!1||t==null?t:E.isArray(t)?t.map(bo):String(t)}function PI(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const CI=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function yc(t,e,n,r,s){if(E.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!E.isString(e)){if(E.isString(r))return e.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(e)}}function OI(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function kI(t,e){const n=E.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class Ca{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=Ns(c);if(!u)throw new Error("header name must be a non-empty string");const h=E.findKey(s,u);(!h||s[h]===void 0||l===!0||l===void 0&&s[h]!==!1)&&(s[h||c]=bo(a))}const o=(a,c)=>E.forEach(a,(l,u)=>i(l,u,c));return E.isPlainObject(e)||e instanceof this.constructor?o(e,n):E.isString(e)&&(e=e.trim())&&!CI(e)?o(SI(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=Ns(e),e){const r=E.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return PI(s);if(E.isFunction(n))return n.call(this,s,r);if(E.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ns(e),e){const r=E.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||yc(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Ns(o),o){const a=E.findKey(r,o);a&&(!n||yc(r,r[a],a,n))&&(delete r[a],s=!0)}}return E.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||yc(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return E.forEach(this,(s,i)=>{const o=E.findKey(r,i);if(o){n[o]=bo(s),delete n[i];return}const a=e?OI(i):String(i).trim();a!==i&&delete n[i],n[a]=bo(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return E.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[If]=this[If]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Ns(o);r[a]||(kI(s,o),r[a]=!0)}return E.isArray(e)?e.forEach(i):i(e),this}}Ca.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(Ca.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});E.freezeMethods(Ca);const hn=Ca;function vc(t,e){const n=this||_u,r=e||n,s=hn.from(r.headers);let i=r.data;return E.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function jm(t){return!!(t&&t.__CANCEL__)}function Ni(t,e,n){se.call(this,t??"canceled",se.ERR_CANCELED,e,n),this.name="CanceledError"}E.inherits(Ni,se,{__CANCEL__:!0});function NI(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new se("Request failed with status code "+n.status,[se.ERR_BAD_REQUEST,se.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const DI=qt.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];E.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),E.isString(r)&&o.push("path="+r),E.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function VI(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function xI(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function qm(t,e){return t&&!VI(e)?xI(t,e):e}const MI=qt.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=E.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function LI(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function FI(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let h=i,f=0;for(;h!==s;)f+=n[h++],h=h%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const p=u&&l-u;return p?Math.round(f*1e3/p):void 0}}function Af(t,e){let n=0;const r=FI(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};u[e?"download":"upload"]=!0,t(u)}}const UI=typeof XMLHttpRequest<"u",BI=UI&&function(t){return new Promise(function(n,r){let s=t.data;const i=hn.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function l(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let u;if(E.isFormData(s)){if(qt.hasStandardBrowserEnv||qt.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((u=i.getContentType())!==!1){const[y,...w]=u?u.split(";").map(P=>P.trim()).filter(Boolean):[];i.setContentType([y||"multipart/form-data",...w].join("; "))}}let h=new XMLHttpRequest;if(t.auth){const y=t.auth.username||"",w=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+w))}const f=qm(t.baseURL,t.url);h.open(t.method.toUpperCase(),Fm(f,t.params,t.paramsSerializer),!0),h.timeout=t.timeout;function p(){if(!h)return;const y=hn.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),P={data:!o||o==="text"||o==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:y,config:t,request:h};NI(function($){n($),l()},function($){r($),l()},P),h=null}if("onloadend"in h?h.onloadend=p:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(p)},h.onabort=function(){h&&(r(new se("Request aborted",se.ECONNABORTED,t,h)),h=null)},h.onerror=function(){r(new se("Network Error",se.ERR_NETWORK,t,h)),h=null},h.ontimeout=function(){let w=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const P=t.transitional||Um;t.timeoutErrorMessage&&(w=t.timeoutErrorMessage),r(new se(w,P.clarifyTimeoutError?se.ETIMEDOUT:se.ECONNABORTED,t,h)),h=null},qt.hasStandardBrowserEnv&&(a&&E.isFunction(a)&&(a=a(t)),a||a!==!1&&MI(f))){const y=t.xsrfHeaderName&&t.xsrfCookieName&&DI.read(t.xsrfCookieName);y&&i.set(t.xsrfHeaderName,y)}s===void 0&&i.setContentType(null),"setRequestHeader"in h&&E.forEach(i.toJSON(),function(w,P){h.setRequestHeader(P,w)}),E.isUndefined(t.withCredentials)||(h.withCredentials=!!t.withCredentials),o&&o!=="json"&&(h.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&h.addEventListener("progress",Af(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",Af(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=y=>{h&&(r(!y||y.type?new Ni(null,t,h):y),h.abort(),h=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const _=LI(f);if(_&&qt.protocols.indexOf(_)===-1){r(new se("Unsupported protocol "+_+":",se.ERR_BAD_REQUEST,t));return}h.send(s||null)})},ll={http:uI,xhr:BI};E.forEach(ll,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Rf=t=>`- ${t}`,$I=t=>E.isFunction(t)||t===null||t===!1,Hm={getAdapter:t=>{t=E.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!$I(n)&&(r=ll[(o=String(n)).toLowerCase()],r===void 0))throw new se(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Rf).join(`
`):" "+Rf(i[0]):"as no adapter specified";throw new se("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:ll};function Ec(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ni(null,t)}function bf(t){return Ec(t),t.headers=hn.from(t.headers),t.data=vc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Hm.getAdapter(t.adapter||_u.adapter)(t).then(function(r){return Ec(t),r.data=vc.call(t,t.transformResponse,r),r.headers=hn.from(r.headers),r},function(r){return jm(r)||(Ec(t),r&&r.response&&(r.response.data=vc.call(t,t.transformResponse,r.response),r.response.headers=hn.from(r.response.headers))),Promise.reject(r)})}const Sf=t=>t instanceof hn?t.toJSON():t;function es(t,e){e=e||{};const n={};function r(l,u,h){return E.isPlainObject(l)&&E.isPlainObject(u)?E.merge.call({caseless:h},l,u):E.isPlainObject(u)?E.merge({},u):E.isArray(u)?u.slice():u}function s(l,u,h){if(E.isUndefined(u)){if(!E.isUndefined(l))return r(void 0,l,h)}else return r(l,u,h)}function i(l,u){if(!E.isUndefined(u))return r(void 0,u)}function o(l,u){if(E.isUndefined(u)){if(!E.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,h){if(h in e)return r(l,u);if(h in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(Sf(l),Sf(u),!0)};return E.forEach(Object.keys(Object.assign({},t,e)),function(u){const h=c[u]||s,f=h(t[u],e[u],u);E.isUndefined(f)&&h!==a||(n[u]=f)}),n}const zm="1.6.2",yu={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{yu[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Pf={};yu.transitional=function(e,n,r){function s(i,o){return"[Axios v"+zm+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new se(s(o," has been removed"+(n?" in "+n:"")),se.ERR_DEPRECATED);return n&&!Pf[o]&&(Pf[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function jI(t,e,n){if(typeof t!="object")throw new se("options must be an object",se.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new se("option "+i+" must be "+c,se.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new se("Unknown option "+i,se.ERR_BAD_OPTION)}}const ul={assertOptions:jI,validators:yu},Rn=ul.validators;class qo{constructor(e){this.defaults=e,this.interceptors={request:new wf,response:new wf}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=es(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ul.assertOptions(r,{silentJSONParsing:Rn.transitional(Rn.boolean),forcedJSONParsing:Rn.transitional(Rn.boolean),clarifyTimeoutError:Rn.transitional(Rn.boolean)},!1),s!=null&&(E.isFunction(s)?n.paramsSerializer={serialize:s}:ul.assertOptions(s,{encode:Rn.function,serialize:Rn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&E.merge(i.common,i[n.method]);i&&E.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=hn.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(c=c&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let u,h=0,f;if(!c){const _=[bf.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,l),f=_.length,u=Promise.resolve(n);h<f;)u=u.then(_[h++],_[h++]);return u}f=a.length;let p=n;for(h=0;h<f;){const _=a[h++],y=a[h++];try{p=_(p)}catch(w){y.call(this,w);break}}try{u=bf.call(this,p)}catch(_){return Promise.reject(_)}for(h=0,f=l.length;h<f;)u=u.then(l[h++],l[h++]);return u}getUri(e){e=es(this.defaults,e);const n=qm(e.baseURL,e.url);return Fm(n,e.params,e.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(e){qo.prototype[e]=function(n,r){return this.request(es(r||{},{method:e,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(es(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}qo.prototype[e]=n(),qo.prototype[e+"Form"]=n(!0)});const So=qo;class vu{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new Ni(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new vu(function(s){e=s}),cancel:e}}}const qI=vu;function HI(t){return function(n){return t.apply(null,n)}}function zI(t){return E.isObject(t)&&t.isAxiosError===!0}const hl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(hl).forEach(([t,e])=>{hl[e]=t});const WI=hl;function Wm(t){const e=new So(t),n=bm(So.prototype.request,e);return E.extend(n,So.prototype,e,{allOwnKeys:!0}),E.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Wm(es(t,s))},n}const ke=Wm(_u);ke.Axios=So;ke.CanceledError=Ni;ke.CancelToken=qI;ke.isCancel=jm;ke.VERSION=zm;ke.toFormData=Pa;ke.AxiosError=se;ke.Cancel=ke.CanceledError;ke.all=function(e){return Promise.all(e)};ke.spread=HI;ke.isAxiosError=zI;ke.mergeConfig=es;ke.AxiosHeaders=hn;ke.formToJSON=t=>$m(E.isHTMLForm(t)?new FormData(t):t);ke.getAdapter=Hm.getAdapter;ke.HttpStatusCode=WI;ke.default=ke;const KI=ke;/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const xr=typeof window<"u";function GI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const he=Object.assign;function Tc(t,e){const n={};for(const r in e){const s=e[r];n[r]=kt(s)?s.map(t):t(s)}return n}const Qs=()=>{},kt=Array.isArray,QI=/\/$/,JI=t=>t.replace(QI,"");function wc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=eA(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function YI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Cf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function XI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ts(e.matched[r],n.matched[s])&&Km(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ts(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Km(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ZI(t[n],e[n]))return!1;return!0}function ZI(t,e){return kt(t)?Of(t,e):kt(e)?Of(e,t):t===e}function Of(t,e){return kt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function eA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var hi;(function(t){t.pop="pop",t.push="push"})(hi||(hi={}));var Js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Js||(Js={}));function tA(t){if(!t)if(xr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),JI(t)}const nA=/^[^#]+#/;function rA(t,e){return t.replace(nA,"#")+e}function sA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Oa=()=>({left:window.pageXOffset,top:window.pageYOffset});function iA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=sA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function kf(t,e){return(history.state?history.state.position-e:-1)+t}const fl=new Map;function oA(t,e){fl.set(t,e)}function aA(t){const e=fl.get(t);return fl.delete(t),e}let cA=()=>location.protocol+"//"+location.host;function Gm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Cf(c,"")}return Cf(n,t)+r+s}function lA(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=Gm(t,location),_=n.value,y=e.value;let w=0;if(f){if(n.value=p,e.value=f,o&&o===_){o=null;return}w=y?f.position-y.position:0}else r(p);s.forEach(P=>{P(n.value,_,{delta:w,type:hi.pop,direction:w?w>0?Js.forward:Js.back:Js.unknown})})};function c(){o=n.value}function l(f){s.push(f);const p=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(he({},f.state,{scroll:Oa()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Nf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Oa():null}}function uA(t){const{history:e,location:n}=window,r={value:Gm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:cA()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=he({},e.state,Nf(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=he({},s.value,e.state,{forward:c,scroll:Oa()});i(u.current,u,!0);const h=he({},Nf(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function hA(t){t=tA(t);const e=uA(t),n=lA(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=he({location:"",base:t,go:r,createHref:rA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function fA(t){return typeof t=="string"||t&&typeof t=="object"}function Qm(t){return typeof t=="string"||typeof t=="symbol"}const bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Jm=Symbol("");var Df;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Df||(Df={}));function ns(t,e){return he(new Error,{type:t,[Jm]:!0},e)}function nn(t,e){return t instanceof Error&&Jm in t&&(e==null||!!(t.type&e))}const Vf="[^/]+?",dA={sensitive:!1,strict:!1,start:!0,end:!0},pA=/[.+*?^${}()[\]/\\]/g;function mA(t,e){const n=he({},dA,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(pA,"\\$&"),p+=40;else if(f.type===1){const{value:_,repeatable:y,optional:w,regexp:P}=f;i.push({name:_,repeatable:y,optional:w});const k=P||Vf;if(k!==Vf){p+=10;try{new RegExp(`(${k})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${_}" (${k}): `+L.message)}}let $=y?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||($=w&&l.length<2?`(?:/${$})`:"/"+$),w&&($+="?"),s+=$,p+=20,w&&(p+=-8),y&&(p+=-20),k===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",_=i[f-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:y,optional:w}=p,P=_ in l?l[_]:"";if(kt(P)&&!y)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const k=kt(P)?P.join("/"):P;if(!k)if(w)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function gA(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function _A(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=gA(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(xf(r))return 1;if(xf(s))return-1}return s.length-r.length}function xf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const yA={type:0,value:""},vA=/[a-zA-Z0-9_]/;function EA(t){if(!t)return[[]];if(t==="/")return[[yA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:vA.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function TA(t,e,n){const r=mA(EA(t.path),n),s=he(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function wA(t,e){const n=[],r=new Map;e=Ff({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const p=!f,_=IA(u);_.aliasOf=f&&f.record;const y=Ff(e,u),w=[_];if("alias"in u){const $=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of $)w.push(he({},_,{components:f?f.record.components:_.components,path:L,aliasOf:f?f.record:_}))}let P,k;for(const $ of w){const{path:L}=$;if(h&&L[0]!=="/"){const ge=h.record.path,pe=ge[ge.length-1]==="/"?"":"/";$.path=h.record.path+(L&&pe+L)}if(P=TA($,h,y),f?f.alias.push(P):(k=k||P,k!==P&&k.alias.push(P),p&&u.name&&!Lf(P)&&o(u.name)),_.children){const ge=_.children;for(let pe=0;pe<ge.length;pe++)i(ge[pe],P,f&&f.children[pe])}f=f||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return k?()=>{o(k)}:Qs}function o(u){if(Qm(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&_A(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Ym(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Lf(u)&&r.set(u.record.name,u)}function l(u,h){let f,p={},_,y;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw ns(1,{location:u});y=f.record.name,p=he(Mf(h.params,f.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&Mf(u.params,f.keys.map(k=>k.name))),_=f.stringify(p)}else if("path"in u)_=u.path,f=n.find(k=>k.re.test(_)),f&&(p=f.parse(_),y=f.record.name);else{if(f=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!f)throw ns(1,{location:u,currentLocation:h});y=f.record.name,p=he({},h.params,u.params),_=f.stringify(p)}const w=[];let P=f;for(;P;)w.unshift(P.record),P=P.parent;return{name:y,path:_,params:p,matched:w,meta:RA(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Mf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function IA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:AA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function AA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Lf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function RA(t){return t.reduce((e,n)=>he(e,n.meta),{})}function Ff(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ym(t,e){return e.children.some(n=>n===t||Ym(t,n))}const Xm=/#/g,bA=/&/g,SA=/\//g,PA=/=/g,CA=/\?/g,Zm=/\+/g,OA=/%5B/g,kA=/%5D/g,eg=/%5E/g,NA=/%60/g,tg=/%7B/g,DA=/%7C/g,ng=/%7D/g,VA=/%20/g;function Eu(t){return encodeURI(""+t).replace(DA,"|").replace(OA,"[").replace(kA,"]")}function xA(t){return Eu(t).replace(tg,"{").replace(ng,"}").replace(eg,"^")}function dl(t){return Eu(t).replace(Zm,"%2B").replace(VA,"+").replace(Xm,"%23").replace(bA,"%26").replace(NA,"`").replace(tg,"{").replace(ng,"}").replace(eg,"^")}function MA(t){return dl(t).replace(PA,"%3D")}function LA(t){return Eu(t).replace(Xm,"%23").replace(CA,"%3F")}function FA(t){return t==null?"":LA(t).replace(SA,"%2F")}function Ho(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function UA(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Zm," "),o=i.indexOf("="),a=Ho(o<0?i:i.slice(0,o)),c=o<0?null:Ho(i.slice(o+1));if(a in e){let l=e[a];kt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Uf(t){let e="";for(let n in t){const r=t[n];if(n=MA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(kt(r)?r.map(i=>i&&dl(i)):[r&&dl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function BA(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=kt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const $A=Symbol(""),Bf=Symbol(""),Tu=Symbol(""),rg=Symbol(""),pl=Symbol("");function Ds(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Cn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ns(4,{from:n,to:e})):h instanceof Error?a(h):fA(h)?a(ns(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ic(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(jA(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Cn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=GI(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Cn(f,n,r,i,o)()}))}}return s}function jA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $f(t){const e=Kt(Tu),n=Kt(rg),r=yt(()=>e.resolve(qr(t.to))),s=yt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(ts.bind(null,u));if(f>-1)return f;const p=jf(c[l-2]);return l>1&&jf(u)===p&&h[h.length-1].path!==p?h.findIndex(ts.bind(null,c[l-2])):f}),i=yt(()=>s.value>-1&&WA(n.params,r.value.params)),o=yt(()=>s.value>-1&&s.value===n.matched.length-1&&Km(n.params,r.value.params));function a(c={}){return zA(c)?e[qr(t.replace)?"replace":"push"](qr(t.to)).catch(Qs):Promise.resolve()}return{route:r,href:yt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const qA=Yp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$f,setup(t,{slots:e}){const n=Oi($f(t)),{options:r}=Kt(Tu),s=yt(()=>({[qf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[qf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:dm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),HA=qA;function zA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function WA(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!kt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function jf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qf=(t,e,n)=>t??e??n,KA=Yp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Kt(pl),s=yt(()=>t.route||r.value),i=Kt(Bf,0),o=yt(()=>{let l=qr(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=yt(()=>s.value.matched[o.value]);wo(Bf,yt(()=>o.value+1)),wo($A,a),wo(pl,s);const c=Jc();return zr(()=>[c.value,a.value,t.name],([l,u,h],[f,p,_])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!ts(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Hf(n.default,{Component:f,route:l});const p=h.props[u],_=p?p===!0?l.params:typeof p=="function"?p(l):p:null,w=dm(f,he({},_,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Hf(n.default,{Component:w,route:l})||w}}});function Hf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const GA=KA;function QA(t){const e=wA(t.routes,t),n=t.parseQuery||UA,r=t.stringifyQuery||Uf,s=t.history,i=Ds(),o=Ds(),a=Ds(),c=Yv(bn);let l=bn;xr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Tc.bind(null,T=>""+T),h=Tc.bind(null,FA),f=Tc.bind(null,Ho);function p(T,M){let D,j;return Qm(T)?(D=e.getRecordMatcher(T),j=M):j=T,e.addRoute(j,D)}function _(T){const M=e.getRecordMatcher(T);M&&e.removeRoute(M)}function y(){return e.getRoutes().map(T=>T.record)}function w(T){return!!e.getRecordMatcher(T)}function P(T,M){if(M=he({},M||c.value),typeof T=="string"){const g=wc(n,T,M.path),v=e.resolve({path:g.path},M),A=s.createHref(g.fullPath);return he(g,v,{params:f(v.params),hash:Ho(g.hash),redirectedFrom:void 0,href:A})}let D;if("path"in T)D=he({},T,{path:wc(n,T.path,M.path).path});else{const g=he({},T.params);for(const v in g)g[v]==null&&delete g[v];D=he({},T,{params:h(g)}),M.params=h(M.params)}const j=e.resolve(D,M),ue=T.hash||"";j.params=u(f(j.params));const d=YI(r,he({},T,{hash:xA(ue),path:j.path})),m=s.createHref(d);return he({fullPath:d,hash:ue,query:r===Uf?BA(T.query):T.query||{}},j,{redirectedFrom:void 0,href:m})}function k(T){return typeof T=="string"?wc(n,T,c.value.path):he({},T)}function $(T,M){if(l!==T)return ns(8,{from:M,to:T})}function L(T){return Ne(T)}function ge(T){return L(he(k(T),{replace:!0}))}function pe(T){const M=T.matched[T.matched.length-1];if(M&&M.redirect){const{redirect:D}=M;let j=typeof D=="function"?D(T):D;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=k(j):{path:j},j.params={}),he({query:T.query,hash:T.hash,params:"path"in j?{}:T.params},j)}}function Ne(T,M){const D=l=P(T),j=c.value,ue=T.state,d=T.force,m=T.replace===!0,g=pe(D);if(g)return Ne(he(k(g),{state:typeof g=="object"?he({},ue,g.state):ue,force:d,replace:m}),M||D);const v=D;v.redirectedFrom=M;let A;return!d&&XI(r,j,D)&&(A=ns(16,{to:v,from:j}),Lt(j,j,!0,!1)),(A?Promise.resolve(A):nt(v,j)).catch(R=>nn(R)?nn(R,2)?R:In(R):le(R,v,j)).then(R=>{if(R){if(nn(R,2))return Ne(he({replace:m},k(R.to),{state:typeof R.to=="object"?he({},ue,R.to.state):ue,force:d}),M||v)}else R=Yn(v,j,!0,m,ue);return wn(v,j,R),R})}function ft(T,M){const D=$(T,M);return D?Promise.reject(D):Promise.resolve()}function _t(T){const M=Pr.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(T):T()}function nt(T,M){let D;const[j,ue,d]=JA(T,M);D=Ic(j.reverse(),"beforeRouteLeave",T,M);for(const g of j)g.leaveGuards.forEach(v=>{D.push(Cn(v,T,M))});const m=ft.bind(null,T,M);return D.push(m),Ke(D).then(()=>{D=[];for(const g of i.list())D.push(Cn(g,T,M));return D.push(m),Ke(D)}).then(()=>{D=Ic(ue,"beforeRouteUpdate",T,M);for(const g of ue)g.updateGuards.forEach(v=>{D.push(Cn(v,T,M))});return D.push(m),Ke(D)}).then(()=>{D=[];for(const g of d)if(g.beforeEnter)if(kt(g.beforeEnter))for(const v of g.beforeEnter)D.push(Cn(v,T,M));else D.push(Cn(g.beforeEnter,T,M));return D.push(m),Ke(D)}).then(()=>(T.matched.forEach(g=>g.enterCallbacks={}),D=Ic(d,"beforeRouteEnter",T,M),D.push(m),Ke(D))).then(()=>{D=[];for(const g of o.list())D.push(Cn(g,T,M));return D.push(m),Ke(D)}).catch(g=>nn(g,8)?g:Promise.reject(g))}function wn(T,M,D){a.list().forEach(j=>_t(()=>j(T,M,D)))}function Yn(T,M,D,j,ue){const d=$(T,M);if(d)return d;const m=M===bn,g=xr?history.state:{};D&&(j||m?s.replace(T.fullPath,he({scroll:m&&g&&g.scroll},ue)):s.push(T.fullPath,ue)),c.value=T,Lt(T,M,D,m),In()}let Mt;function Cs(){Mt||(Mt=s.listen((T,M,D)=>{if(!Zi.listening)return;const j=P(T),ue=pe(j);if(ue){Ne(he(ue,{replace:!0}),j).catch(Qs);return}l=j;const d=c.value;xr&&oA(kf(d.fullPath,D.delta),Oa()),nt(j,d).catch(m=>nn(m,12)?m:nn(m,2)?(Ne(m.to,j).then(g=>{nn(g,20)&&!D.delta&&D.type===hi.pop&&s.go(-1,!1)}).catch(Qs),Promise.reject()):(D.delta&&s.go(-D.delta,!1),le(m,j,d))).then(m=>{m=m||Yn(j,d,!1),m&&(D.delta&&!nn(m,8)?s.go(-D.delta,!1):D.type===hi.pop&&nn(m,20)&&s.go(-1,!1)),wn(j,d,m)}).catch(Qs)}))}let br=Ds(),Me=Ds(),me;function le(T,M,D){In(T);const j=Me.list();return j.length?j.forEach(ue=>ue(T,M,D)):console.error(T),Promise.reject(T)}function tn(){return me&&c.value!==bn?Promise.resolve():new Promise((T,M)=>{br.add([T,M])})}function In(T){return me||(me=!T,Cs(),br.list().forEach(([M,D])=>T?D(T):M()),br.reset()),T}function Lt(T,M,D,j){const{scrollBehavior:ue}=t;if(!xr||!ue)return Promise.resolve();const d=!D&&aA(kf(T.fullPath,0))||(j||!D)&&history.state&&history.state.scroll||null;return jp().then(()=>ue(T,M,d)).then(m=>m&&iA(m)).catch(m=>le(m,T,M))}const it=T=>s.go(T);let Sr;const Pr=new Set,Zi={currentRoute:c,listening:!0,addRoute:p,removeRoute:_,hasRoute:w,getRoutes:y,resolve:P,options:t,push:L,replace:ge,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Me.add,isReady:tn,install(T){const M=this;T.component("RouterLink",HA),T.component("RouterView",GA),T.config.globalProperties.$router=M,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>qr(c)}),xr&&!Sr&&c.value===bn&&(Sr=!0,L(s.location).catch(ue=>{}));const D={};for(const ue in bn)Object.defineProperty(D,ue,{get:()=>c.value[ue],enumerable:!0});T.provide(Tu,M),T.provide(rg,Dp(D)),T.provide(pl,c);const j=T.unmount;Pr.add(T),T.unmount=function(){Pr.delete(T),Pr.size<1&&(l=bn,Mt&&Mt(),Mt=null,c.value=bn,Sr=!1,me=!1),j()}}};function Ke(T){return T.reduce((M,D)=>M.then(()=>_t(D)),Promise.resolve())}return Zi}function JA(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ts(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ts(l,c))||s.push(c))}return[n,r,s]}var zf={};/**
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
 */const sg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},YA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ig={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),r.push(n[u],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new XA;const f=i<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZA=function(t){const e=sg(t);return ig.encodeByteArray(e,!0)},zo=function(t){return ZA(t).replace(/\./g,"")},og=function(t){try{return ig.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function eR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tR=()=>eR().__FIREBASE_DEFAULTS__,nR=()=>{if(typeof process>"u"||typeof zf>"u")return;const t=zf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&og(t[1]);return e&&JSON.parse(e)},wu=()=>{try{return tR()||nR()||rR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ag=t=>{var e,n;return(n=(e=wu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sR=t=>{const e=ag(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cg=()=>{var t;return(t=wu())===null||t===void 0?void 0:t.config},lg=t=>{var e;return(e=wu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class iR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function oR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[zo(JSON.stringify(n)),zo(JSON.stringify(o)),a].join(".")}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function cR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uR(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hR(){try{return typeof indexedDB=="object"}catch{return!1}}function fR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const dR="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dR,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?pR(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Tn(s,a,r)}}function pR(t,e){return t.replace(mR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const mR=/\{\$([^}]+)}/g;function gR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Wf(i)&&Wf(o)){if(!Wo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wf(t){return t!==null&&typeof t=="object"}/**
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
 */function Vi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Bs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function _R(t,e){const n=new yR(t,e);return n.subscribe.bind(n)}class yR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ac),s.error===void 0&&(s.error=Ac),s.complete===void 0&&(s.complete=Ac);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ac(){}/**
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
 */function ut(t){return t&&t._delegate?t._delegate:t}class mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const er="[DEFAULT]";/**
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
 */class ER{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new iR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wR(e))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=er){return this.instances.has(e)}getOptions(e=er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=er){return this.component?this.component.multipleInstances?e:er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TR(t){return t===er?void 0:t}function wR(t){return t.instantiationMode==="EAGER"}/**
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
 */class IR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ER(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const AR={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},RR=ne.INFO,bR={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},SR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=bR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Iu{constructor(e){this.name=e,this._logLevel=RR,this._logHandler=SR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const PR=(t,e)=>e.some(n=>t instanceof n);let Kf,Gf;function CR(){return Kf||(Kf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OR(){return Gf||(Gf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ug=new WeakMap,ml=new WeakMap,hg=new WeakMap,Rc=new WeakMap,Au=new WeakMap;function kR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Fn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ug.set(n,t)}).catch(()=>{}),Au.set(e,t),e}function NR(t){if(ml.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ml.set(t,e)}let gl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ml.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DR(t){gl=t(gl)}function VR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bc(this),e,...n);return hg.set(r,e.sort?e.sort():[e]),Fn(r)}:OR().includes(t)?function(...e){return t.apply(bc(this),e),Fn(ug.get(this))}:function(...e){return Fn(t.apply(bc(this),e))}}function xR(t){return typeof t=="function"?VR(t):(t instanceof IDBTransaction&&NR(t),PR(t,CR())?new Proxy(t,gl):t)}function Fn(t){if(t instanceof IDBRequest)return kR(t);if(Rc.has(t))return Rc.get(t);const e=xR(t);return e!==t&&(Rc.set(t,e),Au.set(e,t)),e}const bc=t=>Au.get(t);function MR(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Fn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Fn(o.result),c.oldVersion,c.newVersion,Fn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const LR=["get","getKey","getAll","getAllKeys","count"],FR=["put","add","delete","clear"],Sc=new Map;function Qf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sc.get(e))return Sc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=FR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||LR.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Sc.set(e,i),i}DR(t=>({...t,get:(e,n,r)=>Qf(e,n)||t.get(e,n,r),has:(e,n)=>!!Qf(e,n)||t.has(e,n)}));/**
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
 */class UR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function BR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _l="@firebase/app",Jf="0.9.25";/**
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
 */const gr=new Iu("@firebase/app"),$R="@firebase/app-compat",jR="@firebase/analytics-compat",qR="@firebase/analytics",HR="@firebase/app-check-compat",zR="@firebase/app-check",WR="@firebase/auth",KR="@firebase/auth-compat",GR="@firebase/database",QR="@firebase/database-compat",JR="@firebase/functions",YR="@firebase/functions-compat",XR="@firebase/installations",ZR="@firebase/installations-compat",e0="@firebase/messaging",t0="@firebase/messaging-compat",n0="@firebase/performance",r0="@firebase/performance-compat",s0="@firebase/remote-config",i0="@firebase/remote-config-compat",o0="@firebase/storage",a0="@firebase/storage-compat",c0="@firebase/firestore",l0="@firebase/firestore-compat",u0="firebase",h0="10.7.1";/**
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
 */const yl="[DEFAULT]",f0={[_l]:"fire-core",[$R]:"fire-core-compat",[qR]:"fire-analytics",[jR]:"fire-analytics-compat",[zR]:"fire-app-check",[HR]:"fire-app-check-compat",[WR]:"fire-auth",[KR]:"fire-auth-compat",[GR]:"fire-rtdb",[QR]:"fire-rtdb-compat",[JR]:"fire-fn",[YR]:"fire-fn-compat",[XR]:"fire-iid",[ZR]:"fire-iid-compat",[e0]:"fire-fcm",[t0]:"fire-fcm-compat",[n0]:"fire-perf",[r0]:"fire-perf-compat",[s0]:"fire-rc",[i0]:"fire-rc-compat",[o0]:"fire-gcs",[a0]:"fire-gcs-compat",[c0]:"fire-fst",[l0]:"fire-fst-compat","fire-js":"fire-js",[u0]:"fire-js-all"};/**
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
 */const Ko=new Map,vl=new Map;function d0(t,e){try{t.container.addComponent(e)}catch(n){gr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rs(t){const e=t.name;if(vl.has(e))return gr.debug(`There were multiple attempts to register component ${e}.`),!1;vl.set(e,t);for(const n of Ko.values())d0(n,t);return!0}function Ru(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const p0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Un=new Di("app","Firebase",p0);/**
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
 */class m0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
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
 */const vs=h0;function fg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Un.create("bad-app-name",{appName:String(s)});if(n||(n=cg()),!n)throw Un.create("no-options");const i=Ko.get(s);if(i){if(Wo(n,i.options)&&Wo(r,i.config))return i;throw Un.create("duplicate-app",{appName:s})}const o=new IR(s);for(const c of vl.values())o.addComponent(c);const a=new m0(n,r,o);return Ko.set(s,a),a}function dg(t=yl){const e=Ko.get(t);if(!e&&t===yl&&cg())return fg();if(!e)throw Un.create("no-app",{appName:t});return e}function Bn(t,e,n){var r;let s=(r=f0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gr.warn(a.join(" "));return}rs(new mr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const g0="firebase-heartbeat-database",_0=1,fi="firebase-heartbeat-store";let Pc=null;function pg(){return Pc||(Pc=MR(g0,_0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fi)}}}).catch(t=>{throw Un.create("idb-open",{originalErrorMessage:t.message})})),Pc}async function y0(t){try{return await(await pg()).transaction(fi).objectStore(fi).get(mg(t))}catch(e){if(e instanceof Tn)gr.warn(e.message);else{const n=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gr.warn(n.message)}}}async function Yf(t,e){try{const r=(await pg()).transaction(fi,"readwrite");await r.objectStore(fi).put(e,mg(t)),await r.done}catch(n){if(n instanceof Tn)gr.warn(n.message);else{const r=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gr.warn(r.message)}}}function mg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const v0=1024,E0=30*24*60*60*1e3;class T0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new I0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=E0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xf(),{heartbeatsToSend:r,unsentEntries:s}=w0(this._heartbeatsCache.heartbeats),i=zo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Xf(){return new Date().toISOString().substring(0,10)}function w0(t,e=v0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Zf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Zf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class I0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hR()?fR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await y0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Zf(t){return zo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function A0(t){rs(new mr("platform-logger",e=>new UR(e),"PRIVATE")),rs(new mr("heartbeat",e=>new T0(e),"PRIVATE")),Bn(_l,Jf,t),Bn(_l,Jf,"esm2017"),Bn("fire-js","")}A0("");function bu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function gg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const R0=gg,_g=new Di("auth","Firebase",gg());/**
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
 */const Go=new Iu("@firebase/auth");function b0(t,...e){Go.logLevel<=ne.WARN&&Go.warn(`Auth (${vs}): ${t}`,...e)}function Po(t,...e){Go.logLevel<=ne.ERROR&&Go.error(`Auth (${vs}): ${t}`,...e)}/**
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
 */function It(t,...e){throw Su(t,...e)}function Gt(t,...e){return Su(t,...e)}function yg(t,e,n){const r=Object.assign(Object.assign({},R0()),{[e]:n});return new Di("auth","Firebase",r).create(e,{appName:t.name})}function S0(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&It(t,"argument-error"),yg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Su(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _g.create(t,...e)}function W(t,e,...n){if(!t)throw Su(e,...n)}function an(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Po(e),new Error(e)}function mn(t,e){t||an(e)}/**
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
 */function El(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function P0(){return ed()==="http:"||ed()==="https:"}function ed(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function C0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(P0()||cR()||"connection"in navigator)?navigator.onLine:!0}function O0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,mn(n>e,"Short delay should be less than long delay!"),this.isMobile=aR()||lR()}get(){return C0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pu(t,e){mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class vg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const k0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const N0=new xi(3e4,6e4);function Wn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kn(t,e,n,r,s={}){return Eg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Vi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),vg.fetch()(Tg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Eg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},k0),e);try{const s=new V0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw co(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw co(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw co(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw co(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw yg(t,u,l);It(t,u)}}catch(s){if(s instanceof Tn)throw s;It(t,"network-request-failed",{message:String(s)})}}async function Mi(t,e,n,r,s={}){const i=await Kn(t,e,n,r,s);return"mfaPendingCredential"in i&&It(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Tg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Pu(t.config,s):`${t.config.apiScheme}://${s}`}function D0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class V0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),N0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function co(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Gt(t,e,r);return s.customData._tokenResponse=n,s}function td(t){return t!==void 0&&t.enterprise!==void 0}class x0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return D0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function M0(t,e){return Kn(t,"GET","/v2/recaptchaConfig",Wn(t,e))}/**
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
 */async function L0(t,e){return Kn(t,"POST","/v1/accounts:delete",e)}async function F0(t,e){return Kn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ys(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function U0(t,e=!1){const n=ut(t),r=await n.getIdToken(e),s=Cu(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ys(Cc(s.auth_time)),issuedAtTime:Ys(Cc(s.iat)),expirationTime:Ys(Cc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Cc(t){return Number(t)*1e3}function Cu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Po("JWT malformed, contained fewer than 3 sections"),null;try{const s=og(n);return s?JSON.parse(s):(Po("Failed to decode base64 JWT payload"),null)}catch(s){return Po("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function B0(t){const e=Cu(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&$0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class j0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await di(t,F0(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?z0(i.providerUserInfo):[],a=H0(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new wg(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function q0(t){const e=ut(t);await Qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function H0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function z0(t){return t.map(e=>{var{providerId:n}=e,r=bu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function W0(t,e){const n=await Eg(t,{},async()=>{const r=Vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Tg(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function K0(t,e){return Kn(t,"POST","/v2/accounts:revokeToken",Wn(t,e))}/**
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
 */class pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):B0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await W0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new pi;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pi,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
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
 */function Sn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ur{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=bu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new j0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return U0(this,e)}reload(){return q0(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await di(this,L0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:$,emailVerified:L,isAnonymous:ge,providerData:pe,stsTokenManager:Ne}=n;W($&&Ne,e,"internal-error");const ft=pi.fromJSON(this.name,Ne);W(typeof $=="string",e,"internal-error"),Sn(h,e.name),Sn(f,e.name),W(typeof L=="boolean",e,"internal-error"),W(typeof ge=="boolean",e,"internal-error"),Sn(p,e.name),Sn(_,e.name),Sn(y,e.name),Sn(w,e.name),Sn(P,e.name),Sn(k,e.name);const _t=new ur({uid:$,auth:e,email:f,emailVerified:L,displayName:h,isAnonymous:ge,photoURL:_,phoneNumber:p,tenantId:y,stsTokenManager:ft,createdAt:P,lastLoginAt:k});return pe&&Array.isArray(pe)&&(_t.providerData=pe.map(nt=>Object.assign({},nt))),w&&(_t._redirectEventId=w),_t}static async _fromIdTokenResponse(e,n,r=!1){const s=new pi;s.updateFromServerResponse(n);const i=new ur({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Qo(i),i}}/**
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
 */const nd=new Map;function cn(t){mn(t instanceof Function,"Expected a class definition");let e=nd.get(t);return e?(mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nd.set(t,e),e)}/**
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
 */class Ig{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ig.type="NONE";const rd=Ig;/**
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
 */function Co(t,e,n){return`firebase:${t}:${e}:${n}`}class Wr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Co(this.userKey,s.apiKey,i),this.fullPersistenceKey=Co("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ur._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wr(cn(rd),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||cn(rd);const o=Co(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ur._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Wr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Wr(i,e,r))}}/**
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
 */function sd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ag(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pg(e))return"Blackberry";if(Cg(e))return"Webos";if(Ou(e))return"Safari";if((e.includes("chrome/")||Rg(e))&&!e.includes("edge/"))return"Chrome";if(Sg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ag(t=et()){return/firefox\//i.test(t)}function Ou(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rg(t=et()){return/crios\//i.test(t)}function bg(t=et()){return/iemobile/i.test(t)}function Sg(t=et()){return/android/i.test(t)}function Pg(t=et()){return/blackberry/i.test(t)}function Cg(t=et()){return/webos/i.test(t)}function ka(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function G0(t=et()){var e;return ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Q0(){return uR()&&document.documentMode===10}function Og(t=et()){return ka(t)||Sg(t)||Cg(t)||Pg(t)||/windows phone/i.test(t)||bg(t)}function J0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function kg(t,e=[]){let n;switch(t){case"Browser":n=sd(et());break;case"Worker":n=`${sd(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vs}/${r}`}/**
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
 */class Y0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function X0(t,e={}){return Kn(t,"GET","/v2/passwordPolicy",Wn(t,e))}/**
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
 */const Z0=6;class eb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Z0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class tb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new id(this),this.idTokenSubscription=new id(this),this.beforeStateQueue=new Y0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_g,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Wr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ut(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await X0(this),n=new eb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Di("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await K0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&b0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gn(t){return ut(t)}class id{constructor(e){this.auth=e,this.observer=null,this.addObserver=_R(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function nb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ng(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Gt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",nb().appendChild(r)})}function rb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sb="https://www.google.com/recaptcha/enterprise.js?render=",ib="recaptcha-enterprise",ob="NO_RECAPTCHA";class ab{constructor(e){this.type=ib,this.auth=Gn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{M0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new x0(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;td(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(ob)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&td(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ng(sb+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function od(t,e,n,r=!1){const s=new ab(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Tl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await od(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await od(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function cb(t,e){const n=Ru(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Wo(i,e??{}))return s;It(s,"already-initialized")}return n.initialize({options:e})}function lb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ub(t,e,n){const r=Gn(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Dg(e),{host:o,port:a}=hb(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||fb()}function Dg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hb(t){const e=Dg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ad(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ad(o)}}}function ad(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ku{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}async function db(t,e){return Kn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function pb(t,e){return Mi(t,"POST","/v1/accounts:signInWithPassword",Wn(t,e))}/**
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
 */async function mb(t,e){return Mi(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}async function gb(t,e){return Mi(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}/**
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
 */class mi extends ku{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new mi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new mi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tl(e,n,"signInWithPassword",pb);case"emailLink":return mb(e,{email:this._email,oobCode:this._password});default:It(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tl(e,r,"signUpPassword",db);case"emailLink":return gb(e,{idToken:n,email:this._email,oobCode:this._password});default:It(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Kr(t,e){return Mi(t,"POST","/v1/accounts:signInWithIdp",Wn(t,e))}/**
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
 */const _b="http://localhost";class gn extends ku{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):It("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=bu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new gn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kr(e,n)}buildRequest(){const e={requestUri:_b,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vi(n)}return e}}/**
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
 */function yb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vb(t){const e=Us(Bs(t)).link,n=e?Us(Bs(e)).deep_link_id:null,r=Us(Bs(t)).deep_link_id;return(r?Us(Bs(r)).link:null)||r||n||e||t}class Nu{constructor(e){var n,r,s,i,o,a;const c=Us(Bs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=yb((s=c.mode)!==null&&s!==void 0?s:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=vb(e);try{return new Nu(n)}catch{return null}}}/**
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
 */class Es{constructor(){this.providerId=Es.PROVIDER_ID}static credential(e,n){return mi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Nu.parseLink(n);return W(r,"argument-error"),mi._fromEmailAndCode(e,r.code,r.tenantId)}}Es.PROVIDER_ID="password";Es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Du{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ts extends Du{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Xs extends Ts{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return W("providerId"in n&&"signInMethod"in n,"argument-error"),gn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return W(e.idToken||e.accessToken,"argument-error"),gn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Xs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Xs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:a}=e;if(!r&&!s&&!n&&!i||!a)return null;try{return new Xs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
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
 */async function Eb(t,e){return Mi(t,"POST","/v1/accounts:signUp",Wn(t,e))}/**
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
 */class _r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ur._fromIdTokenResponse(e,r,s),o=cd(r);return new _r({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=cd(r);return new _r({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function cd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Jo extends Tn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Jo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Jo(e,n,r,s)}}function Vg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Jo._fromErrorAndOperation(t,i,e,r):i})}async function Tb(t,e,n=!1){const r=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _r._forOperation(t,"link",r)}/**
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
 */async function wb(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await di(t,Vg(r,s,e,t),n);W(i.idToken,r,"internal-error");const o=Cu(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),_r._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&It(r,"user-mismatch"),i}}/**
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
 */async function xg(t,e,n=!1){const r="signIn",s=await Vg(t,r,e),i=await _r._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ib(t,e){return xg(Gn(t),e)}/**
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
 */async function Mg(t){const e=Gn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ab(t,e,n){const r=Gn(t),o=await Tl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Eb).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Mg(t),c}),a=await _r._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Rb(t,e,n){return Ib(ut(t),Es.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Mg(t),r})}function bb(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function Sb(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}function Pb(t){return ut(t).signOut()}const Yo="__sak";/**
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
 */class Lg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yo,"1"),this.storage.removeItem(Yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Cb(){const t=et();return Ou(t)||ka(t)}const Ob=1e3,kb=10;class Fg extends Lg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Cb()&&J0(),this.fallbackToPolling=Og(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Q0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ob)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fg.type="LOCAL";const Nb=Fg;/**
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
 */class Ug extends Lg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ug.type="SESSION";const Bg=Ug;/**
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
 */function Db(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Db(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
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
 */function Vu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Vb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Vu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qt(){return window}function xb(t){Qt().location.href=t}/**
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
 */function $g(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function Mb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Fb(){return $g()?self:null}/**
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
 */const jg="firebaseLocalStorageDb",Ub=1,Xo="firebaseLocalStorage",qg="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Da(t,e){return t.transaction([Xo],e?"readwrite":"readonly").objectStore(Xo)}function Bb(){const t=indexedDB.deleteDatabase(jg);return new Li(t).toPromise()}function wl(){const t=indexedDB.open(jg,Ub);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xo,{keyPath:qg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xo)?e(r):(r.close(),await Bb(),e(await wl()))})})}async function ld(t,e,n){const r=Da(t,!0).put({[qg]:e,value:n});return new Li(r).toPromise()}async function $b(t,e){const n=Da(t,!1).get(e),r=await new Li(n).toPromise();return r===void 0?null:r.value}function ud(t,e){const n=Da(t,!0).delete(e);return new Li(n).toPromise()}const jb=800,qb=3;class Hg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $g()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(Fb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mb(),!this.activeServiceWorker)return;this.sender=new Vb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wl();return await ld(e,Yo,"1"),await ud(e,Yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ld(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$b(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ud(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Da(s,!1).getAll();return new Li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hg.type="LOCAL";const Hb=Hg;new xi(3e4,6e4);/**
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
 */function zg(t,e){return e?cn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class xu extends ku{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zb(t){return xg(t.auth,new xu(t),t.bypassAuthState)}function Wb(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),wb(n,new xu(t),t.bypassAuthState)}async function Kb(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),Tb(n,new xu(t),t.bypassAuthState)}/**
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
 */class Wg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zb;case"linkViaPopup":case"linkViaRedirect":return Kb;case"reauthViaPopup":case"reauthViaRedirect":return Wb;default:It(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gb=new xi(2e3,1e4);async function hd(t,e,n){const r=Gn(t);S0(t,e,Du);const s=zg(r,n);return new sr(r,"signInViaPopup",e,s).executeNotNull()}class sr extends Wg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=Vu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gb.get())};e()}}sr.currentPopupAction=null;/**
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
 */const Qb="pendingRedirect",Oo=new Map;class Jb extends Wg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oo.get(this.auth._key());if(!e){try{const r=await Yb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oo.set(this.auth._key(),e)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yb(t,e){const n=eS(e),r=Zb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Xb(t,e){Oo.set(t._key(),e)}function Zb(t){return cn(t._redirectPersistence)}function eS(t){return Co(Qb,t.config.apiKey,t.name)}async function tS(t,e,n=!1){const r=Gn(t),s=zg(r,e),o=await new Jb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const nS=10*60*1e3;class rS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Kg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nS&&this.cachedEventUids.clear(),this.cachedEventUids.has(fd(e))}saveEventToCache(e){this.cachedEventUids.add(fd(e)),this.lastProcessedEventTime=Date.now()}}function fd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Kg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kg(t);default:return!1}}/**
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
 */async function iS(t,e={}){return Kn(t,"GET","/v1/projects",e)}/**
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
 */const oS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aS=/^https?/;async function cS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iS(t);for(const n of e)try{if(lS(n))return}catch{}It(t,"unauthorized-domain")}function lS(t){const e=El(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aS.test(n))return!1;if(oS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const uS=new xi(3e4,6e4);function dd(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hS(t){return new Promise((e,n)=>{var r,s,i;function o(){dd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dd(),n(Gt(t,"network-request-failed"))},timeout:uS.get()})}if(!((s=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qt().gapi)===null||i===void 0)&&i.load)o();else{const a=rb("iframefcb");return Qt()[a]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},Ng(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ko=null,e})}let ko=null;function fS(t){return ko=ko||hS(t),ko}/**
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
 */const dS=new xi(5e3,15e3),pS="__/auth/iframe",mS="emulator/auth/iframe",gS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_S=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yS(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pu(e,mS):`https://${t.config.authDomain}/${pS}`,r={apiKey:e.apiKey,appName:t.name,v:vs},s=_S.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vi(r).slice(1)}`}async function vS(t){const e=await fS(t),n=Qt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:yS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),a=Qt().setTimeout(()=>{i(o)},dS.get());function c(){Qt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const ES={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TS=500,wS=600,IS="_blank",AS="http://localhost";class pd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RS(t,e,n,r=TS,s=wS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ES),{width:r.toString(),height:s.toString(),top:i,left:o}),l=et().toLowerCase();n&&(a=Rg(l)?IS:n),Ag(l)&&(e=e||AS,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,_])=>`${f}${p}=${_},`,"");if(G0(l)&&a!=="_self")return bS(e||"",a),new pd(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new pd(h)}function bS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SS="__/auth/handler",PS="emulator/auth/handler",CS=encodeURIComponent("fac");async function md(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vs,eventId:s};if(e instanceof Du){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Ts){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${CS}=${encodeURIComponent(c)}`:"";return`${OS(t)}?${Vi(a).slice(1)}${l}`}function OS({config:t}){return t.emulator?Pu(t,PS):`https://${t.authDomain}/${SS}`}/**
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
 */const Oc="webStorageSupport";class kS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bg,this._completeRedirectFn=tS,this._overrideRedirectResult=Xb}async _openPopup(e,n,r,s){var i;mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await md(e,n,r,El(),s);return RS(e,o,Vu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await md(e,n,r,El(),s);return xb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vS(e),r=new rS(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oc,{type:Oc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Oc];o!==void 0&&n(!!o),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Og()||Ou()||ka()}}const NS=kS;var gd="@firebase/auth",_d="1.5.1";/**
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
 */class DS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function VS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xS(t){rs(new mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kg(t)},l=new tb(r,s,i,c);return lb(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rs(new mr("auth-internal",e=>{const n=Gn(e.getProvider("auth").getImmediate());return(r=>new DS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(gd,_d,VS(t)),Bn(gd,_d,"esm2017")}/**
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
 */const MS=5*60,LS=lg("authIdTokenMaxAge")||MS;let yd=null;const FS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>LS)return;const s=n==null?void 0:n.token;yd!==s&&(yd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function US(t=dg()){const e=Ru(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cb(t,{popupRedirectResolver:NS,persistence:[Hb,Nb,Bg]}),r=lg("authTokenSyncURL");if(r){const i=FS(r);Sb(n,i,()=>i(n.currentUser)),bb(n,o=>i(o))}const s=ag("auth");return s&&ub(n,`http://${s}`),n}xS("Browser");const Zs="/coffee-land-vue-site/assets/coffee_beans-xC65LbrO.svg",Gg="/coffee-land-vue-site/assets/glass1-XS1Af-LI.webp",BS={name:"v-home"},$S={class:"v-home"},jS=JE('<img class="beans" id="b1" src="'+Zs+'" alt="coffee beans"><img class="beans" id="b2" src="'+Zs+'" alt="coffee beans"><img class="beans" id="b3" src="'+Zs+'" alt="coffee beans"><div class="title"><p class="title coffee">Coffee</p><p class="title land">Land</p><img src="'+Gg+'" alt="coffee" align="middle"></div><p class="title-description">Место - где рождается кофе</p>',5),qS=[jS];function HS(t,e,n,r,s,i){return ae(),we("div",$S,qS)}const zS=xt(BS,[["render",HS]]),WS={name:"v-popup-item",props:{product_data:{type:Object,default(){return{}}}},computed:_s(["saved_drinks"]),methods:{closePopup(){this.$emit("closePopup")},addToCart(t){this.$store.dispatch("addToCart",t),Vn.push("/cart")}}},KS={class:"v-popup-item"},GS=["src"],QS={class:"full-information"},JS={class:"description"};function YS(t,e,n,r,s,i){return ae(),we("div",KS,[C("button",{onClick:e[0]||(e[0]=(...o)=>i.closePopup&&i.closePopup(...o)),class:"btn-close"},"x"),C("img",{class:"popup-img",src:`src/assets/coffee_carts/${n.product_data.image}.jpg`},null,8,GS),C("div",QS,[C("h1",null,De(n.product_data.name),1),C("p",JS,De(n.product_data.description),1),C("p",null,[Ot("Размер: "),C("b",null,De(n.product_data.size),1)]),C("p",null,[Ot("Раздел: "),C("b",null,De(n.product_data.section),1)]),C("p",null,[Ot("Цена: "),C("b",null,De(n.product_data.price)+" рублей",1)])]),C("button",{class:"btn-popup",onClick:e[1]||(e[1]=o=>i.addToCart(n.product_data))},"Добавить в корзину")])}const XS=xt(WS,[["render",YS]]),ZS="/coffee-land-vue-site/assets/unlike-j1RawZNx.png",eP="/coffee-land-vue-site/assets/like-HxtNy82S.png",tP={name:"v-catalog-item",props:{product_data:{type:Object,default(){return{}}}},components:{vPopupItem:XS},data(){return{isAddProfile:"+",isOpen:!1,isClose:!0}},computed:_s(["saved_drinks"]),methods:{openPopup(){this.isOpen=!0},closePopup(){this.isClose=!1},addToCart(){this.$emit("addToCart",this.product_data)},addToProfile(){this.$emit("addToProfile",this.product_data.id),this.isAddProfile=="+"?this.isAddProfile="-":this.isAddProfile="+"},deleteFromProfile(){this.$emit("deleteFromProfile",this.product_data.id)}}},nP=["src"],rP={class:"item-name"},sP={key:2},iP={class:"item-price"},oP=C("span",null," рублей",-1);function aP(t,e,n,r,s,i){const o=pn("v-popup-item");return n.product_data.available&&n.product_data.filter?(ae(),we("div",{key:0,class:"v-catalog-item",onClick:e[3]||(e[3]=(...a)=>i.openPopup&&i.openPopup(...a))},[t.saved_drinks.includes(n.product_data.id)?mt("",!0):(ae(),we("img",{key:0,onClick:e[0]||(e[0]=Gs((...a)=>i.addToProfile&&i.addToProfile(...a),["stop"])),src:ZS,class:"like"})),t.saved_drinks.includes(n.product_data.id)?(ae(),we("img",{key:1,onClick:e[1]||(e[1]=Gs((...a)=>i.deleteFromProfile&&i.deleteFromProfile(...a),["stop"])),src:eP,class:"like"})):mt("",!0),C("img",{class:"item-img",src:`src/assets/coffee_carts/${n.product_data.image}.jpg`},null,8,nP),C("h3",rP,De(n.product_data.name),1),s.isClose?(ae(),we("div",sP,[s.isOpen?(ae(),pr(o,{key:0,product_data:n.product_data,onClosePopup:i.closePopup},null,8,["product_data","onClosePopup"])):mt("",!0)])):mt("",!0),C("h3",iP,[Ot(De(n.product_data.price),1),oP]),C("button",{onClick:e[2]||(e[2]=Gs((...a)=>i.addToCart&&i.addToCart(...a),["stop"]))},"Добавить в корзину")])):mt("",!0)}const Qg=xt(tP,[["render",aP]]),cP="/coffee-land-vue-site/assets/cart-icon1-A_6JUOXN.webp",lP={name:"v-catalog",components:{vCatalogItem:Qg},data(){return{filter_params:[{name:"Классические",section:"classic"},{name:"Фирменные",section:"branded"},{name:"Авторские",section:"authorial"}]}},methods:{addToCart(t){this.$store.dispatch("addToCart",t)},addToProfile(t){this.user==null?Vn.push("/login"):this.$store.dispatch("addToProfile",t)},deleteFromProfile(t){this.$store.dispatch("deleteFromProfile",t)},deleteFromProfile(t){this.$store.dispatch("deleteFromProfile",t)},filterBySections(t){this.products.forEach(e=>{e.section==t?e.filter=!0:e.filter=!1})},displayAllSection(){this.products.forEach(t=>t.filter=!0)}},mounted(){this.$store.dispatch("loadProducts")},computed:_s(["products","cart","user"])},uP={class:"v-catalog"},hP=C("h1",{class:"caption"},"Выберите товары из каталога",-1),fP={class:"filter"},dP=["onClick"],pP=C("img",{src:cP},null,-1),mP={class:"cart-length"};function gP(t,e,n,r,s,i){const o=pn("router-link"),a=pn("v-catalog-item");return ae(),we("div",uP,[hP,C("div",null,[C("button",{onClick:e[0]||(e[0]=(...c)=>i.displayAllSection&&i.displayAllSection(...c))},"Меню")]),(ae(!0),we(pt,null,Uo(s.filter_params,c=>(ae(),we("div",fP,[C("button",{onClick:l=>i.filterBySections(c.section)},De(c.name)+" напитки ",9,dP)]))),256)),be(o,{class:"icon-cart",to:"/cart"},{default:On(()=>[pP,C("p",mP,De(t.cart.length),1)]),_:1}),(ae(!0),we(pt,null,Uo(t.products,c=>(ae(),pr(a,{key:c.id,product_data:c,onAddToCart:i.addToCart,onAddToProfile:i.addToProfile,onDeleteFromProfile:l=>i.deleteFromProfile(c.id)},null,8,["product_data","onAddToCart","onAddToProfile","onDeleteFromProfile"]))),128))])}const _P=xt(lP,[["render",gP]]),yP="/coffee-land-vue-site/assets/garbage-HdbpShoG.png",vP={name:"v-cart-item",props:{cart_data:{type:Object,default(){return{}}}},methods:{deleteFromCart(){this.$emit("deleteFromCart")},minusProduct(){this.cart_data.count==1&&this.deleteFromCart(),this.cart_data.count=this.cart_data.count-1},plusProduct(){this.cart_data.count==10?this.cart_data.count=10:this.cart_data.count++}}},EP={class:"v-cart-item"},TP=["src"],wP={class:"cart-info-container"},IP={class:"cart-item-description"},AP={class:"cart-item-count"},RP={class:"count"},bP={class:"count-container"};function SP(t,e,n,r,s,i){return ae(),we("div",EP,[C("img",{class:"cart-item-img",src:`src/assets/coffee_carts/${n.cart_data.image}.jpg`},null,8,TP),C("div",wP,[C("h3",null,De(n.cart_data.name),1),C("p",IP,De(n.cart_data.description),1),C("p",null,[Ot("Цена: "),C("b",null,De(n.cart_data.price),1),Ot(" Размер: "),C("b",null,De(n.cart_data.size),1)]),C("h3",null,"Стоимость: "+De(n.cart_data.price*n.cart_data.count)+" рублей",1)]),C("div",AP,[C("p",RP,[C("div",bP,[C("button",{onClick:e[0]||(e[0]=(...o)=>i.minusProduct&&i.minusProduct(...o))},"-"),Ot(" "+De(n.cart_data.count)+" ",1),C("button",{onClick:e[1]||(e[1]=(...o)=>i.plusProduct&&i.plusProduct(...o))},"+"),C("img",{onClick:e[2]||(e[2]=(...o)=>i.deleteFromCart&&i.deleteFromCart(...o)),src:yP,alt:"delete"})])])])])}const PP=xt(vP,[["render",SP]]),CP="/coffee-land-vue-site/assets/glass2-tjg5rzez.webp",OP="/coffee-land-vue-site/assets/glass3-nkF1B7nh.webp",kP="/coffee-land-vue-site/assets/croissant-M0eR3rlw.webp",NP={name:"v-cart",components:{vCartItem:PP},computed:{cart(){return this.$store.state.cart},calculate_cost(){let t=0;for(let e of Object.values(this.cart))t+=e.count*e.price;return t}},methods:{deleteFromCart(t){this.$store.dispatch("deleteFromCart",t)}}},DP={class:"v-cart"},VP={key:0,class:"cart-empty"},xP=C("img",{id:"cart1",src:Gg},null,-1),MP=C("img",{id:"cart2",src:CP},null,-1),LP=C("img",{id:"cart3",src:OP},null,-1),FP=C("img",{id:"cart4",src:kP},null,-1),UP=C("p",null,"В корзине пока нет товаров",-1),BP=C("p",null,"Вы можете добавить товары в каталоге ->",-1),$P=C("button",{class:"btn-empty"},"Каталог",-1),jP={class:"v-cart-total"},qP={key:0,class:"btn-total"};function HP(t,e,n,r,s,i){const o=pn("router-link"),a=pn("v-cart-item");return ae(),we("div",DP,[i.cart.length?mt("",!0):(ae(),we("div",VP,[xP,MP,LP,FP,UP,BP,be(o,{to:"/catalog"},{default:On(()=>[$P]),_:1})])),i.cart.length?(ae(!0),we(pt,{key:1},Uo(i.cart,(c,l)=>(ae(),pr(a,{key:c.id,cart_data:c,onDeleteFromCart:u=>i.deleteFromCart(l)},null,8,["cart_data","onDeleteFromCart"]))),128)):mt("",!0),C("div",jP,[C("p",null,"Сумма: "+De(i.calculate_cost),1),i.calculate_cost>0?(ae(),we("button",qP,"Заказать")):mt("",!0)])])}const zP=xt(NP,[["render",HP]]),WP={name:"v-craft"},KP={class:"v-craft"},GP=C("h1",null,"Тут можно создать крафтовый кофе",-1),QP=[GP];function JP(t,e,n,r,s,i){return ae(),we("div",KP,QP)}const YP=xt(WP,[["render",JP]]),XP={name:"v-login",data(){return{isVisible:!0}},computed:_s(["user"]),setup(){const t=Jc({}),e=Jc({}),n=HT();return{login_form:t,register_form:e,store:n,register:()=>{n.dispatch("register",e.value)},login:()=>{n.dispatch("login",t.value)},loginWithGoogle:()=>{n.dispatch("signInWithGoogle")},loginWithApple:()=>{n.dispatch("signInWithGoogle")}}}},ZP={class:"bg-login"},eC={class:"v-login"},tC=C("img",{class:"beans",id:"b4",src:Zs,alt:"coffee beans"},null,-1),nC=C("img",{class:"beans",id:"b5",src:Zs,alt:"coffee beans"},null,-1),rC={class:"form"},sC={key:0,class:"register-container"},iC=C("h2",null,"Регистрация",-1),oC={class:"change-form"},aC={key:1,class:"login-container"},cC=C("h2",null,"Вход",-1),lC={class:"change-form"};function uC(t,e,n,r,s,i){return ae(),we("div",ZP,[C("div",eC,[tC,nC,C("section",rC,[s.isVisible?mt("",!0):(ae(),we("div",sC,[C("form",{class:"register",onSubmit:e[3]||(e[3]=Gs((...o)=>r.register&&r.register(...o),["prevent"]))},[iC,oo(C("input",{type:"email",placeholder:"Email address","onUpdate:modelValue":e[0]||(e[0]=o=>r.register_form.email=o)},null,512),[[ao,r.register_form.email]]),oo(C("input",{type:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=o=>r.register_form.password=o)},null,512),[[ao,r.register_form.password]]),C("button",{class:"submit",onClick:e[2]||(e[2]=(...o)=>r.register&&r.register(...o))},"Регистрация")],32),C("div",oC,[C("p",null,[Ot(" У вас уже есть аккаунт "),C("button",{onClick:e[4]||(e[4]=o=>s.isVisible=!0)},"Войти")])])])),s.isVisible?(ae(),we("div",aC,[C("form",{class:"login",onSubmit:e[8]||(e[8]=Gs((...o)=>r.login&&r.login(...o),["prevent"]))},[cC,oo(C("input",{type:"email",placeholder:"Email address","onUpdate:modelValue":e[5]||(e[5]=o=>r.login_form.email=o)},null,512),[[ao,r.login_form.email]]),oo(C("input",{type:"password",placeholder:"Password","onUpdate:modelValue":e[6]||(e[6]=o=>r.login_form.password=o)},null,512),[[ao,r.login_form.password]]),C("button",{onClick:e[7]||(e[7]=(...o)=>r.login&&r.login(...o)),class:"submit"},"Войти")],32),C("div",lC,[C("p",null,[Ot(" У вас ещё нет аккаунта "),C("button",{onClick:e[9]||(e[9]=o=>s.isVisible=!1)},"Зарегистрируйтесь")])])])):mt("",!0),C("button",{onClick:e[10]||(e[10]=(...o)=>r.loginWithGoogle&&r.loginWithGoogle(...o))},"Sign In With Google"),C("button",{onClick:e[11]||(e[11]=(...o)=>r.loginWithApple&&r.loginWithApple(...o))},"Sign In With Aple")])])])}const hC=xt(XP,[["render",uC]]);var fC="firebase",dC="10.7.1";/**
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
 */Bn(fC,dC,"app");var pC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Mu=Mu||{},Q=pC||self;function Va(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function mC(t){return Object.prototype.hasOwnProperty.call(t,kc)&&t[kc]||(t[kc]=++gC)}var kc="closure_uid_"+(1e9*Math.random()>>>0),gC=0;function _C(t,e,n){return t.call.apply(t.bind,arguments)}function yC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Xe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Xe=_C:Xe=yC,Xe.apply(null,arguments)}function lo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ue(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Qn(){this.s=this.s,this.o=this.o}var vC=0;Qn.prototype.s=!1;Qn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),vC!=0)&&mC(this)};Qn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Jg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Lu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function vd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Va(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var EC=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};Q.addEventListener("test",n,e),Q.removeEventListener("test",n,e)}catch{}return t}();function gi(t){return/^[\s\xa0]*$/.test(t)}function xa(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function jt(t){return xa().indexOf(t)!=-1}function Fu(t){return Fu[" "](t),t}Fu[" "]=function(){};function TC(t,e){var n=dO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var wC=jt("Opera"),ss=jt("Trident")||jt("MSIE"),Yg=jt("Edge"),Il=Yg||ss,Xg=jt("Gecko")&&!(xa().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge"))&&!(jt("Trident")||jt("MSIE"))&&!jt("Edge"),IC=xa().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge");function Zg(){var t=Q.document;return t?t.documentMode:void 0}var Al;e:{var Nc="",Dc=function(){var t=xa();if(Xg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Yg)return/Edge\/([\d\.]+)/.exec(t);if(ss)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(IC)return/WebKit\/(\S+)/.exec(t);if(wC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Dc&&(Nc=Dc?Dc[1]:""),ss){var Vc=Zg();if(Vc!=null&&Vc>parseFloat(Nc)){Al=String(Vc);break e}}Al=Nc}var Rl;if(Q.document&&ss){var Ed=Zg();Rl=Ed||parseInt(Al,10)||void 0}else Rl=void 0;var AC=Rl;function _i(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Xg){e:{try{Fu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:RC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_i.$.h.call(this)}}Ue(_i,Ze);var RC={2:"touch",3:"pen",4:"mouse"};_i.prototype.h=function(){_i.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ui="closure_listenable_"+(1e6*Math.random()|0),bC=0;function SC(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++bC,this.fa=this.ia=!1}function Ma(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Uu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function PC(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function e_(t){const e={};for(const n in t)e[n]=t[n];return e}const Td="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function t_(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Td.length;i++)n=Td[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function La(t){this.src=t,this.g={},this.h=0}La.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Sl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new SC(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function bl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Jg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ma(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Sl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Bu="closure_lm_"+(1e6*Math.random()|0),xc={};function n_(t,e,n,r,s){if(r&&r.once)return s_(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)n_(t,e[i],n,r,s);return null}return n=qu(n),t&&t[Ui]?t.O(e,n,Fi(r)?!!r.capture:!!r,s):r_(t,e,n,!1,r,s)}function r_(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Fi(s)?!!s.capture:!!s,a=ju(t);if(a||(t[Bu]=a=new La(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=CC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)EC||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(o_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function CC(){function t(n){return e.call(t.src,t.listener,n)}const e=OC;return t}function s_(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)s_(t,e[i],n,r,s);return null}return n=qu(n),t&&t[Ui]?t.P(e,n,Fi(r)?!!r.capture:!!r,s):r_(t,e,n,!0,r,s)}function i_(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)i_(t,e[i],n,r,s);else r=Fi(r)?!!r.capture:!!r,n=qu(n),t&&t[Ui]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Sl(i,n,r,s),-1<n&&(Ma(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ju(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Sl(e,n,r,s)),(n=-1<t?e[t]:null)&&$u(n))}function $u(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ui])bl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(o_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ju(e))?(bl(n,t),n.h==0&&(n.src=null,e[Bu]=null)):Ma(t)}}}function o_(t){return t in xc?xc[t]:xc[t]="on"+t}function OC(t,e){if(t.fa)t=!0;else{e=new _i(e,this);var n=t.listener,r=t.la||t.src;t.ia&&$u(t),t=n.call(r,e)}return t}function ju(t){return t=t[Bu],t instanceof La?t:null}var Mc="__closure_events_fn_"+(1e9*Math.random()>>>0);function qu(t){return typeof t=="function"?t:(t[Mc]||(t[Mc]=function(e){return t.handleEvent(e)}),t[Mc])}function Fe(){Qn.call(this),this.i=new La(this),this.S=this,this.J=null}Ue(Fe,Qn);Fe.prototype[Ui]=!0;Fe.prototype.removeEventListener=function(t,e,n,r){i_(this,t,e,n,r)};function He(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var s=e;e=new Ze(r,t),t_(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=uo(o,r,!0,e)&&s}if(o=e.g=t,s=uo(o,r,!0,e)&&s,s=uo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=uo(o,r,!1,e)&&s}Fe.prototype.N=function(){if(Fe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ma(n[r]);delete t.g[e],t.h--}}this.J=null};Fe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Fe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function uo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&bl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Hu=Q.JSON.stringify;class kC{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function NC(){var t=zu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class DC{constructor(){this.h=this.g=null}add(e,n){const r=a_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var a_=new kC(()=>new VC,t=>t.reset());class VC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function xC(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function MC(t){Q.setTimeout(()=>{throw t},0)}let yi,vi=!1,zu=new DC,c_=()=>{const t=Q.Promise.resolve(void 0);yi=()=>{t.then(LC)}};var LC=()=>{for(var t;t=NC();){try{t.h.call(t.g)}catch(n){MC(n)}var e=a_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}vi=!1};function Fa(t,e){Fe.call(this),this.h=t||1,this.g=e||Q,this.j=Xe(this.qb,this),this.l=Date.now()}Ue(Fa,Fe);V=Fa.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),He(this,"tick"),this.ga&&(Wu(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){Fa.$.N.call(this),Wu(this),delete this.g};function Ku(t,e,n){if(typeof t=="function")n&&(t=Xe(t,n));else if(t&&typeof t.handleEvent=="function")t=Xe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function l_(t){t.g=Ku(()=>{t.g=null,t.i&&(t.i=!1,l_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class FC extends Qn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:l_(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ei(t){Qn.call(this),this.h=t,this.g={}}Ue(Ei,Qn);var wd=[];function u_(t,e,n,r){Array.isArray(n)||(n&&(wd[0]=n.toString()),n=wd);for(var s=0;s<n.length;s++){var i=n_(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function h_(t){Uu(t.g,function(e,n){this.g.hasOwnProperty(n)&&$u(e)},t),t.g={}}Ei.prototype.N=function(){Ei.$.N.call(this),h_(this)};Ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ua(){this.g=!0}Ua.prototype.Ea=function(){this.g=!1};function UC(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function BC(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ur(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+jC(t,n)+(r?" "+r:"")})}function $C(t,e){t.info(function(){return"TIMEOUT: "+e})}Ua.prototype.info=function(){};function jC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Hu(n)}catch{return e}}var Ir={},Id=null;function Ba(){return Id=Id||new Fe}Ir.Ta="serverreachability";function f_(t){Ze.call(this,Ir.Ta,t)}Ue(f_,Ze);function Ti(t){const e=Ba();He(e,new f_(e))}Ir.STAT_EVENT="statevent";function d_(t,e){Ze.call(this,Ir.STAT_EVENT,t),this.stat=e}Ue(d_,Ze);function st(t){const e=Ba();He(e,new d_(e,t))}Ir.Ua="timingevent";function p_(t,e){Ze.call(this,Ir.Ua,t),this.size=e}Ue(p_,Ze);function Bi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var $a={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},m_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Gu(){}Gu.prototype.h=null;function Ad(t){return t.h||(t.h=t.i())}function g_(){}var $i={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Qu(){Ze.call(this,"d")}Ue(Qu,Ze);function Ju(){Ze.call(this,"c")}Ue(Ju,Ze);var Pl;function ja(){}Ue(ja,Gu);ja.prototype.g=function(){return new XMLHttpRequest};ja.prototype.i=function(){return{}};Pl=new ja;function ji(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ei(this),this.P=qC,t=Il?125:void 0,this.V=new Fa(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new __}function __(){this.i=null,this.g="",this.h=!1}var qC=45e3,y_={},Cl={};V=ji.prototype;V.setTimeout=function(t){this.P=t};function Ol(t,e,n){t.L=1,t.A=Ha(_n(e)),t.u=n,t.S=!0,v_(t,null)}function v_(t,e){t.G=Date.now(),qi(t),t.B=_n(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),S_(n.i,"t",r),t.o=0,n=t.l.J,t.h=new __,t.g=G_(t.l,n?e:null,!t.u),0<t.O&&(t.M=new FC(Xe(t.Pa,t,t.g),t.O)),u_(t.U,t.g,"readystatechange",t.nb),e=t.I?e_(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ti(),UC(t.j,t.v,t.B,t.m,t.W,t.u)}V.nb=function(t){t=t.target;const e=this.M;e&&Ht(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const u=Ht(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Il||this.g&&(this.h.h||this.g.ja()||Pd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ti(3):Ti(2)),qa(this);var n=this.g.da();this.ca=n;t:if(E_(this)){var r=Pd(this.g);t="";var s=r.length,i=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),ei(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,BC(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!gi(a)){var l=a;break t}}l=null}if(n=l)Ur(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kl(this,n);else{this.i=!1,this.s=3,st(12),ir(this),ei(this);break e}}this.S?(T_(this,u,o),Il&&this.i&&u==3&&(u_(this.U,this.V,"tick",this.mb),this.V.start())):(Ur(this.j,this.m,o,null),kl(this,o)),u==4&&ir(this),this.i&&!this.J&&(u==4?H_(this.l,this):(this.i=!1,qi(this)))}else uO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),ir(this),ei(this)}}}catch{}finally{}};function E_(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function T_(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=HC(t,n),s==Cl){e==4&&(t.s=4,st(14),r=!1),Ur(t.j,t.m,null,"[Incomplete Response]");break}else if(s==y_){t.s=4,st(15),Ur(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ur(t.j,t.m,s,null),kl(t,s);E_(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,st(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nh(e),e.M=!0,st(11))):(Ur(t.j,t.m,n,"[Invalid Chunked Response]"),ir(t),ei(t))}V.mb=function(){if(this.g){var t=Ht(this.g),e=this.g.ja();this.o<e.length&&(qa(this),T_(this,t,e),this.i&&t!=4&&qi(this))}};function HC(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Cl:(n=Number(e.substring(n,r)),isNaN(n)?y_:(r+=1,r+n>e.length?Cl:(e=e.slice(r,r+n),t.o=r+n,e)))}V.cancel=function(){this.J=!0,ir(this)};function qi(t){t.Y=Date.now()+t.P,w_(t,t.P)}function w_(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Bi(Xe(t.lb,t),e)}function qa(t){t.C&&(Q.clearTimeout(t.C),t.C=null)}V.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?($C(this.j,this.B),this.L!=2&&(Ti(),st(17)),ir(this),this.s=2,ei(this)):w_(this,this.Y-t)};function ei(t){t.l.H==0||t.J||H_(t.l,t)}function ir(t){qa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Wu(t.V),h_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function kl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Nl(n.i,t))){if(!t.K&&Nl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ta(n),Ga(n);else break e;th(n),st(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Bi(Xe(n.ib,n),6e3));if(1>=O_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else or(n,11)}else if((t.K||n.g==t)&&ta(n),!gi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Yu(i,i.h),i.h=null))}if(r.F){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Ee(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=K_(r,r.J?r.pa:null,r.Y),o.K){k_(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(qa(a),qi(a)),r.g=o}else j_(r);0<n.j.length&&Qa(n)}else l[0]!="stop"&&l[0]!="close"||or(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?or(n,7):eh(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ti(4)}catch{}}function zC(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Va(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function WC(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Va(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function I_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Va(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=WC(t),r=zC(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var A_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function KC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function hr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof hr){this.h=t.h,Zo(this,t.j),this.s=t.s,this.g=t.g,ea(this,t.m),this.l=t.l;var e=t.i,n=new wi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Rd(this,n),this.o=t.o}else t&&(e=String(t).match(A_))?(this.h=!1,Zo(this,e[1]||"",!0),this.s=$s(e[2]||""),this.g=$s(e[3]||"",!0),ea(this,e[4]),this.l=$s(e[5]||"",!0),Rd(this,e[6]||"",!0),this.o=$s(e[7]||"")):(this.h=!1,this.i=new wi(null,this.h))}hr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(js(e,bd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(js(e,bd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(js(n,n.charAt(0)=="/"?JC:QC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",js(n,XC)),t.join("")};function _n(t){return new hr(t)}function Zo(t,e,n){t.j=n?$s(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ea(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Rd(t,e,n){e instanceof wi?(t.i=e,ZC(t.i,t.h)):(n||(e=js(e,YC)),t.i=new wi(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function Ha(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $s(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function js(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,GC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function GC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var bd=/[#\/\?@]/g,QC=/[#\?:]/g,JC=/[#\?]/g,YC=/[#\?@]/g,XC=/#/g;function wi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Jn(t){t.g||(t.g=new Map,t.h=0,t.i&&KC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=wi.prototype;V.add=function(t,e){Jn(this),this.i=null,t=ws(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function R_(t,e){Jn(t),e=ws(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function b_(t,e){return Jn(t),e=ws(t,e),t.g.has(e)}V.forEach=function(t,e){Jn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};V.ta=function(){Jn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};V.Z=function(t){Jn(this);let e=[];if(typeof t=="string")b_(this,t)&&(e=e.concat(this.g.get(ws(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return Jn(this),this.i=null,t=ws(this,t),b_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function S_(t,e,n){R_(t,e),0<n.length&&(t.i=null,t.g.set(ws(t,e),Lu(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ws(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ZC(t,e){e&&!t.j&&(Jn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(R_(this,r),S_(this,s,n))},t)),t.j=e}var eO=class{constructor(t,e){this.g=t,this.map=e}};function P_(t){this.l=t||tO,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tO=10;function C_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function O_(t){return t.h?1:t.g?t.g.size:0}function Nl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Yu(t,e){t.g?t.g.add(e):t.h=e}function k_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}P_.prototype.cancel=function(){if(this.i=N_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function N_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Lu(t.i)}var nO=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function rO(){this.g=new nO}function sO(t,e,n){const r=n||"";try{I_(t,function(s,i){let o=s;Fi(s)&&(o=Hu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function iO(t,e){const n=new Ua;if(Q.Image){const r=new Image;r.onload=lo(ho,n,r,"TestLoadImage: loaded",!0,e),r.onerror=lo(ho,n,r,"TestLoadImage: error",!1,e),r.onabort=lo(ho,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=lo(ho,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ho(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function za(t){this.l=t.ec||null,this.j=t.ob||!1}Ue(za,Gu);za.prototype.g=function(){return new Wa(this.l,this.j)};za.prototype.i=function(t){return function(){return t}}({});function Wa(t,e){Fe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Xu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ue(Wa,Fe);var Xu=0;V=Wa.prototype;V.open=function(t,e){if(this.readyState!=Xu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ii(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hi(this)),this.readyState=Xu};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ii(this)),this.g&&(this.readyState=3,Ii(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;D_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function D_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Hi(this):Ii(this),this.readyState==3&&D_(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,Hi(this))};V.Ya=function(t){this.g&&(this.response=t,Hi(this))};V.ka=function(){this.g&&Hi(this)};function Hi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ii(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ii(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var oO=Q.JSON.parse;function Re(t){Fe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=V_,this.L=this.M=!1}Ue(Re,Fe);var V_="",aO=/^https?$/i,cO=["POST","PUT"];V=Re.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Pl.g(),this.C=this.u?Ad(this.u):Ad(Pl),this.g.onreadystatechange=Xe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Sd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Q.FormData&&t instanceof Q.FormData,!(0<=Jg(cO,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{L_(this),0<this.B&&((this.L=lO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Xe(this.ua,this)):this.A=Ku(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Sd(this,i)}};function lO(t){return ss&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof Mu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,He(this,"timeout"),this.abort(8))};function Sd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,x_(t),Ka(t)}function x_(t){t.F||(t.F=!0,He(t,"complete"),He(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,He(this,"complete"),He(this,"abort"),Ka(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ka(this,!0)),Re.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?M_(this):this.kb())};V.kb=function(){M_(this)};function M_(t){if(t.h&&typeof Mu<"u"&&(!t.C[1]||Ht(t)!=4||t.da()!=2)){if(t.v&&Ht(t)==4)Ku(t.La,0,t);else if(He(t,"readystatechange"),Ht(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(A_)[1]||null;!s&&Q.self&&Q.self.location&&(s=Q.self.location.protocol.slice(0,-1)),r=!aO.test(s?s.toLowerCase():"")}n=r}if(n)He(t,"complete"),He(t,"success");else{t.m=6;try{var i=2<Ht(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",x_(t)}}finally{Ka(t)}}}}function Ka(t,e){if(t.g){L_(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||He(t,"ready");try{n.onreadystatechange=r}catch{}}}function L_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function Ht(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),oO(e)}};function Pd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case V_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function uO(t){const e={};t=(t.g&&2<=Ht(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(gi(t[r]))continue;var n=xC(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}PC(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function F_(t){let e="";return Uu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Zu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=F_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Vs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function U_(t){this.Ga=0,this.j=[],this.l=new Ua,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Vs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Vs("baseRetryDelayMs",5e3,t),this.hb=Vs("retryDelaySeedMs",1e4,t),this.eb=Vs("forwardChannelMaxRetries",2,t),this.xa=Vs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new P_(t&&t.concurrentRequestLimit),this.Ja=new rO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=U_.prototype;V.ra=8;V.H=1;function eh(t){if(B_(t),t.H==3){var e=t.W++,n=_n(t.I);if(Ee(n,"SID",t.K),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),zi(t,n),e=new ji(t,t.l,e),e.L=2,e.A=Ha(_n(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.A,n=!0),n||(e.g=G_(e.l,null),e.g.ha(e.A)),e.G=Date.now(),qi(e)}W_(t)}function Ga(t){t.g&&(nh(t),t.g.cancel(),t.g=null)}function B_(t){Ga(t),t.u&&(Q.clearTimeout(t.u),t.u=null),ta(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Qa(t){if(!C_(t.i)&&!t.m){t.m=!0;var e=t.Na;yi||c_(),vi||(yi(),vi=!0),zu.add(e,t),t.C=0}}function hO(t,e){return O_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Bi(Xe(t.Na,t,e),z_(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ji(this,this.l,t);let i=this.s;if(this.U&&(i?(i=e_(i),t_(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$_(this,s,e),n=_n(this.I),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),zi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(F_(i)))+"&"+e:this.o&&Zu(n,this.o,i)),Yu(this.i,s),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),s.aa=!0,Ol(s,n,null)):Ol(s,n,e),this.H=2}}else this.H==3&&(t?Cd(this,t):this.j.length==0||C_(this.i)||Cd(this))};function Cd(t,e){var n;e?n=e.m:n=t.W++;const r=_n(t.I);Ee(r,"SID",t.K),Ee(r,"RID",n),Ee(r,"AID",t.V),zi(t,r),t.o&&t.s&&Zu(r,t.o,t.s),n=new ji(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=$_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Yu(t.i,n),Ol(n,r,e)}function zi(t,e){t.na&&Uu(t.na,function(n,r){Ee(e,r,n)}),t.h&&I_({},function(n,r){Ee(e,r,n)})}function $_(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Xe(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{sO(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function j_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;yi||c_(),vi||(yi(),vi=!0),zu.add(e,t),t.A=0}}function th(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Bi(Xe(t.Ma,t),z_(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,q_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Bi(Xe(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,st(10),Ga(this),q_(this))};function nh(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function q_(t){t.g=new ji(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=_n(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.K),Ee(e,"AID",t.V),Ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ee(e,"TO",t.qa),Ee(e,"TYPE","xmlhttp"),zi(t,e),t.o&&t.s&&Zu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ha(_n(e)),n.u=null,n.S=!0,v_(n,t)}V.ib=function(){this.v!=null&&(this.v=null,Ga(this),th(this),st(19))};function ta(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function H_(t,e){var n=null;if(t.g==e){ta(t),nh(t),t.g=null;var r=2}else if(Nl(t.i,e))n=e.F,k_(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Ba(),He(r,new p_(r,n)),Qa(t)}else j_(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&hO(t,e)||r==2&&th(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:or(t,5);break;case 4:or(t,10);break;case 3:or(t,6);break;default:or(t,2)}}}function z_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function or(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Xe(t.pb,t);n||(n=new hr("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Zo(n,"https"),Ha(n)),iO(n.toString(),r)}else st(2);t.H=0,t.h&&t.h.za(e),W_(t),B_(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),st(2)):(this.l.info("Failed to ping google.com"),st(1))};function W_(t){if(t.H=0,t.ma=[],t.h){const e=N_(t.i);(e.length!=0||t.j.length!=0)&&(vd(t.ma,e),vd(t.ma,t.j),t.i.i.length=0,Lu(t.j),t.j.length=0),t.h.ya()}}function K_(t,e,n){var r=n instanceof hr?_n(n):new hr(n);if(r.g!="")e&&(r.g=e+"."+r.g),ea(r,r.m);else{var s=Q.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new hr(null);r&&Zo(i,r),e&&(i.g=e),s&&ea(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ee(r,n,e),Ee(r,"VER",t.ra),zi(t,r),r}function G_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Re(new za({ob:n})):new Re(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function Q_(){}V=Q_.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function na(){if(ss&&!(10<=Number(AC)))throw Error("Environmental error: no available transport.")}na.prototype.g=function(t,e){return new gt(t,e)};function gt(t,e){Fe.call(this),this.g=new U_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!gi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!gi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Is(this)}Ue(gt,Fe);gt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;st(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=K_(t,null,t.Y),Qa(t)};gt.prototype.close=function(){eh(this.g)};gt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Hu(t),t=n);e.j.push(new eO(e.fb++,t)),e.H==3&&Qa(e)};gt.prototype.N=function(){this.g.h=null,delete this.j,eh(this.g),delete this.g,gt.$.N.call(this)};function J_(t){Qu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ue(J_,Qu);function Y_(){Ju.call(this),this.status=1}Ue(Y_,Ju);function Is(t){this.g=t}Ue(Is,Q_);Is.prototype.Ba=function(){He(this.g,"a")};Is.prototype.Aa=function(t){He(this.g,new J_(t))};Is.prototype.za=function(t){He(this.g,new Y_)};Is.prototype.ya=function(){He(this.g,"b")};function fO(){this.blockSize=-1}function Nt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ue(Nt,fO);Nt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Lc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Nt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Lc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Lc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Lc(this,r),s=0;break}}this.h=s,this.i+=e};Nt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function fe(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var dO={};function rh(t){return-128<=t&&128>t?TC(t,function(e){return new fe([e|0],0>e?-1:0)}):new fe([t|0],0>t?-1:0)}function zt(t){if(isNaN(t)||!isFinite(t))return Gr;if(0>t)return $e(zt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Dl;return new fe(e,0)}function X_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return $e(X_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=zt(Math.pow(e,8)),r=Gr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=zt(Math.pow(e,i)),r=r.R(i).add(zt(o))):(r=r.R(n),r=r.add(zt(o)))}return r}var Dl=4294967296,Gr=rh(0),Vl=rh(1),Od=rh(16777216);V=fe.prototype;V.ea=function(){if(vt(this))return-$e(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Dl+r)*e,e*=Dl}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ln(this))return"0";if(vt(this))return"-"+$e(this).toString(t);for(var e=zt(Math.pow(t,6)),n=this,r="";;){var s=sa(n,e).g;n=ra(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,ln(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ln(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function vt(t){return t.h==-1}V.X=function(t){return t=ra(this,t),vt(t)?-1:ln(t)?0:1};function $e(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new fe(n,~t.h).add(Vl)}V.abs=function(){return vt(this)?$e(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new fe(n,n[n.length-1]&-2147483648?-1:0)};function ra(t,e){return t.add($e(e))}V.R=function(t){if(ln(this)||ln(t))return Gr;if(vt(this))return vt(t)?$e(this).R($e(t)):$e($e(this).R(t));if(vt(t))return $e(this.R($e(t)));if(0>this.X(Od)&&0>t.X(Od))return zt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,fo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,fo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,fo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,fo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new fe(n,0)};function fo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function xs(t,e){this.g=t,this.h=e}function sa(t,e){if(ln(e))throw Error("division by zero");if(ln(t))return new xs(Gr,Gr);if(vt(t))return e=sa($e(t),e),new xs($e(e.g),$e(e.h));if(vt(e))return e=sa(t,$e(e)),new xs($e(e.g),e.h);if(30<t.g.length){if(vt(t)||vt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Vl,r=e;0>=r.X(t);)n=kd(n),r=kd(r);var s=Dr(n,1),i=Dr(r,1);for(r=Dr(r,2),n=Dr(n,2);!ln(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Dr(r,1),n=Dr(n,1)}return e=ra(t,s.R(e)),new xs(s,e)}for(s=Gr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=zt(n),o=i.R(e);vt(o)||0<o.X(t);)n-=r,i=zt(n),o=i.R(e);ln(i)&&(i=Vl),s=s.add(i),t=ra(t,o)}return new xs(s,t)}V.gb=function(t){return sa(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new fe(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new fe(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new fe(n,this.h^t.h)};function kd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new fe(n,t.h)}function Dr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new fe(s,t.h)}na.prototype.createWebChannel=na.prototype.g;gt.prototype.send=gt.prototype.u;gt.prototype.open=gt.prototype.m;gt.prototype.close=gt.prototype.close;$a.NO_ERROR=0;$a.TIMEOUT=8;$a.HTTP_ERROR=6;m_.COMPLETE="complete";g_.EventType=$i;$i.OPEN="a";$i.CLOSE="b";$i.ERROR="c";$i.MESSAGE="d";Fe.prototype.listen=Fe.prototype.O;Re.prototype.listenOnce=Re.prototype.P;Re.prototype.getLastError=Re.prototype.Sa;Re.prototype.getLastErrorCode=Re.prototype.Ia;Re.prototype.getStatus=Re.prototype.da;Re.prototype.getResponseJson=Re.prototype.Wa;Re.prototype.getResponseText=Re.prototype.ja;Re.prototype.send=Re.prototype.ha;Re.prototype.setWithCredentials=Re.prototype.Oa;Nt.prototype.digest=Nt.prototype.l;Nt.prototype.reset=Nt.prototype.reset;Nt.prototype.update=Nt.prototype.j;fe.prototype.add=fe.prototype.add;fe.prototype.multiply=fe.prototype.R;fe.prototype.modulo=fe.prototype.gb;fe.prototype.compare=fe.prototype.X;fe.prototype.toNumber=fe.prototype.ea;fe.prototype.toString=fe.prototype.toString;fe.prototype.getBits=fe.prototype.D;fe.fromNumber=zt;fe.fromString=X_;var pO=function(){return new na},mO=function(){return Ba()},Fc=$a,gO=m_,_O=Ir,Nd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},po=g_,yO=Re,vO=Nt,Qr=fe;const Dd="@firebase/firestore";/**
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
 */const yr=new Iu("@firebase/firestore");function Ms(){return yr.logLevel}function U(t,...e){if(yr.logLevel<=ne.DEBUG){const n=e.map(sh);yr.debug(`Firestore (${As}): ${t}`,...n)}}function yn(t,...e){if(yr.logLevel<=ne.ERROR){const n=e.map(sh);yr.error(`Firestore (${As}): ${t}`,...n)}}function is(t,...e){if(yr.logLevel<=ne.WARN){const n=e.map(sh);yr.warn(`Firestore (${As}): ${t}`,...n)}}function sh(t){if(typeof t=="string")return t;try{/**
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
 */class fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Z_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class TO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wO{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new Z_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new Qe(e)}}class IO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class AO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new IO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.R=n.token,new RO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function SO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ey{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=SO(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function os(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ai{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ai.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ai?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Ai{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const PO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends Ai{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return PO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new F(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new F(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Te.fromString(e))}static fromName(e){return new q(Te.fromString(e).popFirst(5))}static empty(){return new q(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Te(e.slice()))}}function CO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new qn(s,q.empty(),e)}function OO(t){return new qn(t.readTime,t.key,-1)}class qn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new qn(J.min(),q.empty(),-1)}static max(){return new qn(J.max(),q.empty(),-1)}}function kO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const NO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Wi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==NO)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ih{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}ih._e=-1;function Ja(t){return t==null}function ia(t){return t===0&&1/t==-1/0}function VO(t){return typeof t=="number"&&Number.isInteger(t)&&!ia(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Vd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ty(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mo(this.root,e,this.comparator,!0)}}class mo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Be.RED,this.left=s??Be.EMPTY,this.right=i??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Be(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ze{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xd(this.data.getIterator())}getIteratorFrom(e){return new xd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class xd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pt{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new ze(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ny extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ny("Invalid base64 string: "+i):i}}(e);return new tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const xO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hn(t){if(ye(!!t),typeof t=="string"){let e=0;const n=xO.exec(t);if(ye(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vr(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
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
 */function oh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ah(t){const e=t.mapValue.fields.__previous_value__;return oh(e)?ah(e):e}function Ri(t){const e=Hn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
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
 */class MO{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class bi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const go={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?oh(t)?4:LO(t)?9007199254740991:10:K()}function Zt(t,e){if(t===e)return!0;const n=Er(t);if(n!==Er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ri(t).isEqual(Ri(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Hn(s.timestampValue),a=Hn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vr(s.bytesValue).isEqual(vr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ce(s.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(s.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ce(s.integerValue)===Ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ce(s.doubleValue),a=Ce(i.doubleValue);return o===a?ia(o)===ia(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return os(t.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Vd(o)!==Vd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Zt(o[c],a[c])))return!1;return!0}(t,e);default:return K()}}function Si(t,e){return(t.values||[]).find(n=>Zt(n,e))!==void 0}function as(t,e){if(t===e)return 0;const n=Er(t),r=Er(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ce(i.integerValue||i.doubleValue),c=Ce(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Md(t.timestampValue,e.timestampValue);case 4:return Md(Ri(t),Ri(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(i,o){const a=vr(i),c=vr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=oe(a[l],c[l]);if(u!==0)return u}return oe(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=oe(Ce(i.latitude),Ce(o.latitude));return a!==0?a:oe(Ce(i.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=as(a[l],c[l]);if(u)return u}return oe(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===go.mapValue&&o===go.mapValue)return 0;if(i===go.mapValue)return 1;if(o===go.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=oe(c[h],u[h]);if(f!==0)return f;const p=as(a[c[h]],l[u[h]]);if(p!==0)return p}return oe(c.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function Md(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Hn(t),r=Hn(e),s=oe(n.seconds,r.seconds);return s!==0?s:oe(n.nanos,r.nanos)}function cs(t){return xl(t)}function xl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=xl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${xl(n.fields[o])}`;return s+"}"}(t.mapValue):K()}function Ld(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ml(t){return!!t&&"integerValue"in t}function ch(t){return!!t&&"arrayValue"in t}function Fd(t){return!!t&&"nullValue"in t}function Ud(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function No(t){return!!t&&"mapValue"in t}function ti(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ti(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ti(t.arrayValue.values[n]);return e}return Object.assign({},t)}function LO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!No(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ti(n)}setAll(e){let n=qe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ti(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());No(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];No(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Rs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Et(ti(this.value))}}function ry(t){const e=[];return Rs(t.fields,(n,r)=>{const s=new qe([n]);if(No(r)){const i=ry(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Pt(e)}/**
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
 */class Je{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Je(e,0,J.min(),J.min(),J.min(),Et.empty(),0)}static newFoundDocument(e,n,r,s){return new Je(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new Je(e,2,n,J.min(),J.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,J.min(),J.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class oa{constructor(e,n){this.position=e,this.inclusive=n}}function Bd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=as(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $d(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class aa{constructor(e,n="asc"){this.field=e,this.dir=n}}function FO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class sy{}class Oe extends sy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new BO(e,n,r):n==="array-contains"?new qO(e,r):n==="in"?new HO(e,r):n==="not-in"?new zO(e,r):n==="array-contains-any"?new WO(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $O(e,r):new jO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(as(n,this.value)):n!==null&&Er(this.value)===Er(n)&&this.matchesComparison(as(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends sy{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Dt(e,n)}matches(e){return iy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function iy(t){return t.op==="and"}function oy(t){return UO(t)&&iy(t)}function UO(t){for(const e of t.filters)if(e instanceof Dt)return!1;return!0}function Ll(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+cs(t.value);if(oy(t))return t.filters.map(e=>Ll(e)).join(",");{const e=t.filters.map(n=>Ll(n)).join(",");return`${t.op}(${e})`}}function ay(t,e){return t instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&Zt(r.value,s.value)}(t,e):t instanceof Dt?function(r,s){return s instanceof Dt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&ay(o,s.filters[a]),!0):!1}(t,e):void K()}function cy(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${cs(n.value)}`}(t):t instanceof Dt?function(n){return n.op.toString()+" {"+n.getFilters().map(cy).join(" ,")+"}"}(t):"Filter"}class BO extends Oe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class $O extends Oe{constructor(e,n){super(e,"in",n),this.keys=ly("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jO extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=ly("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ly(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class qO extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ch(n)&&Si(n.arrayValue,this.value)}}class HO extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Si(this.value.arrayValue,n)}}class zO extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Si(this.value.arrayValue,n)}}class WO extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ch(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Si(this.value.arrayValue,r))}}/**
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
 */class KO{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function jd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new KO(t,e,n,r,s,i,o)}function lh(t){const e=Z(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ll(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>cs(r)).join(",")),e.ce=n}return e.ce}function uh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!FO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ay(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$d(t.startAt,e.startAt)&&$d(t.endAt,e.endAt)}function Fl(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Gi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function GO(t,e,n,r,s,i,o,a){return new Gi(t,e,n,r,s,i,o,a)}function hh(t){return new Gi(t)}function qd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uy(t){return t.collectionGroup!==null}function ni(t){const e=Z(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ze(qe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new aa(i,r))}),n.has(qe.keyField().canonicalString())||e.le.push(new aa(qe.keyField(),r))}return e.le}function Jt(t){const e=Z(t);return e.he||(e.he=QO(e,ni(t))),e.he}function QO(t,e){if(t.limitType==="F")return jd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new aa(s.field,i)});const n=t.endAt?new oa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new oa(t.startAt.position,t.startAt.inclusive):null;return jd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ul(t,e){const n=t.filters.concat([e]);return new Gi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Bl(t,e,n){return new Gi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ya(t,e){return uh(Jt(t),Jt(e))&&t.limitType===e.limitType}function hy(t){return`${lh(Jt(t))}|lt:${t.limitType}`}function Mr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>cy(s)).join(", ")}]`),Ja(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>cs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>cs(s)).join(",")),`Target(${r})`}(Jt(t))}; limitType=${t.limitType})`}function Xa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ni(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Bd(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ni(r),s)||r.endAt&&!function(o,a,c){const l=Bd(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ni(r),s))}(t,e)}function JO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fy(t){return(e,n)=>{let r=!1;for(const s of ni(t)){const i=YO(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function YO(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?as(c,l):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class bs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ty(this.inner)}size(){return this.innerSize}}/**
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
 */const XO=new Ae(q.comparator);function vn(){return XO}const dy=new Ae(q.comparator);function qs(...t){let e=dy;for(const n of t)e=e.insert(n.key,n);return e}function py(t){let e=dy;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ar(){return ri()}function my(){return ri()}function ri(){return new bs(t=>t.toString(),(t,e)=>t.isEqual(e))}const ZO=new Ae(q.comparator),ek=new ze(q.comparator);function te(...t){let e=ek;for(const n of t)e=e.add(n);return e}const tk=new ze(oe);function nk(){return tk}/**
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
 */function gy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ia(e)?"-0":e}}function _y(t){return{integerValue:""+t}}function rk(t,e){return VO(e)?_y(e):gy(t,e)}/**
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
 */class Za{constructor(){this._=void 0}}function sk(t,e,n){return t instanceof ca?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&oh(i)&&(i=ah(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Pi?vy(t,e):t instanceof Ci?Ey(t,e):function(s,i){const o=yy(s,i),a=Hd(o)+Hd(s.Ie);return Ml(o)&&Ml(s.Ie)?_y(a):gy(s.serializer,a)}(t,e)}function ik(t,e,n){return t instanceof Pi?vy(t,e):t instanceof Ci?Ey(t,e):n}function yy(t,e){return t instanceof la?function(r){return Ml(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ca extends Za{}class Pi extends Za{constructor(e){super(),this.elements=e}}function vy(t,e){const n=Ty(e);for(const r of t.elements)n.some(s=>Zt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ci extends Za{constructor(e){super(),this.elements=e}}function Ey(t,e){let n=Ty(e);for(const r of t.elements)n=n.filter(s=>!Zt(s,r));return{arrayValue:{values:n}}}class la extends Za{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Hd(t){return Ce(t.integerValue||t.doubleValue)}function Ty(t){return ch(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ok(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Pi&&s instanceof Pi||r instanceof Ci&&s instanceof Ci?os(r.elements,s.elements,Zt):r instanceof la&&s instanceof la?Zt(r.Ie,s.Ie):r instanceof ca&&s instanceof ca}(t.transform,e.transform)}class ak{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Do(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ec{}function wy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ay(t.key,dn.none()):new Qi(t.key,t.data,dn.none());{const n=t.data,r=Et.empty();let s=new ze(qe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ar(t.key,r,new Pt(s.toArray()),dn.none())}}function ck(t,e,n){t instanceof Qi?function(s,i,o){const a=s.value.clone(),c=Wd(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ar?function(s,i,o){if(!Do(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Wd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Iy(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function si(t,e,n,r){return t instanceof Qi?function(i,o,a,c){if(!Do(i.precondition,o))return a;const l=i.value.clone(),u=Kd(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ar?function(i,o,a,c){if(!Do(i.precondition,o))return a;const l=Kd(i.fieldTransforms,c,o),u=o.data;return u.setAll(Iy(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Do(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function lk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=yy(r.transform,s||null);i!=null&&(n===null&&(n=Et.empty()),n.set(r.field,i))}return n||null}function zd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&os(r,s,(i,o)=>ok(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qi extends ec{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ar extends ec{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Iy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Wd(t,e,n){const r=new Map;ye(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,ik(o,a,n[s]))}return r}function Kd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,sk(i,o,e))}return r}class Ay extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uk extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ck(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=si(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=si(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=my();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=wy(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&os(this.mutations,e.mutations,(n,r)=>zd(n,r))&&os(this.baseMutations,e.baseMutations,(n,r)=>zd(n,r))}}class fh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ye(e.mutations.length===r.length);let s=function(){return ZO}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new fh(e,n,r,s)}}/**
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
 */class fk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class dk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Pe,re;function pk(t){switch(t){default:return K();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Ry(t){if(t===void 0)return yn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Pe.OK:return I.OK;case Pe.CANCELLED:return I.CANCELLED;case Pe.UNKNOWN:return I.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return I.INTERNAL;case Pe.UNAVAILABLE:return I.UNAVAILABLE;case Pe.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Pe.NOT_FOUND:return I.NOT_FOUND;case Pe.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Pe.ABORTED:return I.ABORTED;case Pe.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Pe.DATA_LOSS:return I.DATA_LOSS;default:return K()}}(re=Pe||(Pe={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mk(){return new TextEncoder}/**
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
 */const gk=new Qr([4294967295,4294967295],0);function Gd(t){const e=mk().encode(t),n=new vO;return n.update(e),new Uint8Array(n.digest())}function Qd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Qr([n,r],0),new Qr([s,i],0)]}class dh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Hs(`Invalid padding: ${n}`);if(r<0)throw new Hs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Hs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Qr.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Qr.fromNumber(r)));return s.compare(gk)===1&&(s=new Qr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Gd(e),[r,s]=Qd(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new dh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Gd(e),[r,s]=Qd(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ji.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new tc(J.min(),s,new Ae(oe),vn(),te())}}class Ji{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ji(r,n,te(),te(),te())}}/**
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
 */class Vo{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class by{constructor(e,n){this.targetId=e,this.fe=n}}class Sy{constructor(e,n,r=tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Jd{constructor(){this.ge=0,this.pe=Xd(),this.ye=tt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=te(),n=te(),r=te();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K()}}),new Ji(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Xd()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ye(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class _k{constructor(e){this.Le=e,this.ke=new Map,this.qe=vn(),this.Qe=Yd(),this.Ke=new Ae(oe)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Fl(i))if(r===0){const o=new q(i.path);this.We(n,o,Je.newNoDocument(o,J.min()))}else ye(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=vr(r).toUint8Array()}catch(c){if(c instanceof ny)return is("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new dh(o,s,i)}catch(c){return is(c instanceof Hs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Fl(a.target)){const c=new q(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,Je.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=te();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new tc(e,n,this.Ke,this.qe,r);return this.qe=vn(),this.Qe=Yd(),this.Ke=new Ae(oe),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Jd,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new ze(oe),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Jd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Yd(){return new Ae(q.comparator)}function Xd(){return new Ae(q.comparator)}const yk={asc:"ASCENDING",desc:"DESCENDING"},vk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ek={and:"AND",or:"OR"};class Tk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $l(t,e){return t.useProto3Json||Ja(e)?e:{value:e}}function ua(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Py(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wk(t,e){return ua(t,e.toTimestamp())}function Yt(t){return ye(!!t),J.fromTimestamp(function(n){const r=Hn(n);return new Ve(r.seconds,r.nanos)}(t))}function ph(t,e){return function(r){return new Te(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Cy(t){const e=Te.fromString(t);return ye(Dy(e)),e}function jl(t,e){return ph(t.databaseId,e.path)}function Uc(t,e){const n=Cy(e);if(n.get(1)!==t.databaseId.projectId)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Oy(n))}function ql(t,e){return ph(t.databaseId,e)}function Ik(t){const e=Cy(t);return e.length===4?Te.emptyPath():Oy(e)}function Hl(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Oy(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zd(t,e,n){return{name:jl(t,e),fields:n.value.mapValue.fields}}function Ak(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(ye(u===void 0||typeof u=="string"),tt.fromBase64String(u||"")):(ye(u===void 0||u instanceof Uint8Array),tt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:Ry(l.code);return new F(u,l.message||"")}(o);n=new Sy(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Uc(t,r.document.name),i=Yt(r.document.updateTime),o=r.document.createTime?Yt(r.document.createTime):J.min(),a=new Et({mapValue:{fields:r.document.fields}}),c=Je.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Vo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Uc(t,r.document),i=r.readTime?Yt(r.readTime):J.min(),o=Je.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Vo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Uc(t,r.document),i=r.removedTargetIds||[];n=new Vo([],i,s,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new dk(s,i),a=r.targetId;n=new by(a,o)}}return n}function Rk(t,e){let n;if(e instanceof Qi)n={update:Zd(t,e.key,e.value)};else if(e instanceof Ay)n={delete:jl(t,e.key)};else if(e instanceof Ar)n={update:Zd(t,e.key,e.data),updateMask:Vk(e.fieldMask)};else{if(!(e instanceof uk))return K();n={verify:jl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Pi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ci)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof la)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:wk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(t,e.precondition)),n}function bk(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Yt(s.updateTime):Yt(i);return o.isEqual(J.min())&&(o=Yt(i)),new ak(o,s.transformResults||[])}(n,e))):[]}function Sk(t,e){return{documents:[ql(t,e.path)]}}function Pk(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ql(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ql(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Ny(Dt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Lr(h.field),direction:kk(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=$l(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Ck(t){let e=Ik(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ye(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=ky(h);return f instanceof Dt&&oy(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(_){return new aa(Fr(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Ja(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,p=h.values||[];return new oa(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,p=h.values||[];return new oa(p,f)}(n.endAt)),GO(e,s,o,i,a,"F",c,l)}function Ok(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ky(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fr(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fr(n.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fr(n.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fr(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(Fr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dt.create(n.compositeFilter.filters.map(r=>ky(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function kk(t){return yk[t]}function Nk(t){return vk[t]}function Dk(t){return Ek[t]}function Lr(t){return{fieldPath:t.canonicalString()}}function Fr(t){return qe.fromServerFormat(t.fieldPath)}function Ny(t){return t instanceof Oe?function(n){if(n.op==="=="){if(Ud(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NAN"}};if(Fd(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ud(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NOT_NAN"}};if(Fd(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lr(n.field),op:Nk(n.op),value:n.value}}}(t):t instanceof Dt?function(n){const r=n.getFilters().map(s=>Ny(s));return r.length===1?r[0]:{compositeFilter:{op:Dk(n.op),filters:r}}}(t):K()}function Vk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class xn{constructor(e,n,r,s,i=J.min(),o=J.min(),a=tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class xk{constructor(e){this.ut=e}}function Mk(t){const e=Ck({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bl(e,e.limit,"L"):e}/**
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
 */class Lk{constructor(){this.on=new Fk}addToCollectionParentIndex(e,n){return this.on.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(qn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(qn.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Fk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ze(Te.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(Te.comparator)).toArray()}}/**
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
 */class ls{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new ls(0)}static Nn(){return new ls(-1)}}/**
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
 */class Uk{constructor(){this.changes=new bs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Bk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class $k{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&si(r.mutation,s,Pt.empty(),Ve.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const s=ar();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=qs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=vn();const o=ri(),a=function(){return ri()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Ar)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),si(u.mutation,l,u.mutation.getFieldMask(),Ve.now())):o.set(l.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Bk(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ri();let s=new Ae((o,a)=>o-a),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Pt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||te()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=my();u.forEach(f=>{if(!i.has(f)){const p=wy(n.get(f),r.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):b.resolve(ar());let a=-1,c=i;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,te())).next(u=>({batchId:a,changes:py(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let s=qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=qs();return this.indexManager.getCollectionParents(e,i).next(a=>b.forEach(a,c=>{const l=function(h,f){return new Gi(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Je.newInvalidDocument(u)))});let a=qs();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&si(u.mutation,l,Pt.empty(),Ve.now()),Xa(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class jk{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return b.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Yt(s.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:Mk(s.bundledQuery),readTime:Yt(s.readTime)}}(n)),b.resolve()}}/**
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
 */class qk{constructor(){this.overlays=new Ae(q.comparator),this.lr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ar();return b.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const s=ar(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return b.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ae((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=ar(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ar(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return b.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fk(n,r));let i=this.lr.get(n);i===void 0&&(i=te(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
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
 */class mh{constructor(){this.hr=new ze(Le.Pr),this.Ir=new ze(Le.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Le(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new q(new Te([])),r=new Le(n,e),s=new Le(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new q(new Te([])),r=new Le(n,e),s=new Le(n,e+1);let i=te();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Le(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return q.comparator(e.key,n.key)||oe(e.gr,n.gr)}static Tr(e,n){return oe(e.gr,n.gr)||q.comparator(e.key,n.key)}}/**
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
 */class Hk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ze(Le.Pr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hk(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Le(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),s=new Le(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(oe);return n.forEach(s=>{const i=new Le(s,0),o=new Le(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),b.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new Le(new q(i),0);let a=new ze(oe);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),b.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ye(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return b.forEach(n.mutations,s=>{const i=new Le(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Le(n,0),s=this.yr.firstAfterOrEqual(r);return b.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class zk{constructor(e){this.Cr=e,this.docs=function(){return new Ae(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let r=vn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Je.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=vn();const o=n.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||kO(OO(u),r)<=0||(s.has(u.key)||Xa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K()}vr(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Wk(this)}getSize(e){return b.resolve(this.size)}}class Wk extends Uk{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class Kk{constructor(e){this.persistence=e,this.Fr=new bs(n=>lh(n),uh),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Mr=0,this.Or=new mh,this.targetCount=0,this.Nr=ls.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),b.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new ls(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.kn(n),b.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Or.containsKey(n))}}/**
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
 */class Gk{constructor(e,n){this.Br={},this.overlays={},this.Lr=new ih(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new Kk(this),this.indexManager=new Lk,this.remoteDocumentCache=function(s){return new zk(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new xk(n),this.Kr=new jk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Hk(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const s=new Qk(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return b.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class Qk extends DO{constructor(e){super(),this.currentSequenceNumber=e}}class gh{constructor(e){this.persistence=e,this.Gr=new mh,this.zr=null}static jr(e){return new gh(e)}get Hr(){if(this.zr)return this.zr;throw K()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),b.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Hr,r=>{const s=q.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return b.or([()=>b.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class _h{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=te(),s=te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _h(e,n.fromCache,r,s)}}/**
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
 */class Jk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Yk{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Jk;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(Ms()<=ne.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Mr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),b.resolve()):(Ms()<=ne.DEBUG&&U("QueryEngine","Query:",Mr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Ms()<=ne.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Mr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jt(n))):b.resolve())}zi(e,n){if(qd(n))return b.resolve(null);let r=Jt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Bl(n,null,"F"),r=Jt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=te(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,Bl(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,s){return qd(n)||s.isEqual(J.min())?b.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?b.resolve(null):(Ms()<=ne.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mr(n)),this.Xi(e,o,n,CO(s,-1)).next(a=>a))})}Yi(e,n){let r=new ze(fy(e));return n.forEach((s,i)=>{Xa(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return Ms()<=ne.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Mr(n)),this.Gi.getDocumentsMatchingQuery(e,n,qn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Xk{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Ae(oe),this.ns=new bs(i=>lh(i),uh),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $k(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function Zk(t,e,n,r){return new Xk(t,e,n,r)}async function Vy(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=te();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function e1(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let p=b.resolve();return f.forEach(_=>{p=p.next(()=>u.getEntry(c,_)).next(y=>{const w=l.docVersions.get(_);ye(w!==null),y.version.compareTo(w)<0&&(h.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=te();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function xy(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function t1(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(tt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(y,w,P){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(f,p,u)&&a.push(n.qr.updateTargetData(i,p))});let c=vn(),l=te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(n1(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(J.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=s,i))}function n1(t,e,n){let r=te(),s=te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=vn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function r1(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function s1(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,b.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function zl(t,e,n){const r=Z(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ki(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function ep(t,e,n){const r=Z(t);let s=J.min(),i=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=Z(c),f=h.ns.get(u);return f!==void 0?b.resolve(h.ts.get(f)):h.qr.getTargetData(l,u)}(r,o,Jt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:te())).next(a=>(i1(r,JO(e),a),{documents:a,ls:i})))}function i1(t,e,n){let r=t.rs.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class tp{constructor(){this.activeTargetIds=nk()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class o1{constructor(){this.eo=new tp,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new tp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class a1{ro(e){}shutdown(){}}/**
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
 */class np{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _o=null;function Bc(){return _o===null?_o=function(){return 268435456+Math.round(2147483648*Math.random())}():_o++,"0x"+_o.toString(16)}/**
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
 */const c1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class l1{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const Ge="WebChannelConnection";class u1 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=Bc(),c=this.So(n,r);U("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,i,o),this.Do(n,c,l,s).then(u=>(U("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw is("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+As}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=c1[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=Bc();return new Promise((o,a)=>{const c=new yO;c.setWithCredentials(!0),c.listenOnce(gO.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Fc.NO_ERROR:const u=c.getResponseJson();U(Ge,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Fc.TIMEOUT:U(Ge,`RPC '${e}' ${i} timed out`),a(new F(I.DEADLINE_EXCEEDED,"Request time out"));break;case Fc.HTTP_ERROR:const h=c.getStatus();if(U(Ge,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const _=function(w){const P=w.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(P)>=0?P:I.UNKNOWN}(p.status);a(new F(_,p.message))}else a(new F(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new F(I.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{U(Ge,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);U(Ge,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}vo(e,n,r){const s=Bc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=pO(),a=mO(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");U(Ge,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,p=!1;const _=new l1({co:w=>{p?U(Ge,`Not sending because RPC '${e}' stream ${s} is closed:`,w):(f||(U(Ge,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),U(Ge,`RPC '${e}' stream ${s} sending:`,w),h.send(w))},lo:()=>h.close()}),y=(w,P,k)=>{w.listen(P,$=>{try{k($)}catch(L){setTimeout(()=>{throw L},0)}})};return y(h,po.EventType.OPEN,()=>{p||U(Ge,`RPC '${e}' stream ${s} transport opened.`)}),y(h,po.EventType.CLOSE,()=>{p||(p=!0,U(Ge,`RPC '${e}' stream ${s} transport closed`),_.Ro())}),y(h,po.EventType.ERROR,w=>{p||(p=!0,is(Ge,`RPC '${e}' stream ${s} transport errored:`,w),_.Ro(new F(I.UNAVAILABLE,"The operation could not be completed")))}),y(h,po.EventType.MESSAGE,w=>{var P;if(!p){const k=w.data[0];ye(!!k);const $=k,L=$.error||((P=$[0])===null||P===void 0?void 0:P.error);if(L){U(Ge,`RPC '${e}' stream ${s} received error:`,L);const ge=L.status;let pe=function(_t){const nt=Pe[_t];if(nt!==void 0)return Ry(nt)}(ge),Ne=L.message;pe===void 0&&(pe=I.INTERNAL,Ne="Unknown error status: "+ge+" with message "+L.message),p=!0,_.Ro(new F(pe,Ne)),h.close()}else U(Ge,`RPC '${e}' stream ${s} received:`,k),_.Vo(k)}}),y(a,_O.STAT_EVENT,w=>{w.stat===Nd.PROXY?U(Ge,`RPC '${e}' stream ${s} detected buffering proxy`):w.stat===Nd.NOPROXY&&U(Ge,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Ao()},0),_}}function $c(){return typeof document<"u"?document:null}/**
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
 */function nc(t){return new Tk(t,!0)}/**
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
 */class My{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class Ly{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new My(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(yn(n.toString()),yn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new F(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class h1 extends Ly{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=Ak(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Yt(o.readTime):J.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Hl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Fl(c)?{documents:Sk(i,c)}:{query:Pk(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Py(i,o.resumeToken);const l=$l(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=ua(i,o.snapshotVersion.toTimestamp());const l=$l(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=Ok(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Hl(this.serializer),n.removeTarget=e,this.e_(n)}}class f1 extends Ly{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=bk(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.I_(r,n)}return ye(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Hl(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Rk(this.serializer,r))};this.e_(n)}}/**
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
 */class d1 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(I.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(I.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class p1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class m1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Rr(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=Z(c);l.C_.add(4),await Yi(l),l.M_.set("Unknown"),l.C_.delete(4),await rc(l)}(this))})}),this.M_=new p1(r,s)}}async function rc(t){if(Rr(t))for(const e of t.v_)await e(!0)}async function Yi(t){for(const e of t.v_)await e(!1)}function Fy(t,e){const n=Z(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Eh(n)?vh(n):Ss(n).Ho()&&yh(n,e))}function Uy(t,e){const n=Z(t),r=Ss(n);n.D_.delete(e),r.Ho()&&By(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Rr(n)&&n.M_.set("Unknown"))}function yh(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ss(t).u_(e)}function By(t,e){t.x_.Oe(e),Ss(t).c_(e)}function vh(t){t.x_=new _k({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ss(t).start(),t.M_.g_()}function Eh(t){return Rr(t)&&!Ss(t).jo()&&t.D_.size>0}function Rr(t){return Z(t).C_.size===0}function $y(t){t.x_=void 0}async function g1(t){t.D_.forEach((e,n)=>{yh(t,e)})}async function _1(t,e){$y(t),Eh(t)?(t.M_.w_(e),vh(t)):t.M_.set("Unknown")}async function y1(t,e,n){if(t.M_.set("Online"),e instanceof Sy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ha(t,r)}else if(e instanceof Vo?t.x_.$e(e):e instanceof by?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(J.min()))try{const r=await xy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.D_.get(l);u&&i.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.D_.get(c);if(!u)return;i.D_.set(c,u.withResumeToken(tt.EMPTY_BYTE_STRING,u.snapshotVersion)),By(i,c);const h=new xn(u.target,c,l,u.sequenceNumber);yh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await ha(t,r)}}async function ha(t,e,n){if(!Ki(e))throw e;t.C_.add(1),await Yi(t),t.M_.set("Offline"),n||(n=()=>xy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await rc(t)})}function jy(t,e){return e().catch(n=>ha(t,n,e))}async function sc(t){const e=Z(t),n=zn(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;v1(e);)try{const s=await r1(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,E1(e,s)}catch(s){await ha(e,s)}qy(e)&&Hy(e)}function v1(t){return Rr(t)&&t.b_.length<10}function E1(t,e){t.b_.push(e);const n=zn(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function qy(t){return Rr(t)&&!zn(t).jo()&&t.b_.length>0}function Hy(t){zn(t).start()}async function T1(t){zn(t).E_()}async function w1(t){const e=zn(t);for(const n of t.b_)e.P_(n.mutations)}async function I1(t,e,n){const r=t.b_.shift(),s=fh.from(r,e,n);await jy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await sc(t)}async function A1(t,e){e&&zn(t).h_&&await async function(r,s){if(function(o){return pk(o)&&o!==I.ABORTED}(s.code)){const i=r.b_.shift();zn(r).Yo(),await jy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await sc(r)}}(t,e),qy(t)&&Hy(t)}async function rp(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Rr(n);n.C_.add(3),await Yi(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await rc(n)}async function R1(t,e){const n=Z(t);e?(n.C_.delete(2),await rc(n)):e||(n.C_.add(2),await Yi(n),n.M_.set("Unknown"))}function Ss(t){return t.O_||(t.O_=function(n,r,s){const i=Z(n);return i.A_(),new h1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:g1.bind(null,t),Io:_1.bind(null,t),a_:y1.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Eh(t)?vh(t):t.M_.set("Unknown")):(await t.O_.stop(),$y(t))})),t.O_}function zn(t){return t.N_||(t.N_=function(n,r,s){const i=Z(n);return i.A_(),new f1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:T1.bind(null,t),Io:A1.bind(null,t),T_:w1.bind(null,t),I_:I1.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await sc(t)):(await t.N_.stop(),t.b_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class Th{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Th(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wh(t,e){if(yn("AsyncQueue",`${e}: ${t}`),Ki(t))return new F(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Jr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=qs(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new Jr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Jr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Jr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class sp{constructor(){this.B_=new Ae(q.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):K():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class us{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new us(e,n,Jr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class b1{constructor(){this.k_=void 0,this.listeners=[]}}class S1{constructor(){this.queries=new bs(e=>hy(e),Ya),this.onlineState="Unknown",this.q_=new Set}}async function zy(t,e){const n=Z(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new b1),s)try{i.k_=await n.onListen(r)}catch(o){const a=wh(o,`Initialization of query '${Mr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&Ih(n)}async function Wy(t,e){const n=Z(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function P1(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&Ih(n)}function C1(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Ih(t){t.q_.forEach(e=>{e.next()})}class Ky{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class Gy{constructor(e){this.key=e}}class Qy{constructor(e){this.key=e}}class O1{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=te(),this.mutatedKeys=te(),this._a=fy(e),this.aa=new Jr(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new sp,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),p=Xa(this.query,h)?h:null,_=!!f&&this.mutatedKeys.has(f.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;f&&p?f.data.isEqual(p.data)?_!==y&&(r.track({type:3,doc:p}),w=!0):this.ha(f,p)||(r.track({type:2,doc:p}),w=!0,(c&&this._a(p,c)>0||l&&this._a(p,l)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),w=!0):f&&!p&&(r.track({type:1,doc:f}),w=!0,(c||l)&&(a=!0)),w&&(p?(o=o.add(p),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(p,_){const y=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return y(p)-y(_)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],c=this.oa.size===0&&this.current&&!s?1:0,l=c!==this.sa;return this.sa=c,o.length!==0||l?{snapshot:new us(this.query,e.aa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new sp,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=te(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new Qy(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new Gy(r))}),n}da(e){this.ia=e.ls,this.oa=te();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return us.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class k1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class N1{constructor(e){this.key=e,this.Ra=!1}}class D1{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new bs(a=>hy(a),Ya),this.fa=new Map,this.ga=new Set,this.pa=new Ae(q.comparator),this.ya=new Map,this.wa=new mh,this.Sa={},this.ba=new Map,this.Da=ls.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function V1(t,e){const n=H1(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await s1(n.localStore,Jt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await x1(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Fy(n.remoteStore,o)}return s}async function x1(t,e,n,r,s){t.va=(h,f,p)=>async function(y,w,P,k){let $=w.view.ca(P);$.Zi&&($=await ep(y.localStore,w.query,!1).then(({documents:Ne})=>w.view.ca(Ne,$)));const L=k&&k.targetChanges.get(w.targetId),ge=k&&k.targetMismatches.get(w.targetId)!=null,pe=w.view.applyChanges($,y.isPrimaryClient,L,ge);return op(y,w.targetId,pe.Ta),pe.snapshot}(t,h,f,p);const i=await ep(t.localStore,e,!0),o=new O1(e,i.ls),a=o.ca(i.documents),c=Ji.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);op(t,n,l.Ta);const u=new k1(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function M1(t,e){const n=Z(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!Ya(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await zl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Uy(n.remoteStore,r.targetId),Wl(n,r.targetId)}).catch(Wi)):(Wl(n,r.targetId),await zl(n.localStore,r.targetId,!0))}async function L1(t,e,n){const r=z1(t);try{const s=await function(o,a){const c=Z(o),l=Ve.now(),u=a.reduce((p,_)=>p.add(_.key),te());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let _=vn(),y=te();return c.ss.getEntries(p,u).next(w=>{_=w,_.forEach((P,k)=>{k.isValidDocument()||(y=y.add(P))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,_)).next(w=>{h=w;const P=[];for(const k of a){const $=lk(k,h.get(k.key).overlayedDocument);$!=null&&P.push(new Ar(k.key,$,ry($.value.mapValue),dn.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,P,a)}).next(w=>{f=w;const P=w.applyToLocalDocumentSet(h,y);return c.documentOverlayCache.saveOverlays(p,w.batchId,P)})}).then(()=>({batchId:f.batchId,changes:py(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new Ae(oe)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Xi(r,s.changes),await sc(r.remoteStore)}catch(s){const i=wh(s,"Failed to persist write");n.reject(i)}}async function Jy(t,e){const n=Z(t);try{const r=await t1(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?ye(o.Ra):s.removedDocuments.size>0&&(ye(o.Ra),o.Ra=!1))}),await Xi(n,r,e)}catch(r){await Wi(r)}}function ip(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=Z(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.listeners)f.Q_(a)&&(l=!0)}),l&&Ih(c)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function F1(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new Ae(q.comparator);o=o.insert(i,Je.newNoDocument(i,J.min()));const a=te().add(i),c=new tc(J.min(),new Map,new Ae(oe),o,a);await Jy(r,c),r.pa=r.pa.remove(i),r.ya.delete(e),Ah(r)}else await zl(r.localStore,e,!1).then(()=>Wl(r,e,n)).catch(Wi)}async function U1(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await e1(n.localStore,e);Xy(n,r,null),Yy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xi(n,s)}catch(s){await Wi(s)}}async function B1(t,e,n){const r=Z(t);try{const s=await function(o,a){const c=Z(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(ye(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Xy(r,e,n),Yy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xi(r,s)}catch(s){await Wi(s)}}function Yy(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function Xy(t,e,n){const r=Z(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function Wl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||Zy(t,r)})}function Zy(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(Uy(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Ah(t))}function op(t,e,n){for(const r of n)r instanceof Gy?(t.wa.addReference(r.key,e),$1(t,r)):r instanceof Qy?(U("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||Zy(t,r.key)):K()}function $1(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(U("SyncEngine","New document in limbo: "+n),t.ga.add(r),Ah(t))}function Ah(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new q(Te.fromString(e)),r=t.Da.next();t.ya.set(r,new N1(n)),t.pa=t.pa.insert(n,r),Fy(t.remoteStore,new xn(Jt(hh(n.path)),r,"TargetPurposeLimboResolution",ih._e))}}async function Xi(t,e,n){const r=Z(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=_h.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(c,l){const u=Z(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>b.forEach(l,f=>b.forEach(f.ki,p=>u.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>b.forEach(f.qi,p=>u.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!Ki(h))throw h;U("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const p=u.ts.get(f),_=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(_);u.ts=u.ts.insert(f,y)}}}(r.localStore,i))}async function j1(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await Vy(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(c=>{c.reject(new F(I.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xi(n,r._s)}}function q1(t,e){const n=Z(t),r=n.ya.get(e);if(r&&r.Ra)return te().add(r.key);{let s=te();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function H1(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=q1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=F1.bind(null,e),e.Va.a_=P1.bind(null,e.eventManager),e.Va.Fa=C1.bind(null,e.eventManager),e}function z1(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=U1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=B1.bind(null,e),e}class ap{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=nc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Zk(this.persistence,new Yk,e.initialUser,this.serializer)}createPersistence(e){return new Gk(gh.jr,this.serializer)}createSharedClientState(e){return new o1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class W1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ip(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=j1.bind(null,this.syncEngine),await R1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new S1}()}createDatastore(e){const n=nc(e.databaseInfo.databaseId),r=function(i){return new u1(i)}(e.databaseInfo);return function(i,o,a,c){return new d1(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new m1(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ip(this.syncEngine,n,0),function(){return np.D()?new np:new a1}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new D1(s,i,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);U("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Yi(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class ev{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):yn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class K1{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Qe.UNAUTHENTICATED,this.clientId=ey.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jc(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Vy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function cp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Q1(t);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>rp(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>rp(e.remoteStore,i)),t._onlineComponents=e}function G1(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Q1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await jc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!G1(n))throw n;is("Error using user provided cache. Falling back to memory cache: "+n),await jc(t,new ap)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await jc(t,new ap);return t._offlineComponents}async function tv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await cp(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await cp(t,new W1))),t._onlineComponents}function J1(t){return tv(t).then(e=>e.syncEngine)}async function nv(t){const e=await tv(t),n=e.eventManager;return n.onListen=V1.bind(null,e.syncEngine),n.onUnlisten=M1.bind(null,e.syncEngine),n}function Y1(t,e,n={}){const r=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new ev({next:f=>{o.enqueueAndForget(()=>Wy(i,h));const p=f.docs.has(a);!p&&f.fromCache?l.reject(new F(I.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&f.fromCache&&c&&c.source==="server"?l.reject(new F(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Ky(hh(a.path),u,{includeMetadataChanges:!0,J_:!0});return zy(i,h)}(await nv(t),t.asyncQueue,e,n,r)),r.promise}function X1(t,e,n={}){const r=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new ev({next:f=>{o.enqueueAndForget(()=>Wy(i,h)),f.fromCache&&c.source==="server"?l.reject(new F(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Ky(a,u,{includeMetadataChanges:!0,J_:!0});return zy(i,h)}(await nv(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function rv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const lp=new Map;/**
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
 */function sv(t,e,n){if(!n)throw new F(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Z1(t,e,n,r){if(e===!0&&r===!0)throw new F(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function up(t){if(!q.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hp(t){if(q.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ic(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Tr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ic(t);throw new F(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class fp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Z1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new EO;switch(r.type){case"firstParty":return new AO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=lp.get(n);r&&(U("ComponentProvider","Removing Datastore"),lp.delete(n),r.terminate())}(this),Promise.resolve()}}function eN(t,e,n,r={}){var s;const i=(t=Tr(t,oc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Qe.MOCK_USER;else{a=oR(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new F(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Qe(l)}t._authCredentials=new TO(new Z_(a,c))}}/**
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
 */class Ps{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ps(this.firestore,e,this._query)}}class at{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}}class $n extends Ps{constructor(e,n,r){super(e,n,hh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new q(e))}withConverter(e){return new $n(this.firestore,e,this._path)}}function tN(t,e,...n){if(t=ut(t),sv("collection","path",e),t instanceof oc){const r=Te.fromString(e,...n);return hp(r),new $n(t,null,r)}{if(!(t instanceof at||t instanceof $n))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return hp(r),new $n(t.firestore,null,r)}}function qc(t,e,...n){if(t=ut(t),arguments.length===1&&(e=ey.newId()),sv("doc","path",e),t instanceof oc){const r=Te.fromString(e,...n);return up(r),new at(t,null,new q(r))}{if(!(t instanceof at||t instanceof $n))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return up(r),new at(t.firestore,t instanceof $n?t.converter:null,new q(r))}}/**
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
 */class nN{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new My(this,"async_queue_retry"),this.iu=()=>{const n=$c();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=$c();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=$c();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new fn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Ki(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw yn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=Th.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&K()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class ac extends oc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new nN}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||iv(this),this._firestoreClient.terminate()}}function rN(t,e){const n=typeof t=="object"?t:dg(),r=typeof t=="string"?t:e||"(default)",s=Ru(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=sR("firestore");i&&eN(s,...i)}return s}function Rh(t){return t._firestoreClient||iv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function iv(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new MO(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,rv(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new K1(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hs(tt.fromBase64String(e))}catch(n){throw new F(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hs(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class bh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ov{constructor(e){this._methodName=e}}/**
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
 */class Sh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const sN=/^__.*__$/;class iN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qi(e,this.data,n,this.fieldTransforms)}}function av(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Ph{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Ph(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return fa(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(av(this.Iu)&&sN.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class oN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nc(e)}pu(e,n,r,s=!1){return new Ph({Iu:e,methodName:n,gu:r,path:qe.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cv(t){const e=t._freezeSettings(),n=nc(t._databaseId);return new oN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function aN(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);hv("Data must be an object, but it was:",o,r);const a=lv(r,o);let c,l;if(i.merge)c=new Pt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=lN(e,h,n);if(!o.contains(f))throw new F(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);hN(u,f)||u.push(f)}c=new Pt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new iN(new Et(a),c,l)}function cN(t,e,n,r=!1){return Ch(n,t.pu(r?4:3,e))}function Ch(t,e){if(uv(t=ut(t)))return hv("Unsupported field value:",e,t),lv(t,e);if(t instanceof ov)return function(r,s){if(!av(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Ch(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ve.fromDate(r);return{timestampValue:ua(s.serializer,i)}}if(r instanceof Ve){const i=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ua(s.serializer,i)}}if(r instanceof Sh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hs)return{bytesValue:Py(s.serializer,r._byteString)};if(r instanceof at){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ph(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${ic(r)}`)}(t,e)}function lv(t,e){const n={};return ty(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rs(t,(r,s)=>{const i=Ch(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function uv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Sh||t instanceof hs||t instanceof at||t instanceof ov)}function hv(t,e,n){if(!uv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ic(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function lN(t,e,n){if((e=ut(e))instanceof bh)return e._internalPath;if(typeof e=="string")return fv(t,e);throw fa("Field path arguments must be of type string or ",t,!1,void 0,n)}const uN=new RegExp("[~\\*/\\[\\]]");function fv(t,e,n){if(e.search(uN)>=0)throw fa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bh(...e.split("."))._internalPath}catch{throw fa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new F(I.INVALID_ARGUMENT,a+t+c)}function hN(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class dv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Oh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fN extends dv{data(){return super.data()}}function Oh(t,e){return typeof e=="string"?fv(t,e):e instanceof bh?e._internalPath:e._delegate._internalPath}/**
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
 */function dN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kh{}class pN extends kh{}function mN(t,e,...n){let r=[];e instanceof kh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Nh).length,a=i.filter(c=>c instanceof cc).length;if(o>1||o>0&&a>0)throw new F(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class cc extends pN{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new cc(e,n,r)}_apply(e){const n=this._parse(e);return pv(e._query,n),new Ps(e.firestore,e.converter,Ul(e._query,n))}_parse(e){const n=cv(e.firestore);return function(i,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new F(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){pp(h,u);const p=[];for(const _ of h)p.push(dp(c,i,_));f={arrayValue:{values:p}}}else f=dp(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||pp(h,u),f=cN(a,o,h,u==="in"||u==="not-in");return Oe.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function gN(t,e,n){const r=e,s=Oh("where",t);return cc._create(s,r,n)}class Nh extends kh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Nh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Dt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)pv(o,c),o=Ul(o,c)}(e._query,n),new Ps(e.firestore,e.converter,Ul(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function dp(t,e,n){if(typeof(n=ut(n))=="string"){if(n==="")throw new F(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uy(e)&&n.indexOf("/")!==-1)throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!q.isDocumentKey(r))throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ld(t,new q(r))}if(n instanceof at)return Ld(t,n._key);throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ic(n)}.`)}function pp(t,e){if(!Array.isArray(t)||t.length===0)throw new F(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pv(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class _N{convertValue(e,n="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Sh(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ah(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ri(e));default:return null}}convertTimestamp(e){const n=Hn(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);ye(Dy(r));const s=new bi(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(n)||yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function yN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mv extends dv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Oh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class xo extends mv{data(e={}){return super.data(e)}}class vN{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new zs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xo(this._firestore,this._userDataWriter,r.key,r,new zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new xo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new zs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new xo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new zs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:EN(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function EN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function TN(t){t=Tr(t,at);const e=Tr(t.firestore,ac);return Y1(Rh(e),t._key).then(n=>AN(e,t,n))}class gv extends _N{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function wN(t){t=Tr(t,Ps);const e=Tr(t.firestore,ac),n=Rh(e),r=new gv(e);return dN(t._query),X1(n,t._query).then(s=>new vN(e,r,t,s))}function mp(t,e,n){t=Tr(t,at);const r=Tr(t.firestore,ac),s=yN(t.converter,e,n);return IN(r,[aN(cv(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,dn.none())])}function IN(t,e){return function(r,s){const i=new fn;return r.asyncQueue.enqueueAndForget(async()=>L1(await J1(r),s,i)),i.promise}(Rh(t),e)}function AN(t,e,n){const r=n.docs.get(e._key),s=new gv(t);return new mv(t,s,e._key,r,new zs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){As=s})(vs),rs(new mr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ac(new wO(r.getProvider("auth-internal")),new bO(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new F(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Bn(Dd,"4.4.0",e),Bn(Dd,"4.4.0","esm2017")})();const RN={apiKey:"AIzaSyBTzruuQgnPK8WbDK8yGTw3o0auq6DMzY4",authDomain:"mdk-project-6f0be.firebaseapp.com",projectId:"mdk-project-6f0be",storageBucket:"mdk-project-6f0be.appspot.com",messagingSenderId:"603751628890",appId:"1:603751628890:web:1de66c0d78c179a64c5863"},bN=fg(RN),rn=US(bN),yo=rN(),SN={name:"v-profile",components:{vCatalogItem:Qg},data(){return{user_info:[],haveDiaplayName:!0,profile_products:[]}},computed:_s(["user","saved_drinks","products"]),methods:{addToCart(t){this.$store.dispatch("addToCart",t)},addToProfile(t){this.$store.dispatch("addToProfile",t)},deleteFromProfile(t){this.$store.dispatch("deleteFromProfile",t)},async createUser(){this.user!=null&&((await TN(qc(yo,"personal-dataset",this.user.email))).exists()||await mp(qc(yo,"personal-dataset",this.user.email),{name:"Лучший клиент",email:this.user.email,saved_drinks_id:[]}))},async getUserInfo(){if(this.user!=null){(await wN(mN(tN(yo,"personal-dataset"),gN("email","==",this.user.email)))).forEach(n=>{this.user_info=n.data()});let e=this.user_info.saved_drinks_id;console.log(e);for(let n=0;n<e.length;n++)this.$store.dispatch("addToProfile",e[n])}},async sendChangesToDb(){this.user!=null&&await mp(qc(yo,"personal-dataset",this.user.email),{saved_drinks_id:this.saved_drinks},{merge:!0})},consistProfileCatalog(){this.products.forEach(t=>{this.saved_drinks.includes(t.id)?t.filter=!0:t.filter=!1}),this.profile_products=this.products}},created(){this.createUser(),this.getUserInfo(),this.consistProfileCatalog()},updated(){this.sendChangesToDb()},mounted(){this.$store.dispatch("loadProducts")}},PN={class:"v-profile"},CN={class:"user-info"},ON=C("h2",null,"Ваши любимые товары:",-1);function kN(t,e,n,r,s,i){const o=pn("v-catalog-item");return ae(),we("div",PN,[C("div",CN,[C("p",null,"Name: "+De(s.user_info.name),1),C("p",null,"Email: "+De(s.user_info.email),1),ON]),(ae(!0),we(pt,null,Uo(s.profile_products,a=>(ae(),pr(o,{class:"favorite-products",key:a.id,product_data:a,onAddToCart:i.addToCart,onAddToProfile:i.addToProfile,onDeleteFromProfile:c=>i.deleteFromProfile(a.id)},null,8,["product_data","onAddToCart","onAddToProfile","onDeleteFromProfile"]))),128))])}const NN=xt(SN,[["render",kN]]),DN=[{path:"/",name:"Home",component:zS,meta:{requiresAuth:!0}},{path:"/catalog",name:"Catalog",component:_P,meta:{requiresAuth:!0}},{path:"/cart",name:"Cart",component:zP,props:!0,meta:{requiresAuth:!0}},{path:"/craft",name:"Craft",component:YP,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:hC,meta:{requiresAuth:!0}},{path:"/profile",name:"Profile",component:NN,meta:{requiresAuth:!0}}],VN=QA({history:hA(),routes:DN,linkActiveClass:"active"}),Vn=VN,xN=ow({state:{products:[],cart:[],user:null,saved_drinks:[]},mutations:{SET_PRODUCTS:(t,e)=>{t.products=e},SET_CART:(t,e)=>{if(t.cart.length>0){let n=!1;t.cart.map(function(r){r.id===e.id&&(n=!0,r.count++)}),n||t.cart.push(e)}else t.cart.push(e)},REMOVE_FROM_CART:(t,e)=>{t.cart.splice(e,1)},SET_USER(t,e){t.user=e},CLEAR_USER(t){t.user=null},SET_SAVE_DRINKS(t,e){t.saved_drinks.includes(e)||t.saved_drinks.push(e)},REMOVE_FROM_PROFILE:(t,e)=>{let n=t.saved_drinks.indexOf(e);console.log("mutation index:",n),t.saved_drinks.splice(n,1),console.log("slice")}},actions:{loadProducts({commit:t}){KI.get("http://localhost:3000/products").then(e=>e.data).then(e=>{t("SET_PRODUCTS",e)})},addToCart({commit:t},e){e.count=1,e.add="add",t("SET_CART",e)},deleteFromCart({commit:t},e){t("REMOVE_FROM_CART",e)},async login({commit:t},e){const{email:n,password:r}=e;try{await Rb(rn,n,r)}catch(s){switch(s.code){case"auth/user-not-found":console.log("User not found");break;case"auth/wrong-password":console.log("Wrong password");break}return}t("SET_USER",rn.currentUser),Vn.push("/")},async register({commit:t},e){const{email:n,password:r}=e;try{await Ab(rn,n,r)}catch(s){switch(s.code){case"auth/email-already-in-use":alert("Email already in use");break;case"auth/invalid-email":alert("Invalid email");break;case"auth/operation-not-allowed":alert("Operation not allowed");break;case"auth/week-password":alert("Week password");break}return}t("SET_USER",rn.currentUser),Vn.push("/")},async logout({commit:t}){await Pb(rn),t("SET_USER",null),Vn.push("/")},async signInWithGoogle({commit:t}){const e=new on;await hd(rn,e).then(()=>{t("SET_USER",rn.currentUser),Vn.push("/")}).catch(n=>{})},async signInWithApple({commit:t}){const e=new Xs;await hd(rn,e).then(()=>{t("SET_USER",rn.currentUser),Vn.push("/")}).catch(n=>{})},addToProfile({commit:t},e){t("SET_SAVE_DRINKS",e)},deleteFromProfile({commit:t},e){console.log("action:",e),t("REMOVE_FROM_PROFILE",e)}}});VT(Cw).use(xN).use(Vn).mount("#app");
