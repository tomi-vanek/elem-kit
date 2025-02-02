// Chai tests for EkButton
import { expect } from '@esm-bundle/chai'
import { fixture, html } from '@open-wc/testing'
import { EkIcon } from '../ek-icon/EkIcon.js'
import { EkButton } from './EkButton.js'

// Register custom elements before tests
if (!customElements.get(EkIcon.elemName)) {
  customElements.define(EkIcon.elemName, EkIcon)
}
if (!customElements.get(EkButton.elemName)) {
  customElements.define(EkButton.elemName, EkButton)
}

describe('EkButton', () => {
  let button

  beforeEach(async () => {
    button = await fixture(html`<ek-button>Click me</ek-button>`)
  })

  // Basic functionality
  it('should be defined', () => {
    expect(EkButton).to.exist
  })

  it('should render shadow DOM with button element', () => {
    const shadowButton = button.shadowRoot.querySelector('button')
    expect(shadowButton).to.exist
  })

  it('should render slot content', () => {
    expect(button.textContent.trim()).to.equal('Click me')
  })

  // Variants
  describe('variants', () => {
    it('should apply primary variant by default', () => {
      expect(button.getAttribute('variant')).to.be.null
    })

    it('should accept secondary variant', async () => {
      button.setAttribute('variant', 'secondary')
      await button.updateComplete
      expect(button.getAttribute('variant')).to.equal('secondary')
    })

    it('should accept text variant', async () => {
      button.setAttribute('variant', 'text')
      await button.updateComplete
      expect(button.getAttribute('variant')).to.equal('text')
    })
  })

  // Icon handling
  describe('icons', () => {
    it('should render icon when icon attribute is set', async () => {
      button.setAttribute('icon', 'heart')
      // Wait for two animation frames to ensure icon is rendered
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
      const icon = button.shadowRoot.querySelector('ek-icon')
      expect(icon).to.exist
      expect(icon.getAttribute('name')).to.equal('heart')
    })

    it('should position icon at end when icon-position is end', async () => {
      button.setAttribute('icon', 'heart')
      button.setAttribute('icon-position', 'end')
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
      const button_content = button.shadowRoot.querySelector('button').innerHTML
      expect(button_content).to.include('<slot></slot>')
      expect(button_content.indexOf('<slot>')).to.be.lessThan(button_content.indexOf('ek-icon'))
    })

    it('should only show icon when icon-only is set', async () => {
      button.setAttribute('icon', 'heart')
      button.setAttribute('icon-only', '')
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
      const button_content = button.shadowRoot.querySelector('button').innerHTML.trim()
      expect(button_content).to.not.include('<slot></slot>')
    })
  })

  // States
  describe('states', () => {
    it('should handle disabled state', async () => {
      button.disabled = true
      await button.updateComplete
      const shadowButton = button.shadowRoot.querySelector('button')
      expect(button.hasAttribute('disabled')).to.be.true
      expect(shadowButton.hasAttribute('disabled')).to.be.true
    })

    it('should handle loading state', async () => {
      button.setAttribute('loading', '')
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
      const loadingIcon = button.shadowRoot.querySelector('ek-icon[name="arrow-clockwise"]')
      expect(loadingIcon).to.exist
    })

    it('should not dispatch click event when disabled', async () => {
      let clicked = false
      button.addEventListener('click', () => clicked = true)
      button.disabled = true
      await button.updateComplete
      button.shadowRoot.querySelector('button').click()
      expect(clicked).to.be.false
    })

    it('should not dispatch click event when loading', async () => {
      let clicked = false
      button.addEventListener('click', () => clicked = true)
      button.setAttribute('loading', '')
      await button.updateComplete
      button.shadowRoot.querySelector('button').click()
      expect(clicked).to.be.false
    })
  })

  // Event handling
  describe('events', () => {
    it('should dispatch click event when clicked', async () => {
      let clicked = false
      button.addEventListener('click', () => clicked = true)
      await button.updateComplete
      button.shadowRoot.querySelector('button').click()
      expect(clicked).to.be.true
    })

    it('should execute onclick attribute code', async () => {
      button.setAttribute('onclick', 'window.testVar = true')
      await button.updateComplete
      button.shadowRoot.querySelector('button').click()
      expect(window.testVar).to.be.true
      delete window.testVar
    })
  })

  // Size variations
  describe('sizes', () => {
    it('should apply size to icon', async () => {
      button.setAttribute('icon', 'heart')
      button.setAttribute('size', 'small')
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
      const icon = button.shadowRoot.querySelector('ek-icon')
      expect(icon).to.exist
      expect(icon.getAttribute('size')).to.equal('small')
    })

    it('should accept small size', async () => {
      button.setAttribute('size', 'small')
      await button.updateComplete
      expect(button.getAttribute('size')).to.equal('small')
    })

    it('should accept large size', async () => {
      button.setAttribute('size', 'large')
      await button.updateComplete
      expect(button.getAttribute('size')).to.equal('large')
    })
  })
})

