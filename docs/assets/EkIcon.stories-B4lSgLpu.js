import{E as o}from"./EkIcon-Bitc-VNF.js";customElements.get(o.elemName)||customElements.define(o.elemName,o);const z={title:"Elements/ek-icon",component:"ek-icon",tags:["autodocs"],parameters:{docs:{description:{component:`
# EkIcon

A lightweight web component for displaying SVG icons from the Bootstrap Icons library with caching support.

## Installation

This component is part of the elem-kit package. Install the package using:

\`\`\`bash
npm install elem-kit bootstrap-icons
\`\`\`

## Import

\`\`\`js
// Import all components
import 'elem-kit/index.js'

// Import only this component
import 'elem-kit/ek-icon.js'
\`\`\`

## Features

- 🖼️ Uses Bootstrap Icons library
- 💾 Local storage caching for better performance
- 📏 Multiple size options (small, default, large)
- 🎨 Inherits color from parent element
- 🔄 Automatic loading state
- 🎯 Accessible and screen-reader friendly
- 🖌️ Customizable via CSS variables
- 💫 Smooth rendering and transitions

## Technical Details

### Styling

The icon inherits its color from the parent element's \`color\` property and can be sized using:

- Default sizing through font-size inheritance
- Predefined sizes via the \`size\` attribute
- Custom sizing through CSS variables

### Performance

- Icons are cached in localStorage after first load
- Automatic loading state while fetching icons
- Efficient SVG rendering and scaling

For more icons, visit [Bootstrap Icons](https://icons.getbootstrap.com/).
`}}},argTypes:{name:{control:"text",description:"Bootstrap icon name (without .svg extension)",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},size:{control:"select",options:["small","default","large"],description:"Icon size variant",table:{type:{summary:"string"},defaultValue:{summary:"default"}}}}},v=({name:n,size:r})=>`<ek-icon name="${n}" ${r!=="default"?`size="${r}"`:""}></ek-icon>`,e=v.bind({});e.args={name:"heart",size:"default"};const a=()=>`
  <div style="display: flex; gap: 1rem; align-items: center;">
    <ek-icon name="star-fill" size="small"></ek-icon>
    <ek-icon name="star-fill"></ek-icon>
    <ek-icon name="star-fill" size="large"></ek-icon>
  </div>
`,i=()=>`
  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 1rem; text-align: center;">
    ${["heart","star","check","x","arrow-left","arrow-right","search","person","gear","house"].map(n=>`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <ek-icon name="${n}"></ek-icon>
        <small>${n}</small>
      </div>
    `).join("")}
  </div>
`,t=()=>`
  <div style="display: flex; gap: 1rem;">
    <ek-icon name="heart-fill" style="color: red;"></ek-icon>
    <ek-icon name="heart-fill" style="color: blue;"></ek-icon>
    <ek-icon name="heart-fill" style="color: green;"></ek-icon>
  </div>
`;var s,l,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
  name,
  size
}) => {
  return \`<ek-icon name="\${name}" \${size !== 'default' ? \`size="\${size}"\` : ''}></ek-icon>\`;
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => \`
  <div style="display: flex; gap: 1rem; align-items: center;">
    <ek-icon name="star-fill" size="small"></ek-icon>
    <ek-icon name="star-fill"></ek-icon>
    <ek-icon name="star-fill" size="large"></ek-icon>
  </div>
\``,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,u,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => \`
  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 1rem; text-align: center;">
    \${['heart', 'star', 'check', 'x', 'arrow-left', 'arrow-right', 'search', 'person', 'gear', 'house'].map(icon => \`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <ek-icon name="\${icon}"></ek-icon>
        <small>\${icon}</small>
      </div>
    \`).join('')}
  </div>
\``,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,k,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => \`
  <div style="display: flex; gap: 1rem;">
    <ek-icon name="heart-fill" style="color: red;"></ek-icon>
    <ek-icon name="heart-fill" style="color: blue;"></ek-icon>
    <ek-icon name="heart-fill" style="color: green;"></ek-icon>
  </div>
\``,...(y=(k=t.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const b=["Basic","Sizes","CommonIcons","ColorInheritance"];export{e as Basic,t as ColorInheritance,i as CommonIcons,a as Sizes,b as __namedExportsOrder,z as default};
