import { expect } from '@esm-bundle/chai'
import { fixture, html } from '@open-wc/testing'
import { EkIcon } from './EkIcon.js'

// Register custom element before tests
if (!customElements.get(EkIcon.elemName)) {
  customElements.define(EkIcon.elemName, EkIcon)
}

describe('EkIcon', () => {
  let element
  let storage = {}
  let originalFetch

  beforeEach(async () => {
    // Store original fetch
    originalFetch = window.fetch

    // Mock localStorage
    storage = {}
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: (key) => storage[key],
        setItem: (key, value) => storage[key] = value,
        clear: () => storage = {}
      },
      writable: true
    })

    // Mock fetch for icon loading with exact name matching
    window.fetch = async (url) => {
      // Only match exact valid icon names
      const validIcons = ['valid-icon', 'new-valid-icon']
      const iconName = url.split('/').pop().replace('.svg', '')
      const isValidIcon = validIcons.includes(iconName)
      
      return {
        ok: isValidIcon,
        text: async () => {
          if (!isValidIcon) throw new Error('Icon not found')
          return '<svg>mock icon</svg>'
        }
      }
    }

    element = await fixture(html`<ek-icon name="valid-icon"></ek-icon>`)
    await element.updateComplete
  })

  afterEach(() => {
    storage = {}
    // Restore original fetch
    window.fetch = originalFetch
  })

  // Basic functionality
  it('should be defined', () => {
    expect(EkIcon).to.exist
    expect(customElements.get(EkIcon.elemName)).to.equal(EkIcon)
  })

  it('should render shadow DOM', () => {
    expect(element.shadowRoot).to.exist
    expect(element.shadowRoot.querySelector('.icon-container')).to.exist
  })

  // Icon loading and rendering
  it('should load and render valid icon', async () => {
    const container = element.shadowRoot.querySelector('.icon-container')
    expect(container.innerHTML).to.include('<svg>mock icon</svg>')
  })

  it('should use cached icon when available', async () => {
    storage['icon-valid-icon'] = '<svg>cached icon</svg>'
    
    const newElement = await fixture(html`<ek-icon name="valid-icon"></ek-icon>`)
    await newElement.updateComplete

    const container = newElement.shadowRoot.querySelector('.icon-container')
    expect(container.innerHTML).to.include('cached icon')
  })

  // Attribute changes
  it('should update when name attribute changes', async () => {
    // First set up a mock for the new icon
    storage['icon-new-valid-icon'] = '<svg>new mock icon</svg>'
    
    element.setAttribute('name', 'new-valid-icon')
    await element.updateComplete

    const container = element.shadowRoot.querySelector('.icon-container')
    expect(container.innerHTML).to.include('new mock icon')
  })

  // Error handling
  it('should handle invalid icons gracefully', async () => {
    const invalidElement = await fixture(html`<ek-icon name="invalid-icon"></ek-icon>`)
    await invalidElement.updateComplete

    const container = invalidElement.shadowRoot.querySelector('.icon-container')
    expect(container.innerHTML).to.equal('Loading...')
  })

  it('should handle missing name attribute', async () => {
    const noNameElement = await fixture(html`<ek-icon></ek-icon>`)
    await noNameElement.updateComplete

    const container = noNameElement.shadowRoot.querySelector('.icon-container')
    expect(container).to.not.exist
  })
}) 