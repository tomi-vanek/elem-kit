# EkDarkLight Component

A simple and elegant dark/light theme toggle component that persists user preferences.

## Features

- 🌓 Toggles between dark and light themes
- 💾 Persists theme preference in localStorage
- 🎨 Automatically detects system color scheme preference
- 🔄 Seamlessly switches theme across the entire application

## Installation

```bash
# Using npm
npm install @elem-kit/ek-dark-light

# Using yarn
yarn add @elem-kit/ek-dark-light
```

## Basic Usage

```html
<ek-dark-light></ek-dark-light>
```

The component renders as a button with a sun/moon icon that toggles between themes.

## Behavior

The component manages theme switching with the following logic:

- Clicking the button toggles between dark and light themes
- Theme preference is automatically stored in localStorage
- On initial load, the component:
  1. Checks for previously stored theme preference
  2. Falls back to system color scheme preference if no stored preference exists

## API Reference

### Attributes

| Name    | Type                | Default | Description                               |
|---------|---------------------|---------|-------------------------------------------|
| `theme` | `'dark' \| 'light'` | `light` | Current theme state                       |

### CSS Integration

- Adds/removes `.dark-theme` class on the `documentElement` (html tag)
- Uses Shadow DOM for style encapsulation
- Inherits styles from the `ek-button` component

### Events

The component internally handles:

- Click events for theme toggling
- System theme preference changes
- Local storage synchronization

## Dependencies

- `ek-button` - For the toggle button interface
- `ek-support.js` - For CSS linking functionality

## Implementation Example

```html
<header class="app-header">
  <nav class="nav-container">
    <!-- Theme toggle placement -->
    <ek-dark-light></ek-dark-light>
  </nav>
</header>
```

## Customization

The component's appearance can be customized through:

- `ek-button` component's styling options
- CSS custom properties (variables)
- Shadow DOM style encapsulation

## Browser Support

- All modern browsers
- Requires JavaScript enabled
- Uses standard Web Components APIs
