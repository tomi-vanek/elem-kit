import{E as u}from"./EkButton-CV6Wai5n.js";import"./EkIcon-Bitc-VNF.js";customElements.get(u.elemName)||customElements.define(u.elemName,u);const en={title:"Elements/ek-button",tags:["autodocs"],parameters:{docs:{description:{component:`
# EkButton

A modern, customizable button web component with support for icons, loading states, and multiple variants.

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
import 'elem-kit/ek-button.js'
\`\`\`

## Features

- 🎨 Multiple variants (primary, secondary, text)
- 📏 Different sizes (small, default, large)
- 🖼️ Icon support with flexible positioning
- 💫 Loading state with spinner animation
- ⚡️ Click event handling with disabled state support
- 🎭 Smooth hover and active animations
- 🎯 Accessible and keyboard-friendly
- 🖌️ Customizable via CSS variables

## Technical Details

### Styling

The button uses CSS custom properties for theming:

- \`--button-bg\`: Background color (defaults to \`--accent\`)
- \`--button-color\`: Text color (defaults to \`--bg\`)
- \`--button-padding\`: Custom padding

### States

- **Hover**: Slight brightness increase
- **Active**: Scale down and shadow removal
- **Loading**: Opacity reduction and spinner display
- **Disabled**: Reduced opacity and pointer-events disabled

### Events

- \`click\`: Fired when the button is clicked (unless disabled or loading)
- Event bubbles and is composed (crosses shadow DOM boundary)
        `}}},argTypes:{variant:{control:"select",options:["primary","secondary","text"],description:"Button variant that determines its visual style"},size:{control:"select",options:["small","default","large"],description:"Button size"},icon:{control:"text",description:"Icon name to display (requires ek-icon component)"},iconPosition:{control:"select",options:["start","end"],description:"Position of the icon relative to text"},disabled:{control:"boolean",description:"Disabled state of the button"},loading:{control:"boolean",description:"Loading state of the button"},iconOnly:{control:"boolean",description:"Whether to show only the icon in a circular button"},label:{control:"text",description:"Button text content"}}},n=({variant:p,size:m,icon:g,iconPosition:$,disabled:V,loading:X,iconOnly:Y,label:Z})=>`<ek-button ${[p&&`variant="${p}"`,m&&`size="${m}"`,g&&`icon="${g}"`,$&&`icon-position="${$}"`,V&&"disabled",X&&"loading",Y&&"icon-only"].filter(Boolean).join(" ")}>${Z}</ek-button>`,o=n.bind({});o.args={label:"Primary Button"};o.parameters={docs:{description:{story:"Default primary button with accent background color."}}};const i=n.bind({});i.args={variant:"secondary",label:"Secondary Button"};i.parameters={docs:{description:{story:"Secondary button with outlined style."}}};const t=n.bind({});t.args={variant:"text",label:"Text Button"};t.parameters={docs:{description:{story:"Text button without background or border."}}};const e=n.bind({});e.args={size:"small",label:"Small Button"};const a=n.bind({});a.args={size:"large",label:"Large Button"};const s=n.bind({});s.args={icon:"arrow-right",label:"Next"};const r=n.bind({});r.args={icon:"arrow-right",iconPosition:"end",label:"Next"};const l=n.bind({});l.args={icon:"arrow-right",iconOnly:!0,label:""};const c=n.bind({});c.args={loading:!0,label:"Loading..."};const d=n.bind({});d.args={disabled:!0,label:"Disabled"};const b=n.bind({});b.args={variant:"secondary",size:"large",icon:"arrow-right",iconPosition:"end",label:"Complex Button"};var y,v,z;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`({
  variant,
  size,
  icon,
  iconPosition,
  disabled,
  loading,
  iconOnly,
  label
}) => {
  const attrs = [variant && \`variant="\${variant}"\`, size && \`size="\${size}"\`, icon && \`icon="\${icon}"\`, iconPosition && \`icon-position="\${iconPosition}"\`, disabled && 'disabled', loading && 'loading', iconOnly && 'icon-only'].filter(Boolean).join(' ');
  return \`<ek-button \${attrs}>\${label}</ek-button>\`;
}`,...(z=(v=o.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var k,h,P;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`({
  variant,
  size,
  icon,
  iconPosition,
  disabled,
  loading,
  iconOnly,
  label
}) => {
  const attrs = [variant && \`variant="\${variant}"\`, size && \`size="\${size}"\`, icon && \`icon="\${icon}"\`, iconPosition && \`icon-position="\${iconPosition}"\`, disabled && 'disabled', loading && 'loading', iconOnly && 'icon-only'].filter(Boolean).join(' ');
  return \`<ek-button \${attrs}>\${label}</ek-button>\`;
}`,...(P=(h=i.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var B,f,O;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`({
  variant,
  size,
  icon,
  iconPosition,
  disabled,
  loading,
  iconOnly,
  label
}) => {
  const attrs = [variant && \`variant="\${variant}"\`, size && \`size="\${size}"\`, icon && \`icon="\${icon}"\`, iconPosition && \`icon-position="\${iconPosition}"\`, disabled && 'disabled', loading && 'loading', iconOnly && 'icon-only'].filter(Boolean).join(' ');
  return \`<ek-button \${attrs}>\${label}</ek-button>\`;
}`,...(O=(f=t.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var S,x,w;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`({
  variant,
  size,
  icon,
  iconPosition,
  disabled,
  loading,
  iconOnly,
  label
}) => {
  const attrs = [variant && \`variant="\${variant}"\`, size && \`size="\${size}"\`, icon && \`icon="\${icon}"\`, iconPosition && \`icon-position="\${iconPosition}"\`, disabled && 'disabled', loading && 'loading', iconOnly && 'icon-only'].filter(Boolean).join(' ');
  return \`<ek-button \${attrs}>\${label}</ek-button>\`;
}`,...(w=(x=e.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var j,I,E;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`({
  variant,
  size,
  icon,
  iconPosition,
  disabled,
  loading,
  iconOnly,
  label
}) => {
  const attrs = [variant && \`variant="\${variant}"\`, size && \`size="\${size}"\`, icon && \`icon="\${icon}"\`, iconPosition && \`icon-position="\${iconPosition}"\`, disabled && 'disabled', loading && 'loading', iconOnly && 'icon-only'].filter(Boolean).join(' ');
  return \`<ek-button \${attrs}>\${label}</ek-button>\`;
}`,...(E=(I=a.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var T,D,L;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`({
  variant,
  size,
  icon,
  iconPosition,
  disabled,
  loading,
  iconOnly,
  label
}) => {
  const attrs = [variant && \`variant="\${variant}"\`, size && \`size="\${size}"\`, icon && \`icon="\${icon}"\`, iconPosition && \`icon-position="\${iconPosition}"\`, disabled && 'disabled', loading && 'loading', iconOnly && 'icon-only'].filter(Boolean).join(' ');
  return \`<ek-button \${attrs}>\${label}</ek-button>\`;
}`,...(L=(D=s.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var C,W,N;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`({
  variant,
  size,
  icon,
  iconPosition,
  disabled,
  loading,
  iconOnly,
  label
}) => {
  const attrs = [variant && \`variant="\${variant}"\`, size && \`size="\${size}"\`, icon && \`icon="\${icon}"\`, iconPosition && \`icon-position="\${iconPosition}"\`, disabled && 'disabled', loading && 'loading', iconOnly && 'icon-only'].filter(Boolean).join(' ');
  return \`<ek-button \${attrs}>\${label}</ek-button>\`;
}`,...(N=(W=r.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var A,_,F;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`({
  variant,
  size,
  icon,
  iconPosition,
  disabled,
  loading,
  iconOnly,
  label
}) => {
  const attrs = [variant && \`variant="\${variant}"\`, size && \`size="\${size}"\`, icon && \`icon="\${icon}"\`, iconPosition && \`icon-position="\${iconPosition}"\`, disabled && 'disabled', loading && 'loading', iconOnly && 'icon-only'].filter(Boolean).join(' ');
  return \`<ek-button \${attrs}>\${label}</ek-button>\`;
}`,...(F=(_=l.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var M,q,H;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`({
  variant,
  size,
  icon,
  iconPosition,
  disabled,
  loading,
  iconOnly,
  label
}) => {
  const attrs = [variant && \`variant="\${variant}"\`, size && \`size="\${size}"\`, icon && \`icon="\${icon}"\`, iconPosition && \`icon-position="\${iconPosition}"\`, disabled && 'disabled', loading && 'loading', iconOnly && 'icon-only'].filter(Boolean).join(' ');
  return \`<ek-button \${attrs}>\${label}</ek-button>\`;
}`,...(H=(q=c.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var R,G,J;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`({
  variant,
  size,
  icon,
  iconPosition,
  disabled,
  loading,
  iconOnly,
  label
}) => {
  const attrs = [variant && \`variant="\${variant}"\`, size && \`size="\${size}"\`, icon && \`icon="\${icon}"\`, iconPosition && \`icon-position="\${iconPosition}"\`, disabled && 'disabled', loading && 'loading', iconOnly && 'icon-only'].filter(Boolean).join(' ');
  return \`<ek-button \${attrs}>\${label}</ek-button>\`;
}`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`({
  variant,
  size,
  icon,
  iconPosition,
  disabled,
  loading,
  iconOnly,
  label
}) => {
  const attrs = [variant && \`variant="\${variant}"\`, size && \`size="\${size}"\`, icon && \`icon="\${icon}"\`, iconPosition && \`icon-position="\${iconPosition}"\`, disabled && 'disabled', loading && 'loading', iconOnly && 'icon-only'].filter(Boolean).join(' ');
  return \`<ek-button \${attrs}>\${label}</ek-button>\`;
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const an=["Primary","Secondary","TextButton","SmallButton","LargeButton","WithStartIcon","WithEndIcon","IconOnly","LoadingButton","DisabledButton","ComplexButton"];export{b as ComplexButton,d as DisabledButton,l as IconOnly,a as LargeButton,c as LoadingButton,o as Primary,i as Secondary,e as SmallButton,t as TextButton,r as WithEndIcon,s as WithStartIcon,an as __namedExportsOrder,en as default};
