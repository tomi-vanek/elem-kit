var g=Object.defineProperty;var u=t=>{throw TypeError(t)};var $=(t,e,s)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var c=(t,e,s)=>$(t,typeof e!="symbol"?e+"":e,s),m=(t,e,s)=>e.has(t)||u("Cannot "+s);var d=(t,e,s)=>e.has(t)?u("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s);var i=(t,e,s)=>(m(t,e,"access private method"),s);function C(t,e){return t?`${t.substring(0,t.lastIndexOf("/")+1)}${e}.css`:`scripts/elem-kit/${e}/${e}.css`}function w(t){return`${t.substring(0,t.lastIndexOf("/")+1)}../ek-styles/ek-base.css`}function k(t,e){const s=w(t),n=C(t,e);return`
    <link rel="stylesheet" href="${s}"> 
    <link rel="stylesheet" href="${n}">
  `}var a,f,l;const r=class r extends HTMLElement{constructor(){super();d(this,a);this.attachShadow({mode:"open"})}connectedCallback(){i(this,a,l).call(this)}attributeChangedCallback(s,n,o){n!==o&&this.isConnected&&i(this,a,l).call(this)}};a=new WeakSet,f=async function(s){const n=localStorage.getItem(`icon-${s}`);if(n)return n;try{const o=await fetch(`node_modules/bootstrap-icons/icons/${s}.svg`);if(!o.ok)throw new Error(`Icon ${s} not found`);const h=await o.text();return localStorage.setItem(`icon-${s}`,h),h}catch(o){return console.error("Error loading icon:",o),null}},l=async function(){const s=this.getAttribute("name");if(!s)return;this.shadowRoot.innerHTML=`${k(import.meta.url,r.elemName)}<div class="icon-container">Loading...</div>`;const[n,o]=[await i(this,a,f).call(this,s),this.shadowRoot.querySelector(".icon-container")];o&&n&&(o.innerHTML=n)},c(r,"elemName","ek-icon"),c(r,"observedAttributes",["name","size"]);let b=r;export{b as E,k as l};
