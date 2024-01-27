/****************************************************************************/
         /*/Applications/MAMP/htdocs/thechange/web/app/themes/thechange/js/vendor/fancy-cursor.js */
         /***************************************************************************/
         /* if user is using a touchscreen, disable fancy cursor */
window.addEventListener('touchstart', function () {
    window.removeEventListener('mousemove', fancyCursor);
    jQuery('.fancy-cursor').addClass('disabled');
 });
 
 /* Triggers for the fancy cursor */
 window.addEventListener('mousemove', fancyCursor);
 
 function fancyCursor(e) {
 
    var mouseY = e.clientY;
    var mouseX = e.clientX;
 
    var $this = jQuery(e.target);
    var $cursor = jQuery('.fancy-cursor');
 
    var cursor = window.getComputedStyle(e.target)["cursor"];
    /* when cursor is set to none, check for custom cursor */
    if (cursor == 'none') {
      let $closest = $this.closest("*[data-cursor]");
      let $cursorClass = $closest.attr('data-cursor');
      $cursor.attr('class', 'fancy-cursor');
      $cursor.addClass($cursorClass);
    }else{
      $cursor.attr('class', 'fancy-cursor');
    }
 
    /* Check if target needs fancy cursor */
    $cursor.css('transform', 'translate3d(' + mouseX + 'px, ' + mouseY + 'px, 0)');
 }/****************************************************************************/
         /*/Applications/MAMP/htdocs/thechange/web/app/themes/thechange/js/vendor/gsap.min.js */
         /***************************************************************************/
         /*!
 * GSAP 3.12.2
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t){return"string"==typeof t}function s(t){return"function"==typeof t}function t(t){return"number"==typeof t}function u(t){return void 0===t}function v(t){return"object"==typeof t}function w(t){return!1!==t}function x(){return"undefined"!=typeof window}function y(t){return s(t)||r(t)}function P(t){return(i=yt(t,ot))&&Ee}function Q(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function R(t,e){return!e&&console.warn(t)}function S(t,e){return t&&(ot[t]=e)&&i&&(i[t]=e)||ot}function T(){return 0}function ea(t){var e,r,i=t[0];if(v(i)||s(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=gt.length;r--&&!gt[r].targetTest(i););e=gt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Vt(t[r],e)))||t.splice(r,1);return t}function fa(t){return t._gsap||ea(Ot(t))[0]._gsap}function ga(t,e,r){return(r=t[e])&&s(r)?t[e]():u(r)&&t.getAttribute&&t.getAttribute(e)||r}function ha(t,e){return(t=t.split(",")).forEach(e)||t}function ia(t){return Math.round(1e5*t)/1e5||0}function ja(t){return Math.round(1e7*t)/1e7||0}function ka(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),"+"===r?t+i:"-"===r?t-i:"*"===r?t*i:t/i}function la(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ma(){var t,e,r=ct.length,i=ct.slice(0);for(dt={},t=ct.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function na(t,e,r,i){ct.length&&!L&&ma(),t.render(e,r,i||L&&e<0&&(t._initted||t._startAt)),ct.length&&!L&&ma()}function oa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:r(t)?t.trim():t}function pa(t){return t}function qa(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ta(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=v(e[r])?ta(t[r]||(t[r]={}),e[r]):e[r]);return t}function ua(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function va(t){var e=t.parent||I,r=t.keyframes?function _setKeyframeDefaults(i){return function(t,e){for(var r in e)r in t||"duration"===r&&i||"ease"===r||(t[r]=e[r])}}($(t.keyframes)):qa;if(w(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t}function xa(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e}function ya(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function za(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0}function Aa(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function Ca(t,e,r,i){return t._startAt&&(L?t._startAt.revert(ht):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))}function Ea(t){return t._repeat?Tt(t._tTime,t=t.duration()+t._rDelay)*t:0}function Ga(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function Ha(t){return t._end=ja(t._start+(t._tDur/Math.abs(t._ts||t._rts||X)||0))}function Ia(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ja(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ha(t),r._dirty||Aa(r,t)),t}function Ja(t,e){var r;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(r=Ga(t.rawTime(),e),(!e._dur||kt(0,e.totalDuration(),r)-e._tTime>X)&&e.render(r,!0)),Aa(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-X}}function Ka(e,r,i,n){return r.parent&&za(r),r._start=ja((t(i)?i:i||e!==I?xt(e,i,r):e._time)+r._delay),r._end=ja(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),xa(e,r,"_first","_last",e._sort?"_start":0),bt(r)||(e._recent=r),n||Ja(e,r),e._ts<0&&Ia(e,e._tTime),e}function La(t,e){return(ot.ScrollTrigger||Q("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ma(t,e,r,i,n){return Gt(t,e,n),t._initted?!r&&t._pt&&!L&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Rt.frame?(ct.push(t),t._lazy=[n,i],1):void 0:1}function Ra(t,e,r,i){var n=t._repeat,a=ja(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ja(a*(n+1)+t._rDelay*n):a,0<s&&!i&&Ia(t,t._tTime=t._tDur*s),t.parent&&Ha(t),r||Aa(t.parent,t),t}function Sa(t){return t instanceof Xt?Aa(t):Ra(t,t._dur)}function Va(e,r,i){var n,a,s=t(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=w(a.vars.inherit)&&a.parent;u.immediateRender=w(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new Zt(r[0],u,r[1+o])}function Wa(t,e){return t||0===t?e(t):e}function Ya(t,e){return r(t)&&(e=st.exec(t))?e[1]:""}function _a(t,e){return t&&v(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&v(t[0]))&&!t.nodeType&&t!==h}function cb(r){return r=Ot(r)[0]||R("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return Ot(t,e.querySelectorAll?e:e===r?R("Invalid scope")||a.createElement("div"):r)}}function db(t){return t.sort(function(){return.5-Math.random()})}function eb(t){if(s(t))return t;var p=v(t)?t:{each:t},_=jt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,y={},e=0<m&&m<1,T=isNaN(m)||e,b=p.axis,w=m,x=m;return r(m)?w=x={center:.5,edges:.5,end:1}[m]||0:!e&&T&&(w=m[0],x=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,c=(r||p).length,d=y[c];if(!d){if(!(f="auto"===p.grid?0:(p.grid||[1,U])[1])){for(h=-U;h<(h=r[f++].getBoundingClientRect().left)&&f<c;);f--}for(d=y[c]=[],i=T?Math.min(f,c)*w-.5:m%f,n=f===U?0:T?c*x/f-.5:m/f|0,l=U,u=h=0;u<c;u++)a=u%f-i,s=n-(u/f|0),d[u]=o=b?Math.abs("y"===b?s:a):K(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&db(d),d.max=h-l,d.min=l,d.v=c=(parseFloat(p.amount)||parseFloat(p.each)*(c<f?c-1:b?"y"===b?c/f:f:Math.max(f,c/f))||0)*("edges"===m?-1:1),d.b=c<0?g-c:g,d.u=Ya(p.amount||p.each)||0,_=_&&c<0?Yt(_):_}return c=(d[t]-d.min)/d.max||0,ja(d.b+(_?_(c):c)*d.v)+d.u}}function fb(i){var n=Math.pow(10,((i+"").split(".")[1]||"").length);return function(e){var r=ja(Math.round(parseFloat(e)/i)*i*n);return(r-r%1)/n+(t(e)?0:Ya(e))}}function gb(h,e){var l,f,r=$(h);return!r&&v(h)&&(l=r=h.radius||U,h.values?(h=Ot(h.values),(f=!t(h[0]))&&(l*=l)):h=fb(h.increment)),Wa(e,r?s(h)?function(t){return f=h(t),Math.abs(f-t)<=l?f:t}:function(e){for(var r,i,n=parseFloat(f?e.x:e),a=parseFloat(f?e.y:0),s=U,o=0,u=h.length;u--;)(r=f?(r=h[u].x-n)*r+(i=h[u].y-a)*i:Math.abs(h[u]-n))<s&&(s=r,o=u);return o=!l||s<=l?h[o]:e,f||o===e||t(e)?o:o+Ya(e)}:fb(h))}function hb(t,e,r,i){return Wa($(t)?!e:!0===r?!!(r=0):!i,function(){return $(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function lb(e,r,t){return Wa(t,function(t){return e[~~r(t)]})}function ob(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+hb(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function rb(t,e,r){var i,n,a,s=t.labels,o=U;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function tb(t){return za(t),t.scrollTrigger&&t.scrollTrigger.kill(!!L),t.progress()<1&&At(t,"onInterrupt"),t}function wb(t){if(x()&&t){var e=(t=!t.name&&t.default||t).name,r=s(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:T,render:he,add:Qt,kill:ce,modifier:fe,rawVars:0},a={targetTest:0,get:0,getSetter:ne,aliases:{},register:0};if(Ft(),t!==i){if(pt[e])return;qa(i,qa(ua(t,n),a)),yt(i.prototype,yt(n,ua(t,a))),pt[i.prop=e]=i,t.targetTest&&(gt.push(i),ft[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}S(e,i),t.register&&t.register(Ee,i,_e)}else t&&Ct.push(t)}function zb(t,e,r){return(6*(t+=t<0?1:1<t?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*St+.5|0}function Ab(e,r,i){var n,a,s,o,u,h,l,f,c,d,p=e?t(e)?[e>>16,e>>8&St,e&St]:0:Et.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),Et[e])p=Et[e];else if("#"===e.charAt(0)){if(e.length<6&&(e="#"+(n=e.charAt(1))+n+(a=e.charAt(2))+a+(s=e.charAt(3))+s+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&St,p&St,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&St,e&St]}else if("hsl"===e.substr(0,3))if(p=d=e.match(tt),r){if(~e.indexOf("="))return p=e.match(et),i&&p.length<4&&(p[3]=1),p}else o=+p[0]%360/360,u=p[1]/100,n=2*(h=p[2]/100)-(a=h<=.5?h*(u+1):h+u-h*u),3<p.length&&(p[3]*=1),p[0]=zb(o+1/3,n,a),p[1]=zb(o,n,a),p[2]=zb(o-1/3,n,a);else p=e.match(tt)||Et.transparent;p=p.map(Number)}return r&&!d&&(n=p[0]/St,a=p[1]/St,s=p[2]/St,h=((l=Math.max(n,a,s))+(f=Math.min(n,a,s)))/2,l===f?o=u=0:(c=l-f,u=.5<h?c/(2-l-f):c/(l+f),o=l===n?(a-s)/c+(a<s?6:0):l===a?(s-n)/c+2:(n-a)/c+4,o*=60),p[0]=~~(o+.5),p[1]=~~(100*u+.5),p[2]=~~(100*h+.5)),i&&p.length<4&&(p[3]=1),p}function Bb(t){var r=[],i=[],n=-1;return t.split(Dt).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function Cb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Dt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=Ab(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=Bb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Dt,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Dt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function Fb(t){var e,r=t.join(" ");if(Dt.lastIndex=0,Dt.test(r))return e=zt.test(r),t[1]=Cb(t[1],e),t[0]=Cb(t[0],e,Bb(t[1])),!0}function Ob(t){var e=(t+"").split("("),r=Bt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(It,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(oa)):Bt._CE&&Lt.test(t)?Bt._CE("",t):r}function Qb(t,e){for(var r,i=t._first;i;)i instanceof Xt?Qb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Qb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Sb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ha(t,function(t){for(var e in Bt[t]=ot[t]=a,Bt[n=t.toLowerCase()]=r,a)Bt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Bt[t+"."+e]=a[e]}),a}function Tb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Ub(r,t,e){function Jm(t){return 1===t?1:i*Math.pow(2,-10*t)*H((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/N*(Math.asin(1/i)||0),s="out"===r?Jm:"in"===r?function(t){return 1-Jm(1-t)}:Tb(Jm);return n=N/n,s.config=function(t,e){return Ub(r,t,e)},s}function Vb(e,r){function Rm(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Rm:"in"===e?function(t){return 1-Rm(1-t)}:Tb(Rm);return t.config=function(t){return Vb(e,t)},t}var B,L,l,I,h,n,a,i,o,f,c,d,p,_,m,g,b,k,M,O,A,C,E,D,z,F,Y,j,q={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},V={duration:.5,overwrite:!1,delay:0},U=1e8,X=1/U,N=2*Math.PI,W=N/4,G=0,K=Math.sqrt,J=Math.cos,H=Math.sin,Z="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},$=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot={},ut={suppressEvents:!0,isStart:!0,kill:!1},ht={suppressEvents:!0,kill:!1},lt={suppressEvents:!0},ft={},ct=[],dt={},pt={},_t={},mt=30,gt=[],vt="",yt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},Tt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},bt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},wt={_start:0,endTime:T,totalDuration:T},xt=function _parsePosition(t,e,i){var n,a,s,o=t.labels,u=t._recent||wt,h=t.duration()>=U?u.endTime(!1):t._dur;return r(e)&&(isNaN(e)||e in o)?(a=e.charAt(0),s="%"===e.substr(-1),n=e.indexOf("="),"<"===a||">"===a?(0<=n&&(e=e.replace(/=/,"")),("<"===a?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(s?(n<0?u:i).totalDuration()/100:1)):n<0?(e in o||(o[e]=h),o[e]):(a=parseFloat(e.charAt(n-1)+e.substr(n+1)),s&&i&&(a=a/100*($(i)?i[0]:i).totalDuration()),1<n?_parsePosition(t,e.substr(0,n-1),i)+a:h+a)):null==e?h:+e},kt=function _clamp(t,e,r){return r<t?t:e<r?e:r},Mt=[].slice,Ot=function toArray(t,e,i){return l&&!e&&l.selector?l.selector(t):!r(t)||i||!n&&Ft()?$(t)?function _flatten(t,e,i){return void 0===i&&(i=[]),t.forEach(function(t){return r(t)&&!e||_a(t,1)?i.push.apply(i,Ot(t)):i.push(t)})||i}(t,i):_a(t)?Mt.call(t,0):t?[t]:[]:Mt.call((e||a).querySelectorAll(t),0)},Pt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Wa(n,function(t){return r+((t-e)/a*s||0)})},At=function _callback(t,e,r){var i,n,a,s=t.vars,o=s[e],u=l,h=t._ctx;if(o)return i=s[e+"Params"],n=s.callbackScope||t,r&&ct.length&&ma(),h&&(l=h),a=i?o.apply(n,i):o.call(n),l=u,a},Ct=[],St=255,Et={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},Dt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in Et)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),zt=/hsl[a]?\(/,Rt=(M=Date.now,O=500,A=33,C=M(),E=C,z=D=1e3/240,g={time:0,frame:0,tick:function tick(){yl(!0)},deltaRatio:function deltaRatio(t){return b/(1e3/(t||60))},wake:function wake(){o&&(!n&&x()&&(h=n=window,a=h.document||{},ot.gsap=Ee,(h.gsapVersions||(h.gsapVersions=[])).push(Ee.version),P(i||h.GreenSockGlobals||!h.gsap&&h||{}),m=h.requestAnimationFrame,Ct.forEach(wb)),p&&g.sleep(),_=m||function(t){return setTimeout(t,z-1e3*g.time+1|0)},d=1,yl(2))},sleep:function sleep(){(m?h.cancelAnimationFrame:clearTimeout)(p),d=0,_=T},lagSmoothing:function lagSmoothing(t,e){O=t||1/0,A=Math.min(e||33,O)},fps:function fps(t){D=1e3/(t||240),z=1e3*g.time+D},add:function add(n,t,e){var a=t?function(t,e,r,i){n(t,e,r,i),g.remove(a)}:n;return g.remove(n),F[e?"unshift":"push"](a),Ft(),a},remove:function remove(t,e){~(e=F.indexOf(t))&&F.splice(e,1)&&e<=k&&k--},_listeners:F=[]}),Ft=function _wake(){return!d&&Rt.wake()},Bt={},Lt=/^[\d.\-M][\d.\-,\s]/,It=/["']/g,Yt=function _invertEase(e){return function(t){return 1-e(1-t)}},jt=function _parseEase(t,e){return t&&(s(t)?t:Bt[t]||Ob(t))||e};function yl(t){var e,r,i,n,a=M()-E,s=!0===t;if(O<a&&(C+=a-A),(0<(e=(i=(E+=a)-C)-z)||s)&&(n=++g.frame,b=i-1e3*g.time,g.time=i/=1e3,z+=e+(D<=e?4:D-e),r=1),s||(p=_(yl)),r)for(k=0;k<F.length;k++)F[k](i,b,n,t)}function gn(t){return t<j?Y*t*t:t<.7272727272727273?Y*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?Y*(t-=2.25/2.75)*t+.9375:Y*Math.pow(t-2.625/2.75,2)+.984375}ha("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Sb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Bt.Linear.easeNone=Bt.none=Bt.Linear.easeIn,Sb("Elastic",Ub("in"),Ub("out"),Ub()),Y=7.5625,j=1/2.75,Sb("Bounce",function(t){return 1-gn(1-t)},gn),Sb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Sb("Circ",function(t){return-(K(1-t*t)-1)}),Sb("Sine",function(t){return 1===t?1:1-J(t*W)}),Sb("Back",Vb("in"),Vb("out"),Vb()),Bt.SteppedEase=Bt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*kt(0,.99999999,t)|0)+n)*r}}},V.ease=Bt["quad.out"],ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return vt+=t+","+t+"Params,"});var qt,Vt=function GSCache(t,e){this.id=G++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:ga,this.set=e?e.getSetter:ne},Ut=((qt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},qt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},qt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ra(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},qt.totalTime=function totalTime(t,e){if(Ft(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ia(this,t),!r._dp||r.parent||Ja(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ka(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===X||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),na(this,t,e)),this},qt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Ea(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},qt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},qt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Ea(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},qt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?Tt(this._tTime,r)+1:1},qt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-X?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?Ga(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-X?0:this._rts,this.totalTime(kt(-Math.abs(this._delay),this._tDur,e),!0),Ha(this),function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this)},qt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ft(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==X&&(this._tTime-=X)))),this):this._ps},qt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ka(e,this,t-this._delay),this}return this._start},qt.endTime=function endTime(t){return this._start+(w(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},qt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ga(e.rawTime(t),this):this._tTime:this._tTime},qt.revert=function revert(t){void 0===t&&(t=lt);var e=L;return L=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),L=e,this},qt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(t):r},qt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Sa(this)):-2===this._repeat?1/0:this._repeat},qt.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Sa(this),e?this.time(e):this}return this._rDelay},qt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},qt.seek=function seek(t,e){return this.totalTime(xt(this,t),w(e))},qt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,w(e))},qt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},qt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},qt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},qt.resume=function resume(){return this.paused(!1)},qt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-X:0)),this):this._rts<0},qt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-X,this},qt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-X))},qt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},qt.then=function then(t){var i=this;return new Promise(function(e){function Bo(){var t=i.then;i.then=null,s(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=s(t)?t:pa;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Bo():i._prom=Bo})},qt.kill=function kill(){tb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ra(this,+t.duration,1,1),this.data=t.data,l&&(this._ctx=l).data.push(this),d||Rt.wake()}qa(Ut.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-X,_prom:0,_ps:!1,_rts:1});var Xt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=w(t.sortChildren),I&&Ka(t.parent||I,_assertThisInitialized(r),e),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&La(_assertThisInitialized(r),t.scrollTrigger),r}_inheritsLoose(Timeline,i);var e=Timeline.prototype;return e.to=function to(t,e,r){return Va(0,arguments,this),this},e.from=function from(t,e,r){return Va(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Va(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,va(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Zt(t,e,xt(this,r),1),this},e.call=function call(t,e,r){return Ka(this,Zt.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Zt(t,r,xt(this,n)),this},e.staggerFrom=function staggerFrom(t,e,r,i,n,a,s){return r.runBackwards=1,va(r).immediateRender=w(r.immediateRender),this.staggerTo(t,e,r,i,n,a,s)},e.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,s,o){return i.startAt=r,va(i).immediateRender=w(i.immediateRender),this.staggerTo(t,e,i,n,a,s,o)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,c,d,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:ja(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==I&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(d=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ja(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),c=Tt(this._tTime,o),!_&&this._tTime&&c!==s&&this._tTime-c*o-this._dur<=0&&(c=s),d&&1&s&&(i=g-i,p=1),s!==c&&!this._lock){var T=d&&1&c,b=T===(d&&1&s);if(s<c&&(T=!T),_=T?0:v%g?g:v,this._lock=1,this.render(_||(p?0:ja(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&At(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,b&&(this._lock=2,_=T?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Qb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ja(_),ja(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&!s&&(At(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-X);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r||L&&(n._initted||n._startAt)),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-X:X);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-X)._zTime=_<=i?1:-1,this._ts))return this._start=f,Ha(this),this.render(t,e,r);this._onUpdate&&!e&&At(this,"onUpdate",!0),(v===m&&this._tTime>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||za(this,1),e||t<0&&!_||!v&&!_&&m||(At(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(e,i){var n=this;if(t(i)||(i=xt(this,i,e)),!(e instanceof Ut)){if($(e))return e.forEach(function(t){return n.add(t,i)}),this;if(r(e))return this.addLabel(e,i);if(!s(e))return this;e=Zt.delayedCall(0,e)}return this!==e?Ka(this,e,i):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-U);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Zt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return r(t)?this.removeLabel(t):s(t)?this.killTweensOf(t):(ya(this,t),t===this._recent&&(this._recent=this._last),Aa(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ja(Rt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=xt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Zt.delayedCall(0,e||T,r);return i.data="isPause",this._hasPause=1,Ka(this,i,xt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=xt(this,t);e;)e._start===t&&"isPause"===e.data&&za(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Nt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(e,r){for(var i,n=[],a=Ot(e),s=this._first,o=t(r);s;)s instanceof Zt?la(s._targets,a)&&(o?(!Nt||s._initted&&s._ts)&&s.globalTime(0)<=r&&s.globalTime(s.totalDuration())>r:!r||s.isActive())&&n.push(s):(i=s.getTweensOf(a,r)).length&&n.push.apply(n,i),s=s._next;return n},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=xt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=Zt.to(i,qa({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||X,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ra(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,qa({startAt:{time:xt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+X)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return Aa(this)},e.invalidate=function invalidate(t){var e=this._first;for(this._lock=0;e;)e.invalidate(t),e=e._next;return i.prototype.invalidate.call(this,t)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),Aa(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=U;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ka(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ra(a,a===I&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(I._ts&&(na(I,Ga(t,I)),f=Rt.frame),Rt.frame>=mt){mt+=q.autoSleep||120;var e=I._first;if((!e||!e._ts)&&q.autoSleep&&Rt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Rt.sleep()}}},Timeline}(Ut);qa(Xt.prototype,{_lock:0,_hasPause:0,_forcing:0});function ac(t,e,i,n,a,o){var u,h,l,f;if(pt[t]&&!1!==(u=new pt[t]).init(a,u.rawVars?e[t]:function _processVars(t,e,i,n,a){if(s(t)&&(t=Kt(t,a,e,i,n)),!v(t)||t.style&&t.nodeType||$(t)||Z(t))return r(t)?Kt(t,a,e,i,n):t;var o,u={};for(o in t)u[o]=Kt(t[o],a,e,i,n);return u}(e[t],n,a,o,i),i,n,o)&&(i._pt=h=new _e(i._pt,a,t,0,1,u.render,u,0,u.priority),i!==c))for(l=i._ptLookup[i._targets.indexOf(a)],f=u._props.length;f--;)l[u._props[f]]=h;return u}function gc(t,r,e,i){var n,a,s=r.ease||i||"power1.inOut";if($(r))a=e[t]||(e[t]=[]),r.forEach(function(t,e){return a.push({t:e/(r.length-1)*100,v:t,e:s})});else for(n in r)a=e[n]||(e[n]=[]),"ease"===n||a.push({t:parseFloat(t),v:r[n],e:s})}var Nt,Wt,Qt=function _addPropTween(t,e,i,n,a,o,u,h,l,f){s(n)&&(n=n(a||0,t,o));var c,d=t[e],p="get"!==i?i:s(d)?l?t[e.indexOf("set")||!s(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,_=s(d)?l?re:te:$t;if(r(n)&&(~n.indexOf("random(")&&(n=ob(n)),"="===n.charAt(1)&&(!(c=ka(p,n)+(Ya(p)||0))&&0!==c||(n=c))),!f||p!==n||Wt)return isNaN(p*n)||""===n?(d||e in t||Q(e,n),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,c,d,p,_=new _e(this._pt,t,e,0,1,ue,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(d=~(i+="").indexOf("random("))&&(i=ob(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(c=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:c,c:"="===l.charAt(1)?ka(c,l)-c:parseFloat(l)-c,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||d)&&(_.e=0),this._pt=_}.call(this,t,e,p,n,_,h||q.stringFilter,l)):(c=new _e(this._pt,t,e,+p||0,n-(p||0),"boolean"==typeof d?se:ae,0,_),l&&(c.fp=l),u&&c.modifier(u,this,t),this._pt=c)},Gt=function _initTween(t,e,r){var i,n,a,s,o,u,h,l,f,c,d,p,_,m=t.vars,g=m.ease,v=m.startAt,y=m.immediateRender,T=m.lazy,b=m.onUpdate,x=m.onUpdateParams,k=m.callbackScope,M=m.runBackwards,O=m.yoyoEase,P=m.keyframes,A=m.autoRevert,C=t._dur,S=t._startAt,E=t._targets,D=t.parent,z=D&&"nested"===D.data?D.vars.targets:E,R="auto"===t._overwrite&&!B,F=t.timeline;if(!F||P&&g||(g="none"),t._ease=jt(g,V.ease),t._yEase=O?Yt(jt(!0===O?g:O,V.ease)):0,O&&t._yoyo&&!t._repeat&&(O=t._yEase,t._yEase=t._ease,t._ease=O),t._from=!F&&!!m.runBackwards,!F||P&&!m.stagger){if(p=(l=E[0]?fa(E[0]).harness:0)&&m[l.prop],i=ua(m,ft),S&&(S._zTime<0&&S.progress(1),e<0&&M&&y&&!A?S.render(-1,!0):S.revert(M&&C?ht:ut),S._lazy=0),v){if(za(t._startAt=Zt.set(E,qa({data:"isStart",overwrite:!1,parent:D,immediateRender:!0,lazy:!S&&w(T),startAt:null,delay:0,onUpdate:b,onUpdateParams:x,callbackScope:k,stagger:0},v))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(L||!y&&!A)&&t._startAt.revert(ht),y&&C&&e<=0&&r<=0)return void(e&&(t._zTime=e))}else if(M&&C&&!S)if(e&&(y=!1),a=qa({overwrite:!1,data:"isFromStart",lazy:y&&!S&&w(T),immediateRender:y,stagger:0,parent:D},i),p&&(a[l.prop]=p),za(t._startAt=Zt.set(E,a)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(L?t._startAt.revert(ht):t._startAt.render(-1,!0)),t._zTime=e,y){if(!e)return}else _initTween(t._startAt,X,X);for(t._pt=t._ptCache=0,T=C&&w(T)||T&&!C,n=0;n<E.length;n++){if(h=(o=E[n])._gsap||ea(E)[n]._gsap,t._ptLookup[n]=c={},dt[h.id]&&ct.length&&ma(),d=z===E?n:z.indexOf(o),l&&!1!==(f=new l).init(o,p||i,t,d,z)&&(t._pt=s=new _e(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){c[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)pt[a]&&(f=ac(a,i,t,d,o,z))?f.priority&&(u=1):c[a]=s=Qt.call(t,o,a,"get",i[a],d,z,0,m.stringFilter);t._op&&t._op[n]&&t.kill(o,t._op[n]),R&&t._pt&&(Nt=t,I.killTweensOf(o,c,t.globalTime(e)),_=!t.parent,Nt=0),t._pt&&T&&(dt[h.id]=1)}u&&pe(t),t._onInit&&t._onInit(t)}t._onUpdate=b,t._initted=(!t._op||t._pt)&&!_,P&&e<=0&&F.render(U,!0,!0)},Kt=function _parseFuncOrString(t,e,i,n,a){return s(t)?t.call(e,i,n,a):r(t)&&~t.indexOf("random(")?ob(t):t},Jt=vt+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ht={};ha(Jt+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Ht[t]=1});var Zt=function(z){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var s,o,u,h,l,f,c,d,p=(a=z.call(this,n?r:va(r))||this).vars,_=p.duration,m=p.delay,g=p.immediateRender,T=p.stagger,b=p.overwrite,x=p.keyframes,k=p.defaults,M=p.scrollTrigger,O=p.yoyoEase,P=r.parent||I,A=($(e)||Z(e)?t(e[0]):"length"in r)?[e]:Ot(e);if(a._targets=A.length?ea(A):R("GSAP target "+e+" not found. https://greensock.com",!q.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=b,x||T||y(_)||y(m)){if(r=a.vars,(s=a.timeline=new Xt({data:"nested",defaults:k||{},targets:P&&"nested"===P.data?P.vars.targets:A})).kill(),s.parent=s._dp=_assertThisInitialized(a),s._start=0,T||y(_)||y(m)){if(h=A.length,c=T&&eb(T),v(T))for(l in T)~Jt.indexOf(l)&&((d=d||{})[l]=T[l]);for(o=0;o<h;o++)(u=ua(r,Ht)).stagger=0,O&&(u.yoyoEase=O),d&&yt(u,d),f=A[o],u.duration=+Kt(_,_assertThisInitialized(a),o,f,A),u.delay=(+Kt(m,_assertThisInitialized(a),o,f,A)||0)-a._delay,!T&&1===h&&u.delay&&(a._delay=m=u.delay,a._start+=m,u.delay=0),s.to(f,u,c?c(o,f,A):0),s._ease=Bt.none;s.duration()?_=m=0:a.timeline=0}else if(x){va(qa(s.vars.defaults,{ease:"none"})),s._ease=jt(x.ease||r.ease||"none");var C,S,E,D=0;if($(x))x.forEach(function(t){return s.to(A,t,">")}),s.duration();else{for(l in u={},x)"ease"===l||"easeEach"===l||gc(l,x[l],u,x.easeEach);for(l in u)for(C=u[l].sort(function(t,e){return t.t-e.t}),o=D=0;o<C.length;o++)(E={ease:(S=C[o]).e,duration:(S.t-(o?C[o-1].t:0))/100*_})[l]=S.v,s.to(A,E,D),D+=E.duration;s.duration()<_&&s.to({},{duration:_-s.duration()})}}_||a.duration(_=s.duration())}else a.timeline=0;return!0!==b||B||(Nt=_assertThisInitialized(a),I.killTweensOf(A),Nt=0),Ka(P,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(g||!_&&!x&&a._start===ja(P._time)&&w(g)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==P.data)&&(a._tTime=-X,a.render(Math.max(0,-m)||0)),M&&La(_assertThisInitialized(a),M),a}_inheritsLoose(Tween,z);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,c=this._time,d=this._tDur,p=this._dur,_=t<0,m=d-X<t&&!_?d:t<X?0:t;if(p){if(m!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=_){if(i=m,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(100*s+t,e,r);if(i=ja(m%s),m===d?(a=this._repeat,i=p):((a=~~(m/s))&&a===m/s&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=Tt(this._tTime,s),i===c&&!r&&this._initted)return this._tTime=m,this;a!==o&&(l&&this._yEase&&Qb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(ja(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ma(this,_?t:i,r,e,m))return this._tTime=0,this;if(c!==this._time)return this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=m,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!c&&!e&&!a&&(At(this,"onStart"),this._tTime!==m))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-X:l._dur*l._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(_&&Ca(this,t,0,r),At(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&At(this,"onRepeat"),m!==this._tDur&&m||this._tTime!==m||(_&&!this._onUpdate&&Ca(this,t,0,!0),!t&&p||!(m===this._tDur&&0<this._ts||!m&&this._ts<0)||za(this,1),e||_&&!c||!(m||c||u)||(At(this,m===d?"onComplete":"onReverseComplete",!0),!this._prom||m<d&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!bt(t))||(t._ts<0||t._dp._ts<0)&&!bt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=kt(0,t._tDur,e),a=Tt(l,h),t._yoyo&&1&a&&(u=1-u),a!==Tt(t._tTime,h)&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||L||i||t._zTime===X||!e&&t._zTime){if(!t._initted&&Ma(t,e,i,r,l))return;for(s=t._zTime,t._zTime=e||(r?X:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;e<0&&Ca(t,e,0,!0),t._onUpdate&&!r&&At(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&At(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&za(t,1),r||L||(At(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),z.prototype.invalidate.call(this,t)},e.resetTo=function resetTo(t,e,r,i){d||Rt.wake(),this._ts||this.play();var n,a=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||Gt(this,a),n=this._ease(a/this._dur),function _updatePropTweens(t,e,r,i,n,a,s){var o,u,h,l,f=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!f)for(f=t._ptCache[e]=[],h=t._ptLookup,l=t._targets.length;l--;){if((o=h[l][e])&&o.d&&o.d._pt)for(o=o.d._pt;o&&o.p!==e&&o.fp!==e;)o=o._next;if(!o)return Wt=1,t.vars[e]="+=0",Gt(t,s),Wt=0,1;f.push(o)}for(l=f.length;l--;)(o=(u=f[l])._pt||u).s=!i&&0!==i||n?o.s+(i||0)+a*o.c:i,o.c=r-o.s,u.e&&(u.e=ia(r)+Ya(u.e)),u.b&&(u.b=o.s+Ya(u.b))}(this,t,e,r,i,n,a)?this.resetTo(t,e,r,i):(Ia(this,0),this.parent||xa(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?tb(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Nt&&!0!==Nt.vars.overwrite)._first||tb(this),this.parent&&i!==this.timeline.totalDuration()&&Ra(this,this._dur*this.timeline._tDur/i,0,1),this}var n,a,s,o,u,h,l,f=this._targets,c=t?Ot(t):f,d=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,c))return"all"===e&&(this._pt=0),tb(this);for(n=this._op=this._op||[],"all"!==e&&(r(e)&&(u={},ha(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?fa(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=yt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~c.indexOf(f[l]))for(u in a=d[l],"all"===e?(n[l]=e,o=a,s={}):(s=n[l]=n[l]||{},o=e),o)(h=a&&a[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ya(this,h,"_pt"),delete a[u]),"all"!==s&&(s[u]=1);return this._initted&&!this._pt&&p&&tb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Va(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Va(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return I.killTweensOf(t,e,r)},Tween}(Ut);qa(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ha("staggerTo,staggerFrom,staggerFromTo",function(r){Zt[r]=function(){var t=new Xt,e=Mt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function oc(t,e,r){return t.setAttribute(e,r)}function wc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var $t=function _setterPlain(t,e,r){return t[e]=r},te=function _setterFunc(t,e,r){return t[e](r)},re=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},ne=function _getSetter(t,e){return s(t[e])?te:u(t[e])&&t.setAttribute?oc:$t},ae=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},se=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ue=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},he=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},fe=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ce=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ya(this,i,"_pt"):i.dep||(e=1),i=r;return!e},pe=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},_e=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=wc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||ae,this.d=s||this,this.set=o||$t,this.pr=u||0,(this._next=t)&&(t._prev=this)}ha(vt+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ft[t]=1}),ot.TweenMax=ot.TweenLite=Zt,ot.TimelineLite=ot.TimelineMax=Xt,I=new Xt({sortChildren:!1,defaults:V,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),q.stringFilter=Fb;function Ec(t){return(ye[t]||Te).map(function(t){return t()})}function Fc(){var t=Date.now(),o=[];2<t-Me&&(Ec("matchMediaInit"),ge.forEach(function(t){var e,r,i,n,a=t.queries,s=t.conditions;for(r in a)(e=h.matchMedia(a[r]).matches)&&(i=1),e!==s[r]&&(s[r]=e,n=1);n&&(t.revert(),i&&o.push(t))}),Ec("matchMediaRevert"),o.forEach(function(t){return t.onMatch(t)}),Me=t,Ec("matchMedia"))}var me,ge=[],ye={},Te=[],Me=0,Oe=0,Pe=((me=Context.prototype).add=function add(t,i,n){function Ew(){var t,e=l,r=a.selector;return e&&e!==a&&e.data.push(a),n&&(a.selector=cb(n)),l=a,t=i.apply(a,arguments),s(t)&&a._r.push(t),l=e,a.selector=r,a.isReverted=!1,t}s(t)&&(n=i,i=t,t=s);var a=this;return a.last=Ew,t===s?Ew(a):t?a[t]=Ew:Ew},me.ignore=function ignore(t){var e=l;l=null,t(this),l=e},me.getTweens=function getTweens(){var e=[];return this.data.forEach(function(t){return t instanceof Context?e.push.apply(e,t.getTweens()):t instanceof Zt&&!(t.parent&&"nested"===t.parent.data)&&e.push(t)}),e},me.clear=function clear(){this._r.length=this.data.length=0},me.kill=function kill(e,t){var r=this;if(e){var i=this.getTweens();this.data.forEach(function(t){"isFlip"===t.data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(t){return i.splice(i.indexOf(t),1)}))}),i.map(function(t){return{g:t.globalTime(0),t:t}}).sort(function(t,e){return e.g-t.g||-1/0}).forEach(function(t){return t.t.revert(e)}),this.data.forEach(function(t){return!(t instanceof Zt)&&t.revert&&t.revert(e)}),this._r.forEach(function(t){return t(e,r)}),this.isReverted=!0}else this.data.forEach(function(t){return t.kill&&t.kill()});if(this.clear(),t)for(var n=ge.length;n--;)ge[n].id===this.id&&ge.splice(n,1)},me.revert=function revert(t){this.kill(t||{})},Context);function Context(t,e){this.selector=e&&cb(e),this.data=[],this._r=[],this.isReverted=!1,this.id=Oe++,t&&this.add(t)}var Ae,Ce=((Ae=MatchMedia.prototype).add=function add(t,e,r){v(t)||(t={matches:t});var i,n,a,s=new Pe(0,r||this.scope),o=s.conditions={};for(n in l&&!s.selector&&(s.selector=l.selector),this.contexts.push(s),e=s.add("onMatch",e),s.queries=t)"all"===n?a=1:(i=h.matchMedia(t[n]))&&(ge.indexOf(s)<0&&ge.push(s),(o[n]=i.matches)&&(a=1),i.addListener?i.addListener(Fc):i.addEventListener("change",Fc));return a&&e(s),this},Ae.revert=function revert(t){this.kill(t||{})},Ae.kill=function kill(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},MatchMedia);function MatchMedia(t){this.contexts=[],this.scope=t}var Se={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return wb(t)})},timeline:function timeline(t){return new Xt(t)},getTweensOf:function getTweensOf(t,e){return I.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,n){r(i)&&(i=Ot(i)[0]);var a=fa(i||{}).get,s=e?pa:oa;return"native"===e&&(e=""),i?t?s((pt[t]&&pt[t].get||a)(i,t,e,n)):function(t,e,r){return s((pt[t]&&pt[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Ot(r)).length){var n=r.map(function(t){return Ee.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=pt[e],o=fa(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;c._pt=0,e.init(r,i?t+i:t,c,0,[r]),e.render(1,e),c._pt&&he(1,c)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},quickTo:function quickTo(t,i,e){function Wx(t,e,r){return n.resetTo(i,t,e,r)}var r,n=Ee.to(t,yt(((r={})[i]="+=0.1",r.paused=!0,r),e||{}));return Wx.tween=n,Wx},isTweening:function isTweening(t){return 0<I.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=jt(t.ease,V.ease)),ta(V,t||{})},config:function config(t){return ta(q,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!pt[t]&&!ot[t]&&R(i+" effect requires "+t+" plugin.")}),_t[i]=function(t,e,r){return n(Ot(t),qa(e||{},a),r)},r&&(Xt.prototype[i]=function(t,e,r){return this.add(_t[i](t,v(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){Bt[t]=jt(e)},parseEase:function parseEase(t,e){return arguments.length?jt(t,e):Bt},getById:function getById(t){return I.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Xt(t);for(n.smoothChildTiming=w(t.smoothChildTiming),I.remove(n),n._dp=0,n._time=n._tTime=I._time,r=I._first;r;)i=r._next,!e&&!r._dur&&r instanceof Zt&&r.vars.onComplete===r._targets[0]||Ka(n,r,r._start-r._delay),r=i;return Ka(I,n,0),n},context:function context(t,e){return t?new Pe(t,e):l},matchMedia:function matchMedia(t){return new Ce(t)},matchMediaRefresh:function matchMediaRefresh(){return ge.forEach(function(t){var e,r,i=t.conditions;for(r in i)i[r]&&(i[r]=!1,e=1);e&&t.revert()})||Fc()},addEventListener:function addEventListener(t,e){var r=ye[t]||(ye[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function removeEventListener(t,e){var r=ye[t],i=r&&r.indexOf(e);0<=i&&r.splice(i,1)},utils:{wrap:function wrap(e,t,r){var i=t-e;return $(e)?lb(e,wrap(0,e.length),t):Wa(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return $(e)?lb(e,wrapYoyo(0,e.length-1),t):Wa(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:eb,random:hb,snap:gb,normalize:function normalize(t,e,r){return Pt(t,e,0,1,r)},getUnit:Ya,clamp:function clamp(e,r,t){return Wa(t,function(t){return kt(e,r,t)})},splitColor:Ab,toArray:Ot,selector:cb,mapRange:Pt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ya(t))}},interpolate:function interpolate(e,i,t,n){var a=isNaN(e+i)?0:function(t){return(1-t)*e+t*i};if(!a){var s,o,u,h,l,f=r(e),c={};if(!0===t&&(n=1)&&(t=null),f)e={p:e},i={p:i};else if($(e)&&!$(i)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=i}else n||(e=yt($(e)?[]:{},e));if(!u){for(s in i)Qt.call(c,e,s,"get",i[s]);a=function func(t){return he(t,c)||(f?e.p:e)}}}return Wa(t,a)},shuffle:db},install:P,effects:_t,ticker:Rt,updateRoot:Xt.updateRoot,plugins:pt,globalTimeline:I,core:{PropTween:_e,globals:S,Tween:Zt,Timeline:Xt,Animation:Ut,getCache:fa,_removeLinkedListItem:ya,reverting:function reverting(){return L},context:function context(t){return t&&l&&(l.data.push(t),t._ctx=l),l},suppressOverwrites:function suppressOverwrites(t){return B=t}}};ha("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Se[t]=Zt[t]}),Rt.add(Xt.updateRoot),c=Se.to({},{duration:0});function Jc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function Lc(t,a){return{name:t,rawVars:1,init:function init(t,n,e){e._onInit=function(t){var e,i;if(r(n)&&(e={},ha(n,function(t){return e[t]=1}),n=e),a){for(i in e={},n)e[i]=a(n[i]);n=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=Jc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,n)}}}}var Ee=Se.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s,o;for(a in this.tween=r,e)o=t.getAttribute(a)||"",(s=this.add(t,"setAttribute",(o||0)+"",e[a],i,n,0,0,a)).op=a,s.b=o,this._props.push(a)},render:function render(t,e){for(var r=e._pt;r;)L?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},Lc("roundProps",fb),Lc("modifiers"),Lc("snap",gb))||Se;Zt.version=Xt.version=Ee.version="3.12.2",o=1,x()&&Ft();function vd(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function wd(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function xd(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function yd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function zd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function Ad(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Bd(t,e,r){return t.style[e]=r}function Cd(t,e,r){return t.style.setProperty(e,r)}function Dd(t,e,r){return t._gsap[e]=r}function Ed(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Fd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function Gd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function Jd(t,e){var r=this,i=this.target,n=i.style;if(t in ar&&n){if(this.tfm=this.tfm||{},"transform"===t)return cr.transform.split(",").forEach(function(t){return Jd.call(r,t,e)});if(~(t=cr[t]||t).indexOf(",")?t.split(",").forEach(function(t){return r.tfm[t]=yr(i,t)}):this.tfm[t]=i._gsap.x?i._gsap[t]:yr(i,t),0<=this.props.indexOf(dr))return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pr,e,"")),t=dr}(n||e)&&this.props.push(t,e,n[t])}function Kd(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))}function Ld(){var t,e,r=this.props,i=this.target,n=i.style,a=i._gsap;for(t=0;t<r.length;t+=3)r[t+1]?i[r[t]]=r[t+2]:r[t+2]?n[r[t]]=r[t+2]:n.removeProperty("--"===r[t].substr(0,2)?r[t]:r[t].replace(hr,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)a[e]=this.tfm[e];a.svg&&(a.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),(t=Ie())&&t.isStart||n[dr]||(Kd(n),a.uncache=1)}}function Md(t,e){var r={target:t,props:[],revert:Ld,save:Jd};return t._gsap||Ee.core.getCache(t),e&&e.split(",").forEach(function(t){return r.save(t)}),r}function Od(t,e){var r=ze.createElementNS?ze.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ze.createElement(t);return r.style?r:ze.createElement(t)}function Pd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(hr,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&Pd(t,mr(e)||e,1)||""}function Sd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(De=window,ze=De.document,Re=ze.documentElement,Be=Od("div")||{style:{}},Od("div"),dr=mr(dr),pr=dr+"Origin",Be.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ye=!!mr("perspective"),Ie=Ee.core.reverting,Fe=1)}function Td(t){var e,r=Od("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(Re.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Td}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),Re.removeChild(r),this.style.cssText=a,e}function Ud(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function Vd(e){var r;try{r=e.getBBox()}catch(t){r=Td.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===Td||(r=Td.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+Ud(e,["x","cx","x1"])||0,y:+Ud(e,["y","cy","y1"])||0,width:0,height:0}}function Wd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!Vd(t))}function Xd(t,e){if(e){var r=t.style;e in ar&&e!==pr&&(e=dr),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(hr,"-$1").toLowerCase())):r.removeAttribute(e)}}function Yd(t,e,r,i,n,a){var s=new _e(t._pt,e,r,0,1,a?Ad:zd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function _d(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=Be.style,f=lr.test(e),c="svg"===t.tagName.toLowerCase(),d=(c?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;return i===h||!u||gr[i]||gr[h]?u:("px"===h||p||(u=_d(t,e,r,"px")),o=t.getCTM&&Wd(t),!_&&"%"!==h||!ar[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!c?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==ze&&a.appendChild||(a=ze.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Rt.time&&!s.uncache?ia(u/s.width*100):(!_&&"%"!==h||vr[Pd(a,"display")]||(l.position=Pd(t,"position")),a===t&&(l.position="static"),a.appendChild(Be),n=Be[d],a.removeChild(Be),l.position="absolute",f&&_&&((s=fa(a)).time=Rt.time,s.width=a[d]),ia(p?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[d],ia(_?u/n*100:u/100*n)))}function be(t,e,r,i){if(!r||"none"===r){var n=mr(e,t,1),a=n&&Pd(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=Pd(t,"borderTopColor"))}var s,o,u,h,l,f,c,d,p,_,m,g=new _e(this._pt,t.style,e,0,1,ue),v=0,y=0;if(g.b=r,g.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=Pd(t,e)||i,t.style[e]=r),Fb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)c=o[0],p=i.substring(v,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),c!==(f=u[y++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),"="===c.charAt(1)&&(c=ka(h,c)+m),d=parseFloat(c),_=c.substr((d+"").length),v=rt.lastIndex-_.length,_||(_=_||q.units[e]||m,v===i.length&&(i+=_,g.e+=_)),m!==_&&(h=_d(t,e,f,_)||0),g._pt={_next:g._pt,p:p||1===y?p:",",s:h,c:d-h,m:l&&l<4||"zIndex"===e?Math.round:0});g.c=v<i.length?i.substring(v,i.length):""}else g.r="display"===e&&"none"===i?Ad:zd;return nt.test(i)&&(g.e=0),this._pt=g}function de(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Tr[r]||r,e[1]=Tr[i]||i,e.join(" ")}function ee(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],ar[r]&&(i=1,r="transformOrigin"===r?pr:dr),Xd(a,r);i&&(Xd(a,dr),u&&(u.svg&&a.removeAttribute("transform"),kr(a,1),u.uncache=1,Kd(s)))}}function ie(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function je(t){var e=Pd(t,dr);return ie(e)?wr:e.substr(7).match(et).map(ia)}function ke(t,e){var r,i,n,a,s=t._gsap||fa(t),o=t.style,u=je(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?wr:u:(u!==wr||t.offsetParent||t===Re||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextElementSibling,Re.appendChild(t)),u=je(t),n?o.display=n:Xd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):Re.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function le(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||ke(t,!0),f=h.xOrigin||0,c=h.yOrigin||0,d=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==wr&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=Vd(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-c,h.xOffset=d+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[pr]="0px 0px",a&&(Yd(a,h,"xOrigin",f,w),Yd(a,h,"yOrigin",c,x),Yd(a,h,"xOffset",d,h.xOffset),Yd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function oe(t,e,r){var i=Ya(e);return ia(parseFloat(e)+parseFloat(_d(t,"x",r+"px",i)))+i}function ve(t,e,i,n,a){var s,o,u=360,h=r(a),l=parseFloat(a)*(h&&~a.indexOf("rad")?sr:1)-n,f=n+l+"deg";return h&&("short"===(s=a.split("_")[1])&&(l%=u)!==l%180&&(l+=l<0?u:-u),"cw"===s&&l<0?l=(l+36e9)%u-~~(l/u)*u:"ccw"===s&&0<l&&(l=(l-36e9)%u-~~(l/u)*u)),t._pt=o=new _e(t._pt,e,i,n,l,wd),o.e=f,o.u="deg",t._props.push(i),o}function we(t,e){for(var r in e)t[r]=e[r];return t}function xe(t,e,r){var i,n,a,s,o,u,h,l=we({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[dr]=e,i=kr(r,1),Xd(r,dr),r.setAttribute("transform",a)):(a=getComputedStyle(r)[dr],f[dr]=e,i=kr(r,1),f[dr]=a),ar)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ya(a)!==(h=Ya(s))?_d(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new _e(t._pt,i,n,o,u-o,vd),t._pt.u=h||0,t._props.push(n));we(i,l)}var De,ze,Re,Fe,Be,Le,Ie,Ye,qe=Bt.Power0,Ve=Bt.Power1,Ue=Bt.Power2,Xe=Bt.Power3,Ne=Bt.Power4,We=Bt.Linear,Qe=Bt.Quad,Ge=Bt.Cubic,Ke=Bt.Quart,Je=Bt.Quint,He=Bt.Strong,Ze=Bt.Elastic,$e=Bt.Back,tr=Bt.SteppedEase,er=Bt.Bounce,rr=Bt.Sine,ir=Bt.Expo,nr=Bt.Circ,ar={},sr=180/Math.PI,or=Math.PI/180,ur=Math.atan2,hr=/([A-Z])/g,lr=/(left|right|width|margin|padding|x)/i,fr=/[\s,\(]\S/,cr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},dr="transform",pr=dr+"Origin",_r="O,Moz,ms,Ms,Webkit".split(","),mr=function _checkPropPrefix(t,e,r){var i=(e||Be).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(_r[n]+t in i););return n<0?null:(3===n?"ms":0<=n?_r[n]:"")+t},gr={deg:1,rad:1,turn:1},vr={grid:1,flex:1},yr=function _get(t,e,r,i){var n;return Fe||Sd(),e in cr&&"transform"!==e&&~(e=cr[e]).indexOf(",")&&(e=e.split(",")[0]),ar[e]&&"transform"!==e?(n=kr(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:Mr(Pd(t,pr))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=br[e]&&br[e](t,e,r)||Pd(t,e)||ga(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?_d(t,e,n,r)+r:n},Tr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},br={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new _e(t._pt,e,r,0,0,ee);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},wr=[1,0,0,1,0,0],xr={},kr=function _parseTransform(t,e){var r=t._gsap||new Vt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,c,d,p,_,m,g,v,y,T,b,w,x,k,M,O,P,A,C,S,E,D,z,R,F=t.style,B=r.scaleX<0,L="deg",I=getComputedStyle(t),Y=Pd(t,pr)||"0";return i=n=a=u=h=l=f=c=d=0,s=o=1,r.svg=!(!t.getCTM||!Wd(t)),I.translate&&("none"===I.translate&&"none"===I.scale&&"none"===I.rotate||(F[dr]=("none"!==I.translate?"translate3d("+(I.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==I.rotate?"rotate("+I.rotate+") ":"")+("none"!==I.scale?"scale("+I.scale.split(" ").join(",")+") ":"")+("none"!==I[dr]?I[dr]:"")),F.scale=F.rotate=F.translate="none"),m=ke(t,r.svg),r.svg&&(O=r.uncache?(P=t.getBBox(),Y=r.xOrigin-P.x+"px "+(r.yOrigin-P.y)+"px",""):!e&&t.getAttribute("data-svg-origin"),le(t,O||Y,!!O||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==wr&&(T=m[0],b=m[1],w=m[2],x=m[3],i=k=m[4],n=M=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?ur(b,T)*sr:0,(f=w||x?ur(w,x)*sr+u:0)&&(o*=Math.abs(Math.cos(f*or))),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(R=m[6],D=m[7],C=m[8],S=m[9],E=m[10],z=m[11],i=m[12],n=m[13],a=m[14],h=(g=ur(R,E))*sr,g&&(O=k*(v=Math.cos(-g))+C*(y=Math.sin(-g)),P=M*v+S*y,A=R*v+E*y,C=k*-y+C*v,S=M*-y+S*v,E=R*-y+E*v,z=D*-y+z*v,k=O,M=P,R=A),l=(g=ur(-w,E))*sr,g&&(v=Math.cos(-g),z=x*(y=Math.sin(-g))+z*v,T=O=T*v-C*y,b=P=b*v-S*y,w=A=w*v-E*y),u=(g=ur(b,T))*sr,g&&(O=T*(v=Math.cos(g))+b*(y=Math.sin(g)),P=k*v+M*y,b=b*v-T*y,M=M*v-k*y,T=O,k=P),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ia(Math.sqrt(T*T+b*b+w*w)),o=ia(Math.sqrt(M*M+R*R)),g=ur(k,M),f=2e-4<Math.abs(g)?g*sr:0,d=z?1/(z<0?-z:z):0),r.svg&&(O=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!ie(Pd(t,dr)),O&&t.setAttribute("transform",O))),90<Math.abs(f)&&Math.abs(f)<270&&(B?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),e=e||r.uncache,r.x=i-((r.xPercent=i&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ia(s),r.scaleY=ia(o),r.rotation=ia(u)+L,r.rotationX=ia(h)+L,r.rotationY=ia(l)+L,r.skewX=f+L,r.skewY=c+L,r.transformPerspective=d+"px",(r.zOrigin=parseFloat(Y.split(" ")[2])||0)&&(F[pr]=Mr(Y)),r.xOffset=r.yOffset=0,r.force3D=q.force3D,r.renderTransform=r.svg?Er:Ye?Sr:Or,r.uncache=0,r},Mr=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},Or=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Sr(t,e)},Pr="0deg",Ar="0px",Cr=") ",Sr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,c=r.skewY,d=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Pr||h!==Pr)){var b,w=parseFloat(h)*or,x=Math.sin(w),k=Math.cos(w);w=parseFloat(l)*or,b=Math.cos(w),a=oe(g,a,x*b*-v),s=oe(g,s,-Math.sin(w)*-v),o=oe(g,o,k*b*-v+v)}_!==Ar&&(y+="perspective("+_+Cr),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===Ar&&s===Ar&&o===Ar||(y+=o!==Ar||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Cr),u!==Pr&&(y+="rotate("+u+Cr),h!==Pr&&(y+="rotateY("+h+Cr),l!==Pr&&(y+="rotateX("+l+Cr),f===Pr&&c===Pr||(y+="skew("+f+", "+c+Cr),1===d&&1===p||(y+="scale("+d+", "+p+Cr),g.style[dr]=y||"translate(0, 0)"},Er=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,c=o.rotation,d=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),k=parseFloat(f);c=parseFloat(c),d=parseFloat(d),(p=parseFloat(p))&&(d+=p=parseFloat(p),c+=p),c||d?(c*=or,d*=or,r=Math.cos(c)*_,i=Math.sin(c)*_,n=Math.sin(c-d)*-m,a=Math.cos(c-d)*m,d&&(p*=or,s=Math.tan(d-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ia(r),i=ia(i),n=ia(n),a=ia(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||k&&!~(f+"").indexOf("px"))&&(x=_d(g,"x",l,"px"),k=_d(g,"y",f,"px")),(v||y||T||b)&&(x=ia(x+v-(v*r+y*n)+T),k=ia(k+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=ia(x+u/100*s.width),k=ia(k+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+k+")",g.setAttribute("transform",s),w&&(g.style[dr]=s)};ha("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});br[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return yr(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var Dr,zr,Rr,Fr={name:"css",register:Sd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,i,n,a){var s,o,u,h,l,f,c,d,p,_,m,g,v,y,T,b,w=this._props,x=t.style,k=i.vars.startAt;for(c in Fe||Sd(),this.styles=this.styles||Md(t),b=this.styles.props,this.tween=i,e)if("autoRound"!==c&&(o=e[c],!pt[c]||!ac(c,e,i,n,t,a)))if(l=typeof o,f=br[c],"function"===l&&(l=typeof(o=o.call(i,n,t,a))),"string"===l&&~o.indexOf("random(")&&(o=ob(o)),f)f(this,t,c,o,i)&&(T=1);else if("--"===c.substr(0,2))s=(getComputedStyle(t).getPropertyValue(c)+"").trim(),o+="",Dt.lastIndex=0,Dt.test(s)||(d=Ya(s),p=Ya(o)),p?d!==p&&(s=_d(t,c,s,p)+p):d&&(o+=d),this.add(x,"setProperty",s,o,n,a,0,0,c),w.push(c),b.push(c,0,x[c]);else if("undefined"!==l){if(k&&c in k?(s="function"==typeof k[c]?k[c].call(i,n,t,a):k[c],r(s)&&~s.indexOf("random(")&&(s=ob(s)),Ya(s+"")||(s+=q.units[c]||Ya(yr(t,c))||""),"="===(s+"").charAt(1)&&(s=yr(t,c))):s=yr(t,c),h=parseFloat(s),(_="string"===l&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),u=parseFloat(o),c in cr&&("autoAlpha"===c&&(1===h&&"hidden"===yr(t,"visibility")&&u&&(h=0),b.push("visibility",0,x.visibility),Yd(this,x,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==c&&"transform"!==c&&~(c=cr[c]).indexOf(",")&&(c=c.split(",")[0])),m=c in ar)if(this.styles.save(c),g||((v=t._gsap).renderTransform&&!e.parseTransform||kr(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new _e(this._pt,x,dr,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===c)this._pt=new _e(this._pt,v,"scaleY",v.scaleY,(_?ka(v.scaleY,_+u):u)-v.scaleY||0,vd),this._pt.u=0,w.push("scaleY",c),c+="X";else{if("transformOrigin"===c){b.push(pr,0,x[pr]),o=de(o),v.svg?le(t,o,0,y,0,this):((p=parseFloat(o.split(" ")[2])||0)!==v.zOrigin&&Yd(this,v,"zOrigin",v.zOrigin,p),Yd(this,x,c,Mr(s),Mr(o)));continue}if("svgOrigin"===c){le(t,o,1,y,0,this);continue}if(c in xr){ve(this,v,c,h,_?ka(h,_+o):o);continue}if("smoothOrigin"===c){Yd(this,v,"smooth",v.smooth,o);continue}if("force3D"===c){v[c]=o;continue}if("transform"===c){xe(this,o,t);continue}}else c in x||(c=mr(c)||c);if(m||(u||0===u)&&(h||0===h)&&!fr.test(o)&&c in x)u=u||0,(d=(s+"").substr((h+"").length))!==(p=Ya(o)||(c in q.units?q.units[c]:d))&&(h=_d(t,c,s,p)),this._pt=new _e(this._pt,m?v:x,c,h,(_?ka(h,_+u):u)-h,m||"px"!==p&&"zIndex"!==c||!1===e.autoRound?vd:yd),this._pt.u=p||0,d!==p&&"%"!==p&&(this._pt.b=s,this._pt.r=xd);else if(c in x)be.call(this,t,c,s,_?_+o:o);else if(c in t)this.add(t,c,s||t[c],_?_+o:o,n,a);else if("parseTransform"!==c){Q(c,o);continue}m||(c in x?b.push(c,0,x[c]):b.push(c,1,s||t[c])),w.push(c)}T&&pe(this)},render:function render(t,e){if(e.tween._time||!Ie())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:yr,aliases:cr,getSetter:function getSetter(t,e,r){var i=cr[e];return i&&i.indexOf(",")<0&&(e=i),e in ar&&e!==pr&&(t._gsap.x||yr(t,"x"))?r&&Le===r?"scale"===e?Ed:Dd:(Le=r||{})&&("scale"===e?Fd:Gd):t.style&&!u(t.style[e])?Bd:~e.indexOf("-")?Cd:ne(t,e)},core:{_removeProperty:Xd,_getMatrix:ke}};Ee.utils.checkPrefix=mr,Ee.core.getStyleSaver=Md,Rr=ha((Dr="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(zr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){ar[t]=1}),ha(zr,function(t){q.units[t]="deg",xr[t]=1}),cr[Rr[13]]=Dr+","+zr,ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");cr[e[1]]=Rr[e[0]]}),ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){q.units[t]="px"}),Ee.registerPlugin(Fr);var Br=Ee.registerPlugin(Fr)||Ee,Lr=Br.core.Tween;e.Back=$e,e.Bounce=er,e.CSSPlugin=Fr,e.Circ=nr,e.Cubic=Ge,e.Elastic=Ze,e.Expo=ir,e.Linear=We,e.Power0=qe,e.Power1=Ve,e.Power2=Ue,e.Power3=Xe,e.Power4=Ne,e.Quad=Qe,e.Quart=Ke,e.Quint=Je,e.Sine=rr,e.SteppedEase=tr,e.Strong=He,e.TimelineLite=Xt,e.TimelineMax=Xt,e.TweenLite=Zt,e.TweenMax=Lr,e.default=Br,e.gsap=Br;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});
/****************************************************************************/
         /*/Applications/MAMP/htdocs/thechange/web/app/themes/thechange/js/vendor/js-cookie.js */
         /***************************************************************************/
         /*! js-cookie v3.0.5 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var n=e.Cookies,o=e.Cookies=t();o.noConflict=function(){return e.Cookies=n,o}}())}(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}var t=function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(o[u]=n.read(c,u),e===u)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});return t}));/****************************************************************************/
         /*/Applications/MAMP/htdocs/thechange/web/app/themes/thechange/js/vendor/keen-slider.js */
         /***************************************************************************/
         /**
 * https://keen-slider.io/docs
 * v6.8.5
**/
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).KeenSlider=t()}(this,(function(){"use strict";var n=function(){return n=Object.assign||function(n){for(var t,i=1,e=arguments.length;i<e;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},n.apply(this,arguments)};function t(n,t,i){if(i||2===arguments.length)for(var e,r=0,a=t.length;r<a;r++)!e&&r in t||(e||(e=Array.prototype.slice.call(t,0,r)),e[r]=t[r]);return n.concat(e||Array.prototype.slice.call(t))}function i(n){return Array.prototype.slice.call(n)}function e(n,t){var i=Math.floor(n);return i===t||i+1===t?n:t}function r(){return Date.now()}function a(n,t,i){if(t="data-keen-slider-"+t,null===i)return n.removeAttribute(t);n.setAttribute(t,i||"")}function o(n,t){return t=t||document,"function"==typeof n&&(n=n(t)),Array.isArray(n)?n:"string"==typeof n?i(t.querySelectorAll(n)):n instanceof HTMLElement?[n]:n instanceof NodeList?i(n):[]}function u(n){n.raw&&(n=n.raw),n.cancelable&&!n.defaultPrevented&&n.preventDefault()}function s(n){n.raw&&(n=n.raw),n.stopPropagation&&n.stopPropagation()}function c(){var n=[];return{add:function(t,i,e,r){t.addListener?t.addListener(e):t.addEventListener(i,e,r),n.push([t,i,e,r])},input:function(n,t,i,e){this.add(n,t,function(n){return function(t){t.nativeEvent&&(t=t.nativeEvent);var i=t.changedTouches||[],e=t.targetTouches||[],r=t.detail&&t.detail.x?t.detail:null;return n({id:r?r.identifier?r.identifier:"i":e[0]?e[0]?e[0].identifier:"e":"d",idChanged:r?r.identifier?r.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",raw:t,x:r&&r.x?r.x:e[0]?e[0].screenX:r?r.x:t.pageX,y:r&&r.y?r.y:e[0]?e[0].screenY:r?r.y:t.pageY})}}(i),e)},purge:function(){n.forEach((function(n){n[0].removeListener?n[0].removeListener(n[2]):n[0].removeEventListener(n[1],n[2],n[3])})),n=[]}}}function d(n,t,i){return Math.min(Math.max(n,t),i)}function l(n){return(n>0?1:0)-(n<0?1:0)||+n}function f(n){var t=n.getBoundingClientRect();return{height:e(t.height,n.offsetHeight),width:e(t.width,n.offsetWidth)}}function p(n,t,i,e){var r=n&&n[t];return null==r?i:e&&"function"==typeof r?r():r}function v(n){return Math.round(1e6*n)/1e6}function h(n){var t,i,e,r,a,o;function u(t){o||(o=t),s(!0);var a=t-o;a>e&&(a=e);var l=r[i];if(l[3]<a)return i++,u(t);var f=l[2],p=l[4],v=l[0],h=l[1]*(0,l[5])(0===p?1:(a-f)/p);if(h&&n.track.to(v+h),a<e)return d();o=null,s(!1),c(null),n.emit("animationEnded")}function s(n){t.active=n}function c(n){t.targetIdx=n}function d(){var n;n=u,a=window.requestAnimationFrame(n)}function l(){var t;t=a,window.cancelAnimationFrame(t),s(!1),c(null),o&&n.emit("animationStopped"),o=null}return t={active:!1,start:function(t){if(l(),n.track.details){var a=0,o=n.track.details.position;i=0,e=0,r=t.map((function(n){var t,i=Number(o),r=null!==(t=n.earlyExit)&&void 0!==t?t:n.duration,u=n.easing,s=n.distance*u(r/n.duration)||0;o+=s;var c=e;return e+=r,a+=s,[i,n.distance,c,e,n.duration,u]})),c(n.track.distToIdx(a)),d(),n.emit("animationStarted")}},stop:l,targetIdx:null}}function m(n){var i,e,a,o,u,s,c,f,h,m,g,b,x,y,k=1/0,w=[],M=null,T=0;function C(n){_(T+n)}function E(n){var t=z(T+n).abs;return D(t)?t:null}function z(n){var i=Math.floor(Math.abs(v(n/e))),r=v((n%e+e)%e);r===e&&(r=0);var a=l(n),o=c.indexOf(t([],c,!0).reduce((function(n,t){return Math.abs(t-r)<Math.abs(n-r)?t:n}))),u=o;return a<0&&i++,o===s&&(u=0,i+=a>0?1:-1),{abs:u+i*s*a,origin:o,rel:u}}function I(n,t,i){var e;if(t||!S())return A(n,i);if(!D(n))return null;var r=z(null!=i?i:T),a=r.abs,o=n-r.rel,u=a+o;e=A(u);var c=A(u-s*l(o));return(null!==c&&Math.abs(c)<Math.abs(e)||null===e)&&(e=c),v(e)}function A(n,t){if(null==t&&(t=v(T)),!D(n)||null===n)return null;n=Math.round(n);var i=z(t),r=i.abs,a=i.rel,o=i.origin,u=O(n),d=(t%e+e)%e,l=c[o],f=Math.floor((n-(r-a))/s)*e;return v(l-d-l+c[u]+f+(o===s?e:0))}function D(n){return L(n)===n}function L(n){return d(n,h,m)}function S(){return o.loop}function O(n){return(n%s+s)%s}function _(t){var i;i=t-T,w.push({distance:i,timestamp:r()}),w.length>6&&(w=w.slice(-6)),T=v(t);var e=H().abs;if(e!==M){var a=null!==M;M=e,a&&n.emit("slideChanged")}}function H(t){var r=t?null:function(){if(s){var n=S(),t=n?(T%e+e)%e:T,i=(n?T%e:T)-u[0][2],r=0-(i<0&&n?e-Math.abs(i):i),c=0,d=z(T),f=d.abs,p=d.rel,v=u[p][2],k=u.map((function(t,i){var a=r+c;(a<0-t[0]||a>1)&&(a+=(Math.abs(a)>e-1&&n?e:0)*l(-a));var u=i-p,d=l(u),h=u+f;n&&(-1===d&&a>v&&(h+=s),1===d&&a<v&&(h-=s),null!==g&&h<g&&(a+=e),null!==b&&h>b&&(a-=e));var m=a+t[0]+t[1],x=Math.max(a>=0&&m<=1?1:m<0||a>1?0:a<0?Math.min(1,(t[0]+a)/t[0]):(1-a)/t[0],0);return c+=t[0]+t[1],{abs:h,distance:o.rtl?-1*a+1-t[0]:a,portion:x,size:t[0]}}));return f=L(f),p=O(f),{abs:L(f),length:a,max:y,maxIdx:m,min:x,minIdx:h,position:T,progress:n?t/e:T/a,rel:p,slides:k,slidesLength:e}}}();return i.details=r,n.emit("detailsChanged"),r}return i={absToRel:O,add:C,details:null,distToIdx:E,idxToDist:I,init:function(t){if(function(){if(o=n.options,u=(o.trackConfig||[]).map((function(n){return[p(n,"size",1),p(n,"spacing",0),p(n,"origin",0)]})),s=u.length){e=v(u.reduce((function(n,t){return n+t[0]+t[1]}),0));var t,i=s-1;a=v(e+u[0][2]-u[i][0]-u[i][2]-u[i][1]),c=u.reduce((function(n,i){if(!n)return[0];var e=u[n.length-1],r=n[n.length-1]+(e[0]+e[2])+e[1];return r-=i[2],n[n.length-1]>r&&(r=n[n.length-1]),r=v(r),n.push(r),(!t||t<r)&&(f=n.length-1),t=r,n}),null),0===a&&(f=0),c.push(v(e))}}(),!s)return H(!0);var i;!function(){var t=n.options.range,i=n.options.loop;g=h=i?p(i,"min",-1/0):0,b=m=i?p(i,"max",k):f;var e=p(t,"min",null),r=p(t,"max",null);e&&(h=e),r&&(m=r),x=h===-1/0?h:n.track.idxToDist(h||0,!0,0),y=m===k?m:I(m,!0,0),null===r&&(b=m),p(t,"align",!1)&&m!==k&&0===u[O(m)][2]&&(y-=1-u[O(m)][0],m=E(y-T)),x=v(x),y=v(y)}(),i=t,Number(i)===i?C(A(L(t))):H()},to:_,velocity:function(){var n=r(),t=w.reduce((function(t,i){var e=i.distance,r=i.timestamp;return n-r>200||(l(e)!==l(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=e),t.lastTimestamp&&(t.time+=r-t.lastTimestamp),t.lastTimestamp=r),t}),{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}function g(n){var t,i,e,r,a,o,u,s;function c(n){return 2*n}function f(n){return d(n,u,s)}function p(n){return 1-Math.pow(1-n,3)}function v(){return e?n.track.velocity():0}function h(){b();var t="free-snap"===n.options.mode,i=n.track,e=v();r=l(e);var u=n.track.details,s=[];if(e||!t){var d=m(e),h=d.dist,g=d.dur;if(g=c(g),h*=r,t){var x=i.idxToDist(i.distToIdx(h),!0);x&&(h=x)}s.push({distance:h,duration:g,easing:p});var y=u.position,k=y+h;if(k<a||k>o){var w=k<a?a-y:o-y,M=0,T=e;if(l(w)===r){var C=Math.min(Math.abs(w)/Math.abs(h),1),E=function(n){return 1-Math.pow(1-n,1/3)}(C)*g;s[0].earlyExit=E,T=e*(1-C)}else s[0].earlyExit=0,M+=w;var z=m(T,100),I=z.dist*r;n.options.rubberband&&(s.push({distance:I,duration:c(z.dur),easing:p}),s.push({distance:-I+M,duration:500,easing:p}))}n.animator.start(s)}else n.moveToIdx(f(u.abs),!0,{duration:500,easing:function(n){return 1+--n*n*n*n*n}})}function m(n,t){void 0===t&&(t=1e3);var i=147e-9+(n=Math.abs(n))/t;return{dist:Math.pow(n,2)/i,dur:n/i}}function g(){var t=n.track.details;t&&(a=t.min,o=t.max,u=t.minIdx,s=t.maxIdx)}function b(){n.animator.stop()}n.on("updated",g),n.on("optionsChanged",g),n.on("created",g),n.on("dragStarted",(function(){e=!1,b(),t=i=n.track.details.abs})),n.on("dragChecked",(function(){e=!0})),n.on("dragEnded",(function(){var e=n.options.mode;"snap"===e&&function(){var e=n.track,r=n.track.details,u=r.position,s=l(v());(u>o||u<a)&&(s=0);var c=t+s;0===r.slides[e.absToRel(c)].portion&&(c-=s),t!==i&&(c=i),l(e.idxToDist(c,!0))!==s&&(c+=s),c=f(c);var d=e.idxToDist(c,!0);n.animator.start([{distance:d,duration:500,easing:function(n){return 1+--n*n*n*n*n}}])}(),"free"!==e&&"free-snap"!==e||h()})),n.on("dragged",(function(){i=n.track.details.abs}))}function b(n){var t,i,e,r,a,f,p,v,h,m,g,b,x,y,k,w,M,T,C=c();function E(t){if(f&&v===t.id){var o=D(t);if(h){if(!A(t))return I(t);m=o,h=!1,n.emit("dragChecked")}if(w)return m=o;u(t);var c=function(t){if(M===-1/0&&T===1/0)return t;var e=n.track.details,o=e.length,u=e.position,s=d(t,M-u,T-u);if(0===o)return 0;if(!n.options.rubberband)return s;if(u<=T&&u>=M)return t;if(u<M&&i>0||u>T&&i<0)return t;var c=(u<M?u-M:u-T)/o,l=r*o,f=Math.abs(c*l),p=Math.max(0,1-f/a*2);return p*p*t}(p(m-o)/r*e);i=l(c);var x=n.track.details.position;(x>M&&x<T||x===M&&i>0||x===T&&i<0)&&s(t),g+=c,!b&&Math.abs(g*r)>5&&(b=!0),n.track.add(c),m=o,n.emit("dragged")}}function z(t){!f&&n.track.details&&n.track.details.length&&(g=0,f=!0,b=!1,h=!0,v=t.id,A(t),m=D(t),n.emit("dragStarted"))}function I(t){f&&v===t.idChanged&&(f=!1,n.emit("dragEnded"))}function A(n){var t=L(),i=t?n.y:n.x,e=t?n.x:n.y,r=void 0!==x&&void 0!==y&&Math.abs(y-e)<=Math.abs(x-i);return x=i,y=e,r}function D(n){return L()?n.y:n.x}function L(){return n.options.vertical}function S(){r=n.size,a=L()?window.innerHeight:window.innerWidth;var t=n.track.details;t&&(M=t.min,T=t.max)}function O(n){b&&(s(n),u(n))}function _(){if(C.purge(),n.options.drag&&!n.options.disabled){var i;i=n.options.dragSpeed||1,p="function"==typeof i?i:function(n){return n*i},e=n.options.rtl?-1:1,S(),t=n.container,function(){var n="data-keen-slider-clickable";o("[".concat(n,"]:not([").concat(n,"=false])"),t).map((function(n){C.add(n,"dragstart",s),C.add(n,"mousedown",s),C.add(n,"touchstart",s)}))}(),C.add(t,"dragstart",(function(n){u(n)})),C.add(t,"click",O,{capture:!0}),C.input(t,"ksDragStart",z),C.input(t,"ksDrag",E),C.input(t,"ksDragEnd",I),C.input(t,"mousedown",z),C.input(t,"mousemove",E),C.input(t,"mouseleave",I),C.input(t,"mouseup",I),C.input(t,"touchstart",z,{passive:!0}),C.input(t,"touchmove",E,{passive:!1}),C.input(t,"touchend",I),C.input(t,"touchcancel",I),C.add(window,"wheel",(function(n){f&&u(n)}));var r="data-keen-slider-scrollable";o("[".concat(r,"]:not([").concat(r,"=false])"),n.container).map((function(n){return function(n){var t;C.input(n,"touchstart",(function(n){t=D(n),w=!0,k=!0}),{passive:!0}),C.input(n,"touchmove",(function(i){var e=L(),r=e?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,a=t-D(i),o=e?n.scrollTop:n.scrollLeft,s=e&&"scroll"===n.style.overflowY||!e&&"scroll"===n.style.overflowX;if(t=D(i),(a<0&&o>0||a>0&&o<r)&&k&&s)return w=!0;k=!1,u(i),w=!1})),C.input(n,"touchend",(function(){w=!1}))}(n)}))}}n.on("updated",S),n.on("optionsChanged",_),n.on("created",_),n.on("destroyed",C.purge)}function x(n){var t,i,e=null;function r(t,i,e){n.animator.active?o(t,i,e):requestAnimationFrame((function(){return o(t,i,e)}))}function a(){r(!1,!1,i)}function o(i,r,a){var o=0,u=n.size,d=n.track.details;if(d&&t){var l=d.slides;t.forEach((function(n,t){if(i)!e&&r&&s(n,null,a),c(n,null,a);else{if(!l[t])return;var d=l[t].size*u;!e&&r&&s(n,d,a),c(n,l[t].distance*u-o,a),o+=d}}))}}function u(t){return"performance"===n.options.renderMode?Math.round(t):t}function s(n,t,i){var e=i?"height":"width";null!==t&&(t=u(t)+"px"),n.style["min-"+e]=t,n.style["max-"+e]=t}function c(n,t,i){if(null!==t){t=u(t);var e=i?t:0;t="translate3d(".concat(i?0:t,"px, ").concat(e,"px, 0)")}n.style.transform=t,n.style["-webkit-transform"]=t}function d(){t&&(o(!0,!0,i),t=null),n.on("detailsChanged",a,!0)}function l(){r(!1,!0,i)}function f(){d(),i=n.options.vertical,n.options.disabled||"custom"===n.options.renderMode||(e="auto"===p(n.options.slides,"perView",null),n.on("detailsChanged",a),(t=n.slides).length&&l())}n.on("created",f),n.on("optionsChanged",f),n.on("beforeOptionsChanged",(function(){d()})),n.on("updated",l),n.on("destroyed",d)}function y(t,i){return function(e){var r,u,s,d,l,v,h=c();function m(n){var t;a(e.container,"reverse","rtl"!==(t=e.container,window.getComputedStyle(t,null).getPropertyValue("direction"))||n?null:""),a(e.container,"v",e.options.vertical&&!n?"":null),a(e.container,"disabled",e.options.disabled&&!n?"":null)}function g(){b()&&M()}function b(){var t=null;if(d.forEach((function(n){n.matches&&(t=n.__media)})),t===r)return!1;r||e.emit("beforeOptionsChanged"),r=t;var i=t?s.breakpoints[t]:s;return e.options=n(n({},s),i),m(),I(),A(),C(),!0}function x(n){var t=f(n);return(e.options.vertical?t.height:t.width)/e.size||1}function y(){return e.options.trackConfig.length}function k(t){for(var a in r=!1,s=n(n({},i),t),h.purge(),u=e.size,d=[],s.breakpoints||[]){var o=window.matchMedia(a);o.__media=a,d.push(o),h.add(o,"change",g)}h.add(window,"orientationchange",z),h.add(window,"resize",E),b()}function w(n){e.animator.stop();var t=e.track.details;e.track.init(null!=n?n:t?t.abs:0)}function M(n){w(n),e.emit("optionsChanged")}function T(n,t){if(n)return k(n),void M(t);I(),A();var i=y();C(),y()!==i?M(t):w(t),e.emit("updated")}function C(){var n=e.options.slides;if("function"==typeof n)return e.options.trackConfig=n(e.size,e.slides);for(var t=e.slides,i=t.length,r="number"==typeof n?n:p(n,"number",i,!0),a=[],o=p(n,"perView",1,!0),u=p(n,"spacing",0,!0)/e.size||0,s="auto"===o?u:u/o,c=p(n,"origin","auto"),d=0,l=0;l<r;l++){var f="auto"===o?x(t[l]):1/o-u+s,v="center"===c?.5-f/2:"auto"===c?0:c;a.push({origin:v,size:f,spacing:u}),d+=f}if(d+=u*(r-1),"auto"===c&&!e.options.loop&&1!==o){var h=0;a.map((function(n){var t=d-h;return h+=n.size+u,t>=1||(n.origin=1-t-(d>1?0:1-d)),n}))}e.options.trackConfig=a}function E(){I();var n=e.size;e.options.disabled||n===u||(u=n,T())}function z(){E(),setTimeout(E,500),setTimeout(E,2e3)}function I(){var n=f(e.container);e.size=(e.options.vertical?n.height:n.width)||1}function A(){e.slides=o(e.options.selector,e.container)}e.container=(v=o(t,l||document)).length?v[0]:null,e.destroy=function(){h.purge(),e.emit("destroyed"),m(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=T,k(e.options)}}return function(n,i,e){try{return function(n,t){var i,e={};return i={emit:function(n){e[n]&&e[n].forEach((function(n){n(i)}));var t=i.options&&i.options[n];t&&t(i)},moveToIdx:function(n,t,e){var r=i.track.idxToDist(n,t);if(r){var a=i.options.defaultAnimation;i.animator.start([{distance:r,duration:p(e||a,"duration",500),easing:p(e||a,"easing",(function(n){return 1+--n*n*n*n*n}))}])}},on:function(n,t,i){void 0===i&&(i=!1),e[n]||(e[n]=[]);var r=e[n].indexOf(t);r>-1?i&&delete e[n][r]:i||e[n].push(t)},options:n},function(){if(i.track=m(i),i.animator=h(i),t)for(var n=0,e=t;n<e.length;n++)(0,e[n])(i);i.track.init(i.options.initial||0),i.emit("created")}(),i}(i,t([y(n,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),x,b,g],e||[],!0))}catch(n){console.error(n)}}}));/****************************************************************************/
         /*/Applications/MAMP/htdocs/thechange/web/app/themes/thechange/js/vendor/ScrollTrigger.min.js */
         /***************************************************************************/
         /*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(){return Se||"undefined"!=typeof window&&(Se=window.gsap)&&Se.registerPlugin&&Se}function z(e,t){return~Ie.indexOf(e)&&Ie[Ie.indexOf(e)+1][t]}function A(e){return!!~t.indexOf(e)}function B(e,t,r,n,o){return e.addEventListener(t,r,{passive:!n,capture:!!o})}function C(e,t,r,n){return e.removeEventListener(t,r,!!n)}function F(){return Re&&Re.isPressed||ze.cache++}function G(r,n){function ad(e){if(e||0===e){o&&(Te.history.scrollRestoration="manual");var t=Re&&Re.isPressed;e=ad.v=Math.round(e)||(Re&&Re.iOS?1:0),r(e),ad.cacheID=ze.cache,t&&i("ss",e)}else(n||ze.cache!==ad.cacheID||i("ref"))&&(ad.cacheID=ze.cache,ad.v=r());return ad.v+ad.offset}return ad.offset=0,r&&ad}function J(e,t){return(t&&t._ctx&&t._ctx.selector||Se.utils.toArray)(e)[0]||("string"==typeof e&&!1!==Se.config().nullTargetWarn?console.warn("Element not found:",e):null)}function K(t,e){var r=e.s,n=e.sc;A(t)&&(t=Ce.scrollingElement||Pe);var o=ze.indexOf(t),i=n===He.sc?1:2;~o||(o=ze.push(t)-1),ze[o+i]||B(t,"scroll",F);var a=ze[o+i],s=a||(ze[o+i]=G(z(t,r),!0)||(A(t)?n:G(function(e){return arguments.length?t[r]=e:t[r]})));return s.target=t,a||(s.smooth="smooth"===Se.getProperty(t,"scrollBehavior")),s}function L(e,t,o){function zd(e,t){var r=Ye();t||n<r-s?(a=i,i=e,l=s,s=r):o?i+=e:i=a+(e-a)/(r-l)*(s-l)}var i=e,a=e,s=Ye(),l=s,n=t||50,c=Math.max(500,3*n);return{update:zd,reset:function reset(){a=i=o?0:i,l=s=0},getVelocity:function getVelocity(e){var t=l,r=a,n=Ye();return!e&&0!==e||e===i||zd(e),s===l||c<n-l?0:(i+(o?r:-r))/((o?n:s)-t)*1e3}}}function M(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e}function N(e){var t=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(r)?t:r}function O(){(Ae=Se.core.globals().ScrollTrigger)&&Ae.core&&function _integrate(){var e=Ae.core,r=e.bridge||{},t=e._scrollers,n=e._proxies;t.push.apply(t,ze),n.push.apply(n,Ie),ze=t,Ie=n,i=function _bridge(e,t){return r[e](t)}}()}function P(e){return(Se=e||r())&&"undefined"!=typeof document&&document.body&&(Te=window,Pe=(Ce=document).documentElement,Me=Ce.body,t=[Te,Ce,Pe,Me],Se.utils.clamp,De=Se.core.context||function(){},Oe="onpointerenter"in Me?"pointer":"mouse",Ee=E.isTouch=Te.matchMedia&&Te.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Te||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints?2:0,Be=E.eventTypes=("ontouchstart"in Pe?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Pe?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return o=0},500),O(),ke=1),ke}var Se,ke,Te,Ce,Pe,Me,Ee,Oe,Ae,t,Re,Be,De,o=1,Fe=[],ze=[],Ie=[],Ye=Date.now,i=function _bridge(e,t){return t},n="scrollLeft",a="scrollTop",qe={s:n,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:G(function(e){return arguments.length?Te.scrollTo(e,He.sc()):Te.pageXOffset||Ce[n]||Pe[n]||Me[n]||0})},He={s:a,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:qe,sc:G(function(e){return arguments.length?Te.scrollTo(qe.sc(),e):Te.pageYOffset||Ce[a]||Pe[a]||Me[a]||0})};qe.op=He,ze.cache=0;var E=(Observer.prototype.init=function init(e){ke||P(Se)||console.warn("Please gsap.registerPlugin(Observer)"),Ae||O();var o=e.tolerance,a=e.dragMinimum,t=e.type,i=e.target,r=e.lineHeight,n=e.debounce,s=e.preventDefault,l=e.onStop,c=e.onStopDelay,u=e.ignore,f=e.wheelSpeed,d=e.event,p=e.onDragStart,g=e.onDragEnd,h=e.onDrag,v=e.onPress,b=e.onRelease,m=e.onRight,y=e.onLeft,x=e.onUp,_=e.onDown,w=e.onChangeX,S=e.onChangeY,k=e.onChange,T=e.onToggleX,E=e.onToggleY,R=e.onHover,D=e.onHoverEnd,z=e.onMove,I=e.ignoreCheck,Y=e.isNormalizer,q=e.onGestureStart,H=e.onGestureEnd,X=e.onWheel,W=e.onEnable,G=e.onDisable,V=e.onClick,U=e.scrollSpeed,j=e.capture,Q=e.allowClicks,$=e.lockAxis,Z=e.onLockAxis;function $e(){return ye=Ye()}function _e(e,t){return(se.event=e)&&u&&~u.indexOf(e.target)||t&&ge&&"touch"!==e.pointerType||I&&I(e,t)}function bf(){var e=se.deltaX=N(be),t=se.deltaY=N(me),r=Math.abs(e)>=o,n=Math.abs(t)>=o;k&&(r||n)&&k(se,e,t,be,me),r&&(m&&0<se.deltaX&&m(se),y&&se.deltaX<0&&y(se),w&&w(se),T&&se.deltaX<0!=le<0&&T(se),le=se.deltaX,be[0]=be[1]=be[2]=0),n&&(_&&0<se.deltaY&&_(se),x&&se.deltaY<0&&x(se),S&&S(se),E&&se.deltaY<0!=ce<0&&E(se),ce=se.deltaY,me[0]=me[1]=me[2]=0),(ne||re)&&(z&&z(se),re&&(h(se),re=!1),ne=!1),ie&&!(ie=!1)&&Z&&Z(se),oe&&(X(se),oe=!1),ee=0}function cf(e,t,r){be[r]+=e,me[r]+=t,se._vx.update(e),se._vy.update(t),n?ee=ee||requestAnimationFrame(bf):bf()}function df(e,t){$&&!ae&&(se.axis=ae=Math.abs(e)>Math.abs(t)?"x":"y",ie=!0),"y"!==ae&&(be[2]+=e,se._vx.update(e,!0)),"x"!==ae&&(me[2]+=t,se._vy.update(t,!0)),n?ee=ee||requestAnimationFrame(bf):bf()}function ef(e){if(!_e(e,1)){var t=(e=M(e,s)).clientX,r=e.clientY,n=t-se.x,o=r-se.y,i=se.isDragging;se.x=t,se.y=r,(i||Math.abs(se.startX-t)>=a||Math.abs(se.startY-r)>=a)&&(h&&(re=!0),i||(se.isDragging=!0),df(n,o),i||p&&p(se))}}function hf(e){return e.touches&&1<e.touches.length&&(se.isGesturing=!0)&&q(e,se.isDragging)}function jf(){return(se.isGesturing=!1)||H(se)}function kf(e){if(!_e(e)){var t=ue(),r=fe();cf((t-de)*U,(r-pe)*U,1),de=t,pe=r,l&&te.restart(!0)}}function lf(e){if(!_e(e)){e=M(e,s),X&&(oe=!0);var t=(1===e.deltaMode?r:2===e.deltaMode?Te.innerHeight:1)*f;cf(e.deltaX*t,e.deltaY*t,0),l&&!Y&&te.restart(!0)}}function mf(e){if(!_e(e)){var t=e.clientX,r=e.clientY,n=t-se.x,o=r-se.y;se.x=t,se.y=r,ne=!0,(n||o)&&df(n,o)}}function nf(e){se.event=e,R(se)}function of(e){se.event=e,D(se)}function pf(e){return _e(e)||M(e,s)&&V(se)}this.target=i=J(i)||Pe,this.vars=e,u=u&&Se.utils.toArray(u),o=o||1e-9,a=a||0,f=f||1,U=U||1,t=t||"wheel,touch,pointer",n=!1!==n,r=r||parseFloat(Te.getComputedStyle(Me).lineHeight)||22;var ee,te,re,ne,oe,ie,ae,se=this,le=0,ce=0,ue=K(i,qe),fe=K(i,He),de=ue(),pe=fe(),ge=~t.indexOf("touch")&&!~t.indexOf("pointer")&&"pointerdown"===Be[0],he=A(i),ve=i.ownerDocument||Ce,be=[0,0,0],me=[0,0,0],ye=0,xe=se.onPress=function(e){_e(e,1)||e&&e.button||(se.axis=ae=null,te.pause(),se.isPressed=!0,e=M(e),le=ce=0,se.startX=se.x=e.clientX,se.startY=se.y=e.clientY,se._vx.reset(),se._vy.reset(),B(Y?i:ve,Be[1],ef,s,!0),se.deltaX=se.deltaY=0,v&&v(se))},we=se.onRelease=function(t){if(!_e(t,1)){C(Y?i:ve,Be[1],ef,!0);var e=!isNaN(se.y-se.startY),r=se.isDragging&&(3<Math.abs(se.x-se.startX)||3<Math.abs(se.y-se.startY)),n=M(t);!r&&e&&(se._vx.reset(),se._vy.reset(),s&&Q&&Se.delayedCall(.08,function(){if(300<Ye()-ye&&!t.defaultPrevented)if(t.target.click)t.target.click();else if(ve.createEvent){var e=ve.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,Te,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(e)}})),se.isDragging=se.isGesturing=se.isPressed=!1,l&&!Y&&te.restart(!0),g&&r&&g(se),b&&b(se,r)}};te=se._dc=Se.delayedCall(c||.25,function onStopFunc(){se._vx.reset(),se._vy.reset(),te.pause(),l&&l(se)}).pause(),se.deltaX=se.deltaY=0,se._vx=L(0,50,!0),se._vy=L(0,50,!0),se.scrollX=ue,se.scrollY=fe,se.isDragging=se.isGesturing=se.isPressed=!1,De(this),se.enable=function(e){return se.isEnabled||(B(he?ve:i,"scroll",F),0<=t.indexOf("scroll")&&B(he?ve:i,"scroll",kf,s,j),0<=t.indexOf("wheel")&&B(i,"wheel",lf,s,j),(0<=t.indexOf("touch")&&Ee||0<=t.indexOf("pointer"))&&(B(i,Be[0],xe,s,j),B(ve,Be[2],we),B(ve,Be[3],we),Q&&B(i,"click",$e,!1,!0),V&&B(i,"click",pf),q&&B(ve,"gesturestart",hf),H&&B(ve,"gestureend",jf),R&&B(i,Oe+"enter",nf),D&&B(i,Oe+"leave",of),z&&B(i,Oe+"move",mf)),se.isEnabled=!0,e&&e.type&&xe(e),W&&W(se)),se},se.disable=function(){se.isEnabled&&(Fe.filter(function(e){return e!==se&&A(e.target)}).length||C(he?ve:i,"scroll",F),se.isPressed&&(se._vx.reset(),se._vy.reset(),C(Y?i:ve,Be[1],ef,!0)),C(he?ve:i,"scroll",kf,j),C(i,"wheel",lf,j),C(i,Be[0],xe,j),C(ve,Be[2],we),C(ve,Be[3],we),C(i,"click",$e,!0),C(i,"click",pf),C(ve,"gesturestart",hf),C(ve,"gestureend",jf),C(i,Oe+"enter",nf),C(i,Oe+"leave",of),C(i,Oe+"move",mf),se.isEnabled=se.isPressed=se.isDragging=!1,G&&G(se))},se.kill=se.revert=function(){se.disable();var e=Fe.indexOf(se);0<=e&&Fe.splice(e,1),Re===se&&(Re=0)},Fe.push(se),Y&&A(i)&&(Re=se),se.enable(d)},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(Observer,[{key:"velocityX",get:function get(){return this._vx.getVelocity()}},{key:"velocityY",get:function get(){return this._vy.getVelocity()}}]),Observer);function Observer(e){this.init(e)}E.version="3.12.2",E.create=function(e){return new E(e)},E.register=P,E.getAll=function(){return Fe.slice()},E.getById=function(t){return Fe.filter(function(e){return e.vars.id===t})[0]},r()&&Se.registerPlugin(E);function Aa(e,t,r){var n=ct(e)&&("clamp("===e.substr(0,6)||-1<e.indexOf("max"));return(r["_"+t+"Clamp"]=n)?e.substr(6,e.length-7):e}function Ba(e,t){return!t||ct(e)&&"clamp("===e.substr(0,6)?e:"clamp("+e+")"}function Da(){return Ke=1}function Ea(){return Ke=0}function Fa(e){return e}function Ga(e){return Math.round(1e5*e)/1e5||0}function Ha(){return"undefined"!=typeof window}function Ia(){return Le||Ha()&&(Le=window.gsap)&&Le.registerPlugin&&Le}function Ja(e){return!!~l.indexOf(e)}function Ka(e){return("Height"===e?S:Ne["inner"+e])||Je["client"+e]||We["client"+e]}function La(e){return z(e,"getBoundingClientRect")||(Ja(e)?function(){return Ot.width=Ne.innerWidth,Ot.height=S,Ot}:function(){return _t(e)})}function Oa(e,t){var r=t.s,n=t.d2,o=t.d,i=t.a;return Math.max(0,(r="scroll"+n)&&(i=z(e,r))?i()-La(e)()[o]:Ja(e)?(Je[r]||We[r])-Ka(n):e[r]-e["offset"+n])}function Pa(e,t){for(var r=0;r<g.length;r+=3)t&&!~t.indexOf(g[r+1])||e(g[r],g[r+1],g[r+2])}function Ra(e){return"function"==typeof e}function Sa(e){return"number"==typeof e}function Ta(e){return"object"==typeof e}function Ua(e,t,r){return e&&e.progress(t?0:1)&&r&&e.pause()}function Va(e,t){if(e.enabled){var r=t(e);r&&r.totalTime&&(e.callbackAnimation=r)}}function kb(e){return Ne.getComputedStyle(e)}function mb(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function ob(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function pb(e){var t,r=[],n=e.labels,o=e.duration();for(t in n)r.push(n[t]/o);return r}function rb(o){var i=Le.utils.snap(o),a=Array.isArray(o)&&o.slice(0).sort(function(e,t){return e-t});return a?function(e,t,r){var n;if(void 0===r&&(r=.001),!t)return i(e);if(0<t){for(e-=r,n=0;n<a.length;n++)if(a[n]>=e)return a[n];return a[n-1]}for(n=a.length,e+=r;n--;)if(a[n]<=e)return a[n];return a[0]}:function(e,t,r){void 0===r&&(r=.001);var n=i(e);return!t||Math.abs(n-e)<r||n-e<0==t<0?n:i(t<0?e-o:e+o)}}function tb(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function ub(e,t,r,n,o){return e.addEventListener(t,r,{passive:!n,capture:!!o})}function vb(e,t,r,n){return e.removeEventListener(t,r,!!n)}function wb(e,t,r){(r=r&&r.wheelHandler)&&(e(t,"wheel",r),e(t,"touchmove",r))}function Ab(e,t){if(ct(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in q?q[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function Bb(e,t,r,n,o,i,a,s){var l=o.startColor,c=o.endColor,u=o.fontSize,f=o.indent,d=o.fontWeight,p=Xe.createElement("div"),g=Ja(r)||"fixed"===z(r,"pinType"),h=-1!==e.indexOf("scroller"),v=g?We:r,b=-1!==e.indexOf("start"),m=b?l:c,y="border-color:"+m+";font-size:"+u+";color:"+m+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((h||s)&&g?"fixed;":"absolute;"),!h&&!s&&g||(y+=(n===He?D:I)+":"+(i+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=b,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||0===t?e+"-"+t:e,v.children[0]?v.insertBefore(p,v.children[0]):v.appendChild(p),p._offset=p["offset"+n.op.d2],H(p,0,n,b),p}function Gb(){return 34<at()-st&&(k=k||requestAnimationFrame(Q))}function Hb(){v&&v.isPressed&&!(v.startX>We.clientWidth)||(ze.cache++,v?k=k||requestAnimationFrame(Q):Q(),st||V("scrollStart"),st=at())}function Ib(){y=Ne.innerWidth,m=Ne.innerHeight}function Jb(){ze.cache++,je||h||Xe.fullscreenElement||Xe.webkitFullscreenElement||b&&y===Ne.innerWidth&&!(Math.abs(Ne.innerHeight-m)>.25*Ne.innerHeight)||c.restart(!0)}function Mb(){return vb(re,"scrollEnd",Mb)||Pt(!0)}function Pb(e){for(var t=0;t<U.length;t+=5)(!e||U[t+4]&&U[t+4].query===e)&&(U[t].style.cssText=U[t+1],U[t].getBBox&&U[t].setAttribute("transform",U[t+2]||""),U[t+3].uncache=1)}function Qb(e,t){var r;for(Qe=0;Qe<kt.length;Qe++)!(r=kt[Qe])||t&&r._ctx!==t||(e?r.kill(1):r.revert(!0,!0));t&&Pb(t),t||V("revert")}function Rb(e,t){ze.cache++,!t&&rt||ze.forEach(function(e){return Ra(e)&&e.cacheID++&&(e.rec=0)}),ct(e)&&(Ne.history.scrollRestoration=_=e)}function Wb(){We.appendChild(w),S=w.offsetHeight||Ne.innerHeight,We.removeChild(w)}function dc(e,t,r,n){if(!e._gsap.swappedIn){for(var o,i=$.length,a=t.style,s=e.style;i--;)a[o=$[i]]=r[o];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s[I]=s[D]="auto",a.flexBasis=r.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ft]=ob(e,qe)+xt,a[dt]=ob(e,He)+xt,a[bt]=s[mt]=s.top=s.left="0",Et(n),s[ft]=s.maxWidth=r[ft],s[dt]=s.maxHeight=r[dt],s[bt]=r[bt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}}function gc(e){for(var t=Z.length,r=e.style,n=[],o=0;o<t;o++)n.push(Z[o],r[Z[o]]);return n.t=e,n}function jc(e,t,r,n,o,i,a,s,l,c,u,f,d,p){Ra(e)&&(e=e(s)),ct(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?Ab("0"+e.substr(3),r):0));var g,h,v,b=d?d.time():0;if(d&&d.seek(0),isNaN(e)||(e=+e),Sa(e))d&&(e=Le.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&H(a,r,n,!0);else{Ra(t)&&(t=t(s));var m,y,x,_,w=(e||"0").split(" ");v=J(t,s)||We,(m=_t(v)||{})&&(m.left||m.top)||"none"!==kb(v).display||(_=v.style.display,v.style.display="block",m=_t(v),_?v.style.display=_:v.style.removeProperty("display")),y=Ab(w[0],m[n.d]),x=Ab(w[1]||"0",r),e=m[n.p]-l[n.p]-c+y+o-x,a&&H(a,x,n,r-x<20||a._isStart&&20<x),r-=r-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),i){var S=e+r,k=i._isStart;g="scroll"+n.d2,H(i,S,n,k&&20<S||!k&&(u?Math.max(We[g],Je[g]):i.parentNode[g])<=S+1),u&&(l=_t(a),u&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+xt))}return d&&v&&(g=_t(v),d.seek(f),h=_t(v),d._caScrollDist=g[n.p]-h[n.p],e=e/d._caScrollDist*f),d&&d.seek(b),d?e:Math.round(e)}function lc(e,t,r,n){if(e.parentNode!==t){var o,i,a=e.style;if(t===We){for(o in e._stOrig=a.cssText,i=kb(e))+o||te.test(o)||!i[o]||"string"!=typeof a[o]||"0"===o||(a[o]=i[o]);a.top=r,a.left=n}else a.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}}function mc(r,e,n){var o=e,i=o;return function(e){var t=Math.round(r());return t!==o&&t!==i&&3<Math.abs(t-o)&&3<Math.abs(t-i)&&(e=t,n&&n()),i=o,o=e}}function nc(e,t,r){var n={};n[t.p]="+="+r,Le.set(e,n)}function oc(c,e){function uk(e,t,r,n,o){var i=uk.tween,a=t.onComplete,s={};r=r||u();var l=mc(u,r,function(){i.kill(),uk.tween=0});return o=n&&o||0,n=n||e-r,i&&i.kill(),t[f]=e,(t.modifiers=s)[f]=function(){return l(r+n*i.ratio+o*i.ratio*i.ratio)},t.onUpdate=function(){ze.cache++,Q()},t.onComplete=function(){uk.tween=0,a&&a.call(i)},i=uk.tween=Le.to(c,t)}var u=K(c,e),f="_scroll"+e.p2;return(c[f]=u).wheelHandler=function(){return uk.tween&&uk.tween.kill()&&(uk.tween=0)},ub(c,"wheel",u.wheelHandler),re.isTouch&&ub(c,"touchmove",u.wheelHandler),uk}var Le,s,Ne,Xe,Je,We,l,c,Ge,Ve,Ue,u,je,Ke,f,Qe,d,p,g,Ze,et,h,v,b,m,y,R,x,_,w,S,tt,k,rt,nt,ot,it=1,at=Date.now,T=at(),st=0,lt=0,ct=function _isString(e){return"string"==typeof e},ut=Math.abs,D="right",I="bottom",ft="width",dt="height",pt="Right",gt="Left",ht="Top",vt="Bottom",bt="padding",mt="margin",yt="Width",Y="Height",xt="px",_t=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==kb(e)[f]&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},wt={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},St={toggleActions:"play",anticipatePin:0},q={top:0,left:0,center:.5,bottom:1,right:1},H=function _positionMarker(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?"1px":0,o["border"+i+yt]=1,o["border"+a+yt]=0,o[r.p]=t+"px",Le.set(e,o)},kt=[],Tt={},X={},W=[],V=function _dispatch(e){return X[e]&&X[e].map(function(e){return e()})||W},U=[],Ct=0,Pt=function _refreshAll(e,t){if(!st||e){Wb(),rt=re.isRefreshing=!0,ze.forEach(function(e){return Ra(e)&&++e.cacheID&&(e.rec=e())});var r=V("refreshInit");Ze&&re.sort(),t||Qb(),ze.forEach(function(e){Ra(e)&&(e.smooth&&(e.target.style.scrollBehavior="auto"),e(0))}),kt.slice(0).forEach(function(e){return e.refresh()}),kt.forEach(function(e,t){if(e._subPinOffset&&e.pin){var r=e.vars.horizontal?"offsetWidth":"offsetHeight",n=e.pin[r];e.revert(!0,1),e.adjustPinSpacing(e.pin[r]-n),e.refresh()}}),kt.forEach(function(e){var t=Oa(e.scroller,e._dir);("max"===e.vars.end||e._endClamp&&e.end>t)&&e.setPositions(e.start,Math.max(e.start+1,t),!0)}),r.forEach(function(e){return e&&e.render&&e.render(-1)}),ze.forEach(function(e){Ra(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior="smooth"}),e.rec&&e(e.rec))}),Rb(_,1),c.pause(),Ct++,Q(rt=2),kt.forEach(function(e){return Ra(e.vars.onRefresh)&&e.vars.onRefresh(e)}),rt=re.isRefreshing=!1,V("refresh")}else ub(re,"scrollEnd",Mb)},j=0,Mt=1,Q=function _updateAll(e){if(!rt||2===e){re.isUpdating=!0,ot&&ot.update(0);var t=kt.length,r=at(),n=50<=r-T,o=t&&kt[0].scroll();if(Mt=o<j?-1:1,rt||(j=o),n&&(st&&!Ke&&200<r-st&&(st=0,V("scrollEnd")),Ue=T,T=r),Mt<0){for(Qe=t;0<Qe--;)kt[Qe]&&kt[Qe].update(0,n);Mt=1}else for(Qe=0;Qe<t;Qe++)kt[Qe]&&kt[Qe].update(0,n);re.isUpdating=!1}k=0},$=["left","top",I,D,mt+vt,mt+pt,mt+ht,mt+gt,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Z=$.concat([ft,dt,"boxSizing","max"+yt,"max"+Y,"position",mt,bt,bt+ht,bt+pt,bt+vt,bt+gt]),ee=/([A-Z])/g,Et=function _setState(e){if(e){var t,r,n=e.t.style,o=e.length,i=0;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(ee,"-$1").toLowerCase())}},Ot={left:0,top:0},te=/(webkit|moz|length|cssText|inset)/i,re=(ScrollTrigger.prototype.init=function init(E,O){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),lt){var A,n,p,R,B,D,F,I,Y,q,H,e,L,N,X,W,G,V,t,U,b,j,Q,m,$,y,Z,x,r,_,w,ee,o,g,te,re,ne,S,i,k=(E=mb(ct(E)||Sa(E)||E.nodeType?{trigger:E}:E,St)).onUpdate,T=E.toggleClass,a=E.id,C=E.onToggle,oe=E.onRefresh,P=E.scrub,ie=E.trigger,ae=E.pin,se=E.pinSpacing,le=E.invalidateOnRefresh,M=E.anticipatePin,s=E.onScrubComplete,h=E.onSnapComplete,ce=E.once,ue=E.snap,fe=E.pinReparent,l=E.pinSpacer,de=E.containerAnimation,pe=E.fastScrollEnd,ge=E.preventOverlaps,he=E.horizontal||E.containerAnimation&&!1!==E.horizontal?qe:He,ve=!P&&0!==P,be=J(E.scroller||Ne),c=Le.core.getCache(be),me=Ja(be),ye="fixed"===("pinType"in E?E.pinType:z(be,"pinType")||me&&"fixed"),xe=[E.onEnter,E.onLeave,E.onEnterBack,E.onLeaveBack],_e=ve&&E.toggleActions.split(" "),we="markers"in E?E.markers:St.markers,Se=me?0:parseFloat(kb(be)["border"+he.p2+yt])||0,ke=this,Te=E.onRefreshInit&&function(){return E.onRefreshInit(ke)},Ce=function _getSizeFunc(e,t,r){var n=r.d,o=r.d2,i=r.a;return(i=z(e,"getBoundingClientRect"))?function(){return i()[n]}:function(){return(t?Ka(o):e["client"+o])||0}}(be,me,he),Pe=function _getOffsetsFunc(e,t){return!t||~Ie.indexOf(e)?La(e):function(){return Ot}}(be,me),Me=0,Ee=0,Oe=0,Ae=K(be,he);if(ke._startClamp=ke._endClamp=!1,ke._dir=he,M*=45,ke.scroller=be,ke.scroll=de?de.time.bind(de):Ae,R=Ae(),ke.vars=E,O=O||E.animation,"refreshPriority"in E&&(Ze=1,-9999===E.refreshPriority&&(ot=ke)),c.tweenScroll=c.tweenScroll||{top:oc(be,He),left:oc(be,qe)},ke.tweenTo=A=c.tweenScroll[he.p],ke.scrubDuration=function(e){(o=Sa(e)&&e)?ee?ee.duration(e):ee=Le.to(O,{ease:"expo",totalProgress:"+=0",duration:o,paused:!0,onComplete:function onComplete(){return s&&s(ke)}}):(ee&&ee.progress(1).kill(),ee=0)},O&&(O.vars.lazy=!1,O._initted&&!ke.isReverted||!1!==O.vars.immediateRender&&!1!==E.immediateRender&&O.duration()&&O.render(0,!0,!0),ke.animation=O.pause(),(O.scrollTrigger=ke).scrubDuration(P),_=0,a=a||O.vars.id),ue&&(Ta(ue)&&!ue.push||(ue={snapTo:ue}),"scrollBehavior"in We.style&&Le.set(me?[We,Je]:be,{scrollBehavior:"auto"}),ze.forEach(function(e){return Ra(e)&&e.target===(me?Xe.scrollingElement||Je:be)&&(e.smooth=!1)}),p=Ra(ue.snapTo)?ue.snapTo:"labels"===ue.snapTo?function _getClosestLabel(t){return function(e){return Le.utils.snap(pb(t),e)}}(O):"labelsDirectional"===ue.snapTo?function _getLabelAtDirection(r){return function(e,t){return rb(pb(r))(e,t.direction)}}(O):!1!==ue.directional?function(e,t){return rb(ue.snapTo)(e,at()-Ee<500?0:t.direction)}:Le.utils.snap(ue.snapTo),g=ue.duration||{min:.1,max:2},g=Ta(g)?Ve(g.min,g.max):Ve(g,g),te=Le.delayedCall(ue.delay||o/2||.1,function(){var e=Ae(),t=at()-Ee<500,r=A.tween;if(!(t||Math.abs(ke.getVelocity())<10)||r||Ke||Me===e)ke.isActive&&Me!==e&&te.restart(!0);else{var n=(e-D)/N,o=O&&!ve?O.totalProgress():n,i=t?0:(o-w)/(at()-Ue)*1e3||0,a=Le.utils.clamp(-n,1-n,ut(i/2)*i/.185),s=n+(!1===ue.inertia?0:a),l=Ve(0,1,p(s,ke)),c=Math.round(D+l*N),u=ue.onStart,f=ue.onInterrupt,d=ue.onComplete;if(e<=F&&D<=e&&c!==e){if(r&&!r._initted&&r.data<=ut(c-e))return;!1===ue.inertia&&(a=l-n),A(c,{duration:g(ut(.185*Math.max(ut(s-o),ut(l-o))/i/.05||0)),ease:ue.ease||"power3",data:ut(c-e),onInterrupt:function onInterrupt(){return te.restart(!0)&&f&&f(ke)},onComplete:function onComplete(){ke.update(),Me=Ae(),_=w=O&&!ve?O.totalProgress():ke.progress,h&&h(ke),d&&d(ke)}},e,a*N,c-e-a*N),u&&u(ke,A.tween)}}}).pause()),a&&(Tt[a]=ke),i=(i=(ie=ke.trigger=J(ie||!0!==ae&&ae))&&ie._gsap&&ie._gsap.stRevert)&&i(ke),ae=!0===ae?ie:J(ae),ct(T)&&(T={targets:ie,className:T}),ae&&(!1===se||se===mt||(se=!(!se&&ae.parentNode&&ae.parentNode.style&&"flex"===kb(ae.parentNode).display)&&bt),ke.pin=ae,(n=Le.core.getCache(ae)).spacer?X=n.pinState:(l&&((l=J(l))&&!l.nodeType&&(l=l.current||l.nativeElement),n.spacerIsNative=!!l,l&&(n.spacerState=gc(l))),n.spacer=V=l||Xe.createElement("div"),V.classList.add("pin-spacer"),a&&V.classList.add("pin-spacer-"+a),n.pinState=X=gc(ae)),!1!==E.force3D&&Le.set(ae,{force3D:!0}),ke.spacer=V=n.spacer,r=kb(ae),m=r[se+he.os2],U=Le.getProperty(ae),b=Le.quickSetter(ae,he.a,xt),dc(ae,V,r),G=gc(ae)),we){e=Ta(we)?mb(we,wt):wt,q=Bb("scroller-start",a,be,he,e,0),H=Bb("scroller-end",a,be,he,e,0,q),t=q["offset"+he.op.d2];var u=J(z(be,"content")||be);I=this.markerStart=Bb("start",a,u,he,e,t,0,de),Y=this.markerEnd=Bb("end",a,u,he,e,t,0,de),de&&(S=Le.quickSetter([I,Y],he.a,xt)),ye||Ie.length&&!0===z(be,"fixedMarkers")||(function _makePositionable(e){var t=kb(e).position;e.style.position="absolute"===t||"fixed"===t?t:"relative"}(me?We:be),Le.set([q,H],{force3D:!0}),y=Le.quickSetter(q,he.a,xt),x=Le.quickSetter(H,he.a,xt))}if(de){var f=de.vars.onUpdate,d=de.vars.onUpdateParams;de.eventCallback("onUpdate",function(){ke.update(0,0,1),f&&f.apply(de,d||[])})}if(ke.previous=function(){return kt[kt.indexOf(ke)-1]},ke.next=function(){return kt[kt.indexOf(ke)+1]},ke.revert=function(e,t){if(!t)return ke.kill(!0);var r=!1!==e||!ke.enabled,n=je;r!==ke.isReverted&&(r&&(re=Math.max(Ae(),ke.scroll.rec||0),Oe=ke.progress,ne=O&&O.progress()),I&&[I,Y,q,H].forEach(function(e){return e.style.display=r?"none":"block"}),r&&(je=ke).update(r),!ae||fe&&ke.isActive||(r?function _swapPinOut(e,t,r){Et(r);var n=e._gsap;if(n.spacerIsNative)Et(n.spacerState);else if(e._gsap.swappedIn){var o=t.parentNode;o&&(o.insertBefore(e,t),o.removeChild(t))}e._gsap.swappedIn=!1}(ae,V,X):dc(ae,V,kb(ae),$)),r||ke.update(r),je=n,ke.isReverted=r)},ke.refresh=function(e,t,r,n){if(!je&&ke.enabled||t)if(ae&&e&&st)ub(ScrollTrigger,"scrollEnd",Mb);else{!rt&&Te&&Te(ke),je=ke,A.tween&&!r&&(A.tween.kill(),A.tween=0),ee&&ee.pause(),le&&O&&O.revert({kill:!1}).invalidate(),ke.isReverted||ke.revert(!0,!0),ke._subPinOffset=!1;var o,i,a,s,l,c,u,f,d,p,g,h,v,b=Ce(),m=Pe(),y=de?de.duration():Oa(be,he),x=N<=.01,_=0,w=n||0,S=Ta(r)?r.end:E.end,k=E.endTrigger||ie,T=Ta(r)?r.start:E.start||(0!==E.start&&ie?ae?"0 0":"0 100%":0),C=ke.pinnedContainer=E.pinnedContainer&&J(E.pinnedContainer,ke),P=ie&&Math.max(0,kt.indexOf(ke))||0,M=P;for(we&&Ta(r)&&(h=Le.getProperty(q,he.p),v=Le.getProperty(H,he.p));M--;)(c=kt[M]).end||c.refresh(0,1)||(je=ke),!(u=c.pin)||u!==ie&&u!==ae&&u!==C||c.isReverted||((p=p||[]).unshift(c),c.revert(!0,!0)),c!==kt[M]&&(P--,M--);for(Ra(T)&&(T=T(ke)),T=Aa(T,"start",ke),D=jc(T,ie,b,he,Ae(),I,q,ke,m,Se,ye,y,de,ke._startClamp&&"_startClamp")||(ae?-.001:0),Ra(S)&&(S=S(ke)),ct(S)&&!S.indexOf("+=")&&(~S.indexOf(" ")?S=(ct(T)?T.split(" ")[0]:"")+S:(_=Ab(S.substr(2),b),S=ct(T)?T:(de?Le.utils.mapRange(0,de.duration(),de.scrollTrigger.start,de.scrollTrigger.end,D):D)+_,k=ie)),S=Aa(S,"end",ke),F=Math.max(D,jc(S||(k?"100% 0":y),k,b,he,Ae()+_,Y,H,ke,m,Se,ye,y,de,ke._endClamp&&"_endClamp"))||-.001,_=0,M=P;M--;)(u=(c=kt[M]).pin)&&c.start-c._pinPush<=D&&!de&&0<c.end&&(o=c.end-(ke._startClamp?Math.max(0,c.start):c.start),(u===ie&&c.start-c._pinPush<D||u===C)&&isNaN(T)&&(_+=o*(1-c.progress)),u===ae&&(w+=o));if(D+=_,F+=_,ke._startClamp&&(ke._startClamp+=_),ke._endClamp&&!rt&&(ke._endClamp=F||-.001,F=Math.min(F,Oa(be,he))),N=F-D||(D-=.01)&&.001,x&&(Oe=Le.utils.clamp(0,1,Le.utils.normalize(D,F,re))),ke._pinPush=w,I&&_&&((o={})[he.a]="+="+_,C&&(o[he.p]="-="+Ae()),Le.set([I,Y],o)),ae)o=kb(ae),s=he===He,a=Ae(),j=parseFloat(U(he.a))+w,!y&&1<F&&(g={style:g=(me?Xe.scrollingElement||Je:be).style,value:g["overflow"+he.a.toUpperCase()]},me&&"scroll"!==kb(We)["overflow"+he.a.toUpperCase()]&&(g.style["overflow"+he.a.toUpperCase()]="scroll")),dc(ae,V,o),G=gc(ae),i=_t(ae,!0),f=ye&&K(be,s?qe:He)(),se&&(($=[se+he.os2,N+w+xt]).t=V,(M=se===bt?ob(ae,he)+N+w:0)&&$.push(he.d,M+xt),Et($),C&&kt.forEach(function(e){e.pin===C&&!1!==e.vars.pinSpacing&&(e._subPinOffset=!0)}),ye&&Ae(re)),ye&&((l={top:i.top+(s?a-D:f)+xt,left:i.left+(s?f:a-D)+xt,boxSizing:"border-box",position:"fixed"})[ft]=l.maxWidth=Math.ceil(i.width)+xt,l[dt]=l.maxHeight=Math.ceil(i.height)+xt,l[mt]=l[mt+ht]=l[mt+pt]=l[mt+vt]=l[mt+gt]="0",l[bt]=o[bt],l[bt+ht]=o[bt+ht],l[bt+pt]=o[bt+pt],l[bt+vt]=o[bt+vt],l[bt+gt]=o[bt+gt],W=function _copyState(e,t,r){for(var n,o=[],i=e.length,a=r?8:0;a<i;a+=2)n=e[a],o.push(n,n in t?t[n]:e[a+1]);return o.t=e.t,o}(X,l,fe),rt&&Ae(0)),O?(d=O._initted,et(1),O.render(O.duration(),!0,!0),Q=U(he.a)-j+N+w,Z=1<Math.abs(N-Q),ye&&Z&&W.splice(W.length-2,2),O.render(0,!0,!0),d||O.invalidate(!0),O.parent||O.totalTime(O.totalTime()),et(0)):Q=N,g&&(g.value?g.style["overflow"+he.a.toUpperCase()]=g.value:g.style.removeProperty("overflow-"+he.a));else if(ie&&Ae()&&!de)for(i=ie.parentNode;i&&i!==We;)i._pinOffset&&(D-=i._pinOffset,F-=i._pinOffset),i=i.parentNode;p&&p.forEach(function(e){return e.revert(!1,!0)}),ke.start=D,ke.end=F,R=B=rt?re:Ae(),de||rt||(R<re&&Ae(re),ke.scroll.rec=0),ke.revert(!1,!0),Ee=at(),te&&(Me=-1,te.restart(!0)),je=0,O&&ve&&(O._initted||ne)&&O.progress()!==ne&&O.progress(ne||0,!0).render(O.time(),!0,!0),(x||Oe!==ke.progress||de)&&(O&&!ve&&O.totalProgress(de&&D<-.001&&!Oe?Le.utils.normalize(D,F,0):Oe,!0),ke.progress=x||(R-D)/N===Oe?0:Oe),ae&&se&&(V._pinOffset=Math.round(ke.progress*Q)),ee&&ee.invalidate(),isNaN(h)||(h-=Le.getProperty(q,he.p),v-=Le.getProperty(H,he.p),nc(q,he,h),nc(I,he,h-(n||0)),nc(H,he,v),nc(Y,he,v-(n||0))),x&&!rt&&ke.update(),!oe||rt||L||(L=!0,oe(ke),L=!1)}},ke.getVelocity=function(){return(Ae()-B)/(at()-Ue)*1e3||0},ke.endAnimation=function(){Ua(ke.callbackAnimation),O&&(ee?ee.progress(1):O.paused()?ve||Ua(O,ke.direction<0,1):Ua(O,O.reversed()))},ke.labelToScroll=function(e){return O&&O.labels&&(D||ke.refresh()||D)+O.labels[e]/O.duration()*N||0},ke.getTrailing=function(t){var e=kt.indexOf(ke),r=0<ke.direction?kt.slice(0,e).reverse():kt.slice(e+1);return(ct(t)?r.filter(function(e){return e.vars.preventOverlaps===t}):r).filter(function(e){return 0<ke.direction?e.end<=D:e.start>=F})},ke.update=function(e,t,r){if(!de||r||e){var n,o,i,a,s,l,c,u=!0===rt?re:ke.scroll(),f=e?0:(u-D)/N,d=f<0?0:1<f?1:f||0,p=ke.progress;if(t&&(B=R,R=de?Ae():u,ue&&(w=_,_=O&&!ve?O.totalProgress():d)),M&&!d&&ae&&!je&&!it&&st&&D<u+(u-B)/(at()-Ue)*M&&(d=1e-4),d!==p&&ke.enabled){if(a=(s=(n=ke.isActive=!!d&&d<1)!=(!!p&&p<1))||!!d!=!!p,ke.direction=p<d?1:-1,ke.progress=d,a&&!je&&(o=d&&!p?0:1===d?1:1===p?2:3,ve&&(i=!s&&"none"!==_e[o+1]&&_e[o+1]||_e[o],c=O&&("complete"===i||"reset"===i||i in O))),ge&&(s||c)&&(c||P||!O)&&(Ra(ge)?ge(ke):ke.getTrailing(ge).forEach(function(e){return e.endAnimation()})),ve||(!ee||je||it?O&&O.totalProgress(d,!(!je||!Ee&&!e)):(ee._dp._time-ee._start!==ee._time&&ee.render(ee._dp._time-ee._start),ee.resetTo?ee.resetTo("totalProgress",d,O._tTime/O._tDur):(ee.vars.totalProgress=d,ee.invalidate().restart()))),ae)if(e&&se&&(V.style[se+he.os2]=m),ye){if(a){if(l=!e&&p<d&&u<F+1&&u+1>=Oa(be,he),fe)if(e||!n&&!l)lc(ae,V);else{var g=_t(ae,!0),h=u-D;lc(ae,We,g.top+(he===He?h:0)+xt,g.left+(he===He?0:h)+xt)}Et(n||l?W:G),Z&&d<1&&n||b(j+(1!==d||l?0:Q))}}else b(Ga(j+Q*d));!ue||A.tween||je||it||te.restart(!0),T&&(s||ce&&d&&(d<1||!tt))&&Ge(T.targets).forEach(function(e){return e.classList[n||ce?"add":"remove"](T.className)}),!k||ve||e||k(ke),a&&!je?(ve&&(c&&("complete"===i?O.pause().totalProgress(1):"reset"===i?O.restart(!0).pause():"restart"===i?O.restart(!0):O[i]()),k&&k(ke)),!s&&tt||(C&&s&&Va(ke,C),xe[o]&&Va(ke,xe[o]),ce&&(1===d?ke.kill(!1,1):xe[o]=0),s||xe[o=1===d?1:3]&&Va(ke,xe[o])),pe&&!n&&Math.abs(ke.getVelocity())>(Sa(pe)?pe:2500)&&(Ua(ke.callbackAnimation),ee?ee.progress(1):Ua(O,"reverse"===i?1:!d,1))):ve&&k&&!je&&k(ke)}if(x){var v=de?u/de.duration()*(de._caScrollDist||0):u;y(v+(q._isFlipped?1:0)),x(v)}S&&S(-u/de.duration()*(de._caScrollDist||0))}},ke.enable=function(e,t){ke.enabled||(ke.enabled=!0,ub(be,"resize",Jb),me||ub(be,"scroll",Hb),Te&&ub(ScrollTrigger,"refreshInit",Te),!1!==e&&(ke.progress=Oe=0,R=B=Me=Ae()),!1!==t&&ke.refresh())},ke.getTween=function(e){return e&&A?A.tween:ee},ke.setPositions=function(e,t,r,n){if(de){var o=de.scrollTrigger,i=de.duration(),a=o.end-o.start;e=o.start+a*e/i,t=o.start+a*t/i}ke.refresh(!1,!1,{start:Ba(e,r&&!!ke._startClamp),end:Ba(t,r&&!!ke._endClamp)},n),ke.update()},ke.adjustPinSpacing=function(e){if($&&e){var t=$.indexOf(he.d)+1;$[t]=parseFloat($[t])+e+xt,$[1]=parseFloat($[1])+e+xt,Et($)}},ke.disable=function(e,t){if(ke.enabled&&(!1!==e&&ke.revert(!0,!0),ke.enabled=ke.isActive=!1,t||ee&&ee.pause(),re=0,n&&(n.uncache=1),Te&&vb(ScrollTrigger,"refreshInit",Te),te&&(te.pause(),A.tween&&A.tween.kill()&&(A.tween=0)),!me)){for(var r=kt.length;r--;)if(kt[r].scroller===be&&kt[r]!==ke)return;vb(be,"resize",Jb),me||vb(be,"scroll",Hb)}},ke.kill=function(e,t){ke.disable(e,t),ee&&!t&&ee.kill(),a&&delete Tt[a];var r=kt.indexOf(ke);0<=r&&kt.splice(r,1),r===Qe&&0<Mt&&Qe--,r=0,kt.forEach(function(e){return e.scroller===ke.scroller&&(r=1)}),r||rt||(ke.scroll.rec=0),O&&(O.scrollTrigger=null,e&&O.revert({kill:!1}),t||O.kill()),I&&[I,Y,q,H].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),ot===ke&&(ot=0),ae&&(n&&(n.uncache=1),r=0,kt.forEach(function(e){return e.pin===ae&&r++}),r||(n.spacer=0)),E.onKill&&E.onKill(ke)},kt.push(ke),ke.enable(!1,!1),i&&i(ke),O&&O.add&&!N){var v=ke.update;ke.update=function(){ke.update=v,D||F||ke.refresh()},Le.delayedCall(.01,ke.update),N=.01,D=F=0}else ke.refresh();ae&&function _queueRefreshAll(){if(nt!==Ct){var e=nt=Ct;requestAnimationFrame(function(){return e===Ct&&Pt(!0)})}}()}else this.update=this.refresh=this.kill=Fa},ScrollTrigger.register=function register(e){return s||(Le=e||Ia(),Ha()&&window.document&&ScrollTrigger.enable(),s=lt),s},ScrollTrigger.defaults=function defaults(e){if(e)for(var t in e)St[t]=e[t];return St},ScrollTrigger.disable=function disable(t,r){lt=0,kt.forEach(function(e){return e[r?"kill":"disable"](t)}),vb(Ne,"wheel",Hb),vb(Xe,"scroll",Hb),clearInterval(u),vb(Xe,"touchcancel",Fa),vb(We,"touchstart",Fa),tb(vb,Xe,"pointerdown,touchstart,mousedown",Da),tb(vb,Xe,"pointerup,touchend,mouseup",Ea),c.kill(),Pa(vb);for(var e=0;e<ze.length;e+=3)wb(vb,ze[e],ze[e+1]),wb(vb,ze[e],ze[e+2])},ScrollTrigger.enable=function enable(){if(Ne=window,Xe=document,Je=Xe.documentElement,We=Xe.body,Le&&(Ge=Le.utils.toArray,Ve=Le.utils.clamp,x=Le.core.context||Fa,et=Le.core.suppressOverwrites||Fa,_=Ne.history.scrollRestoration||"auto",j=Ne.pageYOffset,Le.core.globals("ScrollTrigger",ScrollTrigger),We)){lt=1,(w=document.createElement("div")).style.height="100vh",w.style.position="absolute",Wb(),function _rafBugFix(){return lt&&requestAnimationFrame(_rafBugFix)}(),E.register(Le),ScrollTrigger.isTouch=E.isTouch,R=E.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ub(Ne,"wheel",Hb),l=[Ne,Xe,Je,We],Le.matchMedia?(ScrollTrigger.matchMedia=function(e){var t,r=Le.matchMedia();for(t in e)r.add(t,e[t]);return r},Le.addEventListener("matchMediaInit",function(){return Qb()}),Le.addEventListener("matchMediaRevert",function(){return Pb()}),Le.addEventListener("matchMedia",function(){Pt(0,1),V("matchMedia")}),Le.matchMedia("(orientation: portrait)",function(){return Ib(),Ib})):console.warn("Requires GSAP 3.11.0 or later"),Ib(),ub(Xe,"scroll",Hb);var e,t,r=We.style,n=r.borderTopStyle,o=Le.core.Animation.prototype;for(o.revert||Object.defineProperty(o,"revert",{value:function value(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",e=_t(We),He.m=Math.round(e.top+He.sc())||0,qe.m=Math.round(e.left+qe.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),u=setInterval(Gb,250),Le.delayedCall(.5,function(){return it=0}),ub(Xe,"touchcancel",Fa),ub(We,"touchstart",Fa),tb(ub,Xe,"pointerdown,touchstart,mousedown",Da),tb(ub,Xe,"pointerup,touchend,mouseup",Ea),f=Le.utils.checkPrefix("transform"),Z.push(f),s=at(),c=Le.delayedCall(.2,Pt).pause(),g=[Xe,"visibilitychange",function(){var e=Ne.innerWidth,t=Ne.innerHeight;Xe.hidden?(d=e,p=t):d===e&&p===t||Jb()},Xe,"DOMContentLoaded",Pt,Ne,"load",Pt,Ne,"resize",Jb],Pa(ub),kt.forEach(function(e){return e.enable(0,1)}),t=0;t<ze.length;t+=3)wb(vb,ze[t],ze[t+1]),wb(vb,ze[t],ze[t+2])}},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(tt=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(u)||(u=t)&&setInterval(Gb,t),"ignoreMobileResize"in e&&(b=1===ScrollTrigger.isTouch&&e.ignoreMobileResize),"autoRefreshEvents"in e&&(Pa(vb)||Pa(ub,e.autoRefreshEvents||"none"),h=-1===(e.autoRefreshEvents+"").indexOf("resize"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=J(e),n=ze.indexOf(r),o=Ja(r);~n&&ze.splice(n,o?6:2),t&&(o?Ie.unshift(Ne,t,We,t,Je,t):Ie.unshift(r,t))},ScrollTrigger.clearMatchMedia=function clearMatchMedia(t){kt.forEach(function(e){return e._ctx&&e._ctx.query===t&&e._ctx.kill(!0,!0)})},ScrollTrigger.isInViewport=function isInViewport(e,t,r){var n=(ct(e)?J(e):e).getBoundingClientRect(),o=n[r?ft:dt]*t||0;return r?0<n.right-o&&n.left+o<Ne.innerWidth:0<n.bottom-o&&n.top+o<Ne.innerHeight},ScrollTrigger.positionInViewport=function positionInViewport(e,t,r){ct(e)&&(e=J(e));var n=e.getBoundingClientRect(),o=n[r?ft:dt],i=null==t?o/2:t in q?q[t]*o:~t.indexOf("%")?parseFloat(t)*o/100:parseFloat(t)||0;return r?(n.left+i)/Ne.innerWidth:(n.top+i)/Ne.innerHeight},ScrollTrigger.killAll=function killAll(e){if(kt.slice(0).forEach(function(e){return"ScrollSmoother"!==e.vars.id&&e.kill()}),!0!==e){var t=X.killAll||[];X={},t.forEach(function(e){return e()})}},ScrollTrigger);function ScrollTrigger(e,t){s||ScrollTrigger.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),x(this),this.init(e,t)}re.version="3.12.2",re.saveStyles=function(e){return e?Ge(e).forEach(function(e){if(e&&e.style){var t=U.indexOf(e);0<=t&&U.splice(t,5),U.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),x())}}):U},re.revert=function(e,t){return Qb(!e,t)},re.create=function(e,t){return new re(e,t)},re.refresh=function(e){return e?Jb():(s||re.register())&&Pt(!0)},re.update=function(e){return++ze.cache&&Q(!0===e?2:0)},re.clearScrollMemory=Rb,re.maxScroll=function(e,t){return Oa(e,t?qe:He)},re.getScrollFunc=function(e,t){return K(J(e),t?qe:He)},re.getById=function(e){return Tt[e]},re.getAll=function(){return kt.filter(function(e){return"ScrollSmoother"!==e.vars.id})},re.isScrolling=function(){return!!st},re.snapDirectional=rb,re.addEventListener=function(e,t){var r=X[e]||(X[e]=[]);~r.indexOf(t)||r.push(t)},re.removeEventListener=function(e,t){var r=X[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},re.batch=function(e,t){function up(e,t){var r=[],n=[],o=Le.delayedCall(i,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var r,n=[],o={},i=t.interval||.016,a=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&Ra(t[r])&&"onRefreshInit"!==r?up(0,t[r]):t[r];return Ra(a)&&(a=a(),ub(re,"refresh",function(){return a=t.batchMax()})),Ge(e).forEach(function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,n.push(re.create(t))}),n};function qc(e,t,r,n){return n<t?e(n):t<0&&e(0),n<r?(n-t)/(r-t):r<0?t/(t-r):1}function rc(e,t){!0===t?e.style.removeProperty("touch-action"):e.style.touchAction=!0===t?"auto":t?"pan-"+t+(E.isTouch?" pinch-zoom":""):"none",e===Je&&rc(We,t)}function tc(e){var t,r=e.event,n=e.target,o=e.axis,i=(r.changedTouches?r.changedTouches[0]:r).target,a=i._gsap||Le.core.getCache(i),s=at();if(!a._isScrollT||2e3<s-a._isScrollT){for(;i&&i!==We&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!oe[(t=kb(i)).overflowY]&&!oe[t.overflowX]);)i=i.parentNode;a._isScroll=i&&i!==n&&!Ja(i)&&(oe[(t=kb(i)).overflowY]||oe[t.overflowX]),a._isScrollT=s}!a._isScroll&&"x"!==o||(r.stopPropagation(),r._gsapAllow=!0)}function uc(e,t,r,n){return E.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&tc,onPress:n,onDrag:n,onScroll:n,onEnable:function onEnable(){return r&&ub(Xe,E.eventTypes[0],ae,!1,!0)},onDisable:function onDisable(){return vb(Xe,E.eventTypes[0],ae,!0)}})}function yc(e){function rq(){return o=!1}function uq(){i=Oa(p,He),T=Ve(R?1:0,i),f&&(k=Ve(0,Oa(p,qe))),l=Ct}function vq(){v._gsap.y=Ga(parseFloat(v._gsap.y)+b.offset)+"px",v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(v._gsap.y)+", 0, 1)",b.offset=b.cacheID=0}function Bq(){uq(),a.isActive()&&a.vars.scrollY>i&&(b()>i?a.progress(1)&&b(i):a.resetTo("scrollY",i))}Ta(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n,i,l,o,a,c,u,s,f=e.normalizeScrollX,t=e.momentum,r=e.allowNestedScroll,d=e.onRelease,p=J(e.target)||Je,g=Le.core.globals().ScrollSmoother,h=g&&g.get(),v=R&&(e.content&&J(e.content)||h&&!1!==e.content&&!h.smooth()&&h.content()),b=K(p,He),m=K(p,qe),y=1,x=(E.isTouch&&Ne.visualViewport?Ne.visualViewport.scale*Ne.visualViewport.width:Ne.outerWidth)/Ne.innerWidth,_=0,w=Ra(t)?function(){return t(n)}:function(){return t||2.8},S=uc(p,e.type,!0,r),k=Fa,T=Fa;return v&&Le.set(v,{y:"+=0"}),e.ignoreCheck=function(e){return R&&"touchmove"===e.type&&function ignoreDrag(){if(o){requestAnimationFrame(rq);var e=Ga(n.deltaY/2),t=T(b.v-e);if(v&&t!==b.v+b.offset){b.offset=t-b.v;var r=Ga((parseFloat(v&&v._gsap.y)||0)-b.offset);v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+r+", 0, 1)",v._gsap.y=r+"px",b.cacheID=ze.cache,Q()}return!0}b.offset&&vq(),o=!0}()||1.05<y&&"touchstart"!==e.type||n.isGesturing||e.touches&&1<e.touches.length},e.onPress=function(){o=!1;var e=y;y=Ga((Ne.visualViewport&&Ne.visualViewport.scale||1)/x),a.pause(),e!==y&&rc(p,1.01<y||!f&&"x"),c=m(),u=b(),uq(),l=Ct},e.onRelease=e.onGestureStart=function(e,t){if(b.offset&&vq(),t){ze.cache++;var r,n,o=w();f&&(n=(r=m())+.05*o*-e.velocityX/.227,o*=qc(m,r,n,Oa(p,qe)),a.vars.scrollX=k(n)),n=(r=b())+.05*o*-e.velocityY/.227,o*=qc(b,r,n,Oa(p,He)),a.vars.scrollY=T(n),a.invalidate().duration(o).play(.01),(R&&a.vars.scrollY>=i||i-1<=r)&&Le.to({},{onUpdate:Bq,duration:o})}else s.restart(!0);d&&d(e)},e.onWheel=function(){a._ts&&a.pause(),1e3<at()-_&&(l=0,_=at())},e.onChange=function(e,t,r,n,o){if(Ct!==l&&uq(),t&&f&&m(k(n[2]===t?c+(e.startX-e.x):m()+t-n[1])),r){b.offset&&vq();var i=o[2]===r,a=i?u+e.startY-e.y:b()+r-o[1],s=T(a);i&&a!==s&&(u+=s-a),b(s)}(r||t)&&Q()},e.onEnable=function(){rc(p,!f&&"x"),re.addEventListener("refresh",Bq),ub(Ne,"resize",Bq),b.smooth&&(b.target.style.scrollBehavior="auto",b.smooth=m.smooth=!1),S.enable()},e.onDisable=function(){rc(p,!0),vb(Ne,"resize",Bq),re.removeEventListener("refresh",Bq),S.kill()},e.lockAxis=!1!==e.lockAxis,((n=new E(e)).iOS=R)&&!b()&&b(1),R&&Le.ticker.add(Fa),s=n._dc,a=Le.to(n,{ease:"power4",paused:!0,scrollX:f?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:mc(b,b(),function(){return a.pause()})},onUpdate:Q,onComplete:s.vars.onComplete}),n}var ne,oe={auto:1,scroll:1},ie=/(input|label|select|textarea)/i,ae=function _captureInputs(e){var t=ie.test(e.target.tagName);(t||ne)&&(e._gsapAllow=!0,ne=t)};re.sort=function(e){return kt.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},re.observe=function(e){return new E(e)},re.normalizeScroll=function(e){if(void 0===e)return v;if(!0===e&&v)return v.enable();if(!1===e)return v&&v.kill();var t=e instanceof E?e:yc(e);return v&&v.target===t.target&&v.kill(),Ja(t.target)&&(v=t),t},re.core={_getVelocityProp:L,_inputObserver:uc,_scrollers:ze,_proxies:Ie,bridge:{ss:function ss(){st||V("scrollStart"),st=at()},ref:function ref(){return je}}},Ia()&&Le.registerPlugin(re),e.ScrollTrigger=re,e.default=re;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});
/****************************************************************************/
         /*/Applications/MAMP/htdocs/thechange/web/app/themes/thechange/js/vendor/scroll-lock.js */
         /***************************************************************************/
         /* fixes funky behaviour for locking the bodies scroll position for overlays, menu's etc */
/* Source: https://github.com/willmcpo/body-scroll-lock */
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
      define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.bodyScrollLock = mod.exports;
    }
  })(this, function (exports) {
    'use strict';
  
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  
    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
  
        return arr2;
      } else {
        return Array.from(arr);
      }
    }
  
    // Older browsers don't support event options, feature detect it.
  
    // Adopted and modified solution from Bohdan Didukh (2017)
    // https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi
  
    var hasPassiveEvents = false;
    if (typeof window !== 'undefined') {
      var passiveTestOptions = {
        get passive() {
          hasPassiveEvents = true;
          return undefined;
        }
      };
      window.addEventListener('testPassive', null, passiveTestOptions);
      window.removeEventListener('testPassive', null, passiveTestOptions);
    }
  
    var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);
  
  
    var locks = [];
    var documentListenerAdded = false;
    var initialClientY = -1;
    var previousBodyOverflowSetting = void 0;
    var previousBodyPosition = void 0;
    var previousBodyPaddingRight = void 0;
  
    // returns true if `el` should be allowed to receive touchmove events.
    var allowTouchMove = function allowTouchMove(el) {
      return locks.some(function (lock) {
        if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
          return true;
        }
  
        return false;
      });
    };
  
    var preventDefault = function preventDefault(rawEvent) {
      var e = rawEvent || window.event;
  
      // For the case whereby consumers adds a touchmove event listener to document.
      // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
      // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
      // the touchmove event on document will break.
      if (allowTouchMove(e.target)) {
        return true;
      }
  
      // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
      if (e.touches.length > 1) return true;
  
      if (e.preventDefault) e.preventDefault();
  
      return false;
    };
  
    var setOverflowHidden = function setOverflowHidden(options) {
      // If previousBodyPaddingRight is already set, don't set it again.
      if (previousBodyPaddingRight === undefined) {
        var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
        var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
  
        if (_reserveScrollBarGap && scrollBarGap > 0) {
          var computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'), 10);
          previousBodyPaddingRight = document.body.style.paddingRight;
          document.body.style.paddingRight = computedBodyPaddingRight + scrollBarGap + 'px';
        }
      }
  
      // If previousBodyOverflowSetting is already set, don't set it again.
      if (previousBodyOverflowSetting === undefined) {
        previousBodyOverflowSetting = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      }
    };
  
    var restoreOverflowSetting = function restoreOverflowSetting() {
      if (previousBodyPaddingRight !== undefined) {
        document.body.style.paddingRight = previousBodyPaddingRight;
  
        // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
        // can be set again.
        previousBodyPaddingRight = undefined;
      }
  
      if (previousBodyOverflowSetting !== undefined) {
        document.body.style.overflow = previousBodyOverflowSetting;
  
        // Restore previousBodyOverflowSetting to undefined
        // so setOverflowHidden knows it can be set again.
        previousBodyOverflowSetting = undefined;
      }
    };
  
    var setPositionFixed = function setPositionFixed() {
      return window.requestAnimationFrame(function () {
        // If previousBodyPosition is already set, don't set it again.
        if (previousBodyPosition === undefined) {
          previousBodyPosition = {
            position: document.body.style.position,
            top: document.body.style.top,
            left: document.body.style.left
          };
  
          // Update the dom inside an animation frame
          var _window = window,
              scrollY = _window.scrollY,
              scrollX = _window.scrollX,
              innerHeight = _window.innerHeight;
  
          document.body.style.position = 'fixed';
          document.body.style.top = -scrollY + 'px';
          document.body.style.left = -scrollX + 'px';
  
          setTimeout(function () {
            return window.requestAnimationFrame(function () {
              // Attempt to check if the bottom bar appeared due to the position change
              var bottomBarHeight = innerHeight - window.innerHeight;
              if (bottomBarHeight && scrollY >= innerHeight) {
                // Move the content further up so that the bottom bar doesn't hide it
                document.body.style.top = -(scrollY + bottomBarHeight);
              }
            });
          }, 300);
        }
      });
    };
  
    var restorePositionSetting = function restorePositionSetting() {
      if (previousBodyPosition !== undefined) {
        // Convert the position from "px" to Int
        var y = -parseInt(document.body.style.top, 10);
        var x = -parseInt(document.body.style.left, 10);
  
        // Restore styles
        document.body.style.position = previousBodyPosition.position;
        document.body.style.top = previousBodyPosition.top;
        document.body.style.left = previousBodyPosition.left;
  
        // Restore scroll
        window.scrollTo(x, y);
  
        previousBodyPosition = undefined;
      }
    };
  
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
    var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
      return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
    };
  
    var handleScroll = function handleScroll(event, targetElement) {
      var clientY = event.targetTouches[0].clientY - initialClientY;
  
      if (allowTouchMove(event.target)) {
        return false;
      }
  
      if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
        // element is at the top of its scroll.
        return preventDefault(event);
      }
  
      if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
        // element is at the bottom of its scroll.
        return preventDefault(event);
      }
  
      event.stopPropagation();
      return true;
    };
  
    var disableBodyScroll = exports.disableBodyScroll = function disableBodyScroll(targetElement, options) {
      // targetElement must be provided
      if (!targetElement) {
        // eslint-disable-next-line no-console
        console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
        return;
      }
  
      // disableBodyScroll must not have been called on this targetElement before
      if (locks.some(function (lock) {
        return lock.targetElement === targetElement;
      })) {
        return;
      }
  
      var lock = {
        targetElement: targetElement,
        options: options || {}
      };
  
      locks = [].concat(_toConsumableArray(locks), [lock]);
  
      if (isIosDevice) {
        setPositionFixed();
      } else {
        setOverflowHidden(options);
      }
  
      if (isIosDevice) {
        targetElement.ontouchstart = function (event) {
          if (event.targetTouches.length === 1) {
            // detect single touch.
            initialClientY = event.targetTouches[0].clientY;
          }
        };
        targetElement.ontouchmove = function (event) {
          if (event.targetTouches.length === 1) {
            // detect single touch.
            handleScroll(event, targetElement);
          }
        };
  
        if (!documentListenerAdded) {
          document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
          documentListenerAdded = true;
        }
      }
    };
  
    var clearAllBodyScrollLocks = exports.clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
      if (isIosDevice) {
        // Clear all locks ontouchstart/ontouchmove handlers, and the references.
        locks.forEach(function (lock) {
          lock.targetElement.ontouchstart = null;
          lock.targetElement.ontouchmove = null;
        });
  
        if (documentListenerAdded) {
          document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
          documentListenerAdded = false;
        }
  
        // Reset initial clientY.
        initialClientY = -1;
      }
  
      if (isIosDevice) {
        restorePositionSetting();
      } else {
        restoreOverflowSetting();
      }
  
      locks = [];
    };
  
    var enableBodyScroll = exports.enableBodyScroll = function enableBodyScroll(targetElement) {
      if (!targetElement) {
        // eslint-disable-next-line no-console
        console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
        return;
      }
  
      locks = locks.filter(function (lock) {
        return lock.targetElement !== targetElement;
      });
  
      if (isIosDevice) {
        targetElement.ontouchstart = null;
        targetElement.ontouchmove = null;
  
        if (documentListenerAdded && locks.length === 0) {
          document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
          documentListenerAdded = false;
        }
      }
  
      if (isIosDevice) {
        restorePositionSetting();
      } else {
        restoreOverflowSetting();
      }
    };
  });
  /****************************************************************************/
         /*/Applications/MAMP/htdocs/thechange/web/app/themes/thechange/js/theme.js */
         /***************************************************************************/
         document.addEventListener("DOMContentLoaded", function() {

  animateSection();

});

function animateSection() {

  if (!jQuery('.animate-in').length) return;

  jQuery('.animate-in').each(function () {

      var $this = jQuery(this);

      ScrollTrigger.create({
          trigger: $this[0],
          start: "top bottom-=100",
          onEnter: function () {
              $this.find('.inner-wide').addClass('in-viewport');
              $this.find('.inner').addClass('in-viewport');
              $this.find('.inner-narrow').addClass('in-viewport');
              $this.find('.text-image-wrapper').addClass('in-viewport');
              $this.find('.hero-image-container').addClass('in-viewport');
              $this.find('.bubbles-slider').addClass('in-viewport');
          }
      });
  });

}/****************************************************************************/
         /*/Applications/MAMP/htdocs/thechange/web/app/themes/thechange/blocks/backgrounds/background.js */
         /***************************************************************************/
         document.addEventListener("DOMContentLoaded", function() {
    
});/****************************************************************************/
         /*/Applications/MAMP/htdocs/thechange/web/app/themes/thechange/blocks/bubbles/bubbles.js */
         /***************************************************************************/
         document.addEventListener("DOMContentLoaded", function() {
   
    /* Make sure the slider actually exists before initializing the slider */
    if (jQuery('.bubbles.container').length == 0) {
        return;
    }

    /* Show profile for the clicked person */
    jQuery('.bubbles.container .bubble').off().click(function(){

        /* Make sure profile big is done animating */
        if( jQuery('.profile-big').is(':animated') ) { return; }
        
        /* Set clicked bubble as active */
        jQuery('.bubbles.container .bubble').removeClass('active');
        jQuery(this).addClass('active');
        
        /* If a profile is already being shown, hide it */
        jQuery('.profile-big').removeClass('fade');
        jQuery('.profile-big').removeClass('active'); 
        
        $profile = jQuery(this).attr('data-profile');
        jQuery('[data-profile="'+ $profile +'"]').addClass('active');
        setTimeout(function(){ 
            jQuery('[data-profile="'+ $profile +'"]').addClass('fade');
        }, 50);

    });

    /* Save slider object to array */
    var bubblesSlider = new Array();

    /* Loop through all the sliders */
    jQuery('section.bubbles .keen-slider').each(function(i){

        var $this = jQuery(this);
        var $slides = $this.children().length;
        //var animation = { duration: ($slides * 32000), easing: (t) => t };
        
        let keenOptions = {
            selector: '.' + $this.children()[0].classList[0],
            slides: {
                perView: '5',
                spacing: () => {
                  return jQuery(window).width() * 0.03;
                }
            },
            mode: 'free-snap',
            loop: true,
            created: (s) => {
               $this.addClass('keen-slider').children().addClass('keen-slide');
            },
            breakpoints: {
                "(max-width: 1600px)": {
                    slides: {
                        perView: '4',
                        spacing: () => {
                            return jQuery(window).width() * 0.03;
                        }
                    }
                },
                "(max-width: 1200px)": {
                    slides: {
                        perView: '3',
                        spacing: () => {
                            return jQuery(window).width() * 0.03;
                        }
                    }
                },
                "(max-width: 900px)": {
                    slides: {
                        perView: '2',
                        spacing: () => {
                            return jQuery(window).width() * 0.03;
                        }
                    }
                },
                "(max-width: 600px)": {
                    slides: {
                        perView: '1.5',
                        spacing: '20'
                    }
                },

            }
        };

        bubblesSlider[i] = new KeenSlider($this[0], keenOptions);

        /* Slide to the left when clicking on .slide-left */
        $this.siblings('.slide-left').click(function(){
            bubblesSlider[i].prev();
        });
        $this.siblings('.slide-right').click(function(){
            bubblesSlider[i].next();
        });

    });

});/****************************************************************************/
         /*/Applications/MAMP/htdocs/thechange/web/app/themes/thechange/blocks/downloads/downloads.js */
         /***************************************************************************/
         jQuery(document).ready(function () {

    /* Make sure the block actually exists before continueing */
    if (!jQuery('section.drop-down').length) { return; }

    jQuery('.drop-down-row .title').click(function () { 

        var $this = jQuery(this).closest('.drop-down-row');

        jQuery('.drop-down-row').not($this).removeClass('active');
        jQuery('.drop-down-row').not($this).find('.content').slideUp();

        $this.toggleClass('active');
        $this.find('.content').slideToggle();

    });
    
    /* Scroll to corresponding section when clicking on a menu item */
    jQuery('.menu-hotlink').click(function () {

        /* Get current menu item eq */
        var $current = jQuery(this).index();

        /* Scroll to corresponding section */
        jQuery('html, body').animate({
            scrollTop: jQuery(".dropdown-title").eq( $current - 1 ).offset().top - 60
        }, 800);

    });

});/****************************************************************************/
         /*/Applications/MAMP/htdocs/thechange/web/app/themes/thechange/blocks/header/header.js */
         /***************************************************************************/
         var menu = 'closed';
jQuery(document).ready(function () {
    
    jQuery('.mobile-menu-trigger').click(function () {
        (menu == 'closed') ? openMenu() : closeMenu();
    });
    
    jQuery('.mobile-menu-viewport .menu-item-has-children > a').removeAttr('href');
    jQuery('.mobile-menu-viewport .menu-item-has-children').click(function(e){
      
       let $this = jQuery(this);
       /* close other menu's */
       if(!$this.hasClass('active')){
          jQuery('.mobile-menu-viewport .menu-item-has-children.active').toggleClass('active').find('ul.sub-menu').slideToggle(400, 'swing');
       }
       
       $this.toggleClass('active');
       $this.find('ul.sub-menu').slideToggle(400, 'swing');
    });

});

function openMenu() {
   jQuery('header').addClass('headroom--menu-open').addClass('headroom--menu-opened');
   jQuery('.mobile-menu-bg').removeClass('mobile-menu-bg--hidden').addClass('mobile-menu-bg--show');
   jQuery('.mobile-menu-trigger').removeClass('mobile-menu-trigger--initial').addClass('mobile-menu-trigger--close');
   jQuery('.mobile-menu-container').addClass('mobile-menu-container--show');
   jQuery('.mobile-menu-viewport').addClass('mobile-menu-viewport--active');
    
   
   var duration = 1; 
   var y = 120;
   jQuery('.mobile-menu-container a:visible').each(function () {

        var $this = jQuery(this);
        

        duration -= 0.1; 
        y -= 10;

   });

    gsap.from(jQuery('.mobile-menu-container a:visible'), {
        duration: 0.8,
        ease: "elastic.out(1, 0.75)",
        y: 30,
        scale: 0.75,
        delay: 0.4,
        opacity: 0,
        stagger: 0.04
    });


   menu = 'open';
   bodyScrollLock.disableBodyScroll(document.querySelector('.mobile-menu-viewport'));
}

function closeMenu() {
   if (menu == 'open') {
      jQuery('.mobile-menu-bg').addClass('mobile-menu-bg--hidden').removeClass('mobile-menu-bg--show');
      jQuery('.mobile-menu-container').removeClass('mobile-menu-container--show');
      jQuery('.mobile-menu-trigger').removeClass('mobile-menu-trigger--close').addClass('mobile-menu-trigger--initial');
      jQuery('header').removeClass('headroom--menu-open').removeClass('headroom--menu-opened');
      jQuery('.mobile-menu-viewport').removeClass('mobile-menu-viewport--active');
      menu = 'closed';
      bodyScrollLock.enableBodyScroll(document.querySelector('.mobile-menu-viewport'));
   }
}

document.addEventListener("DOMContentLoaded", function () {
      
    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: function (scroll) {
            if(scroll.direction === -1){
               jQuery('header').addClass('scrolling-up').removeClass('scrolling-down');
            }else{
               jQuery('header').addClass('scrolling-down').removeClass('scrolling-up');
            }

            if(scroll.progress === 0){
               jQuery('header').addClass('top').removeClass('not-top');
            }else{
               jQuery('header').addClass('not-top').removeClass('top');
            }
        }
    });

});/****************************************************************************/
         /*/Applications/MAMP/htdocs/thechange/web/app/themes/thechange/blocks/header-background/header-background.js */
         /***************************************************************************/
         document.addEventListener("DOMContentLoaded", function () {

    /* Make sure the slider actually exists before initializing the slider */
    if (jQuery('section.header-bubble').length == 0) {
        return;
    }

    /* Start the animation as soon as page is loaded */ 
    $container = jQuery('section.header-bubble');
    
    gsap.to($container.find('.bg-pattern'), {
        duration: 1.2,
        y: '0px', 
        rotate: '0deg',
        opacity: 1,
    });

    gsap.to($container.find('.text'), {
        duration: 1.2,  
        y: '0px', 
        opacity: 1,
        delay: 0
    });

    gsap.to($container.find('.cta-image picture'), {
        duration: 1.2,
        y: '0px', 
        opacity: 1,
        delay: 0
    });

    gsap.to($container.find('.cta'), {
        duration: 1.2,
        y: '0px', 
        scale: 1,
        opacity: 1,
        delay: 0
    });

    gsap.to($container.find('.inner-slide'), {
        duration: 3,
        y: '0px', 
        ease: "elastic.out(1, 0.6)",
        scale: 1,
        opacity: 1,
        delay: 0,
        stagger: 0.1
    });

    gsap.to($container.find('.slide-right'), {
        duration: 0.4,
        opacity: 1,
        delay: 0.4
    });




    var HBSlider = new Array();
    jQuery('section.header-bubble .keen-slider').each(function (i) {

        var $this = jQuery(this);
        var $slides = $this.children().length;
        //var animation = { duration: ($slides * 20000), easing: (t) => t };

        let keenOptions = {
            selector: '.' + $this.children()[0].classList[0],
            slides: {
                perView: 'auto',
                spacing: '30'
            },
            mode: 'free-snap',
            loop: false,
            created: (s) => {
                $this.addClass('keen-slider').children().addClass('keen-slide');
            },
            breakpoints: {
                "(max-width: 700px)": {
                    slides: {
                        perView: 'auto',
                        spacing: '20'
                    }
                }
            }
        };

        HBSlider[i] = new KeenSlider($this[0], keenOptions);

        $this.siblings('.slide-right').click(function(){
            HBSlider[i].next();
        });
    });

});/****************************************************************************/
         /*/Applications/MAMP/htdocs/thechange/web/app/themes/thechange/blocks/header-bubble/header-bubble.js */
         /***************************************************************************/
         document.addEventListener("DOMContentLoaded", function () {

    /* Make sure the slider actually exists before initializing the slider */
    if (jQuery('section.header-bubble').length == 0) {
        return;
    }

    /* Start the animation as soon as page is loaded */ 
    $container = jQuery('section.header-bubble');
    
    gsap.to($container.find('.bg-pattern'), {
        duration: 1.2,
        y: '0px', 
        rotate: '0deg',
        opacity: 1,
    });

    gsap.to($container.find('.text'), {
        duration: 1.2,  
        y: '0px', 
        opacity: 1,
        delay: 0
    });

    gsap.to($container.find('.cta-image picture'), {
        duration: 1.2,
        y: '0px', 
        opacity: 1,
        delay: 0
    });

    gsap.to($container.find('.cta'), {
        duration: 1.2,
        y: '0px', 
        scale: 1,
        opacity: 1,
        delay: 0
    });

    gsap.to($container.find('.inner-slide'), {
        duration: 3,
        y: '0px', 
        ease: "elastic.out(1, 0.6)",
        scale: 1,
        opacity: 1,
        delay: 0,
        stagger: 0.1
    });

    gsap.to($container.find('.slide-right'), {
        duration: 0.4,
        opacity: 1,
        delay: 0.4
    });




    var HBSlider = new Array();
    jQuery('section.header-bubble .keen-slider').each(function (i) {

        var $this = jQuery(this);
        var $slides = $this.children().length;
        //var animation = { duration: ($slides * 20000), easing: (t) => t };

        let keenOptions = {
            selector: '.' + $this.children()[0].classList[0],
            slides: {
                perView: 'auto',
                spacing: '30'
            },
            mode: 'free-snap',
            loop: false,
            created: (s) => {
                $this.addClass('keen-slider').children().addClass('keen-slide');
            },
            breakpoints: {
                "(max-width: 700px)": {
                    slides: {
                        perView: 'auto',
                        spacing: '20'
                    }
                }
            }
        };

        HBSlider[i] = new KeenSlider($this[0], keenOptions);

        $this.siblings('.slide-right').click(function(){
            HBSlider[i].next();
        });
    });

});/****************************************************************************/
         /*/Applications/MAMP/htdocs/thechange/web/app/themes/thechange/blocks/header-image/header-image.js */
         /***************************************************************************/
         document.addEventListener("DOMContentLoaded", function() {

    if (!jQuery('section.header-image').length) { return; }

    /* Check if this block is the first child */
    var isFirst = jQuery('section.header-image').parent().children().first().hasClass('header-image');

    if(isFirst){
        jQuery('header').addClass('white');
    }

    
});
/****************************************************************************/
         /*/Applications/MAMP/htdocs/thechange/web/app/themes/thechange/blocks/news-slider/news-slider.js */
         /***************************************************************************/
         jQuery(document).ready(function(){

    /* Make sure the slider actually exists before initializing the slider */
    if (jQuery('section.news-slider .keen-slider').length == 0) {
        return;
    }
    
    /* Save slider object to array */
    var newsSlider = new Array();

    /* Loop through all the sliders */
    jQuery('section.news-slider .keen-slider').each(function(i){

        var $this = jQuery(this);
        
        let keenOptions = {
            selector: '.' + $this.children()[0].classList[0],
            slides: {
                perView: 3,
                spacing: '26'
            },
            animationStarted: (props) => {
                $this.children().removeClass('active');
                $this.children().eq(props.animator.targetIdx).addClass('active');

                /* Hide slider controls when at the beginning or at the end of the slides */
                $this.siblings('.slide-left').removeClass('hide');
                $this.siblings('.slide-right').removeClass('hide');
                if (props.animator.targetIdx == 0) {
                    $this.siblings('.slide-left').addClass('hide');
                }
                if (props.animator.targetIdx == $this.children().length - props.options.slides.perView) {
                    $this.siblings('.slide-right').addClass('hide');
                }

            },
            created: (instance) => {
               $this.children().eq(0).addClass('active');
               $this.addClass('keen-slider').children().addClass('keen-slide');
            },
            breakpoints: {
                "(max-width: 1200px)": {
                    slides: {
                        perView: 2,
                        spacing: 30
                    }
                },
                "(max-width: 800px)": {
                    slides: {
                        perView: 1.1,
                        spacing: 10
                    }
                }
            }

        };

        newsSlider[i] = new KeenSlider($this[0], keenOptions);

        /* Slide to the left when clicking on .slide-left */
        $this.siblings('.slide-left').click(function(){
            newsSlider[i].prev();
        });
        $this.siblings('.slide-right').click(function(){
            newsSlider[i].next();
        });

    });
    
});/****************************************************************************/
         /*/Applications/MAMP/htdocs/thechange/web/app/themes/thechange/blocks/search/search.js */
         /***************************************************************************/
         jQuery('document').ready(function(){

    /* Make sure the search block exists, otherwise return; */
    if (!jQuery('section.search').length) {
        return;
    }

    /* Begin the search when the user presses enter, or clicks on the search CTA */
    jQuery('input.search-input').keyup(function (e) {
        
        /* keyCode 13 is the enter key */
        if (e.keyCode == 13) {
           e.preventDefault();
           e.target.blur();
           let $search = jQuery(this).val();
           search($search);
        }

     });
     
     /* Search when the user clicks on the search-cta */
     jQuery('.search-cta a').click(function (e) {
        
           let $search = jQuery('input.search-input').val();
           search($search);

     });
    
});


