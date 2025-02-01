// Header Component - Responsive header with auto-hide on scroll
import { linkCss } from './_support.js'

class EkHeader extends HTMLElement {
  static elemName = 'ek-header'
  #lastScroll = 0

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  #handleScroll = () => {
    const currentScroll = window.scrollY
    this.style.transform = currentScroll > this.#lastScroll && currentScroll > 50
      ? 'translateY(-100%)'
      : 'translateY(0)'
    this.#lastScroll = currentScroll
  }

  #handleClick = (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault()
      document.getElementById(e.target.getAttribute('href').slice(1))
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  #render() {
    const content = `
      <div class="header-content">
        <ek-nav></ek-nav>
        <ek-dark-light></ek-dark-light>
      </div>
    `
    this.shadowRoot.innerHTML = linkCss(EkHeader.elemName) + content
    this.shadowRoot.querySelector('ek-nav')?.addEventListener('click', this.#handleClick)
  }

  // Lifecycle callbacks
  connectedCallback() {
    this.#render()
    window.addEventListener('scroll', () => requestAnimationFrame(this.#handleScroll))
  }
}

// Register once
customElements.get(EkHeader.elemName) || customElements.define(EkHeader.elemName, EkHeader) 