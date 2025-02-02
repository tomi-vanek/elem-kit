import { linkCss } from '../ek-support.js'

// Button Web Component - Customizable button with icon support and loading states
export class EkButton extends HTMLElement {
  static elemName = 'ek-button'
  static observedAttributes = ['variant', 'size', 'icon', 'icon-position', 'loading', 'disabled', 'onclick']

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  // Getters/Setters for boolean attributes
  get disabled() { return this.hasAttribute('disabled') }
  set disabled(value) { this.toggleAttribute('disabled', value) }
  
  get loading() { return this.hasAttribute('loading') }
  set loading(value) { this.toggleAttribute('loading', value) }

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
    const [iconStart, iconEnd] = [
      this.getAttribute('icon') && this.getAttribute('icon-position') !== 'end',
      this.getAttribute('icon') && this.getAttribute('icon-position') === 'end'
    ]
    const iconOnly = this.hasAttribute('icon-only')
    const size = this.getAttribute('size')

    // Build button content
    const content = `
      <button ${this.disabled ? 'disabled' : ''}>
        ${iconStart ? `<ek-icon name="${this.getAttribute('icon')}" size="${size}"></ek-icon>` : ''}
        ${!iconOnly ? '<slot></slot>' : ''}
        ${iconEnd ? `<ek-icon name="${this.getAttribute('icon')}" size="${size}"></ek-icon>` : ''}
        ${this.loading ? `<ek-icon name="arrow-clockwise" size="${size}"></ek-icon>` : ''}
      </button>
    `

    this.shadowRoot.innerHTML = linkCss(import.meta.url, EkButton.elemName) + content
    this.shadowRoot.querySelector('button')?.addEventListener('click', this.#handleClick)
  }

  // Lifecycle callbacks
  connectedCallback() { this.#render() }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue || !this.isConnected) return
    name === 'icon' 
      ? this.shadowRoot.querySelector('ek-icon')?.setAttribute('name', newValue)
      : this.#render()
  }
}
