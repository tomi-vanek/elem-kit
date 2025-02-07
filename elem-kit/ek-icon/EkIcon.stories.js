import { EkIcon } from './EkIcon.js'

// Register the custom element if not already registered
if (!customElements.get(EkIcon.elemName)) {
  customElements.define(EkIcon.elemName, EkIcon)
}

// Metadata for Storybook
export default {
  title: 'Elements/ek-icon',
  component: 'ek-icon',
  tags: ['autodocs'],
  
  parameters: {
    docs: {
      description: {
        component: `
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
`
      }
    }
  },
  
  // Define arguments that can be configured in Storybook UI
  argTypes: {
    name: {
      control: 'text',
      description: 'Bootstrap icon name (without .svg extension)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Icon size variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      }
    }
  }
}

// Template for creating icon instances
const Template = ({ name, size }) => {
  return `<ek-icon name="${name}" ${size !== 'default' ? `size="${size}"` : ''}></ek-icon>`
}

// Basic usage story
export const Basic = Template.bind({})
Basic.args = {
  name: 'heart',
  size: 'default'
}

// Different sizes story
export const Sizes = () => `
  <div style="display: flex; gap: 1rem; align-items: center;">
    <ek-icon name="star-fill" size="small"></ek-icon>
    <ek-icon name="star-fill"></ek-icon>
    <ek-icon name="star-fill" size="large"></ek-icon>
  </div>
`

// Common icons gallery
export const CommonIcons = () => `
  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 1rem; text-align: center;">
    ${[
      'heart', 'star', 'check', 'x',
      'arrow-left', 'arrow-right', 'search',
      'person', 'gear', 'house'
    ].map(icon => `
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <ek-icon name="${icon}"></ek-icon>
        <small>${icon}</small>
      </div>
    `).join('')}
  </div>
`

// Color inheritance example
export const ColorInheritance = () => `
  <div style="display: flex; gap: 1rem;">
    <ek-icon name="heart-fill" style="color: red;"></ek-icon>
    <ek-icon name="heart-fill" style="color: blue;"></ek-icon>
    <ek-icon name="heart-fill" style="color: green;"></ek-icon>
  </div>
` 