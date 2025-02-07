import{E as o}from"./EkIcon-CkJlZoQ0.js";customElements.get(o.elemName)||customElements.define(o.elemName,o);const z={title:"Elements/ek-icon",component:"ek-icon",tags:["autodocs"],argTypes:{name:{control:"text",description:"Bootstrap icon name (without .svg extension)",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},size:{control:"select",options:["small","default","large"],description:"Icon size variant",table:{type:{summary:"string"},defaultValue:{summary:"default"}}}}},x=({name:a,size:s})=>`<ek-icon name="${a}" ${s!=="default"?`size="${s}"`:""}></ek-icon>`,e=x.bind({});e.args={name:"heart",size:"default"};const n=()=>`
  <div style="display: flex; gap: 1rem; align-items: center;">
    <ek-icon name="star-fill" size="small"></ek-icon>
    <ek-icon name="star-fill"></ek-icon>
    <ek-icon name="star-fill" size="large"></ek-icon>
  </div>
`,r=()=>`
  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 1rem; text-align: center;">
    ${["heart","star","check","x","arrow-left","arrow-right","search","person","gear","house"].map(a=>`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <ek-icon name="${a}"></ek-icon>
        <small>${a}</small>
      </div>
    `).join("")}
  </div>
`,i=()=>`
  <div style="display: flex; gap: 1rem;">
    <ek-icon name="heart-fill" style="color: red;"></ek-icon>
    <ek-icon name="heart-fill" style="color: blue;"></ek-icon>
    <ek-icon name="heart-fill" style="color: green;"></ek-icon>
  </div>
`;var t,l,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`({
  name,
  size
}) => {
  return \`<ek-icon name="\${name}" \${size !== 'default' ? \`size="\${size}"\` : ''}></ek-icon>\`;
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,d,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => \`
  <div style="display: flex; gap: 1rem; align-items: center;">
    <ek-icon name="star-fill" size="small"></ek-icon>
    <ek-icon name="star-fill"></ek-icon>
    <ek-icon name="star-fill" size="large"></ek-icon>
  </div>
\``,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,f,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => \`
  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 1rem; text-align: center;">
    \${['heart', 'star', 'check', 'x', 'arrow-left', 'arrow-right', 'search', 'person', 'gear', 'house'].map(icon => \`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <ek-icon name="\${icon}"></ek-icon>
        <small>\${icon}</small>
      </div>
    \`).join('')}
  </div>
\``,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var k,y,h;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`() => \`
  <div style="display: flex; gap: 1rem;">
    <ek-icon name="heart-fill" style="color: red;"></ek-icon>
    <ek-icon name="heart-fill" style="color: blue;"></ek-icon>
    <ek-icon name="heart-fill" style="color: green;"></ek-icon>
  </div>
\``,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const $=["Basic","Sizes","CommonIcons","ColorInheritance"];export{e as Basic,i as ColorInheritance,r as CommonIcons,n as Sizes,$ as __namedExportsOrder,z as default};
