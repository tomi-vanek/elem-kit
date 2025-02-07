import '../ek-button.js'

export default {
  title: 'Elements/ek-button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
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
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text'],
      description: 'Button variant that determines its visual style',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Button size',
    },
    icon: {
      control: 'text',
      description: 'Icon name to display (requires ek-icon component)',
    },
    iconPosition: {
      control: 'select',
      options: ['start', 'end'],
      description: 'Position of the icon relative to text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state of the button',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state of the button',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Whether to show only the icon in a circular button',
    },
    label: {
      control: 'text',
      description: 'Button text content',
    },
  },
};

// Template for creating button stories
const Template = ({ 
  variant, 
  size, 
  icon, 
  iconPosition, 
  disabled, 
  loading, 
  iconOnly, 
  label 
}) => {
  const attrs = [
    variant && `variant="${variant}"`,
    size && `size="${size}"`,
    icon && `icon="${icon}"`,
    iconPosition && `icon-position="${iconPosition}"`,
    disabled && 'disabled',
    loading && 'loading',
    iconOnly && 'icon-only',
  ].filter(Boolean).join(' ');

  return `<ek-button ${attrs}>${label}</ek-button>`;
};

// Primary button variants
export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
};
Primary.parameters = {
  docs: {
    description: {
      story: 'Default primary button with accent background color.',
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Secondary Button',
};
Secondary.parameters = {
  docs: {
    description: {
      story: 'Secondary button with outlined style.',
    },
  },
};

export const TextButton = Template.bind({});
TextButton.args = {
  variant: 'text',
  label: 'Text Button',
};
TextButton.parameters = {
  docs: {
    description: {
      story: 'Text button without background or border.',
    },
  },
};

// Size variants
export const SmallButton = Template.bind({});
SmallButton.args = {
  size: 'small',
  label: 'Small Button',
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  size: 'large',
  label: 'Large Button',
};

// Icon examples
export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  icon: 'arrow-right',
  label: 'Next',
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  icon: 'arrow-right',
  iconPosition: 'end',
  label: 'Next',
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  icon: 'arrow-right',
  iconOnly: true,
  label: '',
};

// States
export const LoadingButton = Template.bind({});
LoadingButton.args = {
  loading: true,
  label: 'Loading...',
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
  label: 'Disabled',
};

// Complex example
export const ComplexButton = Template.bind({});
ComplexButton.args = {
  variant: 'secondary',
  size: 'large',
  icon: 'arrow-right',
  iconPosition: 'end',
  label: 'Complex Button',
};
