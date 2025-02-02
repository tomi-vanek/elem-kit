// Chai tests for EkDarkLight
import { expect } from '@esm-bundle/chai'
import { fixture, html } from '@open-wc/testing'
import { EkButton } from '../ek-button/EkButton.js'
import { EkDarkLight } from './EkDarkLight.js'

// Register custom elements before tests
if (!customElements.get(EkButton.elemName)) {
  customElements.define(EkButton.elemName, EkButton)
}
if (!customElements.get(EkDarkLight.elemName)) {
  customElements.define(EkDarkLight.elemName, EkDarkLight)
}

describe('EkDarkLight', () => {
  let element
  let storage = {}

  beforeEach(async () => {
    // Reset storage
    storage = {}

    // Reset matchMedia to light theme default
    window.matchMedia = (query) => ({
      matches: false,
      addEventListener: () => {}
    })

    // Mock localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: (key) => storage[key] === undefined ? null : storage[key],
        setItem: (key, value) => storage[key] = value?.toString(),
        removeItem: (key) => delete storage[key],
        clear: () => storage = {}
      },
      writable: true
    })

    // Create fresh element using fixture
    element = await fixture(html`<ek-dark-light></ek-dark-light>`)
    await element.updateComplete
  })

  afterEach(() => {
    document.documentElement.classList.remove('dark-theme')
    storage = {}
  })

  // Basic functionality
  it('should be defined', () => {
    expect(EkDarkLight).to.exist
  })

  it('should render shadow DOM with button element', () => {
    const button = element.shadowRoot.querySelector('ek-button')
    expect(button).to.exist
  })

  it('should initialize with light theme by default', () => {
    expect(element.getAttribute('theme')).to.equal('light')
    expect(document.documentElement.classList.contains('dark-theme')).to.be.false
  })

  // Theme toggling
  describe('theme toggling', () => {
    it('should toggle theme on button click', async () => {
      const button = element.shadowRoot.querySelector('ek-button')
      
      // Initial state
      expect(element.getAttribute('theme')).to.equal('light')
      expect(button.getAttribute('icon')).to.equal('moon')

      // Click to toggle
      await button.click()
      await element.updateComplete

      // Check dark theme
      expect(element.getAttribute('theme')).to.equal('dark')
      expect(button.getAttribute('icon')).to.equal('sun')
      expect(document.documentElement.classList.contains('dark-theme')).to.be.true

      // Click again to toggle back
      await button.click()
      await element.updateComplete

      // Check light theme
      expect(element.getAttribute('theme')).to.equal('light')
      expect(button.getAttribute('icon')).to.equal('moon')
      expect(document.documentElement.classList.contains('dark-theme')).to.be.false
    })
  })

  // Theme persistence
  describe('theme persistence', () => {
    it('should load theme from localStorage', async () => {
      // Set dark theme in storage
      storage['theme'] = 'dark'
      
      // Create new element with dark theme preference
      const newElement = await fixture(html`<ek-dark-light></ek-dark-light>`)
      await newElement.updateComplete

      expect(newElement.getAttribute('theme')).to.equal('dark')
      expect(document.documentElement.classList.contains('dark-theme')).to.be.true
      expect(newElement.shadowRoot.querySelector('ek-button').getAttribute('icon')).to.equal('sun')
    })

    it('should respect system color scheme when no stored preference', async () => {
      // Set up system preference before creating element
      window.matchMedia = (query) => ({
        matches: query === '(prefers-color-scheme: dark)',
        addEventListener: () => {}
      })

      // Ensure theme is not in storage
      storage = {}
      
      // Create new element with system dark preference
      const newElement = await fixture(html`<ek-dark-light></ek-dark-light>`)
      await newElement.updateComplete

      // Verify dark theme was applied
      expect(newElement.getAttribute('theme')).to.equal('dark')
      expect(document.documentElement.classList.contains('dark-theme')).to.be.true
      expect(newElement.shadowRoot.querySelector('ek-button').getAttribute('icon')).to.equal('sun')
    })
  })

  // Icon updates
  describe('icon updates', () => {
    it('should update icon when theme changes', async () => {
      const button = element.shadowRoot.querySelector('ek-button')
      
      // Initial state should be light theme with moon icon
      expect(button.getAttribute('icon')).to.equal('moon')
      
      // Simulate button click to change theme
      button.click()
      await element.updateComplete
      
      // Check for sun icon in dark theme
      expect(button.getAttribute('icon')).to.equal('sun')
      expect(element.getAttribute('theme')).to.equal('dark')
      
      // Click again to change back to light theme
      button.click()
      await element.updateComplete
      
      // Check for moon icon in light theme
      expect(button.getAttribute('icon')).to.equal('moon')
      expect(element.getAttribute('theme')).to.equal('light')
    })
  })
}) 