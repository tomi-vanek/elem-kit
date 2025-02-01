import { linkCss } from './_support.js'

// Icon Web Component - loads and displays SVG icons from bootstrap-icons
class EkIcon extends HTMLElement {
  static elemName = 'ek-icon'
  static observedAttributes = ['name', 'size'] // Using static class field for simplicity

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  // Load icon from cache or fetch from bootstrap-icons
  async #loadIcon(name) {
    const cachedIcon = localStorage.getItem(`icon-${name}`)
    if (cachedIcon) return cachedIcon

    try {
      const response = await fetch(`node_modules/bootstrap-icons/icons/${name}.svg`)
      if (!response.ok) throw new Error(`Icon ${name} not found`)
      
      const svg = await response.text()
      localStorage.setItem(`icon-${name}`, svg)
      return svg
    } catch (error) {
      console.error('Error loading icon:', error)
      return null
    }
  }

  async #render() {
    const name = this.getAttribute('name')
    if (!name) return

    // Initialize container with loading state
    this.shadowRoot.innerHTML = `${linkCss(EkIcon.elemName)}<div class="icon-container">Loading...</div>`

    // Update container with icon if available
    const [iconSvg, container] = [await this.#loadIcon(name), this.shadowRoot.querySelector('.icon-container')]
    if (container && iconSvg) container.innerHTML = iconSvg
  }

  // Lifecycle callbacks
  connectedCallback() { this.#render() }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue && this.isConnected) this.#render()
  }
}

// Register once
customElements.get(EkIcon.elemName) || customElements.define(EkIcon.elemName, EkIcon) 