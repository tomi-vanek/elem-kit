# EkIcon

A lightweight web component for displaying SVG icons from the Bootstrap Icons library with caching support.

## Installation

This component is part of the elem-kit package. Install the package using:

```bash
npm install elem-kit bootstrap-icons
```

## Import

```js
// Import all components
import 'elem-kit/index.js'

// Import only this component
import 'elem-kit/ek-icon.js'
```

## Usage

Basic usage:

```html
<ek-icon name="heart"></ek-icon>
```

Different sizes:

```html
<ek-icon name="star" size="small"></ek-icon>
<ek-icon name="star"></ek-icon>
<ek-icon name="star" size="large"></ek-icon>
```

Common use cases:

```html
<!-- In buttons -->
<button>
  <ek-icon name="gear"></ek-icon>
  Settings
</button>

<!-- In navigation -->
<nav>
  <a href="#home">
    <ek-icon name="house"></ek-icon>
    Home
  </a>
</nav>

<!-- As decorative elements -->
<div class="success-message">
  <ek-icon name="check-circle"></ek-icon>
  Operation completed
</div>
```

## Features

- 🖼️ Uses Bootstrap Icons library
- 💾 Local storage caching for better performance
- 📏 Multiple size options (small, default, large)
- 🎨 Inherits color from parent element
- 🔄 Automatic loading state
- 🎯 Accessible and screen-reader friendly
- 🖌️ Customizable via CSS variables
- 💫 Smooth rendering and transitions

## Attributes

| Attribute | Type   | Default  | Description                                    |
|-----------|--------|----------|------------------------------------------------|
| name      | string | -        | Icon name from Bootstrap Icons library         |
| size      | string | 'default'| Icon size: 'small', 'default', 'large'        |

## Technical Details

### Styling

The icon inherits its color from the parent element's `color` property and can be sized using:

- Default sizing through font-size inheritance
- Predefined sizes via the `size` attribute
- Custom sizing through CSS variables

### Performance

- Icons are cached in localStorage after first load
- Automatic loading state while fetching icons
- Efficient SVG rendering and scaling

### Integration

- Seamlessly works with other components
- Maintains consistent baseline alignment
- Responds to parent element's text color and size

### Available Icons

All icons from the Bootstrap Icons library are available. Visit [Bootstrap Icons](https://icons.getbootstrap.com/) for the complete list of available icons.
