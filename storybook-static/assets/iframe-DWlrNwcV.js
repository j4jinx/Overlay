function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Overlay.stories-D6tlTlQh.js","./index-BBkUAzwr.js","./v4-D8aEg3BZ.js","./index-YMbfICiA.js","./entry-preview-Xn6uC1vK.js","./react-18-DHj1n7xi.js","./entry-preview-docs-BIpnNR0g.js","./_getPrototype-BVQBtff3.js","./index-DrFu-skq.js","./preview-DzbRFJg_.js","./index-B_J8iUie.js","./preview-K4_qCkL4.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const p="modulepreload",R=function(_,s){return new URL(_,s).href},E={},o=function(s,c,l){let e=Promise.resolve();if(c&&c.length>0){const t=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),d=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.all(c.map(i=>{if(i=R(i,l),i in E)return;E[i]=!0;const u=i.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!l)for(let a=t.length-1;a>=0;a--){const m=t[a];if(m.href===i&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${f}`))return;const n=document.createElement("link");if(n.rel=u?"stylesheet":p,u||(n.as="script",n.crossOrigin=""),n.href=i,d&&n.setAttribute("nonce",d),document.head.appendChild(n),u)return new Promise((a,m)=>{n.addEventListener("load",a),n.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})}))}return e.then(()=>s()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:P}=__STORYBOOK_MODULE_CHANNELS__,{addons:w}=__STORYBOOK_MODULE_PREVIEW_API__,O=P({page:"preview"});w.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const T={"./.storybook/Overlay.stories.jsx":async()=>o(()=>import("./Overlay.stories-D6tlTlQh.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)};async function L(_){return T[_]()}const{composeConfigs:h,PreviewWeb:v,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,y=async()=>{const _=await Promise.all([o(()=>import("./entry-preview-Xn6uC1vK.js"),__vite__mapDeps([4,1,5]),import.meta.url),o(()=>import("./entry-preview-docs-BIpnNR0g.js"),__vite__mapDeps([6,7,1,3,8]),import.meta.url),o(()=>import("./preview-DzbRFJg_.js"),__vite__mapDeps([9,10]),import.meta.url),o(()=>import("./preview-KtcyPIKG.js"),[],import.meta.url),o(()=>import("./preview-K4_qCkL4.js"),__vite__mapDeps([11,2]),import.meta.url),o(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([12,8]),import.meta.url),o(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),o(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),o(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([13,8]),import.meta.url),o(()=>import("./preview-Cv3rAi2i.js"),[],import.meta.url)]);return h(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new v(L,y);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{o as _};
