var ce=Object.defineProperty;var O=t=>{throw TypeError(t)};var de=(t,i,e)=>i in t?ce(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var N=(t,i,e)=>de(t,typeof i!="symbol"?i+"":i,e),L=(t,i,e)=>i.has(t)||O("Cannot "+e);var r=(t,i,e)=>(L(t,i,"read from private field"),e?e.call(t):i.get(t)),p=(t,i,e)=>i.has(t)?O("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(t):i.set(t,e),g=(t,i,e,a)=>(L(t,i,"write to private field"),a?a.call(t,e):i.set(t,e),e),f=(t,i,e)=>(L(t,i,"access private method"),e);import{l as he}from"./EkIcon-Bitc-VNF.js";import{E as C}from"./EkButton-CV6Wai5n.js";var u,v,d,$,y,A,T,h,q,S,le;const n=class n extends HTMLElement{constructor(){super();p(this,h);p(this,u,0);p(this,v,0);p(this,d,[]);p(this,$,10);p(this,y,!1);p(this,A,e=>{var o,s;const a=(o=this.shadowRoot.querySelector("slot"))==null?void 0:o.assignedElements();if(a!=null&&a.length){if(e>0)if(a.length-(r(this,u)+r(this,v))<r(this,v)){let c=0;for(let m=a.length-1;m>=0;m--)if(c+=r(this,d)[m],c>((s=this.shadowRoot.querySelector(".carousel-inner"))==null?void 0:s.offsetWidth)){g(this,u,Math.max(0,m+1));break}}else g(this,u,r(this,u)+r(this,v));else g(this,u,Math.max(0,r(this,u)-r(this,v)));f(this,h,S).call(this)}});p(this,T,()=>{const e=this.shadowRoot.querySelector(".carousel-inner");if(!e)return;let a=0,o=0;e.addEventListener("touchstart",s=>{a=s.touches[0].clientX,o=s.touches[0].clientY,g(this,y,!1)},{passive:!0}),e.addEventListener("touchmove",s=>{if(!r(this,y)){const[l,c]=[Math.abs(s.touches[0].clientX-a),Math.abs(s.touches[0].clientY-o)];l>c&&l>10&&(g(this,y,!0),s.preventDefault())}},{passive:!1}),e.addEventListener("touchend",s=>{if(r(this,y)&&Math.abs(s.changedTouches[0].clientX-a)>=50){const l=a>s.changedTouches[0].clientX?n.NAV.NEXT.direction:n.NAV.PREV.direction;r(this,A).call(this,l)}},{passive:!0})});this.attachShadow({mode:"open"})}connectedCallback(){f(this,h,le).call(this);let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>f(this,h,q).call(this),200)})}attributeChangedCallback(e,a,o){a===o||!this.isConnected||f(this,h,S).call(this)}};u=new WeakMap,v=new WeakMap,d=new WeakMap,$=new WeakMap,y=new WeakMap,A=new WeakMap,T=new WeakMap,h=new WeakSet,q=function(){var c;const e=(c=this.shadowRoot.querySelector("slot"))==null?void 0:c.assignedElements(),a=this.shadowRoot.querySelector(".carousel-inner");if(!(e!=null&&e.length)||!a)return;g(this,d,e.map(m=>m.offsetWidth+r(this,$))),r(this,d)[r(this,d).length-1]-=r(this,$);const o=a.offsetWidth;let s=0,l=0;for(const m of r(this,d)){if(s+=m,s>o)break;l++}g(this,v,l),f(this,h,S).call(this)},S=function(){var W,M,z,B,F,H,Y,D;const[e,a]=[this.shadowRoot.querySelector("slot"),this.shadowRoot.querySelector(".carousel-inner")];if(!e||!a||!r(this,d).length)return;const o={[n.NAV.PREV.key]:{button:this.shadowRoot.querySelector(`[data-nav="${n.NAV.PREV.key}"]`),wrapper:(W=this.shadowRoot.querySelector(`[data-nav="${n.NAV.PREV.key}"]`))==null?void 0:W.parentElement},[n.NAV.NEXT.key]:{button:this.shadowRoot.querySelector(`[data-nav="${n.NAV.NEXT.key}"]`),wrapper:(M=this.shadowRoot.querySelector(`[data-nav="${n.NAV.NEXT.key}"]`))==null?void 0:M.parentElement}},[s,l]=[r(this,d).reduce((x,w)=>x+w,0),a.offsetWidth];if(s<=l){const x=this.getAttribute("align")||"left",w=x==="right"?-(s-l):x==="center"?-(s-l)/2:0;e.style.transform=`translateX(${w}px)`,g(this,u,0),Object.values(o).forEach(({button:I,wrapper:X})=>{I==null||I.classList.remove("visible"),X==null||X.classList.remove("visible")});return}const c=-r(this,d).slice(0,r(this,u)).reduce((x,w)=>x+w,0);s+c<=l+1?((z=o[n.NAV.NEXT.key].button)==null||z.classList.remove("visible"),(B=o[n.NAV.NEXT.key].wrapper)==null||B.classList.remove("visible"),e.style.transform=`translateX(${-(s-l)}px)`):((F=o[n.NAV.NEXT.key].button)==null||F.classList.add("visible"),(H=o[n.NAV.NEXT.key].wrapper)==null||H.classList.add("visible"),e.style.transform=`translateX(${c}px)`);const P=c<0;(Y=o[n.NAV.PREV.key].button)==null||Y.classList.toggle("visible",P),(D=o[n.NAV.PREV.key].wrapper)==null||D.classList.toggle("visible",P)},le=function(){const e=`
      <div class="carousel">
        <div class="nav-button-wrapper">
          <ek-button data-nav="${n.NAV.PREV.key}" icon="${n.NAV.PREV.icon}" icon-only variant="secondary"></ek-button>
        </div>
        <div class="carousel-inner"><slot></slot></div>
        <div class="nav-button-wrapper">
          <ek-button data-nav="${n.NAV.NEXT.key}" icon="${n.NAV.NEXT.icon}" icon-only variant="secondary"></ek-button>
        </div>
      </div>
    `;this.shadowRoot.innerHTML=he(import.meta.url,n.elemName)+e,Object.values(n.NAV).forEach(({key:a,direction:o})=>{var s;(s=this.shadowRoot.querySelector(`[data-nav="${a}"]`))==null||s.addEventListener("click",()=>r(this,A).call(this,o))}),r(this,T).call(this),requestAnimationFrame(()=>f(this,h,q).call(this))},N(n,"elemName","ek-carousel"),N(n,"observedAttributes",["align"]),N(n,"NAV",{PREV:{key:"prev",icon:"chevron-left",direction:-1},NEXT:{key:"next",icon:"chevron-right",direction:1}});let k=n;customElements.get(k.elemName)||customElements.define(k.elemName,k);customElements.get(C.elemName)||customElements.define(C.elemName,C);const ve={title:"Elements/ek-carousel",component:"ek-carousel",tags:["autodocs"],argTypes:{align:{control:"select",options:["left","center","right"],description:"Alignment of items when they don't overflow",table:{type:{summary:"string"},defaultValue:{summary:"left"}}}},parameters:{docs:{description:{component:`
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
        `}}}},ue=({align:t})=>`
  <ek-carousel ${t?`align="${t}"`:""}>
    ${Array(6).fill(0).map((i,e)=>`
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
        Item ${e+1}
      </div>
    `).join("")}
  </ek-carousel>
`,b=ue.bind({});b.args={align:"left"};const E=()=>`
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h3>Left Alignment (default)</h3>
      <ek-carousel align="left" style="max-width: 1000px;">
        ${Array(3).fill(0).map((t,i)=>`
          <div style="width: 150px; height: 100px; background: var(--surface-2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            Item ${i+1}
          </div>
        `).join("")}
      </ek-carousel>
    </div>

    <div>
      <h3>Center Alignment</h3>
      <ek-carousel align="center" style="max-width: 1000px;">
        ${Array(3).fill(0).map((t,i)=>`
          <div style="width: 150px; height: 100px; background: var(--surface-2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            Item ${i+1}
          </div>
        `).join("")}
      </ek-carousel>
    </div>

    <div>
      <h3>Right Alignment</h3>
      <ek-carousel align="right" style="max-width: 1000px;">
        ${Array(3).fill(0).map((t,i)=>`
          <div style="width: 150px; height: 100px; background: var(--surface-2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            Item ${i+1}
          </div>
        `).join("")}
      </ek-carousel>
    </div>
  </div>
`,j=()=>`
  <ek-carousel>
    ${[300,200,250,180,220].map((t,i)=>`
      <div style="
        width: ${t}px;
        height: 150px;
        background: var(--surface-2);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-1);
      ">
        Width: ${t}px
      </div>
    `).join("")}
  </ek-carousel>
`,R=()=>`
  <div>
    <p style="margin-bottom: 1rem;">Resize the window to see how the carousel adapts:</p>
    <ek-carousel>
      ${Array(8).fill(0).map((t,i)=>`
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
          Item ${i+1}
        </div>
      `).join("")}
    </ek-carousel>
  </div>
`,V=()=>`
  <ek-carousel>
    ${[{title:"Nature",image:"https://source.unsplash.com/300x200/?nature"},{title:"Architecture",image:"https://source.unsplash.com/300x200/?architecture"},{title:"Technology",image:"https://source.unsplash.com/300x200/?technology"},{title:"Food",image:"https://source.unsplash.com/300x200/?food"}].map(({title:t,image:i})=>`
      <div style="
        width: 300px;
        border-radius: 8px;
        overflow: hidden;
        background: var(--surface-2);
      ">
        <img src="${i}" alt="${t}" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: 1rem;">
          <h3 style="margin: 0; color: var(--text-1);">${t}</h3>
        </div>
      </div>
    `).join("")}
  </ek-carousel>
`;var G,J,K;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`({
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
\``,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Z;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`() => \`
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
\``,...(Z=(U=E.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var _,ee,te;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`() => \`
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
\``,...(te=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ie,ne,se;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`() => \`
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
\``,...(se=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,re,oe;V.parameters={...V.parameters,docs:{...(ae=V.parameters)==null?void 0:ae.docs,source:{originalSource:`() => \`
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
\``,...(oe=(re=V.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const fe=["Basic","Alignment","VaryingWidths","ResponsiveBehavior","RichContent"];export{E as Alignment,b as Basic,R as ResponsiveBehavior,V as RichContent,j as VaryingWidths,fe as __namedExportsOrder,ve as default};
