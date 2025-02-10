var N=Object.defineProperty;var g=n=>{throw TypeError(n)};var L=(n,t,e)=>t in n?N(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var u=(n,t,e)=>L(n,typeof t!="symbol"?t+"":t,e),k=(n,t,e)=>t.has(n)||g("Cannot "+e);var y=(n,t,e)=>(k(n,t,"read from private field"),e?e.call(n):t.get(n)),h=(n,t,e)=>t.has(n)?g("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e);var v=(n,t,e)=>(k(n,t,"access private method"),e);import{l as O}from"./EkIcon-Bitc-VNF.js";import{E as p}from"./EkButton-CV6Wai5n.js";var d,c,I;const m=class m extends HTMLElement{constructor(){super();h(this,c);h(this,d,e=>{var s;e.preventDefault(),e.stopPropagation(),this.isDark=!this.isDark,(s=this.shadowRoot.querySelector("ek-button"))==null||s.setAttribute("icon",this.isDark?"sun":"moon")});this.attachShadow({mode:"open"})}get isDark(){return this.getAttribute("theme")==="dark"}set isDark(e){const s=e?"dark":"light";this.setAttribute("theme",s),localStorage.setItem("theme",s),document.documentElement.classList.toggle("dark-theme",e)}connectedCallback(){const e=localStorage.getItem("theme");this.isDark=e!==null?e==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches,v(this,c,I).call(this)}};d=new WeakMap,c=new WeakSet,I=function(){var s;const e=`<ek-button icon="${this.isDark?"sun":"moon"}" icon-only variant="text" size="small"></ek-button>`;this.shadowRoot.innerHTML=O(import.meta.url,m.elemName)+e,(s=this.shadowRoot.querySelector("ek-button"))==null||s.addEventListener("click",y(this,d))},u(m,"elemName","ek-dark-light");let r=m;customElements.get(r.elemName)||customElements.define(r.elemName,r);customElements.get(p.elemName)||customElements.define(p.elemName,p);const j={title:"Elements/ek-dark-light",component:"ek-dark-light",tags:["autodocs"],parameters:{docs:{description:{component:`
# EkDarkLight Component

A simple and elegant dark/light theme toggle component that persists user preferences.

## Features

- 🌓 Toggles between dark and light themes
- 💾 Persists theme preference in localStorage
- 🎨 Automatically detects system color scheme preference
- 🔄 Seamlessly switches theme across the entire application

## Installation

\`\`\`bash
npm install elem-kit
\`\`\`

## Basic Usage

\`\`\`html
<ek-dark-light></ek-dark-light>
\`\`\`

The component renders as a button with a sun/moon icon that toggles between themes.

## Behavior

The component manages theme switching with the following logic:

- Clicking the button toggles between dark and light themes
- Theme preference is automatically stored in localStorage
- On initial load, the component:
  1. Checks for previously stored theme preference
  2. Falls back to system color scheme preference if no stored preference exists

## Technical Details

### CSS Integration

- Adds/removes \`.dark-theme\` class on the \`documentElement\` (html tag)
- Uses Shadow DOM for style encapsulation
- Inherits styles from the \`ek-button\` component

### Events

The component internally handles:

- Click events for theme toggling
- System theme preference changes
- Local storage synchronization

### Dependencies

- \`ek-button\` - For the toggle button interface
- \`ek-support.js\` - For CSS linking functionality

### Browser Support

- All modern browsers
- Requires JavaScript enabled
- Uses standard Web Components APIs
        `}}}},o=()=>`
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
`,i=()=>`
  <div style="padding: 20px;">
    <div style="margin-bottom: 1rem;">
      <p>This component automatically syncs with your system theme preference on initial load.</p>
      <p>Try changing your system theme to see it update.</p>
    </div>
    <ek-dark-light></ek-dark-light>
  </div>
`,l=()=>`
  <div style="padding: 20px;">
    <div style="margin-bottom: 1rem;">
      <p>The selected theme is persisted in localStorage.</p>
      <p>Try switching the theme and refreshing the page - your preference will be remembered!</p>
    </div>
    <ek-dark-light></ek-dark-light>
  </div>
`;var b,f,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`() => \`
  <div style="padding: 20px;">
    <ek-dark-light></ek-dark-light>
  </div>
\``,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,w,T;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => \`
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
\``,...(T=(w=a.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var D,E,C;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`() => \`
  <div style="padding: 20px;">
    <div style="margin-bottom: 1rem;">
      <p>This component automatically syncs with your system theme preference on initial load.</p>
      <p>Try changing your system theme to see it update.</p>
    </div>
    <ek-dark-light></ek-dark-light>
  </div>
\``,...(C=(E=i.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var B,A,P;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`() => \`
  <div style="padding: 20px;">
    <div style="margin-bottom: 1rem;">
      <p>The selected theme is persisted in localStorage.</p>
      <p>Try switching the theme and refreshing the page - your preference will be remembered!</p>
    </div>
    <ek-dark-light></ek-dark-light>
  </div>
\``,...(P=(A=l.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const q=["Basic","ThemeDemo","SystemThemeSync","ThemePersistence"];export{o as Basic,i as SystemThemeSync,a as ThemeDemo,l as ThemePersistence,q as __namedExportsOrder,j as default};