function search($search) {

    /* set loading state */
    jQuery('section.search').addClass('loading');

    /* Add $search to the url without reloading the page */
    let urlPath = window.location.href.split('?')[0] + '?search=' + $search;
    window.history.pushState("", "", urlPath);
    
    /* Pass the filter values to the ajax function, and reload the items */
    var data = {
        'action': 'ajax_search',
        'search': $search,
    };

    /* Get html through ajax */
    jQuery.post(theme.ajax_url, data, function (response) {
        
        /* If there is no response, something went bad */
        if (!response) { 
            jQuery('section.search .search-notice p.notice').html('Er is iets fout gegaan, probeer het later opnieuw.'); 
            return;
        }
            
        /* Set results HTML */
        jQuery('section.search .results-container').html(response.html);
        jQuery('section.search .search-notice p.notice').html(response.notice);
            
        /* Remove loading state */
        jQuery('section.search').removeClass('loading');

    });

}/****************************************************************************/
         /*/Applications/MAMP/htdocs/thechange/web/app/themes/thechange/blocks/subjects/subjects.js */
         /***************************************************************************/
         document.addEventListener("DOMContentLoaded", function () {
    addSubjectEffects();
});

function addSubjectEffects() {

    /* Make sure the slider actually exists before initializing the slider */
    if (jQuery('section.subjects').length == 0) {
        return;
    }

    /* Show all subjects on desktop, show slider on mobile? */

    ScrollTrigger.create({
        trigger: jQuery('section.subjects')[0], 
        start: "top bottom-=200",
        onEnter: function () {
            gsap.to(jQuery('section.subjects a'), {
                duration: 2.5,
                ease: "elastic.out(1, 0.5)", 
                y: '0px', 
                delay: 0,
                opacity: 1, 
                stagger: 0.06
            });
        }
    });

        // /* Save slider object to array */
        // var tagSlider = new Array();

        // /* Loop through all the sliders */
        // jQuery('section.subjects .keen-slider').each(function (i) {

        //     var $this = jQuery(this);
        //     var $slides = $this.children().length;
        //     var animation = { duration: ($slides * 20000), easing: (t) => t };

        //     let keenOptions = {
        //         selector: '.' + $this.children()[0].classList[0],
        //         slides: {
        //             perView: 'auto',
        //             spacing: '10'
        //         },
        //         mode: 'free-snap',
        //         loop: true,
        //         created: (s) => {
        //             $this.addClass('keen-slider').children().addClass('keen-slide');
        //             s.moveToIdx(s.track.details.abs + ($slides - 1), true, animation)
        //          },
        //          updated(s) {
        //              s.moveToIdx(s.track.details.abs + ($slides - 1), true, animation)
        //          },
        //          animationEnded(s) {
        //              s.moveToIdx(s.track.details.abs + ($slides - 1), true, animation)
        //          }
        //     };

        //     tagSlider[i] = new KeenSlider($this[0], keenOptions);
        // });
}/****************************************************************************/
         /*/Applications/MAMP/htdocs/thechange/web/app/themes/thechange/blocks/text-blocks-3/text-blocks-3.js */
         /***************************************************************************/
         document.addEventListener("DOMContentLoaded", function () {
    

    jQuery('section.text-blocks-3').each(function(){

        var $this = jQuery(this);

        ScrollTrigger.create({
            trigger: $this[0],  
            start: "top 85%", 
            onEnter: function () {
                gsap.to($this.find('.text-block'), {
                    duration: 3, 
                    ease: "elastic.out(1, 0.4)", 
                    y: '0px', 
                    delay: 0.4,
                    opacity: 1,
                    stagger: 0.1
                });
            }
        });

    });

});