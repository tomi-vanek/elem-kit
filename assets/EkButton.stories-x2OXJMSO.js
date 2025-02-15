import"./ek-button-BR5EvD0g.js";import"./EkButton-BT1Gk506.js";import"./EkIcon-Bitc-VNF.js";const en={title:"Elements/ek-button",tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{variant:{control:"select",options:["primary","secondary","text"],description:"Button variant that determines its visual style"},size:{control:"select",options:["small","default","large"],description:"Button size"},icon:{control:"text",description:"Icon name to display (requires ek-icon component)"},iconPosition:{control:"select",options:["start","end"],description:"Position of the icon relative to text"},disabled:{control:"boolean",description:"Disabled state of the button"},loading:{control:"boolean",description:"Loading state of the button"},iconOnly:{control:"boolean",description:"Whether to show only the icon in a circular button"},label:{control:"text",description:"Button text content"}}},n=({variant:u,size:p,icon:m,iconPosition:g,disabled:U,loading:V,iconOnly:X,label:Y})=>`<ek-button ${[u&&`variant="${u}"`,p&&`size="${p}"`,m&&`icon="${m}"`,g&&`icon-position="${g}"`,U&&"disabled",V&&"loading",X&&"icon-only"].filter(Boolean).join(" ")}>${Y}</ek-button>`,o=n.bind({});o.args={label:"Primary Button"};o.parameters={docs:{description:{story:"Default primary button with accent background color."}}};const i=n.bind({});i.args={variant:"secondary",label:"Secondary Button"};i.parameters={docs:{description:{story:"Secondary button with outlined style."}}};const t=n.bind({});t.args={variant:"text",label:"Text Button"};t.parameters={docs:{description:{story:"Text button without background or border."}}};const e=n.bind({});e.args={size:"small",label:"Small Button"};const a=n.bind({});a.args={size:"large",label:"Large Button"};const s=n.bind({});s.args={icon:"arrow-left",label:"Previous"};const r=n.bind({});r.args={icon:"arrow-right",iconPosition:"end",label:"Next"};const c=n.bind({});c.args={icon:"arrow-right",iconOnly:!0,label:""};const l=n.bind({});l.args={loading:!0,label:"Loading..."};const d=n.bind({});d.args={disabled:!0,label:"Disabled"};const b=n.bind({});b.args={variant:"secondary",size:"large",icon:"arrow-right",iconPosition:"end",label:"Complex Button"};var $,y,v;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`({
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
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var z,k,P;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`({
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
}`,...(P=(k=i.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var h,B,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
}`,...(f=(B=t.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var O,S,x;e.parameters={...e.parameters,docs:{...(O=e.parameters)==null?void 0:O.docs,source:{originalSource:`({
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
}`,...(x=(S=e.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var w,j,I;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`({
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
}`,...(I=(j=a.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var T,D,L;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`({
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
}`,...(L=(D=s.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var C,E,W;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`({
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
}`,...(W=(E=r.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var A,_,F;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`({
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
}`,...(F=(_=c.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var M,q,H;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`({
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
}`,...(H=(q=l.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var N,R,G;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`({
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
}`,...(G=(R=d.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`({
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
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const an=["Primary","Secondary","TextButton","SmallButton","LargeButton","WithStartIcon","WithEndIcon","IconOnly","LoadingButton","DisabledButton","ComplexButton"];export{b as ComplexButton,d as DisabledButton,c as IconOnly,a as LargeButton,l as LoadingButton,o as Primary,i as Secondary,e as SmallButton,t as TextButton,r as WithEndIcon,s as WithStartIcon,an as __namedExportsOrder,en as default};
