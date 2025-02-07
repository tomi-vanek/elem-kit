import{E as u}from"./EkButton-3GWYNygD.js";import"./EkIcon-CkJlZoQ0.js";customElements.get(u.elemName)||customElements.define(u.elemName,u);const an={title:"Elements/ek-button",tags:["autodocs"],parameters:{docs:{description:{component:`
## EK Button Component

A versatile button component that supports multiple variants, sizes, icons, and states.

### Features
- Three variants: default (primary), secondary, and text
- Three sizes: default, small, and large
- Icon support with flexible positioning
- Loading and disabled states
- Icon-only mode for circular buttons
        `}}},argTypes:{variant:{control:"select",options:["primary","secondary","text"],description:"Button variant that determines its visual style"},size:{control:"select",options:["small","default","large"],description:"Button size"},icon:{control:"text",description:"Icon name to display (requires ek-icon component)"},iconPosition:{control:"select",options:["start","end"],description:"Position of the icon relative to text"},disabled:{control:"boolean",description:"Disabled state of the button"},loading:{control:"boolean",description:"Loading state of the button"},iconOnly:{control:"boolean",description:"Whether to show only the icon in a circular button"},label:{control:"text",description:"Button text content"}}},n=({variant:p,size:m,icon:g,iconPosition:$,disabled:V,loading:X,iconOnly:Y,label:Z})=>`<ek-button ${[p&&`variant="${p}"`,m&&`size="${m}"`,g&&`icon="${g}"`,$&&`icon-position="${$}"`,V&&"disabled",X&&"loading",Y&&"icon-only"].filter(Boolean).join(" ")}>${Z}</ek-button>`,o=n.bind({});o.args={label:"Primary Button"};o.parameters={docs:{description:{story:"Default primary button with accent background color."}}};const i=n.bind({});i.args={variant:"secondary",label:"Secondary Button"};i.parameters={docs:{description:{story:"Secondary button with outlined style."}}};const t=n.bind({});t.args={variant:"text",label:"Text Button"};t.parameters={docs:{description:{story:"Text button without background or border."}}};const a=n.bind({});a.args={size:"small",label:"Small Button"};const e=n.bind({});e.args={size:"large",label:"Large Button"};const s=n.bind({});s.args={icon:"arrow-right",label:"Next"};const r=n.bind({});r.args={icon:"arrow-right",iconPosition:"end",label:"Next"};const c=n.bind({});c.args={icon:"arrow-right",iconOnly:!0,label:""};const l=n.bind({});l.args={loading:!0,label:"Loading..."};const d=n.bind({});d.args={disabled:!0,label:"Disabled"};const b=n.bind({});b.args={variant:"secondary",size:"large",icon:"arrow-right",iconPosition:"end",label:"Complex Button"};var y,v,z;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`({
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
}`,...(z=(v=o.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var P,B,k;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`({
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
}`,...(k=(B=i.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var O,f,h;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`({
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
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var S,x,j;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`({
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
}`,...(j=(x=a.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var E,w,I;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`({
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
}`,...(I=(w=e.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var L,T,D;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`({
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
}`,...(D=(T=s.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var W,C,N;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`({
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
}`,...(N=(C=r.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var _,q,A;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`({
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
}`,...(A=(q=c.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var F,K,G;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`({
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
}`,...(G=(K=l.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var H,J,M;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`({
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
}`,...(M=(J=d.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var Q,R,U;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`({
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
}`,...(U=(R=b.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const en=["Primary","Secondary","TextButton","SmallButton","LargeButton","WithStartIcon","WithEndIcon","IconOnly","LoadingButton","DisabledButton","ComplexButton"];export{b as ComplexButton,d as DisabledButton,c as IconOnly,e as LargeButton,l as LoadingButton,o as Primary,i as Secondary,a as SmallButton,t as TextButton,r as WithEndIcon,s as WithStartIcon,en as __namedExportsOrder,an as default};
