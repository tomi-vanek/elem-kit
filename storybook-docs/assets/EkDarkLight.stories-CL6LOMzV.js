var L=Object.defineProperty;var g=r=>{throw TypeError(r)};var M=(r,t,e)=>t in r?L(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var u=(r,t,e)=>M(r,typeof t!="symbol"?t+"":t,e),k=(r,t,e)=>t.has(r)||g("Cannot "+e);var y=(r,t,e)=>(k(r,t,"read from private field"),e?e.call(r):t.get(r)),p=(r,t,e)=>t.has(r)?g("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e);var v=(r,t,e)=>(k(r,t,"access private method"),e);import{l as O}from"./EkIcon-CkJlZoQ0.js";import{E as h}from"./EkButton-3GWYNygD.js";var l,c,A;const m=class m extends HTMLElement{constructor(){super();p(this,c);p(this,l,e=>{var n;e.preventDefault(),e.stopPropagation(),this.isDark=!this.isDark,(n=this.shadowRoot.querySelector("ek-button"))==null||n.setAttribute("icon",this.isDark?"sun":"moon")});this.attachShadow({mode:"open"})}get isDark(){return this.getAttribute("theme")==="dark"}set isDark(e){const n=e?"dark":"light";this.setAttribute("theme",n),localStorage.setItem("theme",n),document.documentElement.classList.toggle("dark-theme",e)}connectedCallback(){const e=localStorage.getItem("theme");this.isDark=e!==null?e==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches,v(this,c,A).call(this)}};l=new WeakMap,c=new WeakSet,A=function(){var n;const e=`<ek-button icon="${this.isDark?"sun":"moon"}" icon-only variant="text" size="small"></ek-button>`;this.shadowRoot.innerHTML=O(import.meta.url,m.elemName)+e,(n=this.shadowRoot.querySelector("ek-button"))==null||n.addEventListener("click",y(this,l))},u(m,"elemName","ek-dark-light");let s=m;customElements.get(s.elemName)||customElements.define(s.elemName,s);customElements.get(h.elemName)||customElements.define(h.elemName,h);const H={title:"Elements/ek-dark-light",component:"ek-dark-light",tags:["autodocs"],parameters:{docs:{description:{component:`
A theme switcher component that toggles between light and dark modes.
- Persists theme preference in localStorage
- Syncs with system theme preference by default
- Toggles a global CSS class for theme switching
        `}}}},i=()=>`
  <div style="padding: 20px;">
    <ek-dark-light></ek-dark-light>
  </div>
`,a=()=>`
  <div style="
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid var(--border-color, #ccc);
    border-radius: 8px;
  ">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <span>Theme Switcher:</span>
      <ek-dark-light></ek-dark-light>
    </div>
    
    <div style="
      padding: 1rem;
      border-radius: 4px;
      background: var(--surface-2);
      color: var(--text-1);
    ">
      <h3>Sample Content</h3>
      <p>This content's colors will change based on the selected theme.</p>
    </div>

    <div style="display: flex; gap: 1rem;">
      <ek-button>Primary Button</ek-button>
      <ek-button variant="outline">Outline Button</ek-button>
    </div>
  </div>
`,o=()=>`
  <div style="padding: 20px;">
    <div style="margin-bottom: 1rem;">
      <p>This component automatically syncs with your system theme preference on initial load.</p>
      <p>Try changing your system theme to see it update.</p>
    </div>
    <ek-dark-light></ek-dark-light>
  </div>
`,d=()=>`
  <div style="padding: 20px;">
    <div style="margin-bottom: 1rem;">
      <p>The selected theme is persisted in localStorage.</p>
      <p>Try switching the theme and refreshing the page - your preference will be remembered!</p>
    </div>
    <ek-dark-light></ek-dark-light>
  </div>
`;var b,f,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => \`
  <div style="padding: 20px;">
    <ek-dark-light></ek-dark-light>
  </div>
\``,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,T,w;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => \`
  <div style="
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid var(--border-color, #ccc);
    border-radius: 8px;
  ">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <span>Theme Switcher:</span>
      <ek-dark-light></ek-dark-light>
    </div>
    
    <div style="
      padding: 1rem;
      border-radius: 4px;
      background: var(--surface-2);
      color: var(--text-1);
    ">
      <h3>Sample Content</h3>
      <p>This content's colors will change based on the selected theme.</p>
    </div>

    <div style="display: flex; gap: 1rem;">
      <ek-button>Primary Button</ek-button>
      <ek-button variant="outline">Outline Button</ek-button>
    </div>
  </div>
\``,...(w=(T=a.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var E,D,B;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`() => \`
  <div style="padding: 20px;">
    <div style="margin-bottom: 1rem;">
      <p>This component automatically syncs with your system theme preference on initial load.</p>
      <p>Try changing your system theme to see it update.</p>
    </div>
    <ek-dark-light></ek-dark-light>
  </div>
\``,...(B=(D=o.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var C,N,P;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => \`
  <div style="padding: 20px;">
    <div style="margin-bottom: 1rem;">
      <p>The selected theme is persisted in localStorage.</p>
      <p>Try switching the theme and refreshing the page - your preference will be remembered!</p>
    </div>
    <ek-dark-light></ek-dark-light>
  </div>
\``,...(P=(N=d.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const I=["Basic","ThemeDemo","SystemThemeSync","ThemePersistence"];export{i as Basic,o as SystemThemeSync,a as ThemeDemo,d as ThemePersistence,I as __namedExportsOrder,H as default};
