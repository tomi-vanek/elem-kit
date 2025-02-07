import { EkCarousel } from './EkCarousel.js'
import { EkButton } from '../ek-button/EkButton.js'

// Register custom elements if not already registered
if (!customElements.get(EkCarousel.elemName)) {
  customElements.define(EkCarousel.elemName, EkCarousel)
}
if (!customElements.get(EkButton.elemName)) {
  customElements.define(EkButton.elemName, EkButton)
}

export default {
  title: 'Elements/ek-carousel',
  component: 'ek-carousel',
  tags: ['autodocs'],
  
  argTypes: {
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Alignment of items when they don\'t overflow',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      }
    }
  },
  
  parameters: {
    docs: {
      description: {
        component: `
A responsive carousel component that automatically adjusts to show the maximum number of items that fit the viewport.

Features:
- Auto-adjusts to show maximum items that fit viewport
- Smooth transitions and touch gestures (swipe left/right)
- Smart navigation buttons that show/hide based on content
- Maintains consistent gaps between items
- Handles items with varying widths
- Supports left/center/right alignment when content fits
        `
      }
    }
  }
}

// Template for creating carousel instances
const Template = ({ align }) => `
  <ek-carousel ${align ? `align="${align}"` : ''}>
    ${Array(6).fill(0).map((_, i) => `
      <div style="
        min-width: 200px;
        height: 150px;
        background: var(--surface-2);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-1);
      ">
        Item ${i + 1}
      </div>
    `).join('')}
  </ek-carousel>
`

// Basic usage story
export const Basic = Template.bind({})
Basic.args = {
  align: 'left'
}

// Different alignments when content fits
export const Alignment = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h3>Left Alignment (default)</h3>
      <ek-carousel align="left" style="max-width: 1000px;">
        ${Array(3).fill(0).map((_, i) => `
          <div style="width: 150px; height: 100px; background: var(--surface-2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            Item ${i + 1}
          </div>
        `).join('')}
      </ek-carousel>
    </div>

    <div>
      <h3>Center Alignment</h3>
      <ek-carousel align="center" style="max-width: 1000px;">
        ${Array(3).fill(0).map((_, i) => `
          <div style="width: 150px; height: 100px; background: var(--surface-2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            Item ${i + 1}
          </div>
        `).join('')}
      </ek-carousel>
    </div>

    <div>
      <h3>Right Alignment</h3>
      <ek-carousel align="right" style="max-width: 1000px;">
        ${Array(3).fill(0).map((_, i) => `
          <div style="width: 150px; height: 100px; background: var(--surface-2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            Item ${i + 1}
          </div>
        `).join('')}
      </ek-carousel>
    </div>
  </div>
`

// Varying widths example
export const VaryingWidths = () => `
  <ek-carousel>
    ${[300, 200, 250, 180, 220].map((width, i) => `
      <div style="
        width: ${width}px;
        height: 150px;
        background: var(--surface-2);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-1);
      ">
        Width: ${width}px
      </div>
    `).join('')}
  </ek-carousel>
`

// Responsive behavior example
export const ResponsiveBehavior = () => `
  <div>
    <p style="margin-bottom: 1rem;">Resize the window to see how the carousel adapts:</p>
    <ek-carousel>
      ${Array(8).fill(0).map((_, i) => `
        <div style="
          width: 180px;
          height: 120px;
          background: var(--surface-2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-1);
        ">
          Item ${i + 1}
        </div>
      `).join('')}
    </ek-carousel>
  </div>
`

// Rich content example
export const RichContent = () => `
  <ek-carousel>
    ${[
      { title: 'Nature', image: 'https://source.unsplash.com/300x200/?nature' },
      { title: 'Architecture', image: 'https://source.unsplash.com/300x200/?architecture' },
      { title: 'Technology', image: 'https://source.unsplash.com/300x200/?technology' },
      { title: 'Food', image: 'https://source.unsplash.com/300x200/?food' }
    ].map(({ title, image }) => `
      <div style="
        width: 300px;
        border-radius: 8px;
        overflow: hidden;
        background: var(--surface-2);
      ">
        <img src="${image}" alt="${title}" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: 1rem;">
          <h3 style="margin: 0; color: var(--text-1);">${title}</h3>
        </div>
      </div>
    `).join('')}
  </ek-carousel>
` 