# EkCarousel

A modern, responsive carousel web component that automatically adapts to show the maximum number of items that fit the viewport.

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
import 'elem-kit/ek-carousel.js'
```

## Usage

Basic usage:

``` html
<ek-carousel>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</ek-carousel>
```

With alignment:

``` html
<!-- Left alignment (default) -->
<ek-carousel align="left">
  <!-- Items -->
</ek-carousel>

<!-- Center alignment -->
<ek-carousel align="center">
  <!-- Items -->
</ek-carousel>

<!-- Right alignment -->
<ek-carousel align="right">
  <!-- Items -->
</ek-carousel>
```

## Features

- 🔄 Responsive design - automatically adjusts to viewport width
- 🎯 Smart item display - shows maximum items that fit the container
- 🎭 Smooth transitions and animations
- 📱 Touch gestures support (swipe left/right)
- 🎮 Intelligent navigation buttons that show/hide based on content
- 🎨 Configurable content alignment
- 📐 Consistent gaps between items
- 📏 Handles items with varying widths

## Attributes

| Attribute | Type   | Default | Description                                    |
|-----------|--------|---------|------------------------------------------------|
| align     | string | 'left'  | Content alignment when items don't overflow. Options: 'left', 'center', 'right' |

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
