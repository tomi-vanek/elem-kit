import{E as o}from"./EkCarousel-rXZeum8T.js";import{E as l}from"./EkButton-BT1Gk506.js";import"./EkIcon-Bitc-VNF.js";customElements.get(o.elemName)||customElements.define(o.elemName,o);customElements.get(l.elemName)||customElements.define(l.elemName,l);const E={title:"Elements/ek-carousel",component:"ek-carousel",tags:["autodocs"],argTypes:{align:{control:"select",options:["left","center","right"],description:"Alignment of items when they don't overflow",table:{type:{summary:"string"},defaultValue:{summary:"left"}}}},parameters:{docs:{description:{component:`
# EkCarousel

A modern, responsive carousel web component that automatically adapts to show the maximum number of items that fit the viewport.

## Installation

This component is part of the elem-kit package. Install the package using:

\`\`\`bash
npm install elem-kit
\`\`\`

## Import

\`\`\`js
// Import all components
import 'elem-kit/index.js'

// Import only this component
import 'elem-kit/ek-carousel.js'
\`\`\`

## Features

- 🔄 Responsive design - automatically adjusts to viewport width
- 🎯 Smart item display - shows maximum items that fit the container
- 🎭 Smooth transitions and animations
- 📱 Touch gestures support (swipe left/right)
- 🎮 Intelligent navigation buttons that show/hide based on content
- 🎨 Configurable content alignment
- 📐 Consistent gaps between items
- 📏 Handles items with varying widths

## Technical Details

### Automatic Responsiveness

- Dynamically calculates how many items can fit in the viewport
- Adjusts layout on window resize
- Maintains consistent spacing between items

### Navigation

- Smart navigation buttons appear only when needed
- Previous button shows when scrolled away from start
- Next button shows when more items are available
- Smooth scrolling between item groups

### Touch Support

- Swipe left/right on touch devices
- Gesture detection with proper threshold
- Prevents vertical scroll interference during horizontal swipes

### Layout Control

- Configurable content alignment for non-overflowing content
- Consistent gap maintenance between items
- Handles varying item widths gracefully
        `}}}},A=({align:e})=>`
  <ek-carousel ${e?`align="${e}"`:""}>
    ${Array(6).fill(0).map((t,j)=>`
      <div style="
        min-width: 200px;
        height: 150px;
        background: var(--surface-2);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-1);
      ">
        Item ${j+1}
      </div>
    `).join("")}
  </ek-carousel>
`,n=A.bind({});n.args={align:"left"};const i=()=>`
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h3>Left Alignment (default)</h3>
      <ek-carousel align="left" style="max-width: 1000px;">
        ${Array(3).fill(0).map((e,t)=>`
          <div style="width: 150px; height: 100px; background: var(--surface-2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            Item ${t+1}
          </div>
        `).join("")}
      </ek-carousel>
    </div>

    <div>
      <h3>Center Alignment</h3>
      <ek-carousel align="center" style="max-width: 1000px;">
        ${Array(3).fill(0).map((e,t)=>`
          <div style="width: 150px; height: 100px; background: var(--surface-2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            Item ${t+1}
          </div>
        `).join("")}
      </ek-carousel>
    </div>

    <div>
      <h3>Right Alignment</h3>
      <ek-carousel align="right" style="max-width: 1000px;">
        ${Array(3).fill(0).map((e,t)=>`
          <div style="width: 150px; height: 100px; background: var(--surface-2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            Item ${t+1}
          </div>
        `).join("")}
      </ek-carousel>
    </div>
  </div>
`,r=()=>`
  <ek-carousel>
    ${[300,200,250,180,220].map((e,t)=>`
      <div style="
        width: ${e}px;
        height: 150px;
        background: var(--surface-2);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-1);
      ">
        Width: ${e}px
      </div>
    `).join("")}
  </ek-carousel>
`,a=()=>`
  <div>
    <p style="margin-bottom: 1rem;">Resize the window to see how the carousel adapts:</p>
    <ek-carousel>
      ${Array(8).fill(0).map((e,t)=>`
        <div style="
          width: 180px;
          height: 120px;
          background: var(--surface-2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-1);
        ">
          Item ${t+1}
        </div>
      `).join("")}
    </ek-carousel>
  </div>
`,s=()=>`
  <ek-carousel>
    ${[{title:"Nature",image:"https://source.unsplash.com/300x200/?nature"},{title:"Architecture",image:"https://source.unsplash.com/300x200/?architecture"},{title:"Technology",image:"https://source.unsplash.com/300x200/?technology"},{title:"Food",image:"https://source.unsplash.com/300x200/?food"}].map(({title:e,image:t})=>`
      <div style="
        width: 300px;
        border-radius: 8px;
        overflow: hidden;
        background: var(--surface-2);
      ">
        <img src="${t}" alt="${e}" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: 1rem;">
          <h3 style="margin: 0; color: var(--text-1);">${e}</h3>
        </div>
      </div>
    `).join("")}
  </ek-carousel>
`;var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`({
  align
}) => \`
  <ek-carousel \${align ? \`align="\${align}"\` : ''}>
    \${Array(6).fill(0).map((_, i) => \`
      <div style="
        min-width: 200px;
        height: 150px;
        background: var(--surface-2);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-1);
      ">
        Item \${i + 1}
      </div>
    \`).join('')}
  </ek-carousel>
\``,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => \`
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h3>Left Alignment (default)</h3>
      <ek-carousel align="left" style="max-width: 1000px;">
        \${Array(3).fill(0).map((_, i) => \`
          <div style="width: 150px; height: 100px; background: var(--surface-2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            Item \${i + 1}
          </div>
        \`).join('')}
      </ek-carousel>
    </div>

    <div>
      <h3>Center Alignment</h3>
      <ek-carousel align="center" style="max-width: 1000px;">
        \${Array(3).fill(0).map((_, i) => \`
          <div style="width: 150px; height: 100px; background: var(--surface-2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            Item \${i + 1}
          </div>
        \`).join('')}
      </ek-carousel>
    </div>

    <div>
      <h3>Right Alignment</h3>
      <ek-carousel align="right" style="max-width: 1000px;">
        \${Array(3).fill(0).map((_, i) => \`
          <div style="width: 150px; height: 100px; background: var(--surface-2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            Item \${i + 1}
          </div>
        \`).join('')}
      </ek-carousel>
    </div>
  </div>
\``,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,v,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => \`
  <ek-carousel>
    \${[300, 200, 250, 180, 220].map((width, i) => \`
      <div style="
        width: \${width}px;
        height: 150px;
        background: var(--surface-2);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-1);
      ">
        Width: \${width}px
      </div>
    \`).join('')}
  </ek-carousel>
\``,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,y,w;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => \`
  <div>
    <p style="margin-bottom: 1rem;">Resize the window to see how the carousel adapts:</p>
    <ek-carousel>
      \${Array(8).fill(0).map((_, i) => \`
        <div style="
          width: 180px;
          height: 120px;
          background: var(--surface-2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-1);
        ">
          Item \${i + 1}
        </div>
      \`).join('')}
    </ek-carousel>
  </div>
\``,...(w=(y=a.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var k,b,$;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`() => \`
  <ek-carousel>
    \${[{
  title: 'Nature',
  image: 'https://source.unsplash.com/300x200/?nature'
}, {
  title: 'Architecture',
  image: 'https://source.unsplash.com/300x200/?architecture'
}, {
  title: 'Technology',
  image: 'https://source.unsplash.com/300x200/?technology'
}, {
  title: 'Food',
  image: 'https://source.unsplash.com/300x200/?food'
}].map(({
  title,
  image
}) => \`
      <div style="
        width: 300px;
        border-radius: 8px;
        overflow: hidden;
        background: var(--surface-2);
      ">
        <img src="\${image}" alt="\${title}" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: 1rem;">
          <h3 style="margin: 0; color: var(--text-1);">\${title}</h3>
        </div>
      </div>
    \`).join('')}
  </ek-carousel>
\``,...($=(b=s.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};const S=["Basic","Alignment","VaryingWidths","ResponsiveBehavior","RichContent"];export{i as Alignment,n as Basic,a as ResponsiveBehavior,s as RichContent,r as VaryingWidths,S as __namedExportsOrder,E as default};
