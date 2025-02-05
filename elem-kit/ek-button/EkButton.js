import { linkCss } from '../ek-support.js'
import '../ek-icon.js'

// Button Web Component - Customizable button with icon support and loading states
export class EkButton extends HTMLElement {
  static elemName = 'ek-button'
  static observedAttributes = ['variant', 'size', 'icon', 'icon-position', 'loading', 'disabled', 'onclick', 'icon-only']

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  // Getters/Setters for boolean attributes
  get disabled() { return this.hasAttribute('disabled') }
  set disabled(value) { this.toggleAttribute('disabled', value) }
  
  get loading() { return this.hasAttribute('loading') }
  set loading(value) { this.toggleAttribute('loading', value) }

  get iconOnly() { return this.hasAttribute('icon-only') }
  set iconOnly(value) { this.toggleAttribute('icon-only', value) }

  #handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (this.disabled || this.loading) return

    // Execute onclick if present
    const onClickFn = this.getAttribute('onclick')
    if (onClickFn) new Function(onClickFn)()

    this.dispatchEvent(new Event('click', { 
      bubbles: true, 
      composed: true, 
      cancelable: true 
    }))
  }

  #render() {
    // Prepare icon states
    const iconName = this.getAttribute('icon')
    const iconPosition = this.getAttribute('icon-position')
    const size = this.getAttribute('size')
    
    const iconElement = iconName ? `<ek-icon name="${iconName}" size="${size}"></ek-icon>` : ''

    // Build button content based on icon-only state
    const content = `
      <button ${this.disabled ? 'disabled' : ''}>
        ${iconPosition !== 'end' ? iconElement : ''}
        ${this.iconOnly ? '' : '<slot></slot>'}
        ${iconPosition === 'end' ? iconElement : ''}
        ${this.loading ? `<ek-icon name="arrow-clockwise" size="${size}"></ek-icon>` : ''}
      </button>
    `

    this.shadowRoot.innerHTML = linkCss(import.meta.url, EkButton.elemName) + content
    this.shadowRoot.querySelector('button')?.addEventListener('click', this.#handleClick)
  }

  // Lifecycle callbacks
  connectedCallback() { 
    this.#render() 
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue || !this.isConnected) return
    if (name === 'icon' && oldValue && newValue) {
      // Only update existing icon if we're changing from one icon to another
      this.shadowRoot.querySelector('ek-icon')?.setAttribute('name', newValue)
    } else {
      this.#render()
    }
  }
}
