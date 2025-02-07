import { EkDarkLight } from './EkDarkLight.js'
import { EkButton } from '../ek-button/EkButton.js'

// Register custom elements if not already registered
if (!customElements.get(EkDarkLight.elemName)) {
  customElements.define(EkDarkLight.elemName, EkDarkLight)
}
if (!customElements.get(EkButton.elemName)) {
  customElements.define(EkButton.elemName, EkButton)
}

export default {
  title: 'Elements/ek-dark-light',
  component: 'ek-dark-light',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
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
        `
      }
    }
  }
}

// Basic usage with default behavior
export const Basic = () => `
  <div style="padding: 20px;">
    <ek-dark-light></ek-dark-light>
  </div>
`

// Demo with theme-affected content
export const ThemeDemo = () => `
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
`

// System theme sync example
export const SystemThemeSync = () => `
  <div style="padding: 20px;">
    <div style="margin-bottom: 1rem;">
      <p>This component automatically syncs with your system theme preference on initial load.</p>
      <p>Try changing your system theme to see it update.</p>
    </div>
    <ek-dark-light></ek-dark-light>
  </div>
`

// Theme persistence example
export const ThemePersistence = () => `
  <div style="padding: 20px;">
    <div style="margin-bottom: 1rem;">
      <p>The selected theme is persisted in localStorage.</p>
      <p>Try switching the theme and refreshing the page - your preference will be remembered!</p>
    </div>
    <ek-dark-light></ek-dark-light>
  </div>
` 