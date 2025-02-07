var ce=Object.defineProperty;var D=t=>{throw TypeError(t)};var de=(t,i,e)=>i in t?ce(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var N=(t,i,e)=>de(t,typeof i!="symbol"?i+"":i,e),I=(t,i,e)=>i.has(t)||D("Cannot "+e);var a=(t,i,e)=>(I(t,i,"read from private field"),e?e.call(t):i.get(t)),p=(t,i,e)=>i.has(t)?D("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(t):i.set(t,e),v=(t,i,e,r)=>(I(t,i,"write to private field"),r?r.call(t,e):i.set(t,e),e),f=(t,i,e)=>(I(t,i,"access private method"),e);import{l as he}from"./EkIcon-CkJlZoQ0.js";import{E as q}from"./EkButton-3GWYNygD.js";var u,g,d,$,y,A,T,h,W,S,le;const n=class n extends HTMLElement{constructor(){super();p(this,h);p(this,u,0);p(this,g,0);p(this,d,[]);p(this,$,10);p(this,y,!1);p(this,A,e=>{var o,s;const r=(o=this.shadowRoot.querySelector("slot"))==null?void 0:o.assignedElements();if(r!=null&&r.length){if(e>0)if(r.length-(a(this,u)+a(this,g))<a(this,g)){let c=0;for(let m=r.length-1;m>=0;m--)if(c+=a(this,d)[m],c>((s=this.shadowRoot.querySelector(".carousel-inner"))==null?void 0:s.offsetWidth)){v(this,u,Math.max(0,m+1));break}}else v(this,u,a(this,u)+a(this,g));else v(this,u,Math.max(0,a(this,u)-a(this,g)));f(this,h,S).call(this)}});p(this,T,()=>{const e=this.shadowRoot.querySelector(".carousel-inner");if(!e)return;let r=0,o=0;e.addEventListener("touchstart",s=>{r=s.touches[0].clientX,o=s.touches[0].clientY,v(this,y,!1)},{passive:!0}),e.addEventListener("touchmove",s=>{if(!a(this,y)){const[l,c]=[Math.abs(s.touches[0].clientX-r),Math.abs(s.touches[0].clientY-o)];l>c&&l>10&&(v(this,y,!0),s.preventDefault())}},{passive:!1}),e.addEventListener("touchend",s=>{if(a(this,y)&&Math.abs(s.changedTouches[0].clientX-r)>=50){const l=r>s.changedTouches[0].clientX?n.NAV.NEXT.direction:n.NAV.PREV.direction;a(this,A).call(this,l)}},{passive:!0})});this.attachShadow({mode:"open"})}connectedCallback(){f(this,h,le).call(this);let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>f(this,h,W).call(this),200)})}attributeChangedCallback(e,r,o){r===o||!this.isConnected||f(this,h,S).call(this)}};u=new WeakMap,g=new WeakMap,d=new WeakMap,$=new WeakMap,y=new WeakMap,A=new WeakMap,T=new WeakMap,h=new WeakSet,W=function(){var c;const e=(c=this.shadowRoot.querySelector("slot"))==null?void 0:c.assignedElements(),r=this.shadowRoot.querySelector(".carousel-inner");if(!(e!=null&&e.length)||!r)return;v(this,d,e.map(m=>m.offsetWidth+a(this,$))),a(this,d)[a(this,d).length-1]-=a(this,$);const o=r.offsetWidth;let s=0,l=0;for(const m of a(this,d)){if(s+=m,s>o)break;l++}v(this,g,l),f(this,h,S).call(this)},S=function(){var C,M,B,z,F,Y,H,O;const[e,r]=[this.shadowRoot.querySelector("slot"),this.shadowRoot.querySelector(".carousel-inner")];if(!e||!r||!a(this,d).length)return;const o={[n.NAV.PREV.key]:{button:this.shadowRoot.querySelector(`[data-nav="${n.NAV.PREV.key}"]`),wrapper:(C=this.shadowRoot.querySelector(`[data-nav="${n.NAV.PREV.key}"]`))==null?void 0:C.parentElement},[n.NAV.NEXT.key]:{button:this.shadowRoot.querySelector(`[data-nav="${n.NAV.NEXT.key}"]`),wrapper:(M=this.shadowRoot.querySelector(`[data-nav="${n.NAV.NEXT.key}"]`))==null?void 0:M.parentElement}},[s,l]=[a(this,d).reduce((x,k)=>x+k,0),r.offsetWidth];if(s<=l){const x=this.getAttribute("align")||"left",k=x==="right"?-(s-l):x==="center"?-(s-l)/2:0;e.style.transform=`translateX(${k}px)`,v(this,u,0),Object.values(o).forEach(({button:X,wrapper:L})=>{X==null||X.classList.remove("visible"),L==null||L.classList.remove("visible")});return}const c=-a(this,d).slice(0,a(this,u)).reduce((x,k)=>x+k,0);s+c<=l+1?((B=o[n.NAV.NEXT.key].button)==null||B.classList.remove("visible"),(z=o[n.NAV.NEXT.key].wrapper)==null||z.classList.remove("visible"),e.style.transform=`translateX(${-(s-l)}px)`):((F=o[n.NAV.NEXT.key].button)==null||F.classList.add("visible"),(Y=o[n.NAV.NEXT.key].wrapper)==null||Y.classList.add("visible"),e.style.transform=`translateX(${c}px)`);const P=c<0;(H=o[n.NAV.PREV.key].button)==null||H.classList.toggle("visible",P),(O=o[n.NAV.PREV.key].wrapper)==null||O.classList.toggle("visible",P)},le=function(){const e=`
      <div class="carousel">
        <div class="nav-button-wrapper">
          <ek-button data-nav="${n.NAV.PREV.key}" icon="${n.NAV.PREV.icon}" icon-only variant="secondary"></ek-button>
        </div>
        <div class="carousel-inner"><slot></slot></div>
        <div class="nav-button-wrapper">
          <ek-button data-nav="${n.NAV.NEXT.key}" icon="${n.NAV.NEXT.icon}" icon-only variant="secondary"></ek-button>
        </div>
      </div>
    `;this.shadowRoot.innerHTML=he(import.meta.url,n.elemName)+e,Object.values(n.NAV).forEach(({key:r,direction:o})=>{var s;(s=this.shadowRoot.querySelector(`[data-nav="${r}"]`))==null||s.addEventListener("click",()=>a(this,A).call(this,o))}),a(this,T).call(this),requestAnimationFrame(()=>f(this,h,W).call(this))},N(n,"elemName","ek-carousel"),N(n,"observedAttributes",["align"]),N(n,"NAV",{PREV:{key:"prev",icon:"chevron-left",direction:-1},NEXT:{key:"next",icon:"chevron-right",direction:1}});let w=n;customElements.get(w.elemName)||customElements.define(w.elemName,w);customElements.get(q.elemName)||customElements.define(q.elemName,q);const ge={title:"Elements/ek-carousel",component:"ek-carousel",tags:["autodocs"],argTypes:{align:{control:"select",options:["left","center","right"],description:"Alignment of items when they don't overflow",table:{type:{summary:"string"},defaultValue:{summary:"left"}}}},parameters:{docs:{description:{component:`
A responsive carousel component that automatically adjusts to show the maximum number of items that fit the viewport.

Features:
- Auto-adjusts to show maximum items that fit viewport
- Smooth transitions and touch gestures (swipe left/right)
- Smart navigation buttons that show/hide based on content
- Maintains consistent gaps between items
- Handles items with varying widths
- Supports left/center/right alignment when content fits
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
`,V=()=>`
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
`,R=()=>`
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
\``,...(te=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ie,ne,se;V.parameters={...V.parameters,docs:{...(ie=V.parameters)==null?void 0:ie.docs,source:{originalSource:`() => \`
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
\``,...(se=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,ae,oe;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`() => \`
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
\``,...(oe=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const fe=["Basic","Alignment","VaryingWidths","ResponsiveBehavior","RichContent"];export{E as Alignment,b as Basic,V as ResponsiveBehavior,R as RichContent,j as VaryingWidths,fe as __namedExportsOrder,ge as default};
