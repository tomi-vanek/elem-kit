# EkButton

A modern, customizable button web component with support for icons, loading states, and multiple variants.

## Installation

This component is part of the elem-kit package. Install the package using:

```bash
npm install elem-kit
```

## Import

```js
// Import all components
import 'elem-kit/index.js'

// Import only this component
import 'elem-kit/ek-button.js'
```

## Usage

Basic usage:

```html
<ek-button>Click me</ek-button>
```

With variants:

```html
<!-- Primary button (default) -->
<ek-button>Primary</ek-button>

<!-- Secondary button -->
<ek-button variant="secondary">Secondary</ek-button>

<!-- Text button -->
<ek-button variant="text">Text</ek-button>
```

With icons:

```html
<!-- Icon at start (default) -->
<ek-button icon="heart">Like</ek-button>

<!-- Icon at end -->
<ek-button icon="arrow-right" icon-position="end">Next</ek-button>

<!-- Icon only button -->
<ek-button icon="settings" icon-only></ek-button>
```

Different sizes:

```html
<ek-button size="small">Small</ek-button>
<ek-button>Default</ek-button>
<ek-button size="large">Large</ek-button>
```

States:

```html
<!-- Loading state -->
<ek-button loading>Processing</ek-button>

<!-- Disabled state -->
<ek-button disabled>Unavailable</ek-button>
```

## Features

- 🎨 Multiple variants (primary, secondary, text)
- 📏 Different sizes (small, default, large)
- 🖼️ Icon support with flexible positioning
- 💫 Loading state with spinner animation
- ⚡️ Click event handling with disabled state support
- 🎭 Smooth hover and active animations
- 🎯 Accessible and keyboard-friendly
- 🖌️ Customizable via CSS variables

## Attributes

| Attribute      | Type    | Default  | Description                                          |
|---------------|---------|----------|------------------------------------------------------|
| variant       | string  | 'primary'| Button style variant: 'primary', 'secondary', 'text' |
| size          | string  | 'default'| Button size: 'small', 'default', 'large'            |
| icon          | string  | -        | Icon name to display                                 |
| icon-position | string  | 'start'  | Icon position: 'start', 'end'                       |
| icon-only     | boolean | false    | Show only icon without text                         |
| loading       | boolean | false    | Show loading spinner and disable button              |
| disabled      | boolean | false    | Disable button interaction                          |
| onclick       | string  | -        | JavaScript code to execute on click                  |

## Technical Details

### Styling

The button uses CSS custom properties for theming:

- `--button-bg`: Background color (defaults to `--accent`)
- `--button-color`: Text color (defaults to `--bg`)
- `--button-padding`: Custom padding

### Events

- `click`: Fired when the button is clicked (unless disabled or loading)
- Event bubbles and is composed (crosses shadow DOM boundary)

### States

- **Hover**: Slight brightness increase
- **Active**: Scale down and shadow removal
- **Loading**: Opacity reduction and spinner display
- **Disabled**: Reduced opacity and pointer-events disabled
