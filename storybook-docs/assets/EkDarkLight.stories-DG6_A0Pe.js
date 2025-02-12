import{E as s}from"./EkDarkLight-DVBSJAbR.js";import{E as a}from"./EkButton-BT1Gk506.js";import"./EkIcon-Bitc-VNF.js";customElements.get(s.elemName)||customElements.define(s.elemName,s);customElements.get(a.elemName)||customElements.define(a.elemName,a);const x={title:"Elements/ek-dark-light",component:"ek-dark-light",tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},e=()=>`
  <div style="padding: 20px;">
    <ek-dark-light></ek-dark-light>
  </div>
`,t=()=>`
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
`,n=()=>`
  <div style="padding: 20px;">
    <div style="margin-bottom: 1rem;">
      <p>This component automatically syncs with your system theme preference on initial load.</p>
      <p>Try changing your system theme to see it update.</p>
    </div>
    <ek-dark-light></ek-dark-light>
  </div>
`,r=()=>`
  <div style="padding: 20px;">
    <div style="margin-bottom: 1rem;">
      <p>The selected theme is persisted in localStorage.</p>
      <p>Try switching the theme and refreshing the page - your preference will be remembered!</p>
    </div>
    <ek-dark-light></ek-dark-light>
  </div>
`;var i,o,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => \`
  <div style="padding: 20px;">
    <ek-dark-light></ek-dark-light>
  </div>
\``,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var d,c,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => \`
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
\``,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,h,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => \`
  <div style="padding: 20px;">
    <div style="margin-bottom: 1rem;">
      <p>This component automatically syncs with your system theme preference on initial load.</p>
      <p>Try changing your system theme to see it update.</p>
    </div>
    <ek-dark-light></ek-dark-light>
  </div>
\``,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,k,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => \`
  <div style="padding: 20px;">
    <div style="margin-bottom: 1rem;">
      <p>The selected theme is persisted in localStorage.</p>
      <p>Try switching the theme and refreshing the page - your preference will be remembered!</p>
    </div>
    <ek-dark-light></ek-dark-light>
  </div>
\``,...(y=(k=r.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const S=["Basic","ThemeDemo","SystemThemeSync","ThemePersistence"];export{e as Basic,n as SystemThemeSync,t as ThemeDemo,r as ThemePersistence,S as __namedExportsOrder,x as default};
