// Header Component - Responsive header with auto-hide on scroll
import { linkCss } from '../elem-kit/ek-support.js'

class AppHeader extends HTMLElement {
  static elemName = 'app-header'
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
        <app-nav></app-nav>
        <ek-dark-light></ek-dark-light>
      </div>
    `
    this.shadowRoot.innerHTML = linkCss(import.meta.url, AppHeader.elemName) + content
    this.shadowRoot.querySelector('app-nav')?.addEventListener('click', this.#handleClick)
  }

  // Lifecycle callbacks
  connectedCallback() {
    this.#render()
    window.addEventListener('scroll', () => requestAnimationFrame(this.#handleScroll))
  }
}

// Register once
customElements.get(AppHeader.elemName) || customElements.define(AppHeader.elemName, AppHeader) 